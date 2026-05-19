"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasoDeUsoFavoritas = void 0;
class CasoDeUsoFavoritas {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    async agregar(usuarioId, peliculaId) {
        const yaExiste = await this.repositorio.esFavorita(usuarioId, peliculaId);
        if (!yaExiste) {
            await this.repositorio.agregar(usuarioId, peliculaId);
        }
    }
    async eliminar(usuarioId, peliculaId) {
        await this.repositorio.eliminar(usuarioId, peliculaId);
    }
    async obtenerFavoritas(usuarioId) {
        return this.repositorio.obtenerPorUsuario(usuarioId);
    }
    async esFavorita(usuarioId, peliculaId) {
        return this.repositorio.esFavorita(usuarioId, peliculaId);
    }
}
exports.CasoDeUsoFavoritas = CasoDeUsoFavoritas;
//# sourceMappingURL=CasoDeUsoFavoritas.js.map