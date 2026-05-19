export const FilterComponents = () => {
  return (
    <div className="flex items-center gap-4">  
      <div className="flex items-center gap-2 bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.07)] rounded-lg px-[.9rem] py-[.45rem]">
        <i className="bi bi-funnel"></i>
        <span className="text-[.82rem] text-white">Filtros</span>
      </div>
      <div className="flex items-center gap-2 bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.07)] rounded-lg px-[.9rem] py-[.45rem]">
        <i className="bi bi-sort-alpha-down"></i>
        <span className="text-[.82rem] text-white">Ordenar</span>
      </div>
    </div>
  );
}