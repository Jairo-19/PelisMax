"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorFavoritas_1 = require("../controllers/ControladorFavoritas");
const CasoDeUsoFavoritas_1 = require("../../../../../application/use-cases/CasoDeUsoFavoritas");
const RepositorioFavoritas_1 = require("../../../out/persistence/RepositorioFavoritas");
const authMiddleware_1 = require("../middleware/authMiddleware");
const repositorio = new RepositorioFavoritas_1.RepositorioFavoritas();
const casoDeUso = new CasoDeUsoFavoritas_1.CasoDeUsoFavoritas(repositorio);
const controlador = new ControladorFavoritas_1.ControladorFavoritas(casoDeUso);
const router = (0, express_1.Router)();
// Todas las rutas de favoritas requieren autenticación
router.use(authMiddleware_1.authMiddleware);
// GET  /api/favoritas              → Obtiene todas las favoritas del usuario autenticado
router.get('/', (req, res) => controlador.obtenerFavoritas(req, res));
// POST /api/favoritas/:peliculaId  → Añade una película a favoritas
router.post('/:peliculaId', (req, res) => controlador.agregar(req, res));
// DELETE /api/favoritas/:peliculaId → Elimina una película de favoritas
router.delete('/:peliculaId', (req, res) => controlador.eliminar(req, res));
exports.default = router;
//# sourceMappingURL=favoritasRoutes.js.map