export default function FooterSocial() {
  return (
    <div className="flex gap-3">
      <a href="#" aria-label="Facebook"
         className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
        <i className="bi bi-facebook text-lg"></i>
      </a>
      <a href="#" aria-label="Instagram"
         className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
        <i className="bi bi-instagram text-lg"></i>
      </a>
      <a href="#" aria-label="X (Twitter)"
         className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
        <i className="bi bi-twitter-x text-lg"></i>
      </a>
      <a href="#" aria-label="YouTube"
         className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-300">
        <i className="bi bi-youtube text-lg"></i>
      </a>
    </div>
  )
}
