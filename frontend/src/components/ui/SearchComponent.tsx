export const SearchComponent = () => {
  return (
    <div className="flex items-center gap-2 bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.07)] rounded-lg px-[.9rem] py-[.45rem]">
        <i className="bi bi-search"></i>
        <input type="text" id="search" placeholder="Buscar" className="bg-transparent border-0 outline-none text-[.82rem] text-white w-[180px] placeholder:text-[rgba(255,255,255,.32)]"/>
    </div>
  );
};
