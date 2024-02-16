import { useFormContext } from "react-hook-form";

const styledInput = `border border-gray-300 bg-gray-0 rounded-md py-3 px-5 shadow`;

function Input({ type, id, disabled }) {
  const { register } = useFormContext();

  return (
    <input
      type={type}
      id={id}
      disabled={disabled}
      className={styledInput}
      {...register("name", { required: "To pole jest wymagane." })}
    ></input>
  );
}

export default Input;
