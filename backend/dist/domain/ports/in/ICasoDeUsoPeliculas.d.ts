import { Pelicula } from "../../entities/peliculas";
export interface ICasoDeUsoPeliculas {
    obtenerPeliculas(): Promise<Pelicula[]>;
    obtenerPeliculasPaginadas(pagina: number, limite: number): Promise<Pelicula[]>;
    obtenerPeliculaPorId(id: number): Promise<Pelicula | null>;
    agregarPelicula(pelicula: Pelicula): Promise<Pelicula>;
    actualizarPelicula(pelicula: Pelicula): Promise<Pelicula>;
    eliminarPelicula(id: number): Promise<void>;
    importarPeliculas(): Promise<{
        importadas: Pelicula[];
        omitidas: number;
    }>;
}
//# sourceMappingURL=ICasoDeUsoPeliculas.d.ts.map