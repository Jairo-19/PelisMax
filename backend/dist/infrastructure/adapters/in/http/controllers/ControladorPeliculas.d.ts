import { Request, Response } from 'express';
import { CasoDeUsoPeliculas } from '../../../../../application/use-cases/CasoDeUsoPeliculas';
export declare class ControladorPeliculas {
    private casoDeUso;
    constructor(casoDeUso: CasoDeUsoPeliculas);
    obtenerPeliculas(req: Request, res: Response): Promise<void>;
    obtenerPeliculaPorId(req: Request, res: Response): Promise<void>;
    agregarPelicula(req: Request, res: Response): Promise<void>;
    actualizarPelicula(req: Request, res: Response): Promise<void>;
    eliminarPelicula(req: Request, res: Response): Promise<void>;
    importarPeliculas(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=ControladorPeliculas.d.ts.map