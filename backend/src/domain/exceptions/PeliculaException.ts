// Excepciones propias del dominio de películas
// Se lanzan cuando ocurre un error de negocio (película no encontrada, datos inválidos...)
// NO contienen código HTTP: eso lo decide el controlador en la capa infrastructure
// Así el negocio permanece independiente de la tecnología

// Se lanza cuando intentas obtener una película que no existe
export class PeliculaNoEncontrada extends Error {
    constructor(id: number) {
        super(`La película con ID ${id} no fue encontrada`);
        this.name = 'PeliculaNoEncontrada';
    }
}

// Se lanza cuando intentas crear una película con un id_externo que ya existe (para evitar duplicados)
export class PeliculaDuplicada extends Error {
    constructor(idExterno: string) {
        super(`Ya existe una película con el ID externo: ${idExterno}`);
        this.name = 'PeliculaDuplicada';
    }
}

// Se lanza cuando los datos de la película son inválidos (campos vacíos, estrellas fuera de rango, etc)
export class ErrorValidacionPelicula extends Error {
    constructor(mensaje: string) {
        super(`Error de validación: ${mensaje}`);
        this.name = 'ErrorValidacionPelicula';
    }
}
