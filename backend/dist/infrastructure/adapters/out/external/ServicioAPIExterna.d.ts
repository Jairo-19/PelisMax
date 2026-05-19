import { Pelicula } from "../../../../domain/entities/peliculas";
import { IServicioAPIExterna } from "../../../../domain/ports/out/IServicioAPIExterna";
export declare class ServicioAPIExterna implements IServicioAPIExterna {
    private readonly URL_API;
    obtenerPeliculas(): Promise<Pelicula[]>;
    private mapearAPIAlModelo;
}
//# sourceMappingURL=ServicioAPIExterna.d.ts.map