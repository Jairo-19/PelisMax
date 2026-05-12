export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#101010] border-t border-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">

        {/* Logo */}
        <div>
          <img src="/LogoPelisMax.png" alt="PelisMax" className="w-32 h-auto" />
        </div>

        {/* Enlaces */}
        <div>
          <nav>
            <ul className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#E50914] transition">Inicio</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition">Películas</a></li>
              <li><a href="#" className="hover:text-[#E50914] transition">Mi Lista</a></li>
            </ul>
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook"
             className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
            <i className="bi bi-facebook text-lg"></i>
          </a>
          <a href="#" aria-label="Instagram"
             className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
            <i className="bi bi-instagram text-lg"></i>
          </a>
          <a href="#" aria-label="X (Twitter)"
             className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
            <i className="bi bi-twitter-x text-lg"></i>
          </a>
          <a href="#" aria-label="YouTube"
             className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
            <i className="bi bi-youtube text-lg"></i>
          </a>
        </div>

      </div>

      {/* Copyright */}
      <p className="text-center text-gray-600 text-xs mt-8">
        © {currentYear} PelisMax. Todos los derechos reservados.
      </p>
    </footer>
  )
}
