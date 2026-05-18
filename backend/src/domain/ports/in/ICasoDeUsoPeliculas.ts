//Aquí defines la interfaz (contrato) que el caso de uso debe cumplir. Es como un "formulario en blanco" con los métodos que toda lógica de negocio debe tener.

import { Pelicula } from "../../entities/peliculas";

export interface ICasoDeUsoPeliculas {
    obtenerPeliculas(): Promise<Pelicula[]>; //devuelve todas las películas
    obtenerPeliculasPaginadas(pagina: number, limite: number): Promise<Pelicula[]>; //devuelve películas paginadas
    obtenerPeliculaPorId(id: number): Promise<Pelicula | null>; //devuelve una película específica por su ID, o null si no se encuentra
    agregarPelicula(pelicula: Pelicula): Promise<Pelicula>; //agrega una nueva película a la base de datos y devuelve la película agregada (con su ID asignado)
    actualizarPelicula(pelicula: Pelicula): Promise<Pelicula>; //actualiza una película existente en la base de datos y devuelve la película actualizada
    eliminarPelicula(id: number): Promise<void>; //elimina una película de la base de datos por su ID
    importarPeliculas(): Promise<{ importadas: Pelicula[]; omitidas: number }>; //importa películas desde la API externa y las guarda en la base de datos
}