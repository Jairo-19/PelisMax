import { API_BASE_URL } from '../config/api'
import type { Pelicula } from './peliculasService'

function getAuthHeaders(): HeadersInit {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export async function obtenerFavoritas(): Promise<Pelicula[]> {
  const response = await fetch(`${API_BASE_URL}/favoritas`, {
    headers: getAuthHeaders(),
  })
  if (!response.ok) throw new Error('Error al obtener favoritas')
  return response.json()
}

export async function agregarFavorita(peliculaId: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/favoritas/${peliculaId}`, {
    method: 'POST',
    headers: getAuthHeaders(),
  })
  if (!response.ok) throw new Error('Error al añadir favorita')
}

export async function eliminarFavorita(peliculaId: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/favoritas/${peliculaId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  })
  if (!response.ok) throw new Error('Error al eliminar favorita')
}
