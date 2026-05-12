import './Home.css'
import cineImg from '../assets/imagenes/cine.jpg'

export default function Home() {
  return (
    <section
      className="hero relative h-screen w-full flex items-center justify-start"
      style={{ backgroundImage: `url(${cineImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* Título */}
      <div className="relative z-10 px-16 max-w-2xl">
        <h1 className="text-5xl font-extrabold leading-tight text-white animate-fade-in-up">
          Descubre el mejor{' '}
          <span style={{ color: '#E50914' }}>cine</span>{' '}
          en un solo lugar
        </h1>
      </div>
    </section>
  )
}
