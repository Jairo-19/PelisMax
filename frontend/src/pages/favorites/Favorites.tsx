import FavoritesHero from '../../features/favorites/FavoritesHero'
import FavoritesGrid from '../../features/favorites/FavoritesGrid'

export default function Favorites() {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <div className="max-w-7xl mx-auto pt-8 pb-16 px-6">
        <FavoritesHero />
        <hr className="border-gray-800 my-8" />
        <FavoritesGrid />
      </div>
    </div>
  )
}
