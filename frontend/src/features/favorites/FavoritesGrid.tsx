import { useState, useEffect } from 'react'
import type { Pelicula } from '../../services/peliculasService'
import { obtenerFavoritas, eliminarFavorita } from '../../services/favoritasService'
import BookmarkButton from '../movies/BookmarkButton'
import MovieModal from '../movies/MovieModal'

export default function FavoritesGrid() {
  const [favoritas, setFavoritas] = useState<Pelicula[]>([])
  const [cargando, setCargando] = useState(true)
  const [seleccionada, setSeleccionada] = useState<Pelicula | null>(null)

  useEffect(() => {
    obtenerFavoritas()
      .then(setFavoritas)
      .catch((err) => console.error('Error al cargar favoritas:', err))
      .finally(() => setCargando(false))
  }, [])

  const quitarFavorita = async (id: number) => {
    try {
      await eliminarFavorita(id)
      setFavoritas(prev => prev.filter(p => p.id !== id))
    } catch {}
  }

  if (cargando) {
    return (
      <div className="flex justify-center py-20">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-[#E50914] rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-[#E50914] rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-[#E50914] rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    )
  }

  if (favoritas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <i className="bi bi-bookmark-heart text-5xl mb-4"></i>
        <p className="text-lg">Aún no tienes películas favoritas</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoritas.map(pelicula => (
          <div
            key={pelicula.id}
            className="relative group cursor-pointer overflow-hidden rounded-md aspect-[2/3] bg-gray-900"
            onClick={() => setSeleccionada(pelicula)}
          >
            <img
              src={pelicula.imagen}
              alt={pelicula.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 left-2 z-10">
              <BookmarkButton
                guardado={true}
                onChange={g => !g && quitarFavorita(pelicula.id)}
              />
            </div>
            <div className="absolute top-2 right-2 bg-[#E50914] text-white text-xs font-semibold px-2 py-1 rounded-full">
              {pelicula.genero}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <p className="text-white text-sm font-medium leading-tight line-clamp-2">
                {pelicula.titulo}
              </p>
            </div>
          </div>
        ))}
      </div>
      {seleccionada && (
        <MovieModal
          pelicula={seleccionada}
          onCerrar={() => setSeleccionada(null)}
          guardado={true}
          onToggleFavorito={g => !g && quitarFavorita(seleccionada.id)}
        />
      )}
    </>
  )
}
