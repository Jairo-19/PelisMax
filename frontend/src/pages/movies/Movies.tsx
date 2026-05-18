import MovieGrid from '../../features/movies/MovieGrid'

export default function Movies() {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <div className="max-w-7xl mx-auto pt-8 pb-16">
        <h1 className="text-3xl font-bold px-6 mb-6">Películas</h1>
        <MovieGrid />
      </div>
    </div>
  )
}
