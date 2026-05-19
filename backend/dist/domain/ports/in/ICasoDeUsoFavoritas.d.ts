import { Pelicula } from '../../entities/peliculas';
export interface ICasoDeUsoFavoritas {
    agregar(usuarioId: number, peliculaId: number): Promise<void>;
    eliminar(usuarioId: number, peliculaId: number): Promise<void>;
    obtenerFavoritas(usuarioId: number): Promise<Pelicula[]>;
    esFavorita(usuarioId: number, peliculaId: number): Promise<boolean>;
}
//# sourceMappingURL=ICasoDeUsoFavoritas.d.ts.map