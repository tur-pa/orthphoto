const styledFilter = `border border-gray-100 shadow-sm rounded-md p-2 flex gap-2 w-fit`;
const filterButton = `appearance-none hover:bg-gray-100 rounded-md font-medium text-l py-1 px-2 transition-all `;
const activeFilterButton = filterButton + ` bg-gray-100`;

function Filter({ options, filterCategory, setFilterCategory, filter }) {
  return (
    <div className={styledFilter}>
      {options.map((option) => (
        <>
          <button
            key={option.value}
            className={
              option.value === filterCategory
                ? activeFilterButton
                : filterButton
            }
            onClick={() => setFilterCategory(option.value)}
          >
            {option.label}
          </button>
          {
            <span>
              {Object.keys(filter) === option.value ? "true" : "false"}
            </span>
          }
        </>
      ))}
    </div>
  );
}

export default Filter;
