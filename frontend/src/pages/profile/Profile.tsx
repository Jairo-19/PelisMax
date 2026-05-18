import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { UsuarioPublico } from '../../services/authService'

export default function Profile() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState<UsuarioPublico | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('usuario')
    if (!raw) {
      navigate('/go/login')
      return
    }
    setUsuario(JSON.parse(raw))
  }, [navigate])

  if (!usuario) return null

  const fechaFormateada = new Date(usuario.creadoAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-[#101010] px-8 py-12">
      <div className="max-w-5xl mx-auto h-full">
        <h1 className="text-3xl font-bold text-white mb-10">Mi perfil</h1>

        {/* Tarjeta apaisada — ocupa todo el ancho */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden">
          {/* Cabecera roja */}
          <div className="h-2 bg-[#E50914]" />

          <div className="flex items-center gap-10 px-12 py-12">
            {/* Avatar grande */}
            <div className="flex-shrink-0 w-36 h-36 rounded-full bg-[#E50914]/10 border-2 border-[#E50914]/40 flex items-center justify-center">
              <i className="bi bi-person-fill text-[#E50914] text-7xl"></i>
            </div>

            {/* Divider vertical */}
            <div className="w-px self-stretch bg-gray-800" />

            {/* Datos en lista apaisada */}
            <div className="flex-1 grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-base w-36 flex-shrink-0">Nombre</span>
                <span className="text-white text-xl font-semibold">{usuario.nombre}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-base w-36 flex-shrink-0">Correo</span>
                <span className="text-gray-300 text-lg">{usuario.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-base w-36 flex-shrink-0">Miembro desde</span>
                <span className="text-gray-400 text-base">{fechaFormateada}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
        >
          <i className="bi bi-arrow-left"></i>
          Volver
        </button>
      </div>
    </div>
  )
}
