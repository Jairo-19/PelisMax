"use strict";
// Implementación del repositorio que se conecta a la base de datos MySQL real
// Implementa el contrato IRepositorioPeliculas del dominio
// Si mañana cambias la BD, solo cambias este archivo
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPeliculas = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const peliculas_1 = require("../../../../domain/entities/peliculas");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Configuración de conexión a MySQL desde variables de entorno
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
class RepositorioPeliculas {
    // Obtiene todas las películas de la tabla peliculas
    async obtenerPeliculas() {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM peliculas');
            return rows.map(row => this.mapearRowAPelicula(row));
        }
        finally {
            connection.release();
        }
    }
    // Obtiene películas paginadas según página y límite
    async obtenerPeliculasPaginadas(pagina, limite) {
        const connection = await pool.getConnection();
        try {
            const offset = (pagina - 1) * limite;
            const [rows] = await connection.query('SELECT * FROM peliculas LIMIT ? OFFSET ?', [limite, offset]);
            return rows.map(row => this.mapearRowAPelicula(row));
        }
        finally {
            connection.release();
        }
    }
    // Obtiene una película por su ID. Devuelve null si no existe
    async obtenerPeliculaPorId(id) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM peliculas WHERE id = ?', [id]);
            const row = rows[0];
            return row ? this.mapearRowAPelicula(row) : null;
        }
        finally {
            connection.release();
        }
    }
    // Obtiene una película por su id_externo. Devuelve null si no existe
    async obtenerPorIdExterno(idExterno) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM peliculas WHERE id_externo = ?', [idExterno]);
            const row = rows[0];
            return row ? this.mapearRowAPelicula(row) : null;
        }
        finally {
            connection.release();
        }
    }
    // Agrega una nueva película a la BD y devuelve la película con su ID asignado
    async agregarPelicula(pelicula) {
        const connection = await pool.getConnection();
        try {
            const { titulo, descripcion, imagen, anio, genero, estrellas, id_externo } = pelicula;
            const [result] = await connection.query('INSERT INTO peliculas (titulo, descripcion, imagen, anio, genero, estrellas, id_externo) VALUES (?, ?, ?, ?, ?, ?, ?)', [titulo, descripcion, imagen, anio, genero, estrellas, id_externo]);
            // Obtenemos el ID asignado por la BD
            const nuevoId = result.insertId;
            return new peliculas_1.Pelicula(nuevoId, titulo, descripcion, imagen, anio, genero, estrellas, id_externo);
        }
        finally {
            connection.release();
        }
    }
    // Actualiza una película existente en la BD y devuelve la película actualizada
    async actualizarPelicula(pelicula) {
        const connection = await pool.getConnection();
        try {
            const { id, titulo, descripcion, imagen, anio, genero, estrellas, id_externo } = pelicula;
            await connection.query('UPDATE peliculas SET titulo = ?, descripcion = ?, imagen = ?, anio = ?, genero = ?, estrellas = ?, id_externo = ? WHERE id = ?', [titulo, descripcion, imagen, anio, genero, estrellas, id_externo, id]);
            return pelicula;
        }
        finally {
            connection.release();
        }
    }
    // Elimina una película de la BD por su ID
    async eliminarPelicula(id) {
        const connection = await pool.getConnection();
        try {
            await connection.query('DELETE FROM peliculas WHERE id = ?', [id]);
        }
        finally {
            connection.release();
        }
    }
    // Método privado para mapear una fila de la BD a una instancia de Pelicula
    mapearRowAPelicula(row) {
        return new peliculas_1.Pelicula(row.id, row.titulo, row.descripcion, row.imagen, row.anio, row.genero, row.estrellas, row.id_externo);
    }
}
exports.RepositorioPeliculas = RepositorioPeliculas;
//# sourceMappingURL=RepositorioPeliculas.js.map