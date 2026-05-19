import { Usuario } from '../../domain/entities/usuario';
import { IRepositorioUsuarios } from '../../domain/ports/out/IRepositorioUsuarios';
import { ICasoDeUsoAuth } from '../../domain/ports/in/ICasoDeUsoAuth';
export declare class CasoDeUsoAuth implements ICasoDeUsoAuth {
    private repositorio;
    constructor(repositorio: IRepositorioUsuarios);
    registrar(nombre: string, email: string, password: string): Promise<ReturnType<Usuario['toPublic']>>;
    login(email: string, password: string): Promise<{
        token: string;
        usuario: ReturnType<Usuario['toPublic']>;
    }>;
}
//# sourceMappingURL=CasoDeUsoAuth.d.ts.map