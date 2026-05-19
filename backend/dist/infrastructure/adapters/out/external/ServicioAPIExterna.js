"use strict";
// Aqui lo que hace es llmar a la api externa y mapear los datos al modelo pelicula
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioAPIExterna = void 0;
const axios_1 = __importDefault(require("axios"));
const peliculas_1 = require("../../../../domain/entities/peliculas");
class ServicioAPIExterna {
    constructor() {
        this.URL_API = "https://devsapihub.com/api-movies";
    }
    async obtenerPeliculas() {
        try {
            const response = await axios_1.default.get(this.URL_API);
            const peliculasAPI = response.data;
            // Mapear cada película de la API externa a nuestro modelo Pelicula
            return peliculasAPI.map(pelicula => this.mapearAPIAlModelo(pelicula));
        }
        catch (error) {
            console.error('Error al obtener películas de API externa:', error);
            throw error;
        }
    }
    mapearAPIAlModelo(peliculaAPI) {
        return new peliculas_1.Pelicula(0, // id: 0 porque es nueva, la BD lo generará
        peliculaAPI.title, // title → titulo
        peliculaAPI.description, // description → descripcion
        peliculaAPI.image_url, // image_url → imagen
        peliculaAPI.year, // year → anio
        peliculaAPI.genre, // genre → genero
        peliculaAPI.stars, // stars → estrellas
        peliculaAPI.id.toString() // id (de la API) → id_externo
        );
    }
}
exports.ServicioAPIExterna = ServicioAPIExterna;
//# sourceMappingURL=ServicioAPIExterna.js.map