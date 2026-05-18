import { API_BASE_URL } from '../config/api'

export interface Pelicula {
  id: number
  titulo: string
  descripcion: string
  imagen: string
  anio: number
  genero: string
  estrellas: number
  id_externo: string
}

export async function obtenerPeliculas(): Promise<Pelicula[]> {
  const response = await fetch(`${API_BASE_URL}/peliculas`)
  if (!response.ok) throw new Error('Error al obtener películas')
  return response.json()
}
