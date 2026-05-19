"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }
    try {
        const secret = process.env.JWT_SECRET || '';
        const payload = jsonwebtoken_1.default.verify(token, secret);
        req.usuario = payload;
        next();
    }
    catch {
        res.status(401).json({ error: 'Token inválido o expirado' });
    }
}
//# sourceMappingURL=authMiddleware.js.map