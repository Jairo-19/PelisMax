"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, nombre, email, passwordHash, creadoAt = new Date()) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.passwordHash = passwordHash;
        this.creadoAt = creadoAt;
    }
    toPublic() {
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email,
            creadoAt: this.creadoAt,
        };
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map