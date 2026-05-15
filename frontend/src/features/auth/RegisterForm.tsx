import { useState } from 'react'

interface RegisterFormProps {
  onSuccess?: () => void
}

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSuccess?.()
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          Crear cuenta
        </h1>
        <p className="text-gray-400 text-sm">
          Únete a PelisMax y disfruta el cine
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nombre completo
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-[#E50914] transition-colors duration-300">
              <i className="bi bi-person text-lg"></i>
            </span>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Tu nombre"
              className="w-full bg-[#1a1a1a] text-white pl-12 pr-4 py-3.5 rounded-xl border border-gray-800 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20 outline-none transition-all duration-300 placeholder:text-gray-600"
              required
            />
          </div>
        </div>

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

        <div className="relative group">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
            Confirmar contraseña
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-[#E50914] transition-colors duration-300">
              <i className="bi bi-lock-fill text-lg"></i>
            </span>
            <input
              id="confirmPassword"
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#1a1a1a] text-white pl-12 pr-12 py-3.5 rounded-xl border border-gray-800 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20 outline-none transition-all duration-300 placeholder:text-gray-600"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-[#E50914] transition-colors duration-300"
            >
              <i className={`bi ${showConfirm ? 'bi-eye-slash' : 'bi-eye'} text-lg`}></i>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E50914] hover:bg-[#ff1a26] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#E50914]/25 hover:shadow-[#E50914]/40"
        >
          Crear cuenta
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-8">
        ¿Ya tienes cuenta?{' '}
        <a href="/login" className="text-[#E50914] hover:text-[#ff1a26] transition-colors duration-200 font-medium">
          Inicia sesión
        </a>
      </p>
    </div>
  )
}
