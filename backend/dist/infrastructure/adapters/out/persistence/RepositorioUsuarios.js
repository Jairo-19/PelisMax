"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioUsuarios = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const usuario_1 = require("../../../../domain/entities/usuario");
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
class RepositorioUsuarios {
    async guardar(usuario) {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.query('INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)', [usuario.nombre, usuario.email, usuario.passwordHash]);
            const nuevoId = result.insertId;
            return new usuario_1.Usuario(nuevoId, usuario.nombre, usuario.email, usuario.passwordHash);
        }
        finally {
            connection.release();
        }
    }
    async buscarPorEmail(email) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
            const row = rows[0];
            return row ? this.mapearRowAUsuario(row) : null;
        }
        finally {
            connection.release();
        }
    }
    async buscarPorId(id) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            const row = rows[0];
            return row ? this.mapearRowAUsuario(row) : null;
        }
        finally {
            connection.release();
        }
    }
    mapearRowAUsuario(row) {
        return new usuario_1.Usuario(row.id, row.nombre, row.email, row.contrasena, new Date(row.fecha_registro));
    }
}
exports.RepositorioUsuarios = RepositorioUsuarios;
//# sourceMappingURL=RepositorioUsuarios.js.map