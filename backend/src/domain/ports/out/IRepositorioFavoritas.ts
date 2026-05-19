import { Pelicula } from '../../entities/peliculas';

export interface IRepositorioFavoritas {
    agregar(usuarioId: number, peliculaId: number): Promise<void>;
    eliminar(usuarioId: number, peliculaId: number): Promise<void>;
    obtenerPorUsuario(usuarioId: number): Promise<Pelicula[]>;
    esFavorita(usuarioId: number, peliculaId: number): Promise<boolean>;
}
