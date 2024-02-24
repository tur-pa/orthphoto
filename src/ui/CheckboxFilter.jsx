import { useState } from "react";
import Button from "./Button";

function CheckboxFilter({ options, filter, setFilter, filterCategory }) {
  const [checkboxValues, setCheckboxValues] = useState(
    filter?.find((el) => el.name === filterCategory).array,
  );

  function onChange(e) {
    if (e.target.checked) {
      setCheckboxValues((checkboxArray) => [e.target.value, ...checkboxArray]);
    } else {
      setCheckboxValues((checkboxArray) =>
        checkboxArray.filter((el) => el !== e.target.value),
      );
    }
  }

  function onClick() {
    const updatedFilter = filter.map((item) =>
      item.name === filterCategory ? { ...item, array: checkboxValues } : item,
    );
    setFilter(updatedFilter);
  }

  function onReset() {
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
        <Button onClick={() => onClick()}>Zatwierdź</Button>
        <Button onClick={() => onReset()}>Resetuj</Button>
      </div>
    </>
  );
}

export default CheckboxFilter;
