"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorAuth_1 = require("../controllers/ControladorAuth");
const CasoDeUsoAuth_1 = require("../../../../../application/use-cases/CasoDeUsoAuth");
const RepositorioUsuarios_1 = require("../../../out/persistence/RepositorioUsuarios");
// Ensamblaje de capas (inyección de dependencias)
const repositorio = new RepositorioUsuarios_1.RepositorioUsuarios();
const casoDeUso = new CasoDeUsoAuth_1.CasoDeUsoAuth(repositorio);
const controlador = new ControladorAuth_1.ControladorAuth(casoDeUso);
const router = (0, express_1.Router)();
// Rutas disponibles bajo /api/auth:
router.post('/registro', (req, res) => controlador.registrar(req, res));
router.post('/login', (req, res) => controlador.login(req, res));
exports.default = router;
//# sourceMappingURL=authRoutes.js.map