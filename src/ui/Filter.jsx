function Filter({ options }) {
  const styledFilter = `border border-gray-100 shadow-sm rounded-md p-2 flex gap-2 w-fit`;
  const filterButton = `appearance-none hover:bg-gray-100 rounded-md font-medium text-l py-1 px-2 transition-all `;
  const activeFilterButton = filterButton + ` bg-gray-100`;

  return (
    <div className={styledFilter}>
      {options.map((option) => (
        <button
          key={option.value}
          className={option.value === "all" ? activeFilterButton : filterButton}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
