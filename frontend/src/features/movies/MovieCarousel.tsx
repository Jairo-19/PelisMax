import { useState, useEffect } from 'react'
import { obtenerPeliculas, type Pelicula } from '../../services/peliculasService'
import './MovieCarousel.css'

export default function MovieCarousel() {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([])
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    obtenerPeliculas()
      .then(data => {
        const aleatorias = [...data].sort(() => Math.random() - 0.5).slice(0, 5)
        setPeliculas(aleatorias)
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (peliculas.length === 0) return
    const timer = setInterval(() => {
      setIndice(prev => (prev + 1) % peliculas.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [peliculas.length])

  if (peliculas.length === 0) return null

  const pelicula = peliculas[indice]

  return (
    <section className="bg-[#101010] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Nuestras <span className="text-[#E50914]">recomendaciones</span>
        </h2>

        <div className="flex rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '380px' }}>

          {/* Imagen — lado izquierdo */}
          <div className="relative w-2/5 flex-shrink-0">
            {peliculas.map((p, i) => (
              <img
                key={p.id}
                src={p.imagen}
                alt={p.titulo}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === indice ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Datos — lado derecho */}
          <div
            key={indice}
            className="relative flex flex-col justify-center bg-[#1a1a1a] px-10 py-8 w-3/5 carousel-fade-in"
          >
            {/* Burbujas género y año — esquina superior izquierda */}
            <div className="absolute top-5 left-6 flex gap-2 flex-wrap">
              <span className="bg-[#E50914] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {pelicula.genero ?? 'Sin género'}
              </span>
              <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {pelicula.anio}
              </span>
            </div>

            {/* Título */}
            <h2 className="text-2xl font-extrabold text-white mb-3 leading-snug">
              {pelicula.titulo}
            </h2>

            {/* Descripción */}
            <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-4">
              {pelicula.descripcion}
            </p>

            {/* Estrellas */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-xl ${i < Math.round(pelicula.estrellas) ? 'text-yellow-400' : 'text-gray-600'}`}
                >
                  ★
                </span>
              ))}
              <span className="text-gray-500 text-sm ml-2">{pelicula.estrellas}/5</span>
            </div>

            {/* Indicadores — centro inferior */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {peliculas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndice(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === indice ? 'w-6 bg-[#E50914]' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
