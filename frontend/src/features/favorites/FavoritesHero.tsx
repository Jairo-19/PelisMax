import './FavoritesHero.css'
import PalomitasYCarrete from '../../assets/imagenes/PalomitasYCarrete.jpg'

export default function FavoritesHero() {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      <img
        src={PalomitasYCarrete}
        alt="Mis Favoritas"
        className="favorites-hero-img w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="favorites-title text-4xl font-bold text-white tracking-wide drop-shadow-lg">
          Mis Películas <span className="text-[#E50914]">Favoritas</span>
        </h1>
      </div>
    </div>
  )
}
