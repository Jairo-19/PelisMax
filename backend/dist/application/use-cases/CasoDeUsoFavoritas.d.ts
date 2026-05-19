import { Pelicula } from '../../domain/entities/peliculas';
import { IRepositorioFavoritas } from '../../domain/ports/out/IRepositorioFavoritas';
import { ICasoDeUsoFavoritas } from '../../domain/ports/in/ICasoDeUsoFavoritas';
export declare class CasoDeUsoFavoritas implements ICasoDeUsoFavoritas {
    private repositorio;
    constructor(repositorio: IRepositorioFavoritas);
    agregar(usuarioId: number, peliculaId: number): Promise<void>;
    eliminar(usuarioId: number, peliculaId: number): Promise<void>;
    obtenerFavoritas(usuarioId: number): Promise<Pelicula[]>;
    esFavorita(usuarioId: number, peliculaId: number): Promise<boolean>;
}
//# sourceMappingURL=CasoDeUsoFavoritas.d.ts.map