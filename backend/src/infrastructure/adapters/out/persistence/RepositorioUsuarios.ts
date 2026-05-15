import mysql from 'mysql2/promise';
import { Usuario } from '../../../../domain/entities/usuario';
import { IRepositorioUsuarios } from '../../../../domain/ports/out/IRepositorioUsuarios';
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

export class RepositorioUsuarios implements IRepositorioUsuarios {

    async guardar(usuario: Usuario): Promise<Usuario> {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.query(
                'INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)',
                [usuario.nombre, usuario.email, usuario.passwordHash]
            );
            const nuevoId = (result as any).insertId;
            return new Usuario(nuevoId, usuario.nombre, usuario.email, usuario.passwordHash);
        } finally {
            connection.release();
        }
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query(
                'SELECT * FROM usuarios WHERE email = ?',
                [email]
            );
            const row = (rows as any[])[0];
            return row ? this.mapearRowAUsuario(row) : null;
        } finally {
            connection.release();
        }
    }

    async buscarPorId(id: number): Promise<Usuario | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query(
                'SELECT * FROM usuarios WHERE id = ?',
                [id]
            );
            const row = (rows as any[])[0];
            return row ? this.mapearRowAUsuario(row) : null;
        } finally {
            connection.release();
        }
    }

    private mapearRowAUsuario(row: any): Usuario {
        return new Usuario(
            row.id,
            row.nombre,
            row.email,
            row.contrasena,
            new Date(row.fecha_registro)
        );
    }
}
