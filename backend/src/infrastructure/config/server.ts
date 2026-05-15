// Configuración del servidor Express
// Aquí se configura Express, se registran los middlewares globales y se montan las rutas
// Se exporta la app para que index.ts la arranque en el puerto

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import peliculasRoutes from '../adapters/in/http/routes/peliculasRoutes';
import authRoutes from '../adapters/in/http/routes/authRoutes';

dotenv.config();

const app = express();

// Middlewares globales (se aplican a todas las rutas)
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // permite peticiones del frontend
    credentials: true
}));
app.use(express.json()); // permite leer el body de las peticiones como JSON

// Registramos las rutas bajo su prefijo
app.use('/api/peliculas', peliculasRoutes);
app.use('/api/auth', authRoutes);

// Ruta de comprobación: sirve para saber si el servidor está vivo
app.get('/api/health', (req, res) => {
    res.json({ estado: 'ok', mensaje: 'Servidor PelisMax funcionando' });
});

// Si ninguna ruta coincide, devolvemos 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada', ruta: req.path });
});

export default app;
