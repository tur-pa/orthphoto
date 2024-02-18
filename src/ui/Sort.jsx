import Button from "./Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

import { useSearchParams } from "react-router-dom";

const styledSort = `ml-2 p-2 flex gap-2 items-center`;

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(sortDir) {
    searchParams.set("sortDir", sortDir);
    setSearchParams(searchParams);
  }

  return (
    <div className={styledSort}>
      <p className="font-semibold">Sortuj</p>
      <Button type="iconBtn" onClick={() => handleClick("asc")}>
        <FaArrowUp />
      </Button>
      <Button type="iconBtn" onClick={() => handleClick("desc")}>
        <FaArrowDown />
      </Button>
    </div>
  );
}

export default Sort;
