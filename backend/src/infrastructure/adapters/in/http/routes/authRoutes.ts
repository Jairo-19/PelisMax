import { Router } from 'express';
import { ControladorAuth } from '../controllers/ControladorAuth';
import { CasoDeUsoAuth } from '../../../../../application/use-cases/CasoDeUsoAuth';
import { RepositorioUsuarios } from '../../../out/persistence/RepositorioUsuarios';

// Ensamblaje de capas (inyección de dependencias)
const repositorio = new RepositorioUsuarios();
const casoDeUso = new CasoDeUsoAuth(repositorio);
const controlador = new ControladorAuth(casoDeUso);

const router = Router();

// Rutas disponibles bajo /api/auth:
router.post('/registro', (req, res) => controlador.registrar(req, res));
router.post('/login', (req, res) => controlador.login(req, res));

export default router;
