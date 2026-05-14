import { type Pelicula } from '../../services/peliculasService'

interface TopMovieCardProps {
  pelicula: Pelicula
  posicion: number
}

export default function TopMovieCard({ pelicula, posicion }: TopMovieCardProps) {
  return (
    <div className="flex-1 flex items-center group cursor-pointer">

      {/* Número grande */}
      <div
        className="w-24 flex-shrink-0 text-center font-black select-none pointer-events-none"
        style={{
          fontSize: '160px',
          lineHeight: '1',
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        {posicion}
      </div>

      {/* Card */}
      <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow">
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-3 left-3 right-3 z-20">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-[#E50914] text-white text-xs font-semibold px-2 py-1 rounded">
              {pelicula.genero}
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded">
              {pelicula.anio}
            </span>
          </div>
          <p className="text-white font-bold text-sm line-clamp-1">
            {pelicula.titulo}
          </p>
        </div>
      </div>

    </div>
  )
}
