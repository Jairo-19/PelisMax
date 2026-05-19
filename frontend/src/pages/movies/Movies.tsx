import { useState } from 'react'
import MovieGrid from '../../features/movies/MovieGrid'
import { SearchComponent } from '../../components/ui/SearchComponent'
import { FilterComponents } from '../../components/ui/FilterComponents'

export default function Movies() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('')
  const [categorias, setCategorias] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <div className="max-w-7xl mx-auto pt-8 pb-16">
        <div className="flex justify-between items-center px-6 mb-6">
          <h1 className="text-3xl font-bold">Películas</h1>
          <div className="flex items-center gap-4">
            <FilterComponents categorias={categorias} onCategoria={setCategoria} />
            <SearchComponent onBusqueda={setBusqueda} />
          </div>
        </div>
        <MovieGrid busqueda={busqueda} categoria={categoria} onCategorias={setCategorias} />
      </div>
    </div>
  )
}
