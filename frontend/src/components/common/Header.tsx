export default function Header() {
  return (
    <header className="bg-[#101010] border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo con enlace */}
        <a href="/">
          <img src="/LogoPelisMax.png" alt="PelisMax" className="w-28 h-auto" />
        </a>

        {/* Nav */}
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex gap-6 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#E50914] transition-colors duration-200">Inicio</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition-colors duration-200">Películas</a></li>
            </ul>
          </nav>

          <a href="#" aria-label="Perfil">
            <i className="bi bi-person text-xl text-gray-300 hover:text-[#E50914] transition-colors duration-200"></i>
          </a>
        </div>

      </div>
    </header>
  )
}
