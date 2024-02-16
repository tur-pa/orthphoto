import { useFormContext } from "react-hook-form";

const styledInput = `text-xl rounded-md file:font-semibold file:py-3 file:px-5 file:mr-5 file:rounded-md file:bg-transparent file:border-none file:border file:bg-gray-50 file:border-gray-300 file:cursor-pointer file:hover:border-gray-500 file:transition-all file:duration-300 file:hover:bg-gray-100`;

function FileInput({ id, accept, type = "file" }) {
  const { register } = useFormContext();

  return (
    <input
      id={id}
      accept={accept}
      type={type}
      className={styledInput}
      {...register("image", { required: false })}
    ></input>
  );
}

export default FileInput;
