// Punto de entrada de la aplicación
// Solo se encarga de arrancar el servidor en el puerto configurado
// Toda la configuración (rutas, middlewares...) está en infrastructure/config/server.ts

import app from './infrastructure/config/server';
import dotenv from 'dotenv';

dotenv.config();

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor PelisMax en http://localhost:${PUERTO}`);
    console.log(`Health check:  http://localhost:${PUERTO}/api/health`);
    console.log(`Películas:     http://localhost:${PUERTO}/api/peliculas`);
});
