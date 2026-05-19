"use strict";
// Excepciones propias del dominio de películas
// Se lanzan cuando ocurre un error de negocio (película no encontrada, datos inválidos...)
// NO contienen código HTTP: eso lo decide el controlador en la capa infrastructure
// Así el negocio permanece independiente de la tecnología
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorValidacionPelicula = exports.PeliculaDuplicada = exports.PeliculaNoEncontrada = void 0;
// Se lanza cuando intentas obtener una película que no existe
class PeliculaNoEncontrada extends Error {
    constructor(id) {
        super(`La película con ID ${id} no fue encontrada`);
        this.name = 'PeliculaNoEncontrada';
    }
}
exports.PeliculaNoEncontrada = PeliculaNoEncontrada;
// Se lanza cuando intentas crear una película con un id_externo que ya existe (para evitar duplicados)
class PeliculaDuplicada extends Error {
    constructor(idExterno) {
        super(`Ya existe una película con el ID externo: ${idExterno}`);
        this.name = 'PeliculaDuplicada';
    }
}
exports.PeliculaDuplicada = PeliculaDuplicada;
// Se lanza cuando los datos de la película son inválidos (campos vacíos, estrellas fuera de rango, etc)
class ErrorValidacionPelicula extends Error {
    constructor(mensaje) {
        super(`Error de validación: ${mensaje}`);
        this.name = 'ErrorValidacionPelicula';
    }
}
exports.ErrorValidacionPelicula = ErrorValidacionPelicula;
//# sourceMappingURL=PeliculaException.js.map