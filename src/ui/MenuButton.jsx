import { useState } from "react";
import { FaList, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { logout } from "../services/apiAuth";
import { useUser } from "../features/users/useUser";
import { useLogout } from "../features/users/useLogout";
import Spinner from "./Spinner";

const styledDropMenu = `absolute top-8 w-[140px] rounded-lg bg-white px-5 py-3 drop-shadow-md`;
const styledMenuIcon = `relative inline-flex items-center`;
const styledMenuItems = `cursor-pointer text-gray-700 hover:*:text-gray-900 hover:*:transition-all`;
const styledDivideLine = `my-3 border-gray-300`;
const styledSocialContainer = `flex justify-center`;
const styledSocialIcons = `cursor-pointer px-2 text-gray-700 transition-all hover:text-gray-900`;

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useUser();
  const { logout } = useLogout();
  return (
    <div className={styledMenuIcon}>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <FaList></FaList>
      </button>

      {isOpen && (
        <div className={styledDropMenu}>
          <ul className={styledMenuItems}>
            <li>
              {isAuthenticated ? (
                <button onClick={logout}>Wyloguj się</button>
              ) : (
                <a href="/login">Zaloguj się </a>
              )}
            </li>
            <li>Dołącz</li>
            <li>Zmień język</li>
            <hr className={styledDivideLine}></hr>
            <li>Warunki</li>
            <li>Kontakt</li>
          </ul>
          <hr className={styledDivideLine}></hr>
          <ul className={styledSocialContainer}>
            <li className={styledSocialIcons}>
              <FaFacebookF />
            </li>
            <li className={styledSocialIcons}>
              <FaInstagram />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
