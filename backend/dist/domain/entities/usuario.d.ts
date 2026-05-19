export declare class Usuario {
    id: number;
    nombre: string;
    email: string;
    passwordHash: string;
    creadoAt: Date;
    constructor(id: number, nombre: string, email: string, passwordHash: string, creadoAt?: Date);
    toPublic(): {
        id: number;
        nombre: string;
        email: string;
        creadoAt: Date;
    };
}
//# sourceMappingURL=usuario.d.ts.map