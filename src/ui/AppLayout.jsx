import Gallery from "./Gallery";
import { FaList, FaMagnifyingGlass } from "react-icons/fa6";

function AppLayout() {
  return (
    <div>
      <section className="text-white min-h-[50vh]">
        <div className="flex flex-col items-center">
          {/* NAVBAR */}
          <div className="container mx-auto mt-4 flex justify-between ">
            {/* LOGO */}
            <div>
              <img src="/op-wide.png" alt="" />
            </div>
            {/* NAVBAR */}
            <nav className="font-semibold flex justify-between gap-4 self-center">
              <a>Przeglądaj</a>
              <a>Prześlij zdjęcie</a>
              <a>
                <FaList></FaList>
              </a>
              <a>Dołącz</a>
            </nav>
          </div>

          {/* SEARCH */}
          <div className="flex justify-center items-center w-full max-w-[630px] h-[50vh] absolute top-0">
            <div className="basis-3/6">
              <h1 className="font-semibold text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h1>

              <form>
                <div className="flex mt-4">
                  <select className="items-center py-2.5 px-1 text-sm font-medium text-center text-gray-900 bg-gray-50 border border-gray-300 rounded-s-lg">
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
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(/background_image.jpg)` }}
          className="bg-cover bg-center bg-no-repeat min-h-[50vh] w-screen brightness-75 absolute top-0 -z-10"
        ></div>
      </section>

      <Gallery></Gallery>
    </div>
  );
}

export default AppLayout;
