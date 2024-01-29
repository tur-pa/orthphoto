import { FaList } from "react-icons/fa6";

function Menu() {
  return (
    <div className="flex gap-x-5">
      <button>Przeglądaj</button>
      <button>Prześlij zdjęcie</button>
      <button>
        <FaList></FaList>
      </button>
      <button>Dołącz</button>
    </div>
  );
}

export default Menu;
