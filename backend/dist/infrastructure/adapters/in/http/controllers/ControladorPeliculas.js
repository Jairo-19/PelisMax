"use strict";
//Aqui se implementa el controlador que recibe las solicitudes HTTP, llama al caso de uso y devuelve la respuesta. Es como el "puente" entre el mundo externo (HTTP) y la lógica de negocio (caso de uso).
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorPeliculas = void 0;
const peliculas_1 = require("../../../../../domain/entities/peliculas");
const PeliculaException_1 = require("../../../../../domain/exceptions/PeliculaException");
class ControladorPeliculas {
    constructor(casoDeUso) {
        this.casoDeUso = casoDeUso;
    }
    // Método para manejar la solicitud de obtener todas las películas (con paginación opcional)
    async obtenerPeliculas(req, res) {
        try {
            const { pagina, limite } = req.query;
            if (pagina && limite) {
                const peliculas = await this.casoDeUso.obtenerPeliculasPaginadas(Number(pagina), Number(limite));
                res.json(peliculas);
            }
            else {
                const peliculas = await this.casoDeUso.obtenerPeliculas();
                res.json(peliculas);
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Error al obtener las películas' });
        }
    }
    // Método para manejar la solicitud de obtener una película por su ID
    async obtenerPeliculaPorId(req, res) {
        const id = Number(req.params.id);
        try {
            const pelicula = await this.casoDeUso.obtenerPeliculaPorId(id);
            res.json(pelicula);
        }
        catch (error) {
            if (error instanceof PeliculaException_1.PeliculaNoEncontrada) {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'Error al obtener la película' });
            }
        }
    }
    // Método para manejar la solicitud de agregar una nueva película
    async agregarPelicula(req, res) {
        try {
            const { id, titulo, descripcion, imagen, anio, genero, estrellas, id_externo } = req.body;
            const nuevaPelicula = new peliculas_1.Pelicula(id || 0, titulo, descripcion, imagen, anio, genero, estrellas, id_externo);
            const peliculaCreada = await this.casoDeUso.agregarPelicula(nuevaPelicula);
            res.status(201).json(peliculaCreada);
        }
        catch (error) {
            if (error instanceof PeliculaException_1.ErrorValidacionPelicula) {
                res.status(400).json({ error: error.message });
            }
            else if (error instanceof PeliculaException_1.PeliculaDuplicada) {
                res.status(409).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'Error al agregar la película' });
            }
        }
    }
    // Método para manejar la solicitud de actualizar una película existente
    async actualizarPelicula(req, res) {
        const id = Number(req.params.id);
        try {
            const { titulo, descripcion, imagen, anio, genero, estrellas, id_externo } = req.body;
            const peliculaActualizada = new peliculas_1.Pelicula(id, titulo, descripcion, imagen, anio, genero, estrellas, id_externo);
            const resultado = await this.casoDeUso.actualizarPelicula(peliculaActualizada);
            res.json(resultado);
        }
        catch (error) {
            if (error instanceof PeliculaException_1.PeliculaNoEncontrada) {
                res.status(404).json({ error: error.message });
            }
            else if (error instanceof PeliculaException_1.ErrorValidacionPelicula) {
                res.status(400).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'Error al actualizar la película' });
            }
        }
    }
    // Método para manejar la solicitud de eliminar una película
    async eliminarPelicula(req, res) {
        const id = Number(req.params.id);
        try {
            await this.casoDeUso.eliminarPelicula(id);
            res.json({ mensaje: 'Película eliminada correctamente' });
        }
        catch (error) {
            if (error instanceof PeliculaException_1.PeliculaNoEncontrada) {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'Error al eliminar la película' });
            }
        }
    }
    // Método para manejar la solicitud de importar películas desde la API externa
    async importarPeliculas(req, res) {
        try {
            const { importadas, omitidas } = await this.casoDeUso.importarPeliculas();
            res.status(201).json({
                mensaje: importadas.length > 0
                    ? `Importación completada: ${importadas.length} nuevas, ${omitidas} ya existían.`
                    : `Sin cambios: todas las películas ya estaban en la base de datos (${omitidas} omitidas).`,
                importadas: importadas.length,
                omitidas,
                peliculas: importadas
            });
        }
        catch (error) {
            res.status(500).json({ error: 'Error al importar películas de la API externa', detalle: error.message });
        }
    }
}
exports.ControladorPeliculas = ControladorPeliculas;
//# sourceMappingURL=ControladorPeliculas.js.map