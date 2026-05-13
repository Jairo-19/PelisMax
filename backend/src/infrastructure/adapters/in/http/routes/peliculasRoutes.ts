// Rutas HTTP para películas
// Aquí se ensamblan todas las capas hexagonales: repositorio → caso de uso → controlador → rutas
// Y se mapean los endpoints HTTP a los métodos del controlador

import { Router } from 'express';
import { ControladorPeliculas } from '../controllers/ControladorPeliculas';
import { CasoDeUsoPeliculas } from '../../../../../application/use-cases/CasoDeUsoPeliculas';
import { RepositorioPeliculas } from '../../../out/persistence/RepositorioPeliculas';

// Ensamblaje de capas (inyección de dependencias)
// De adentro hacia afuera: repositorio → caso de uso → controlador
const repositorio = new RepositorioPeliculas();           // Capa de persistencia (BD)
const casoDeUso = new CasoDeUsoPeliculas(repositorio);    // Capa de lógica de negocio
const controlador = new ControladorPeliculas(casoDeUso);  // Capa de presentación (HTTP)

// Creamos el router de Express
const router = Router();

// Rutas disponibles bajo /api/peliculas:
// GET    /api/peliculas            → Obtiene todas las películas
router.get('/', (req, res) => controlador.obtenerPeliculas(req, res));

// GET    /api/peliculas/:id        → Obtiene una película por ID
router.get('/:id', (req, res) => controlador.obtenerPeliculaPorId(req, res));

// POST   /api/peliculas            → Crea una nueva película
router.post('/', (req, res) => controlador.agregarPelicula(req, res));

// PUT    /api/peliculas/:id        → Actualiza una película existente
router.put('/:id', (req, res) => controlador.actualizarPelicula(req, res));

// DELETE /api/peliculas/:id        → Elimina una película
router.delete('/:id', (req, res) => controlador.eliminarPelicula(req, res));

export default router;
