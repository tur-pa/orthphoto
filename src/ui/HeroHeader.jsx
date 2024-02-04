import SearchForm from "./SearchForm";
function HeroHeader() {
  return (
    <div
      id="search"
      className="absolute top-0 flex h-[50vh] w-full max-w-[630px] items-center justify-center"
    >
      <div className="basis-3/6">
        <h1 className="text-2xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
        <SearchForm></SearchForm>
      </div>
    </div>
  );
}

export default HeroHeader;
