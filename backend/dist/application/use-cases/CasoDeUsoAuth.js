"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasoDeUsoAuth = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = require("../../domain/entities/usuario");
const UsuarioException_1 = require("../../domain/exceptions/UsuarioException");
class CasoDeUsoAuth {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    async registrar(nombre, email, password) {
        const existente = await this.repositorio.buscarPorEmail(email);
        if (existente) {
            throw new UsuarioException_1.EmailYaRegistrado(email);
        }
        const passwordHash = await bcryptjs_1.default.hash(password, 10);
        const nuevoUsuario = new usuario_1.Usuario(0, nombre, email, passwordHash);
        const guardado = await this.repositorio.guardar(nuevoUsuario);
        return guardado.toPublic();
    }
    async login(email, password) {
        const usuario = await this.repositorio.buscarPorEmail(email);
        if (!usuario) {
            throw new UsuarioException_1.UsuarioNoEncontrado(email);
        }
        const passwordValida = await bcryptjs_1.default.compare(password, usuario.passwordHash);
        if (!passwordValida) {
            throw new UsuarioException_1.CredencialesInvalidas();
        }
        const secret = process.env.JWT_SECRET;
        const expiresIn = (process.env.JWT_EXPIRES_IN || '7d');
        const token = jsonwebtoken_1.default.sign({ id: usuario.id, email: usuario.email }, secret, { expiresIn });
        return { token, usuario: usuario.toPublic() };
    }
}
exports.CasoDeUsoAuth = CasoDeUsoAuth;
//# sourceMappingURL=CasoDeUsoAuth.js.map