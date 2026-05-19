"use strict";
// Configuración del servidor Express
// Aquí se configura Express, se registran los middlewares globales y se montan las rutas
// Se exporta la app para que index.ts la arranque en el puerto
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const peliculasRoutes_1 = __importDefault(require("../adapters/in/http/routes/peliculasRoutes"));
const authRoutes_1 = __importDefault(require("../adapters/in/http/routes/authRoutes"));
const favoritasRoutes_1 = __importDefault(require("../adapters/in/http/routes/favoritasRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares globales (se aplican a todas las rutas)
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // permite peticiones del frontend
    credentials: true
}));
app.use(express_1.default.json()); // permite leer el body de las peticiones como JSON
// Registramos las rutas bajo su prefijo
app.use('/api/peliculas', peliculasRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
app.use('/api/favoritas', favoritasRoutes_1.default);
// Ruta de comprobación: sirve para saber si el servidor está vivo
app.get('/api/health', (req, res) => {
    res.json({ estado: 'ok', mensaje: 'Servidor PelisMax funcionando' });
});
// Si ninguna ruta coincide, devolvemos 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada', ruta: req.path });
});
exports.default = app;
//# sourceMappingURL=server.js.map