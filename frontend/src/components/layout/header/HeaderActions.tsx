import { useState, useEffect } from 'react'
import UserDropdown from '../../../features/auth/UserDropdown'

export default function HeaderActions() {
  const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem('token'))

  useEffect(() => {
    const handleAuth = () => setLoggedIn(!!localStorage.getItem('token'))
    window.addEventListener('authChange', handleAuth)
    return () => window.removeEventListener('authChange', handleAuth)
  }, [])

  if (loggedIn) {
    return <UserDropdown />
  }

  return (
    <div className="flex items-center gap-4">
      <a
        href="/go/login"
        className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium"
      >
        Iniciar Sesión
      </a>
      <a
        href="/go/register"
        className="bg-[#E50914] hover:bg-[#ff1a26] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Registrarse
      </a>
    </div>
  )
}
