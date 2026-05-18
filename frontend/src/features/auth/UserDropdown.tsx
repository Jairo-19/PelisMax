import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { UsuarioPublico } from '../../services/authService'

export default function UserDropdown() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [usuario, setUsuario] = useState<UsuarioPublico | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const raw = localStorage.getItem('usuario')
    if (raw) setUsuario(JSON.parse(raw))
  }, [])

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    window.dispatchEvent(new Event('authChange'))
    navigate('/')
  }

  if (!usuario) return null

  const fechaFormateada = new Date(usuario.creadoAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="text-[#E50914] hover:text-[#ff1a26] transition-colors duration-200"
        title="Mi cuenta"
      >
        <i className="bi bi-person-circle text-2xl"></i>
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl shadow-black/60 overflow-hidden"
          style={{ minWidth: '420px' }}
        >
          {/* Sección info — formato apaisado */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-800">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center">
              <i className="bi bi-person-fill text-[#E50914] text-xl"></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm truncate">{usuario.nombre}</p>
              <p className="text-gray-400 text-xs truncate">{usuario.email}</p>
              <p className="text-gray-600 text-xs mt-0.5">Miembro desde {fechaFormateada}</p>
            </div>
          </div>

          {/* Acciones — lista vertical */}
          <div className="flex flex-col">
            <button
              onClick={() => { setOpen(false); navigate('/perfil') }}
              className="flex items-center gap-3 px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 border-b border-gray-800"
            >
              <i className="bi bi-person text-base w-4"></i>
              Mi perfil
            </button>
            <button
              onClick={cerrarSesion}
              className="flex items-center gap-3 px-5 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-colors duration-200"
            >
              <i className="bi bi-box-arrow-right text-base w-4"></i>
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
