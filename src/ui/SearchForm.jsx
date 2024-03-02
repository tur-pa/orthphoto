import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import Button from "./Button";
import { useDataContext } from "../context/DataContext";
import { useState } from "react";

const base = `flex w-full`;
const styles = {
  marginY: base + ` my-5`,
  marginX: base + ` mx-5`,
};
const styledSelect = `rounded-s-lg border border-gray-300 bg-gray-50 px-1 py-2.5 text-center text-sm font-medium text-gray-900`;
const styledInput = `search-cancel:appearance-none relative w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 `;
const styledInputContainer = `relative w-full`;
const clearButton = `absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer text-gray-400`;

function SearchForm({ type = "marginY" }) {
  const [searchText, setSearchText] = useState("");
  const { filter, setFilter, setSearchCategory, searchCategory } =
    useDataContext();

  function setCategory(e) {
    onReset();
    setSearchCategory(e.target.value);
  }

  function liveSearch(e) {
    setSearchText(e.target.value);
  }

  function onSubmit(e) {
    // FOR MULTI TAGS
    setSearchText(searchText.split(",").map((el) => el.trim()));
    console.log(searchText);
    // console.log(searchText);
    //
    const updatedFilter = filter.map((item) =>
      item.name === searchCategory ? { ...item, array: [searchText] } : item,
    );
    setFilter(updatedFilter);
    e.preventDefault();
  }

  function onReset() {
    setSearchText("");
    const updatedFilter = filter.map((item) =>
      item.name === searchCategory ? { ...item, array: [] } : item,
    );
    setFilter(updatedFilter);
  }

  return (
    <form className={styles[type]}>
      <select
        onChange={setCategory}
        defaultValue="name"
        value={searchCategory}
        className={styledSelect}
      >
        <option value="name">Odkrywaj</option>
        <option value="author">Autor</option>
        <option value="tags">Tagi</option>
      </select>
      <div className={styledInputContainer}>
        <input
          type="search"
          onChange={liveSearch}
          value={Array.isArray(searchText) ? searchText.join(", ") : searchText}
          placeholder="Wyszukaj..."
          className={styledInput}
        ></input>
        {searchText && (
          <div onClick={onReset} className={clearButton}>
            <FaXmark />
          </div>
        )}
      </div>

      <Button onClick={onSubmit} type="iconBtn">
        <FaMagnifyingGlass />
      </Button>
    </form>
  );
}

export default SearchForm;
