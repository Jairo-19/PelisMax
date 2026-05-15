interface AuthImagePanelProps {
  quote?: string
  author?: string
}

export default function AuthImagePanel({
  quote = '"El cine es un espejo pintado con sueños"',
  author = '— PelisMax',
}: AuthImagePanelProps) {
  return (
    <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/80 via-[#101010]/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/60 via-transparent to-[#101010]/20 z-10" />
      <img
        src="/src/assets/imagenes/Palomitas.webp"
        alt=""
        className="w-full h-full object-cover object-center scale-110 hover:scale-100 transition-transform duration-[8000ms] ease-out"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-12">
        <div />
        <div className="max-w-md">
          <p className="text-white/80 text-lg italic leading-relaxed">{quote}</p>
          <p className="text-[#E50914] font-medium mt-2 text-sm tracking-widest uppercase">
            {author}
          </p>
        </div>
      </div>
    </div>
  )
}
