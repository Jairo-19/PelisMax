//Aqui se implementa la lógica de negocio utilizando el repositorio. Es como el "cerebro" que conecta la BD con las operaciones que queremos realizar.
//Esta clase coordina: validación → operación en BD → devuelve resultado o lanza excepción

import { Pelicula } from "../../domain/entities/peliculas";
import { IRepositorioPeliculas } from "../../domain/ports/out/IRepositorioPeliculas";
import { ICasoDeUsoPeliculas } from "../../domain/ports/in/ICasoDeUsoPeliculas";
import { PeliculaNoEncontrada, PeliculaDuplicada, ErrorValidacionPelicula } from "../../domain/exceptions/PeliculaException";       

// Implementa el contrato ICasoDeUsoPeliculas con toda la lógica de negocio
export class CasoDeUsoPeliculas implements ICasoDeUsoPeliculas {
    // Recibe el repositorio en el constructor (inyección de dependencias)
    // Así no depende de una BD específica, solo del contrato IRepositorioPeliculas
    private repositorio: IRepositorioPeliculas;

    constructor(repositorio: IRepositorioPeliculas) {
        this.repositorio = repositorio;
    }

    // Obtiene todas las películas del repositorio
    async obtenerPeliculas(): Promise<Pelicula[]> {
        return this.repositorio.obtenerPeliculas();
    }

    // Obtiene una película por ID. Si no existe, lanza excepción de dominio
    async obtenerPeliculaPorId(id: number): Promise<Pelicula | null> {
        const pelicula = await this.repositorio.obtenerPeliculaPorId(id);
        if (!pelicula) {
            throw new PeliculaNoEncontrada(id);
        }
        return pelicula;
    }

    // Agrega una nueva película. Verifica duplicados por id_externo para evitar repeticiones de la API
    async agregarPelicula(pelicula: Pelicula): Promise<Pelicula> {
        // Validar que id_externo no esté vacío
        if (!pelicula.id_externo || pelicula.id_externo.trim() === '') {
            throw new ErrorValidacionPelicula('El id_externo es requerido');
        }
        // Validar que estrellas esté en rango 0-5
        if (pelicula.estrellas < 0 || pelicula.estrellas > 5) {
            throw new ErrorValidacionPelicula('Las estrellas deben estar entre 0 y 5');
        }
        return this.repositorio.agregarPelicula(pelicula);
    }

    // Actualiza una película existente. Primero verifica que exista
    async actualizarPelicula(pelicula: Pelicula): Promise<Pelicula> {
        const peliculaExistente = await this.repositorio.obtenerPeliculaPorId(pelicula.id);
        if (!peliculaExistente) {
            throw new PeliculaNoEncontrada(pelicula.id);
        }
        // Validar estrellas también en actualización
        if (pelicula.estrellas < 0 || pelicula.estrellas > 5) {
            throw new ErrorValidacionPelicula('Las estrellas deben estar entre 0 y 5');
        }
        return this.repositorio.actualizarPelicula(pelicula);
    }

    // Elimina una película. Primero verifica que exista
    async eliminarPelicula(id: number): Promise<void> {
        const peliculaExistente = await this.repositorio.obtenerPeliculaPorId(id);
        if (!peliculaExistente) {
            throw new PeliculaNoEncontrada(id);
        }
        return this.repositorio.eliminarPelicula(id);
    }
}