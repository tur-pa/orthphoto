import { useEffect, useState } from "react";
import Button from "./Button";

function CheckboxFilter({ options, setCountryFilter, countryFilter }) {
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false),
  );

  function onChange(e, index) {
    console.log(index);
    setCheckedState(checkedState.map((el, i) => (index === i ? !el : el)));
    console.log(checkedState);
    if (e.target.checked) {
      setCountryFilter((countryArray) => [e.target.value, ...countryArray]);
    } else {
      setCountryFilter((countryArray) =>
        countryArray.filter((el) => el !== e.target.value),
      );
    }
    console.log(countryFilter);
  }

  function onReset() {
    setCountryFilter([]);
    console.log(checkedState);
    setCheckedState(checkedState.fill(false));
  }

  return (
    <>
      <div className="mb-7 grid grid-cols-3 gap-x-7">
        {options.map((option, index) => (
          <div key={option.value} className="left-1/2 flex items-center">
            <label className="ms-2 flex items-center gap-1 font-normal text-gray-800">
              <input
                checked={checkedState[index]}
                value={option.value}
                onChange={(e) => onChange(e, index)}
                type="checkbox"
                className=" h-4 w-4 rounded bg-gray-300 text-gray-600"
              ></input>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Button>Zatwierdź</Button>
        <Button onClick={onReset}>Resetuj</Button>
      </div>
    </>
  );
}

export default CheckboxFilter;
