import { Pelicula } from '../../domain/entities/peliculas';
import { IRepositorioFavoritas } from '../../domain/ports/out/IRepositorioFavoritas';
import { ICasoDeUsoFavoritas } from '../../domain/ports/in/ICasoDeUsoFavoritas';

export class CasoDeUsoFavoritas implements ICasoDeUsoFavoritas {
    private repositorio: IRepositorioFavoritas;

    constructor(repositorio: IRepositorioFavoritas) {
        this.repositorio = repositorio;
    }

    async agregar(usuarioId: number, peliculaId: number): Promise<void> {
        const yaExiste = await this.repositorio.esFavorita(usuarioId, peliculaId);
        if (!yaExiste) {
            await this.repositorio.agregar(usuarioId, peliculaId);
        }
    }

    async eliminar(usuarioId: number, peliculaId: number): Promise<void> {
        await this.repositorio.eliminar(usuarioId, peliculaId);
    }

    async obtenerFavoritas(usuarioId: number): Promise<Pelicula[]> {
        return this.repositorio.obtenerPorUsuario(usuarioId);
    }

    async esFavorita(usuarioId: number, peliculaId: number): Promise<boolean> {
        return this.repositorio.esFavorita(usuarioId, peliculaId);
    }
}
