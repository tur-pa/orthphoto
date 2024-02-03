import { useState } from "react";
import { FaList, FaFacebookF, FaInstagram } from "react-icons/fa6";

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <FaList></FaList>
      </button>

      {isOpen && (
        <div className="bg-white drop-shadow-md absolute top-8 rounded-lg py-3 px-5 w-[140px]">
          <ul className="text-gray-500  cursor-pointer">
            <li className="hover:text-gray-900 transition-all">Zaloguj się</li>
            <li className="hover:text-gray-900 transition-all">Dołącz</li>
            <li className="hover:text-gray-900 transition-all">Zmień język</li>
            <hr className="border-gray-300 my-3"></hr>
            <li className="hover:text-gray-900 transition-all">Warunki</li>
            <li className="hover:text-gray-900 transition-all">Kontakt</li>
            <hr className="border-gray-300 my-3"></hr>
            <ul className="flex justify-center">
              <li className="pr-5 hover:text-gray-900 transition-all">
                <FaFacebookF />
              </li>
              <li className="hover:text-gray-900 transition-all">
                <FaInstagram />
              </li>
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
