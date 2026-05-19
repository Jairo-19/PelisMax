import { Pelicula } from "../../domain/entities/peliculas";
import { IRepositorioPeliculas } from "../../domain/ports/out/IRepositorioPeliculas";
import { IServicioAPIExterna } from "../../domain/ports/out/IServicioAPIExterna";
import { ICasoDeUsoPeliculas } from "../../domain/ports/in/ICasoDeUsoPeliculas";
export declare class CasoDeUsoPeliculas implements ICasoDeUsoPeliculas {
    private repositorio;
    private servicioAPIExterna;
    constructor(repositorio: IRepositorioPeliculas, servicioAPIExterna?: IServicioAPIExterna);
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
//# sourceMappingURL=CasoDeUsoPeliculas.d.ts.map