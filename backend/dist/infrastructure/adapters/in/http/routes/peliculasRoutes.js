"use strict";
// Rutas HTTP para películas
// Aquí se ensamblan todas las capas hexagonales: repositorio → caso de uso → controlador → rutas
// Y se mapean los endpoints HTTP a los métodos del controlador
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorPeliculas_1 = require("../controllers/ControladorPeliculas");
const CasoDeUsoPeliculas_1 = require("../../../../../application/use-cases/CasoDeUsoPeliculas");
const RepositorioPeliculas_1 = require("../../../out/persistence/RepositorioPeliculas");
const ServicioAPIExterna_1 = require("../../../out/external/ServicioAPIExterna");
// Ensamblaje de capas (inyección de dependencias)
// De adentro hacia afuera: repositorio → caso de uso → controlador
const repositorio = new RepositorioPeliculas_1.RepositorioPeliculas(); // Capa de persistencia (BD)
const servicioAPIExterna = new ServicioAPIExterna_1.ServicioAPIExterna(); // Servicio de API externa
const casoDeUso = new CasoDeUsoPeliculas_1.CasoDeUsoPeliculas(repositorio, servicioAPIExterna); // Capa de lógica de negocio
const controlador = new ControladorPeliculas_1.ControladorPeliculas(casoDeUso); // Capa de presentación (HTTP)
// Creamos el router de Express
const router = (0, express_1.Router)();
// Rutas disponibles bajo /api/peliculas:
// GET    /api/peliculas            → Obtiene todas las películas
router.get('/', (req, res) => controlador.obtenerPeliculas(req, res));
// GET    /api/peliculas/:id        → Obtiene una película por ID
router.get('/:id', (req, res) => controlador.obtenerPeliculaPorId(req, res));
// POST   /api/peliculas            → Crea una nueva película
router.post('/', (req, res) => controlador.agregarPelicula(req, res));
// POST   /api/peliculas/importar   → Importa películas desde la API externa
router.post('/importar', (req, res) => controlador.importarPeliculas(req, res));
// PUT    /api/peliculas/:id        → Actualiza una película existente
router.put('/:id', (req, res) => controlador.actualizarPelicula(req, res));
// DELETE /api/peliculas/:id        → Elimina una película
router.delete('/:id', (req, res) => controlador.eliminarPelicula(req, res));
exports.default = router;
//# sourceMappingURL=peliculasRoutes.js.map