import { useState, useEffect } from 'react'
import { obtenerPeliculas, type Pelicula } from '../../services/peliculasService'
import TopMovieCard from './TopMovieCard'

interface TopByGenreProps {
  genero: string
  titulo: string
}

export default function TopByGenre({ genero }: TopByGenreProps) {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    obtenerPeliculas()
      .then(data => {
        const filtradas = data
          .filter(p => p.genero && p.genero.toLowerCase() === genero.toLowerCase())
          .slice(0, 3)
        setPeliculas(filtradas)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [genero])

  if (loading) return null
  if (peliculas.length === 0) return null

  return (
    <section className="bg-[#101010] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10">
          Las mejores películas de <span className="text-[#E50914]">{genero}</span>
        </h2>

        <div className="flex">
          {peliculas.map((pelicula, index) => (
            <TopMovieCard key={pelicula.id} pelicula={pelicula} posicion={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
