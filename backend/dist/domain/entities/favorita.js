"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorita = void 0;
class Favorita {
    constructor(id, usuarioId, peliculaId, creadoAt = new Date()) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.peliculaId = peliculaId;
        this.creadoAt = creadoAt;
    }
}
exports.Favorita = Favorita;
//# sourceMappingURL=favorita.js.map