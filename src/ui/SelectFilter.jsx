import { useSearchParams } from "react-router-dom";

const styledSelect = `block w-full rounded-md border border-gray-100 p-2 font-medium text-gray-800 shadow-sm`;

function SelectFilter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || null;

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select value={sortBy} onChange={handleChange} className={styledSelect}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default SelectFilter;
