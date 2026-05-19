import mysql from 'mysql2/promise';
import { Pelicula } from '../../../../domain/entities/peliculas';
import { IRepositorioFavoritas } from '../../../../domain/ports/out/IRepositorioFavoritas';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'pelismax',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export class RepositorioFavoritas implements IRepositorioFavoritas {

    async agregar(usuarioId: number, peliculaId: number): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.query(
                'INSERT IGNORE INTO favoritos (usuario_id, pelicula_id) VALUES (?, ?)',
                [usuarioId, peliculaId]
            );
        } finally {
            connection.release();
        }
    }

    async eliminar(usuarioId: number, peliculaId: number): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.query(
                'DELETE FROM favoritos WHERE usuario_id = ? AND pelicula_id = ?',
                [usuarioId, peliculaId]
            );
        } finally {
            connection.release();
        }
    }

    async obtenerPorUsuario(usuarioId: number): Promise<Pelicula[]> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query(
                `SELECT p.* FROM peliculas p
                 INNER JOIN favoritos f ON f.pelicula_id = p.id
                 WHERE f.usuario_id = ?`,
                [usuarioId]
            );
            return (rows as any[]).map(row => new Pelicula(
                row.id, row.titulo, row.descripcion, row.imagen,
                row.anio, row.genero, row.estrellas, row.id_externo
            ));
        } finally {
            connection.release();
        }
    }

    async esFavorita(usuarioId: number, peliculaId: number): Promise<boolean> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query(
                'SELECT 1 FROM favoritos WHERE usuario_id = ? AND pelicula_id = ?',
                [usuarioId, peliculaId]
            );
            return (rows as any[]).length > 0;
        } finally {
            connection.release();
        }
    }
}
