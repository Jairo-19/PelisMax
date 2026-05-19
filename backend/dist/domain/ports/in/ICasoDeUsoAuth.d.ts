import { Usuario } from '../../entities/usuario';
export interface ICasoDeUsoAuth {
    registrar(nombre: string, email: string, password: string): Promise<ReturnType<Usuario['toPublic']>>;
    login(email: string, password: string): Promise<{
        token: string;
        usuario: ReturnType<Usuario['toPublic']>;
    }>;
}
//# sourceMappingURL=ICasoDeUsoAuth.d.ts.map