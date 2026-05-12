interface FeatureCardProps {
  image: string
  label: string
  title: string
  description: string
}

export default function FeatureCard({ image, label, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-6">
      {/* Imagen */}
      <div className="w-full h-52 mb-6 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
        {image
          ? <img src={image} alt={title} className="w-full h-full object-cover" />
          : <i className="bi bi-image text-4xl text-gray-600"></i>
        }
      </div>

      {/* Label */}
      <p className="text-[#E50914] text-xs font-bold tracking-widest uppercase mb-3">
        {label}
      </p>

      {/* Título */}
      <h3 className="text-white text-xl font-bold mb-4">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
