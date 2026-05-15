export class EmailYaRegistrado extends Error {
    constructor(email: string) {
        super(`El correo ${email} ya está registrado`);
        this.name = 'EmailYaRegistrado';
    }
}

export class UsuarioNoEncontrado extends Error {
    constructor(email: string) {
        super(`No existe un usuario con el correo ${email}`);
        this.name = 'UsuarioNoEncontrado';
    }
}

export class CredencialesInvalidas extends Error {
    constructor() {
        super('Correo o contraseña incorrectos');
        this.name = 'CredencialesInvalidas';
    }
}
