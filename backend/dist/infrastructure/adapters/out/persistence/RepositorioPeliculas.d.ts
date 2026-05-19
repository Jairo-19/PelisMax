import { Pelicula } from '../../../../domain/entities/peliculas';
import { IRepositorioPeliculas } from '../../../../domain/ports/out/IRepositorioPeliculas';
export declare class RepositorioPeliculas implements IRepositorioPeliculas {
    obtenerPeliculas(): Promise<Pelicula[]>;
    obtenerPeliculasPaginadas(pagina: number, limite: number): Promise<Pelicula[]>;
    obtenerPeliculaPorId(id: number): Promise<Pelicula | null>;
    obtenerPorIdExterno(idExterno: string): Promise<Pelicula | null>;
    agregarPelicula(pelicula: Pelicula): Promise<Pelicula>;
    actualizarPelicula(pelicula: Pelicula): Promise<Pelicula>;
    eliminarPelicula(id: number): Promise<void>;
    private mapearRowAPelicula;
}
//# sourceMappingURL=RepositorioPeliculas.d.ts.map