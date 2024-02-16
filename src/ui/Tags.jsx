import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaHashtag, FaPlus } from "react-icons/fa6";

function Tags({ type, id, disabled }) {
  const { register, setValue } = useFormContext();

  const [tagsArray, setTagsArray] = useState([]);
  const [tag, setTag] = useState("");

  function handleTag(event) {
    setTag(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddClick();
    }
  }

  function handleAddClick() {
    setTagsArray(() => [...tagsArray, tag]);
    setValue("tags", tagsArray);
    setTag("");
  }

  function handleDeleteClick(index) {
    setTagsArray((tagsArray) =>
      tagsArray.filter((currTag, currIndex) => currIndex !== index),
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center space-x-2 rounded border border-gray-300 p-1 shadow  focus:border-gray-500">
        <FaHashtag />
        <input
          type={type}
          id={id}
          disabled={disabled}
          value={tag}
          placeholder="Dodaj tagi..."
          className="p-1 outline-none"
          {...register("tags", { required: "To pole jest wymagane." })}
          onChange={handleTag}
          onKeyDown={(event) => handleKeyDown(event)}
        ></input>
        <span onClick={() => handleAddClick()}>Dodaj</span>
      </div>
      <div className="flex flex-wrap py-2">
        {tagsArray.map((tag, index) => (
          <div className="flex items-center justify-between space-x-1 px-1">
            <span>
              <FaHashtag />
            </span>
            <ul>
              <li key={index} className="list-none">
                {tag}
              </li>
            </ul>
            <span
              onClick={() => handleDeleteClick(index)}
              className="rotate-45 cursor-pointer"
            >
              <FaPlus />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tags;
