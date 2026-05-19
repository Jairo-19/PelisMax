export class Favorita {
    constructor(
        public id: number,
        public usuarioId: number,
        public peliculaId: number,
        public creadoAt: Date = new Date()
    ) {}
}
