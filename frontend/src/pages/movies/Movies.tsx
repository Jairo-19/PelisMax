import MovieGrid from '../../features/movies/MovieGrid'
import { SearchComponent } from '../../components/ui/SearchComponent'
import { FilterComponents } from '../../components/ui/FilterComponents'

export default function Movies() {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <div className="max-w-7xl mx-auto pt-8 pb-16">
        <div className="flex justify-between items-center px-6 mb-6">
          <h1 className="text-3xl font-bold">Películas</h1>
          <div className="flex items-center gap-4">
            <FilterComponents />
            <SearchComponent />
          </div>
        </div>
        <MovieGrid />
      </div>
    </div>
  )
}
