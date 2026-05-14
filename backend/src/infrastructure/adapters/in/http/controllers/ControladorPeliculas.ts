//Aqui se implementa el controlador que recibe las solicitudes HTTP, llama al caso de uso y devuelve la respuesta. Es como el "puente" entre el mundo externo (HTTP) y la lógica de negocio (caso de uso).

import { Request, Response } from 'express';
import { CasoDeUsoPeliculas } from '../../../../../application/use-cases/CasoDeUsoPeliculas';
import { Pelicula } from '../../../../../domain/entities/peliculas';
import { PeliculaNoEncontrada, PeliculaDuplicada, ErrorValidacionPelicula } from '../../../../../domain/exceptions/PeliculaException';

export class ControladorPeliculas {
    private casoDeUso: CasoDeUsoPeliculas;
    
    constructor(casoDeUso: CasoDeUsoPeliculas) {
        this.casoDeUso = casoDeUso;
    }

    // Método para manejar la solicitud de obtener todas las películas
    async obtenerPeliculas(req: Request, res: Response): Promise<void> {
        try {
            const peliculas: Pelicula[] = await this.casoDeUso.obtenerPeliculas();
            res.json(peliculas);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las películas' });
        }
    }

    // Método para manejar la solicitud de obtener una película por su ID
    async obtenerPeliculaPorId(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        try {
            const pelicula: Pelicula | null = await this.casoDeUso.obtenerPeliculaPorId(id);
            res.json(pelicula);
        } catch (error) {
            if (error instanceof PeliculaNoEncontrada) {
                res.status(404).json({ error: (error as any).message });
            } else {
                res.status(500).json({ error: 'Error al obtener la película' });
            }
        }
    }

    // Método para manejar la solicitud de agregar una nueva película
    async agregarPelicula(req: Request, res: Response): Promise<void> {
        try {
            const { id, titulo, descripcion, imagen, anio, estrellas, id_externo } = req.body;
            const nuevaPelicula = new Pelicula(id || 0, titulo, descripcion, imagen, anio, estrellas, id_externo);
            const peliculaCreada: Pelicula = await this.casoDeUso.agregarPelicula(nuevaPelicula);
            res.status(201).json(peliculaCreada);
        } catch (error) {
            if (error instanceof ErrorValidacionPelicula) {
                res.status(400).json({ error: (error as any).message });
            } else if (error instanceof PeliculaDuplicada) {
                res.status(409).json({ error: (error as any).message });
            } else {
                res.status(500).json({ error: 'Error al agregar la película' });
            }
        }
    }

    // Método para manejar la solicitud de actualizar una película existente
    async actualizarPelicula(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        try {
            const { titulo, descripcion, imagen, anio, estrellas, id_externo } = req.body;
            const peliculaActualizada = new Pelicula(id, titulo, descripcion, imagen, anio, estrellas, id_externo);
            const resultado: Pelicula = await this.casoDeUso.actualizarPelicula(peliculaActualizada);
            res.json(resultado);
        } catch (error) {
            if (error instanceof PeliculaNoEncontrada) {
                res.status(404).json({ error: (error as any).message });
            } else if (error instanceof ErrorValidacionPelicula) {
                res.status(400).json({ error: (error as any).message });
            } else {
                res.status(500).json({ error: 'Error al actualizar la película' });
            }
        }
    }

    // Método para manejar la solicitud de eliminar una película
    async eliminarPelicula(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        try {
            await this.casoDeUso.eliminarPelicula(id);
            res.json({ mensaje: 'Película eliminada correctamente' });
        } catch (error) {
            if (error instanceof PeliculaNoEncontrada) {
                res.status(404).json({ error: (error as any).message });
            } else {
                res.status(500).json({ error: 'Error al eliminar la película' });
            }
        }
    }

    // Método para manejar la solicitud de importar películas desde la API externa
    async importarPeliculas(req: Request, res: Response): Promise<void> {
        try {
            const { importadas, omitidas } = await this.casoDeUso.importarPeliculas();
            res.status(201).json({
                mensaje: importadas.length > 0
                    ? `Importación completada: ${importadas.length} nuevas, ${omitidas} ya existían.`
                    : `Sin cambios: todas las películas ya estaban en la base de datos (${omitidas} omitidas).`,
                importadas: importadas.length,
                omitidas,
                peliculas: importadas
            });
        } catch (error) {
            res.status(500).json({ error: 'Error al importar películas de la API externa', detalle: (error as any).message });
        }
    }
}

