import { FaMagnifyingGlass } from "react-icons/fa6";
import Button from "./Button";

const base = `flex w-full`;
const styles = {
  marginY: base + ` my-5`,
  marginX: base + ` mx-5`,
};
const styledSelect = `rounded-s-lg border border-gray-300 bg-gray-50 px-1 py-2.5 text-center text-sm font-medium text-gray-900`;
const styledInput = `w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900`;

function SearchForm({ type = "marginY" }) {
  return (
    <form className={styles[type]}>
      <select className={styledSelect}>
        <option defaultValue="discover">Odkrywaj</option>
        <option>Autor</option>
      </select>
      <input
        type="search"
        placeholder="Wyszukaj..."
        className={styledInput}
      ></input>
      <Button type="iconBtn">
        <FaMagnifyingGlass />
      </Button>
    </form>
  );
}

export default SearchForm;
