// Interfaz que define el contrato con la API externa
// Cualquier adaptador que implemente esto debe traer películas de la API externa y mapearlas a nuestro modelo


import { Pelicula } from "../../entities/peliculas";

export interface IServicioAPIExterna {
    obtenerPeliculas(): Promise<Pelicula[]>;
}
