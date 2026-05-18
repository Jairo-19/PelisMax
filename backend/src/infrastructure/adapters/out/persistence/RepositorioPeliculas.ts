// Implementación del repositorio que se conecta a la base de datos MySQL real
// Implementa el contrato IRepositorioPeliculas del dominio
// Si mañana cambias la BD, solo cambias este archivo

import mysql from 'mysql2/promise';
import { Pelicula } from '../../../../domain/entities/peliculas';
import { IRepositorioPeliculas } from '../../../../domain/ports/out/IRepositorioPeliculas';
import dotenv from 'dotenv';

dotenv.config();

// Configuración de conexión a MySQL desde variables de entorno
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

export class RepositorioPeliculas implements IRepositorioPeliculas {
    
    // Obtiene todas las películas de la tabla peliculas
    async obtenerPeliculas(): Promise<Pelicula[]> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM peliculas');
            return (rows as any[]).map(row => this.mapearRowAPelicula(row));
        } finally {
            connection.release();
        }
    }

    // Obtiene películas paginadas según página y límite
    async obtenerPeliculasPaginadas(pagina: number, limite: number): Promise<Pelicula[]> {
        const connection = await pool.getConnection();
        try {
            const offset = (pagina - 1) * limite;
            const [rows] = await connection.query('SELECT * FROM peliculas LIMIT ? OFFSET ?', [limite, offset]);
            return (rows as any[]).map(row => this.mapearRowAPelicula(row));
        } finally {
            connection.release();
        }
    }

    // Obtiene una película por su ID. Devuelve null si no existe
    async obtenerPeliculaPorId(id: number): Promise<Pelicula | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM peliculas WHERE id = ?', [id]);
            const row = (rows as any[])[0];
            return row ? this.mapearRowAPelicula(row) : null;
        } finally {
            connection.release();
        }
    }

    // Obtiene una película por su id_externo. Devuelve null si no existe
    async obtenerPorIdExterno(idExterno: string): Promise<Pelicula | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM peliculas WHERE id_externo = ?', [idExterno]);
            const row = (rows as any[])[0];
            return row ? this.mapearRowAPelicula(row) : null;
        } finally {
            connection.release();
        }
    }

    // Agrega una nueva película a la BD y devuelve la película con su ID asignado
    async agregarPelicula(pelicula: Pelicula): Promise<Pelicula> {
        const connection = await pool.getConnection();
        try {
            const { titulo, descripcion, imagen, anio, genero, estrellas, id_externo } = pelicula;
            const [result] = await connection.query(
                'INSERT INTO peliculas (titulo, descripcion, imagen, anio, genero, estrellas, id_externo) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [titulo, descripcion, imagen, anio, genero, estrellas, id_externo]
            );
            
            // Obtenemos el ID asignado por la BD
            const nuevoId = (result as any).insertId;
            return new Pelicula(nuevoId, titulo, descripcion, imagen, anio, genero, estrellas, id_externo);
        } finally {
            connection.release();
        }
    }

    // Actualiza una película existente en la BD y devuelve la película actualizada
    async actualizarPelicula(pelicula: Pelicula): Promise<Pelicula> {
        const connection = await pool.getConnection();
        try {
            const { id, titulo, descripcion, imagen, anio, genero, estrellas, id_externo } = pelicula;
            await connection.query(
                'UPDATE peliculas SET titulo = ?, descripcion = ?, imagen = ?, anio = ?, genero = ?, estrellas = ?, id_externo = ? WHERE id = ?',
                [titulo, descripcion, imagen, anio, genero, estrellas, id_externo, id]
            );
            return pelicula;
        } finally {
            connection.release();
        }
    }

    // Elimina una película de la BD por su ID
    async eliminarPelicula(id: number): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.query('DELETE FROM peliculas WHERE id = ?', [id]);
        } finally {
            connection.release();
        }
    }

    // Método privado para mapear una fila de la BD a una instancia de Pelicula
    private mapearRowAPelicula(row: any): Pelicula {
        return new Pelicula(
            row.id,
            row.titulo,
            row.descripcion,
            row.imagen,
            row.anio,
            row.genero,
            row.estrellas,
            row.id_externo
        );
    }
}
