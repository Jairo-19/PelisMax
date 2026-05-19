"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioFavoritas = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const peliculas_1 = require("../../../../domain/entities/peliculas");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'pelismax',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
class RepositorioFavoritas {
    async agregar(usuarioId, peliculaId) {
        const connection = await pool.getConnection();
        try {
            await connection.query('INSERT IGNORE INTO favoritos (usuario_id, pelicula_id) VALUES (?, ?)', [usuarioId, peliculaId]);
        }
        finally {
            connection.release();
        }
    }
    async eliminar(usuarioId, peliculaId) {
        const connection = await pool.getConnection();
        try {
            await connection.query('DELETE FROM favoritos WHERE usuario_id = ? AND pelicula_id = ?', [usuarioId, peliculaId]);
        }
        finally {
            connection.release();
        }
    }
    async obtenerPorUsuario(usuarioId) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query(`SELECT p.* FROM peliculas p
                 INNER JOIN favoritos f ON f.pelicula_id = p.id
                 WHERE f.usuario_id = ?`, [usuarioId]);
            return rows.map(row => new peliculas_1.Pelicula(row.id, row.titulo, row.descripcion, row.imagen, row.anio, row.genero, row.estrellas, row.id_externo));
        }
        finally {
            connection.release();
        }
    }
    async esFavorita(usuarioId, peliculaId) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT 1 FROM favoritos WHERE usuario_id = ? AND pelicula_id = ?', [usuarioId, peliculaId]);
            return rows.length > 0;
        }
        finally {
            connection.release();
        }
    }
}
exports.RepositorioFavoritas = RepositorioFavoritas;
//# sourceMappingURL=RepositorioFavoritas.js.map