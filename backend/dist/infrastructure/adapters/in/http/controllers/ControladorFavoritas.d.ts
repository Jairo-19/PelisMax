import { Response } from 'express';
import { CasoDeUsoFavoritas } from '../../../../../application/use-cases/CasoDeUsoFavoritas';
import { RequestConUsuario } from '../middleware/authMiddleware';
export declare class ControladorFavoritas {
    private casoDeUso;
    constructor(casoDeUso: CasoDeUsoFavoritas);
    obtenerFavoritas(req: RequestConUsuario, res: Response): Promise<void>;
    agregar(req: RequestConUsuario, res: Response): Promise<void>;
    eliminar(req: RequestConUsuario, res: Response): Promise<void>;
}
//# sourceMappingURL=ControladorFavoritas.d.ts.map