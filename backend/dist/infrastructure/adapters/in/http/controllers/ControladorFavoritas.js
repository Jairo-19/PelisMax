"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorFavoritas = void 0;
class ControladorFavoritas {
    constructor(casoDeUso) {
        this.casoDeUso = casoDeUso;
    }
    async obtenerFavoritas(req, res) {
        try {
            const favoritas = await this.casoDeUso.obtenerFavoritas(req.usuario.id);
            res.json(favoritas);
        }
        catch {
            res.status(500).json({ error: 'Error al obtener favoritas' });
        }
    }
    async agregar(req, res) {
        const peliculaId = Number(req.params.peliculaId);
        if (isNaN(peliculaId)) {
            res.status(400).json({ error: 'peliculaId inválido' });
            return;
        }
        try {
            await this.casoDeUso.agregar(req.usuario.id, peliculaId);
            res.status(201).json({ mensaje: 'Añadida a favoritas' });
        }
        catch {
            res.status(500).json({ error: 'Error al añadir favorita' });
        }
    }
    async eliminar(req, res) {
        const peliculaId = Number(req.params.peliculaId);
        if (isNaN(peliculaId)) {
            res.status(400).json({ error: 'peliculaId inválido' });
            return;
        }
        try {
            await this.casoDeUso.eliminar(req.usuario.id, peliculaId);
            res.json({ mensaje: 'Eliminada de favoritas' });
        }
        catch {
            res.status(500).json({ error: 'Error al eliminar favorita' });
        }
    }
}
exports.ControladorFavoritas = ControladorFavoritas;
//# sourceMappingURL=ControladorFavoritas.js.map