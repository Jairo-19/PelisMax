import { useState } from 'react'

interface LoginFormProps {
  onSuccess?: () => void
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSuccess?.()
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          Bienvenido
        </h1>
        <p className="text-gray-400 text-sm">
          Inicia sesión para continuar
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Correo electrónico
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-[#E50914] transition-colors duration-300">
              <i className="bi bi-envelope text-lg"></i>
            </span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full bg-[#1a1a1a] text-white pl-12 pr-4 py-3.5 rounded-xl border border-gray-800 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20 outline-none transition-all duration-300 placeholder:text-gray-600"
              required
            />
          </div>
        </div>

        <div className="relative group">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Contraseña
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-[#E50914] transition-colors duration-300">
              <i className="bi bi-lock text-lg"></i>
            </span>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#1a1a1a] text-white pl-12 pr-12 py-3.5 rounded-xl border border-gray-800 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20 outline-none transition-all duration-300 placeholder:text-gray-600"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-[#E50914] transition-colors duration-300"
            >
              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-lg`}></i>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-gray-300 transition-colors duration-200">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-700 bg-[#1a1a1a] text-[#E50914] focus:ring-[#E50914]/30 focus:ring-offset-0 cursor-pointer accent-[#E50914]"
            />
            Recordarme
          </label>
          <a href="#" className="text-[#E50914] hover:text-[#ff1a26] transition-colors duration-200 font-medium">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E50914] hover:bg-[#ff1a26] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#E50914]/25 hover:shadow-[#E50914]/40"
        >
          Iniciar Sesión
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-8">
        ¿No tienes cuenta?{' '}
        <a href="#" className="text-[#E50914] hover:text-[#ff1a26] transition-colors duration-200 font-medium">
          Regístrate
        </a>
      </p>
    </div>
  )
}
