function CheckboxFilter({ options }) {
  return (
    <div className="mb-7 grid grid-cols-3 gap-x-7">
      {options.map((option) => (
        <div key={option.value} className="left-1/2 flex items-center">
          <input
            type="checkbox"
            className=" h-4 w-4 rounded bg-gray-300 text-gray-600"
          ></input>
          <label className="ms-2 font-normal text-gray-800">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxFilter;
