//Aquí defines la interfaz (contrato) que el repositorio debe cumplir. Es como un "formulario en blanco" con los métodos que toda BD debe tener.

import { Pelicula } from "../../entities/peliculas";

export interface IRepositorioPeliculas {
    obtenerPeliculas(): Promise<Pelicula[]>; //devuelve todas las películas
    obtenerPeliculaPorId(id: number): Promise<Pelicula | null>; //devuelve una película específica por su ID, o null si no se encuentra
    agregarPelicula(pelicula: Pelicula): Promise<Pelicula>; //agrega una nueva película a la base de datos y devuelve la película agregada (con su ID asignado)
    actualizarPelicula(pelicula: Pelicula): Promise<Pelicula>; //actualiza una película existente en la base de datos y devuelve la película actualizada
    eliminarPelicula(id: number): Promise<void>; //elimina una película de la base de datos por su ID
}