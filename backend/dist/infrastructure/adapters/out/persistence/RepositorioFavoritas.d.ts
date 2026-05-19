import { Pelicula } from '../../../../domain/entities/peliculas';
import { IRepositorioFavoritas } from '../../../../domain/ports/out/IRepositorioFavoritas';
export declare class RepositorioFavoritas implements IRepositorioFavoritas {
    agregar(usuarioId: number, peliculaId: number): Promise<void>;
    eliminar(usuarioId: number, peliculaId: number): Promise<void>;
    obtenerPorUsuario(usuarioId: number): Promise<Pelicula[]>;
    esFavorita(usuarioId: number, peliculaId: number): Promise<boolean>;
}
//# sourceMappingURL=RepositorioFavoritas.d.ts.map