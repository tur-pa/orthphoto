import { useState } from "react";
import Button from "./Button";

function CheckboxFilter({ options, filter, setFilter, filterCategory }) {
  const filterArray = filter?.find((el) => el.name === filterCategory)?.array;
  const [checkboxValues, setCheckboxValues] = useState(filterArray || []);

  function onChange(e) {
    const { value, checked } = e.target;

    setCheckboxValues((checkboxArray) =>
      checked
        ? [value, ...checkboxArray]
        : checkboxArray.filter((el) => el !== value),
    );
  }

  function applyFilter() {
    const updatedFilter = filter.map((item) =>
      item.name === filterCategory ? { ...item, array: checkboxValues } : item,
    );
    setFilter(updatedFilter);
  }

  function resetFilter() {
    const resetedFilter = filter.map((item) =>
      item.name === filterCategory ? { ...item, array: [] } : item,
    );
    setFilter(resetedFilter);
    setCheckboxValues([]);
  }

  return (
    <>
      <div className="mb-7 grid grid-cols-3 gap-x-7">
        {options.map((option) => (
          <div key={option.value} className="left-1/2 flex items-center">
            <label className="ms-2 flex items-center gap-1 font-normal text-gray-800">
              <input
                checked={checkboxValues?.includes(option.value)}
                value={option.value}
                onChange={(e) => onChange(e)}
                type="checkbox"
                className=" h-4 w-4 rounded bg-gray-300 text-gray-600"
              ></input>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Button onClick={applyFilter}>Zatwierdź</Button>
        <Button onClick={resetFilter}>Resetuj</Button>
      </div>
    </>
  );
}

export default CheckboxFilter;
