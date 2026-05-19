interface FilterComponentsProps {
  categorias: string[]
  onCategoria: (categoria: string) => void
}

export const FilterComponents = ({ categorias, onCategoria }: FilterComponentsProps) => {
  return (
    <div className="flex items-center gap-2 bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.07)] rounded-lg px-[.9rem] py-[.45rem]">
      <i className="bi bi-funnel text-white"></i>
      <select
        onChange={e => onCategoria(e.target.value)}
        className="bg-transparent border-0 outline-none text-[.82rem] text-white cursor-pointer"
      >
        <option value="" className="bg-[#1a1a1a]">Todas</option>
        {categorias.map(cat => (
          <option key={cat} value={cat} className="bg-[#1a1a1a]">{cat}</option>
        ))}
      </select>
    </div>
  );
}