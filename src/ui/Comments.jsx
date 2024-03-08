import { FaRegComment } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";

function Comments() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <section className="py-4 lg:py-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 lg:text-2xl">
              Dyskusja
            </h2>
          </div>
          <form className="mb-6">
            <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2">
              <label for="comment" className="sr-only">
                Twój komentarz
              </label>
              <textarea
                id="comment"
                className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
                placeholder="Napisz komentarz..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="focus:ring-primary-200 hover:bg-primary-800 inline-flex items-center rounded-lg bg-gray-700 px-4 py-2.5 text-center text-xs font-medium text-white"
            >
              Skomentuj
            </button>
          </form>
          <article className="rounded-lg bg-white p-2 text-base">
            <footer className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900">
                  <img
                    className="mr-2 h-6 w-6 rounded-full"
                    alt="Lorem Venus"
                    src="https://images.pexels.com/photos/20229450/pexels-photo-20229450/free-photo-of-a-woman-standing-on-the-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  ></img>
                  Lorem Venus
                </p>
                <p className="text-sm text-gray-600">03.12.2020</p>
              </div>
              <button
                className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100"
                type="button"
              >
                <FaEllipsis />
                <span className="sr-only">Ustawienia komentarza</span>
              </button>
              {
                <div
                  id="dropdownComment1"
                  class="z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              }
            </footer>
            <p className=" text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              alias libero impedit veritatis omnis, vel ea ad sunt provident
              fuga earum eaque iusto reiciendis voluptatem dolorum, nesciunt
              fugiat fugit eveniet?
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <FaRegComment />
              <button className="text-sm font-medium text-gray-500  hover:underline">
                Odpowiedz
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Comments;
