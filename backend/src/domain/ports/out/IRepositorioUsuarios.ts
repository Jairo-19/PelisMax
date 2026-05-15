import { Usuario } from '../../entities/usuario';

export interface IRepositorioUsuarios {
    guardar(usuario: Usuario): Promise<Usuario>;
    buscarPorEmail(email: string): Promise<Usuario | null>;
    buscarPorId(id: number): Promise<Usuario | null>;
}
