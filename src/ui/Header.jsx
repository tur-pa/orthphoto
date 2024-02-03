import { FaMagnifyingGlass } from "react-icons/fa6";
import MenuButton from "./MenuButton";

function Header() {
  return (
    <>
      <header className="container mx-auto flex justify-between items-center mt-6">
        {/* LOGO */}
        <h1 className="text-2xl font-semibold">Orthphoto</h1>

        {/* SEARCH */}
        <form className="w-full mx-4">
          <div className="flex">
            <select className="py-2.5 px-1 text-sm font-medium text-center text-gray-900 bg-gray-50 border border-gray-300 rounded-s-lg">
              <option selected className="">
                Odkrywaj
              </option>
              <option>Autor</option>
            </select>
            <input
              type="search"
              placeholder="Wyszukaj..."
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300"
            ></input>
            <button className="px-2.5">
              <FaMagnifyingGlass />
            </button>
          </div>
        </form>
        {/* NAV */}
        <nav className="font-semibold flex justify-between gap-4 self-center text-nowrap">
          <a href="/">Przeglądaj</a>
          <a href="/">Prześlij zdjęcie</a>
          <MenuButton></MenuButton>
          <a href="/">Dołącz</a>
        </nav>
      </header>
      <hr className="border-gray-300 my-8"></hr>
    </>
  );
}

export default Header;
