import { Fragment } from "react";
import { useDataContext } from "../context/DataContext";

const styledFilter = `border border-gray-100 shadow-sm rounded-md p-2 flex gap-1 w-fit`;
const filterButton = `appearance-none hover:bg-gray-100 rounded-md font-medium text-l py-1 px-4 transition-all `;
const activeFilterButton = filterButton + ` bg-gray-100`;
const filterNum = ``;

function Filter({ options }) {
  const { filterCategory, setFilterCategory, filter } = useDataContext();
  return (
    <div className={styledFilter}>
      {options.map((option, id) => (
        <Fragment key={id}>
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
            <span className="relative -left-4 bottom-2 inline-flex items-center text-gray-400 ">
              {filter?.find((el) => el.name === option.value)?.array.length}
            </span>
          }
        </Fragment>
      ))}
    </div>
  );
}

export default Filter;
