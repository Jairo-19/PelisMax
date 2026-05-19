"use strict";
// Punto de entrada de la aplicación
// Solo se encarga de arrancar el servidor en el puerto configurado
// Toda la configuración (rutas, middlewares...) está en infrastructure/config/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./infrastructure/config/server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PUERTO = process.env.PORT || 3000;
server_1.default.listen(PUERTO, () => {
    console.log(`Servidor PelisMax en http://localhost:${PUERTO}`);
    console.log(`Health check:  http://localhost:${PUERTO}/api/health`);
    console.log(`Películas:     http://localhost:${PUERTO}/api/peliculas`);
});
//# sourceMappingURL=index.js.map