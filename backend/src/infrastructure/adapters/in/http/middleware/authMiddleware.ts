import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export interface RequestConUsuario extends Request {
    usuario?: { id: number; email: string };
}

export function authMiddleware(req: RequestConUsuario, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }
    try {
        const secret: string = process.env.JWT_SECRET || '';
        const payload = jwt.verify(token, secret) as unknown as { id: number; email: string };
        req.usuario = payload;
        next();
    } catch {
        res.status(401).json({ error: 'Token inválido o expirado' });
    }
}
