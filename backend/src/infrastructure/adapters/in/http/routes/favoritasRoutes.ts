import { Router } from 'express';
import { ControladorFavoritas } from '../controllers/ControladorFavoritas';
import { CasoDeUsoFavoritas } from '../../../../../application/use-cases/CasoDeUsoFavoritas';
import { RepositorioFavoritas } from '../../../out/persistence/RepositorioFavoritas';
import { authMiddleware } from '../middleware/authMiddleware';

const repositorio = new RepositorioFavoritas();
const casoDeUso = new CasoDeUsoFavoritas(repositorio);
const controlador = new ControladorFavoritas(casoDeUso);

const router = Router();

// Todas las rutas de favoritas requieren autenticación
router.use(authMiddleware);

// GET  /api/favoritas              → Obtiene todas las favoritas del usuario autenticado
router.get('/', (req, res) => controlador.obtenerFavoritas(req as any, res));

// POST /api/favoritas/:peliculaId  → Añade una película a favoritas
router.post('/:peliculaId', (req, res) => controlador.agregar(req as any, res));

// DELETE /api/favoritas/:peliculaId → Elimina una película de favoritas
router.delete('/:peliculaId', (req, res) => controlador.eliminar(req as any, res));

export default router;
