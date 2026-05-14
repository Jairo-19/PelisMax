// Aqui lo que hace es llmar a la api externa y mapear los datos al modelo pelicula

import axios from 'axios';
import { Pelicula } from "../../../../domain/entities/peliculas";
import { IServicioAPIExterna } from "../../../../domain/ports/out/IServicioAPIExterna";

// Interfaz para mapear la respuesta de la API externa
interface PeliculaAPIExterna {
    id: number;
    title: string;
    description: string;
    year: number;
    image_url: string;
    genre: string;
    stars: number;
}

export class ServicioAPIExterna implements IServicioAPIExterna {
    private readonly URL_API = "https://devsapihub.com/api-movies";

    async obtenerPeliculas(): Promise<Pelicula[]> {
        try {
            const response = await axios.get<PeliculaAPIExterna[]>(this.URL_API);
            
            const peliculasAPI: PeliculaAPIExterna[] = response.data;
            
            // Mapear cada película de la API externa a nuestro modelo Pelicula
            return peliculasAPI.map(pelicula => this.mapearAPIAlModelo(pelicula));
        } catch (error) {
            console.error('Error al obtener películas de API externa:', error);
            throw error;
        }
    }

    private mapearAPIAlModelo(peliculaAPI: PeliculaAPIExterna): Pelicula {
        return new Pelicula(
            0,                         // id: 0 porque es nueva, la BD lo generará
            peliculaAPI.title,         // title → titulo
            peliculaAPI.description,   // description → descripcion
            peliculaAPI.image_url,     // image_url → imagen
            peliculaAPI.year,          // year → anio
            peliculaAPI.genre,         // genre → genero
            peliculaAPI.stars,         // stars → estrellas
            peliculaAPI.id.toString()  // id (de la API) → id_externo
        );
    }
}
