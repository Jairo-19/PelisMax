import { Request, Response } from 'express';
import { CasoDeUsoAuth } from '../../../../../application/use-cases/CasoDeUsoAuth';
import { EmailYaRegistrado, UsuarioNoEncontrado, CredencialesInvalidas } from '../../../../../domain/exceptions/UsuarioException';

export class ControladorAuth {
    private casoDeUso: CasoDeUsoAuth;

    constructor(casoDeUso: CasoDeUsoAuth) {
        this.casoDeUso = casoDeUso;
    }

    async registrar(req: Request, res: Response): Promise<void> {
        const { nombre, email, password } = req.body;

        if (!nombre || !email || !password) {
            res.status(400).json({ error: 'nombre, email y password son requeridos' });
            return;
        }

        try {
            const usuario = await this.casoDeUso.registrar(nombre, email, password);
            res.status(201).json({ mensaje: 'Usuario registrado correctamente', usuario });
        } catch (error) {
            if (error instanceof EmailYaRegistrado) {
                res.status(409).json({ error: (error as Error).message });
            } else {
                res.status(500).json({ error: 'Error al registrar el usuario' });
            }
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'email y password son requeridos' });
            return;
        }

        try {
            const resultado = await this.casoDeUso.login(email, password);
            res.json(resultado);
        } catch (error) {
            if (error instanceof UsuarioNoEncontrado || error instanceof CredencialesInvalidas) {
                res.status(401).json({ error: 'Correo o contraseña incorrectos' });
            } else {
                res.status(500).json({ error: 'Error al iniciar sesión' });
            }
        }
    }
}
