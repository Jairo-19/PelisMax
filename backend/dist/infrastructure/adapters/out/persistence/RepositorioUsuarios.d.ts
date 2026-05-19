import { Usuario } from '../../../../domain/entities/usuario';
import { IRepositorioUsuarios } from '../../../../domain/ports/out/IRepositorioUsuarios';
export declare class RepositorioUsuarios implements IRepositorioUsuarios {
    guardar(usuario: Usuario): Promise<Usuario>;
    buscarPorEmail(email: string): Promise<Usuario | null>;
    buscarPorId(id: number): Promise<Usuario | null>;
    private mapearRowAUsuario;
}
//# sourceMappingURL=RepositorioUsuarios.d.ts.map