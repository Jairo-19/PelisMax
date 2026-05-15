export class Usuario {
    id: number;
    nombre: string;
    email: string;
    passwordHash: string;
    creadoAt: Date;

    constructor(
        id: number,
        nombre: string,
        email: string,
        passwordHash: string,
        creadoAt: Date = new Date()
    ) {
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
