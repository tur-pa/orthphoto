import Gallery from "./Gallery";
import { FaMagnifyingGlass, FaFacebookF, FaInstagram } from "react-icons/fa6";
import MenuButton from "./MenuButton";
import Button from "./Button";

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
              <a href="/discover">Przeglądaj</a>
              <a href="/">Prześlij zdjęcie</a>
              <MenuButton></MenuButton>
              {/* <a href="/" className="inline-flex items-center">
                <FaList></FaList>
              </a> */}
              <a href="/">Dołącz</a>
            </nav>
          </div>

          {/* SEARCH */}
          <div
            id="search"
            className="flex justify-center items-center w-full max-w-[630px] h-[50vh] absolute top-0"
          >
            <div className="basis-3/6">
              <h1 className="font-semibold text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h1>

              <form>
                <div className="flex mt-4">
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
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(/background_image.jpg)` }}
          className="bg-cover bg-center bg-no-repeat min-h-[50vh] w-screen brightness-75 absolute top-0 -z-10"
        ></div>
      </section>
      <div className="flex justify-between container mx-auto my-9">
        <h2 className="font-semibold text-2xl">Najnowsze zdjęcia w serwisie</h2>
        <select className="font-medium text-lg inline-flex items-center justify-center border rounded-lg border-gray-300 p-2.5 cursor-pointer focus:border-gray-500">
          <option selected>Nowe</option>
          <option>Najwyżej oceniane</option>
          <option>Komentowane</option>
        </select>
      </div>
      <Gallery></Gallery>
      <div className="container mx-auto flex justify-around my-10">
        <Button>Załaduj więcej</Button>
      </div>

      {/* Footer */}
      <footer>
        <div className="w-full px-4 container mx-auto py-8">
          <div className="flex justify-between">
            <a href="/">
              <span className="text-2xl font-semibold whitespace-nowrap">
                Orthphoto
              </span>
            </a>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase">
                  Zdjęcia
                </h2>
                <ul className="text-gray-500 font-medium [&>*:not(:last-child)]:mb-4">
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      Przeglądaj
                    </a>
                  </li>
                  <li>
                    <a
                      href="#search"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      Wyszukaj
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Społeczność
                </h2>
                <ul className="text-gray-500 font-medium [&>*:not(:last-child)]:mb-4">
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      Zaloguj się
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      Dołącz
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      Autorzy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Orthphoto
                </h2>
                <ul className="text-gray-500 font-medium [&>*:not(:last-child)]:mb-4">
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      O nas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      Wsparcie
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-900 transition-all duration-300"
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-300"></hr>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 text-center">
              © 2024&nbsp;
              <a href="https://orthphoto.net/" class="hover:text-gray-700">
                Orthphoto
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex">
              <a
                href="/"
                className="text-gray-500 hover:text-gray-600 ransition-all duration-300 mx-2"
              >
                <FaFacebookF />
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="/">
                <FaInstagram className="text-gray-500 hover:text-gray-600 ransition-all duration-200 mx-2" />
                <span class="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
