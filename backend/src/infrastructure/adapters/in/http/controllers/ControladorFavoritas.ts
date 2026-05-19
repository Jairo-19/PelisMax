import { Response } from 'express';
import { CasoDeUsoFavoritas } from '../../../../../application/use-cases/CasoDeUsoFavoritas';
import { RequestConUsuario } from '../middleware/authMiddleware';

export class ControladorFavoritas {
    private casoDeUso: CasoDeUsoFavoritas;

    constructor(casoDeUso: CasoDeUsoFavoritas) {
        this.casoDeUso = casoDeUso;
    }

    async obtenerFavoritas(req: RequestConUsuario, res: Response): Promise<void> {
        try {
            const favoritas = await this.casoDeUso.obtenerFavoritas(req.usuario!.id);
            res.json(favoritas);
        } catch {
            res.status(500).json({ error: 'Error al obtener favoritas' });
        }
    }

    async agregar(req: RequestConUsuario, res: Response): Promise<void> {
        const peliculaId = Number(req.params.peliculaId);
        if (isNaN(peliculaId)) {
            res.status(400).json({ error: 'peliculaId inválido' });
            return;
        }
        try {
            await this.casoDeUso.agregar(req.usuario!.id, peliculaId);
            res.status(201).json({ mensaje: 'Añadida a favoritas' });
        } catch {
            res.status(500).json({ error: 'Error al añadir favorita' });
        }
    }

    async eliminar(req: RequestConUsuario, res: Response): Promise<void> {
        const peliculaId = Number(req.params.peliculaId);
        if (isNaN(peliculaId)) {
            res.status(400).json({ error: 'peliculaId inválido' });
            return;
        }
        try {
            await this.casoDeUso.eliminar(req.usuario!.id, peliculaId);
            res.json({ mensaje: 'Eliminada de favoritas' });
        } catch {
            res.status(500).json({ error: 'Error al eliminar favorita' });
        }
    }
}
