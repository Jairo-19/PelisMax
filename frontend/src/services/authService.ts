const API_BASE_URL = 'http://localhost:3000/api'

export interface UsuarioPublico {
  id: number
  nombre: string
  email: string
  creadoAt: string
}

export interface RespuestaLogin {
  token: string
  usuario: UsuarioPublico
}

export async function registrar(
  nombre: string,
  email: string,
  password: string
): Promise<UsuarioPublico> {
  const response = await fetch(`${API_BASE_URL}/auth/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Error al registrar el usuario')
  }

  return data.usuario
}

export async function login(
  email: string,
  password: string
): Promise<RespuestaLogin> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Error al iniciar sesión')
  }

  return data
}
