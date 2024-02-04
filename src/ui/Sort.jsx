import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import Button from "./Button";

function Sort() {
  const styledSort = `ml-2 p-2 flex gap-2 items-center`;

  return (
    <div className={styledSort}>
      <p className="font-semibold">Sortuj</p>
      <Button type="iconBtn">
        <FaArrowUp />
      </Button>
      <Button type="iconBtn">
        <FaArrowDown />
      </Button>
    </div>
  );
}

export default Sort;
