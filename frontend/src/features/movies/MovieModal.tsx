import { useEffect } from 'react'
import { type Pelicula } from '../../services/peliculasService'
import BookmarkButton from './BookmarkButton'

interface Props {
  pelicula: Pelicula
  onCerrar: () => void
  guardado?: boolean
  onToggleFavorito?: (guardado: boolean) => void
}

function Estrellas({ valor }: { valor: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= valor ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function MovieModal({ pelicula, onCerrar, guardado = false, onToggleFavorito }: Props) {
  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onCerrar() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onCerrar])

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onCerrar}
    >
      <div
        className="relative bg-[#1a1a1a] rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onCerrar}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#E50914] transition-colors"
        >
          ✕
        </button>

        {/* Imagen */}
        <div className="md:w-72 w-full flex-shrink-0 relative">
          <img
            src={pelicula.imagen}
            alt={pelicula.titulo}
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute top-2 left-2">
            <BookmarkButton guardado={guardado} onChange={onToggleFavorito} />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4 p-6 overflow-y-auto">
          <div>
            <span className="bg-[#E50914] text-white text-xs font-semibold px-2 py-1 rounded-full">
              {pelicula.genero}
            </span>
          </div>

          <h2 className="text-white text-2xl font-bold leading-tight">
            {pelicula.titulo}
          </h2>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {pelicula.anio}
            </span>
            <Estrellas valor={pelicula.estrellas} />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {pelicula.descripcion}
          </p>
        </div>
      </div>
    </div>
  )
}
