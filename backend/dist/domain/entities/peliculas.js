"use strict";
//Aqui se define las entidades de negocio
//En este es básicamente la clase/interfaz de una película con sus propiedades:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
class Pelicula {
    constructor(id, titulo, descripcion, imagen, anio, genero, estrellas, id_externo) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.anio = anio;
        this.genero = genero;
        this.estrellas = estrellas;
        this.id_externo = id_externo;
    }
}
exports.Pelicula = Pelicula;
//# sourceMappingURL=peliculas.js.map