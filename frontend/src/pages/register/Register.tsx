import RegisterForm from '../../features/auth/RegisterForm'
import Logo from '../../components/ui/Logo'
import AuthImagePanel from '../../features/auth/AuthImagePanel'

export default function Register() {
  return (
    <div className="min-h-screen bg-[#101010] flex overflow-hidden">
      <AuthImagePanel
        quote='"El cine comienza con un sueño y termina con una ovación"'
        author="— PelisMax"
      />

      <div className="flex-1 flex items-center justify-center px-6 py-12 relative">
        <div className="absolute top-6 right-6">
          <Logo size="w-20" />
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E50914] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E50914] opacity-[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="w-full max-w-md animate-[fadeIn_0.6s_ease-out]">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
