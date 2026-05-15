export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="/login"
        className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium"
      >
        Iniciar Sesión
      </a>
      <a
        href="/register"
        className="bg-[#E50914] hover:bg-[#ff1a26] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Registrarse
      </a>
    </div>
  )
}
