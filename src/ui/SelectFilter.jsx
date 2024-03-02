import { useSearchParams } from "react-router-dom";

const styledSelect = `block  rounded-md border border-gray-100 p-2 font-medium text-gray-800 shadow-sm`;

function SelectFilter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || undefined;

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select value={sortBy} onChange={handleChange} className={styledSelect}>
      {options.map((option, id) => (
        <option key={id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectFilter;
