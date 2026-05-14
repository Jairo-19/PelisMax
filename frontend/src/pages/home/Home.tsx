import HeroSection from '../../features/movies/HeroSection'
import FeaturesSection from '../../features/movies/FeaturesSection'
import MovieCarousel from '../../features/movies/MovieCarousel'
import TopByGenre from '../../features/movies/TopByGenre'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MovieCarousel />
      <TopByGenre genero="Action" titulo="Las mejores películas de" />
      <TopByGenre genero="Crime" titulo="Las mejores películas de" />
      <TopByGenre genero="Drama" titulo="Las mejores películas de" />
    </>
  )
}
