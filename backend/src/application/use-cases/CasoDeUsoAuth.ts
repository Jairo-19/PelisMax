import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Usuario } from '../../domain/entities/usuario';
import { IRepositorioUsuarios } from '../../domain/ports/out/IRepositorioUsuarios';
import { ICasoDeUsoAuth } from '../../domain/ports/in/ICasoDeUsoAuth';
import { EmailYaRegistrado, UsuarioNoEncontrado, CredencialesInvalidas } from '../../domain/exceptions/UsuarioException';

export class CasoDeUsoAuth implements ICasoDeUsoAuth {
    private repositorio: IRepositorioUsuarios;

    constructor(repositorio: IRepositorioUsuarios) {
        this.repositorio = repositorio;
    }

    async registrar(nombre: string, email: string, password: string): Promise<ReturnType<Usuario['toPublic']>> {
        const existente = await this.repositorio.buscarPorEmail(email);
        if (existente) {
            throw new EmailYaRegistrado(email);
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const nuevoUsuario = new Usuario(0, nombre, email, passwordHash);
        const guardado = await this.repositorio.guardar(nuevoUsuario);

        return guardado.toPublic();
    }

    async login(email: string, password: string): Promise<{ token: string; usuario: ReturnType<Usuario['toPublic']> }> {
        const usuario = await this.repositorio.buscarPorEmail(email);
        if (!usuario) {
            throw new UsuarioNoEncontrado(email);
        }

        const passwordValida = await bcrypt.compare(password, usuario.passwordHash);
        if (!passwordValida) {
            throw new CredencialesInvalidas();
        }

        const secret = process.env.JWT_SECRET as string;
        const expiresIn = (process.env.JWT_EXPIRES_IN || '7d') as string;
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            secret,
            { expiresIn } as jwt.SignOptions
        );

        return { token, usuario: usuario.toPublic() };
    }
}
