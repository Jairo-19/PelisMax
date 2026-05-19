import { Request, Response, NextFunction } from 'express';
export interface RequestConUsuario extends Request {
    usuario?: {
        id: number;
        email: string;
    };
}
export declare function authMiddleware(req: RequestConUsuario, res: Response, next: NextFunction): void;
//# sourceMappingURL=authMiddleware.d.ts.map