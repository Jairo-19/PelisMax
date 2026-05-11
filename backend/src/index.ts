import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Servidor PelisMax funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.path,
    method: req.method
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor PelisMax en http://localhost:${PORT}`);
  console.log(`📡 CORS: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log(`🔧 Modo: ${process.env.NODE_ENV || 'development'}`);
});
