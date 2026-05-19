import { Request, Response } from 'express';
import { CasoDeUsoAuth } from '../../../../../application/use-cases/CasoDeUsoAuth';
export declare class ControladorAuth {
    private casoDeUso;
    constructor(casoDeUso: CasoDeUsoAuth);
    registrar(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=ControladorAuth.d.ts.map