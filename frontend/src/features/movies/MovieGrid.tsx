import { useEffect, useRef, useState } from 'react'
import { type Pelicula, obtenerPeliculasPaginadas } from '../../services/peliculasService'
import MovieModal from './MovieModal'
import BookmarkButton from './BookmarkButton'

interface MovieGridProps {
  busqueda?: string
  categoria?: string
  onCategorias?: (cats: string[]) => void
}

export default function MovieGrid({ busqueda = '', categoria = '', onCategorias }: MovieGridProps) {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([])
  const [pagina, setPagina] = useState(1)
  const [cargando, setCargando] = useState(false)
  const [hayMas, setHayMas] = useState(true)
  const [seleccionada, setSeleccionada] = useState<Pelicula | null>(null)
  const cargandoRef = useRef(false)
  const hayMasRef = useRef(true)
  const centinela = useRef<HTMLDivElement>(null)

  // Dispara fetch cada vez que `pagina` cambia
  useEffect(() => {
    const fetchPagina = async () => {
      if (cargandoRef.current || !hayMasRef.current) return
      cargandoRef.current = true
      setCargando(true)
      try {
        const nuevas = await obtenerPeliculasPaginadas(pagina, 16)
        if (nuevas.length < 16) {
          hayMasRef.current = false
          setHayMas(false)
        }
        setPeliculas(prev => [...prev, ...nuevas])
      } catch {
        hayMasRef.current = false
        setHayMas(false)
      } finally {
        cargandoRef.current = false
        setCargando(false)
      }
    }
    fetchPagina()
  }, [pagina])

  // IntersectionObserver solo incrementa pagina (no llama fetch directamente)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !cargandoRef.current && hayMasRef.current) {
          setPagina(prev => prev + 1)
        }
      },
      { threshold: 0.1 }
    )
    if (centinela.current) observer.observe(centinela.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (onCategorias && peliculas.length > 0) {
      const unicas = [...new Set(peliculas.map(p => p.genero))].sort()
      onCategorias(unicas)
    }
  }, [peliculas])

  const peliculasFiltradas = peliculas.filter(p => {
    const coincideBusqueda = !busqueda.trim() || p.titulo.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = !categoria || p.genero === categoria
    return coincideBusqueda && coincideCategoria
  })

  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {peliculasFiltradas.map(pelicula => (
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
              <BookmarkButton />
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

      {/* Centinela para infinite scroll */}
      <div ref={centinela} className="h-10 mt-6 flex items-center justify-center">
        {cargando && (
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-[#E50914] rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-[#E50914] rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-[#E50914] rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
        )}
        {!hayMas && peliculas.length > 0 && (
          <p className="text-gray-500 text-sm">No hay más películas</p>
        )}
      </div>

      {seleccionada && (
        <MovieModal pelicula={seleccionada} onCerrar={() => setSeleccionada(null)} />
      )}
    </div>
  )
}
