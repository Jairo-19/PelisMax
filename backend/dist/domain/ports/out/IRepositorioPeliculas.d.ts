import { Pelicula } from "../../entities/peliculas";
export interface IRepositorioPeliculas {
    obtenerPeliculas(): Promise<Pelicula[]>;
    obtenerPeliculasPaginadas(pagina: number, limite: number): Promise<Pelicula[]>;
    obtenerPeliculaPorId(id: number): Promise<Pelicula | null>;
    obtenerPorIdExterno(idExterno: string): Promise<Pelicula | null>;
    agregarPelicula(pelicula: Pelicula): Promise<Pelicula>;
    actualizarPelicula(pelicula: Pelicula): Promise<Pelicula>;
    eliminarPelicula(id: number): Promise<void>;
}
//# sourceMappingURL=IRepositorioPeliculas.d.ts.map