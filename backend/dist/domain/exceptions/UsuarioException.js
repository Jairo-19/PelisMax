"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredencialesInvalidas = exports.UsuarioNoEncontrado = exports.EmailYaRegistrado = void 0;
class EmailYaRegistrado extends Error {
    constructor(email) {
        super(`El correo ${email} ya está registrado`);
        this.name = 'EmailYaRegistrado';
    }
}
exports.EmailYaRegistrado = EmailYaRegistrado;
class UsuarioNoEncontrado extends Error {
    constructor(email) {
        super(`No existe un usuario con el correo ${email}`);
        this.name = 'UsuarioNoEncontrado';
    }
}
exports.UsuarioNoEncontrado = UsuarioNoEncontrado;
class CredencialesInvalidas extends Error {
    constructor() {
        super('Correo o contraseña incorrectos');
        this.name = 'CredencialesInvalidas';
    }
}
exports.CredencialesInvalidas = CredencialesInvalidas;
//# sourceMappingURL=UsuarioException.js.map