import FeatureCard from './FeatureCard'
import cantidadImg from '../../assets/imagenes/CantidadPeliculas.jpg'
import detectiveImg from '../../assets/imagenes/Detective.jpg'
import casaPapelImg from '../../assets/imagenes/LaCasaDePapel.png'

const features = [
  {
    image: cantidadImg,
    label: 'Todo en un mismo lugar',
    title: 'Tu guía completa de streaming',
    description:
      'Obtén recomendaciones personales para todas tus plataformas de streaming favoritas. Te mostraremos dónde ver películas, series de TV y deportes.',
  },
  {
    image: detectiveImg,
    label: 'Una búsqueda',
    title: 'Todas las plataformas en una única búsqueda',
    description:
      'Se acabó buscar y rebuscar entre las distintas plataformas de streaming para saber si una película o serie ya está disponible. Con una única búsqueda lo encuentras todo.',
  },
  {
    image: casaPapelImg,
    label: 'Una Watchlist',
    title: 'Combina todas tus listas en una',
    description:
      'Crea una única watchlist con todas las películas y series que quieras ver. Todas tus plataformas en una lista en todos tus dispositivos.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-[#101010] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}
