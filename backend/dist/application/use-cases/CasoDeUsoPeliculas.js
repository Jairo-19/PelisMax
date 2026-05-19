"use strict";
//Aqui se implementa la lógica de negocio utilizando el repositorio. Es como el "cerebro" que conecta la BD con las operaciones que queremos realizar.
//Esta clase coordina: validación → operación en BD → devuelve resultado o lanza excepción
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasoDeUsoPeliculas = void 0;
const PeliculaException_1 = require("../../domain/exceptions/PeliculaException");
// Implementa el contrato ICasoDeUsoPeliculas con toda la lógica de negocio
class CasoDeUsoPeliculas {
    constructor(repositorio, servicioAPIExterna) {
        this.repositorio = repositorio;
        this.servicioAPIExterna = servicioAPIExterna;
    }
    // Obtiene todas las películas del repositorio
    async obtenerPeliculas() {
        return this.repositorio.obtenerPeliculas();
    }
    // Obtiene películas paginadas
    async obtenerPeliculasPaginadas(pagina, limite) {
        return this.repositorio.obtenerPeliculasPaginadas(pagina, limite);
    }
    // Obtiene una película por ID. Si no existe, lanza excepción de dominio
    async obtenerPeliculaPorId(id) {
        const pelicula = await this.repositorio.obtenerPeliculaPorId(id);
        if (!pelicula) {
            throw new PeliculaException_1.PeliculaNoEncontrada(id);
        }
        return pelicula;
    }
    // Agrega una nueva película. Verifica duplicados por id_externo para evitar repeticiones de la API
    async agregarPelicula(pelicula) {
        // Validar que id_externo no esté vacío
        if (!pelicula.id_externo || pelicula.id_externo.trim() === '') {
            throw new PeliculaException_1.ErrorValidacionPelicula('El id_externo es requerido');
        }
        // Validar que estrellas esté en rango 0-5
        if (pelicula.estrellas < 0 || pelicula.estrellas > 5) {
            throw new PeliculaException_1.ErrorValidacionPelicula('Las estrellas deben estar entre 0 y 5');
        }
        // Verificar que no exista ya una película con el mismo id_externo
        const existente = await this.repositorio.obtenerPorIdExterno(pelicula.id_externo);
        if (existente) {
            throw new PeliculaException_1.PeliculaDuplicada(pelicula.id_externo);
        }
        return this.repositorio.agregarPelicula(pelicula);
    }
    // Actualiza una película existente. Primero verifica que exista
    async actualizarPelicula(pelicula) {
        const peliculaExistente = await this.repositorio.obtenerPeliculaPorId(pelicula.id);
        if (!peliculaExistente) {
            throw new PeliculaException_1.PeliculaNoEncontrada(pelicula.id);
        }
        // Validar estrellas también en actualización
        if (pelicula.estrellas < 0 || pelicula.estrellas > 5) {
            throw new PeliculaException_1.ErrorValidacionPelicula('Las estrellas deben estar entre 0 y 5');
        }
        return this.repositorio.actualizarPelicula(pelicula);
    }
    // Elimina una película. Primero verifica que exista
    async eliminarPelicula(id) {
        const peliculaExistente = await this.repositorio.obtenerPeliculaPorId(id);
        if (!peliculaExistente) {
            throw new PeliculaException_1.PeliculaNoEncontrada(id);
        }
        return this.repositorio.eliminarPelicula(id);
    }
    // Importa películas desde la API externa y las guarda en la base de datos
    // Devuelve solo las nuevas; las ya existentes (mismo id_externo) se omiten sin error
    async importarPeliculas() {
        if (!this.servicioAPIExterna) {
            throw new Error('Servicio de API externa no configurado');
        }
        try {
            const peliculasDelAPI = await this.servicioAPIExterna.obtenerPeliculas();
            const importadas = [];
            let omitidas = 0;
            for (const pelicula of peliculasDelAPI) {
                // Comprobar si ya existe por id_externo ANTES de intentar INSERT
                // Esto evita que MySQL incremente el auto_increment en inserts fallidos
                const yaExiste = await this.repositorio.obtenerPorIdExterno(pelicula.id_externo);
                if (yaExiste) {
                    omitidas++;
                    continue;
                }
                try {
                    const peliculaGuardada = await this.agregarPelicula(pelicula);
                    importadas.push(peliculaGuardada);
                }
                catch (error) {
                    omitidas++;
                    console.warn(`Omitida '${pelicula.titulo}':`, error.message);
                }
            }
            return { importadas, omitidas };
        }
        catch (error) {
            console.error('Error al importar películas:', error);
            throw error;
        }
    }
}
exports.CasoDeUsoPeliculas = CasoDeUsoPeliculas;
//# sourceMappingURL=CasoDeUsoPeliculas.js.map