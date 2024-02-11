const styledInput = `border border-gray-300 bg-gray-0 rounded-md py-3 px-5 shadow`;

function Input({ type, id, disabled, formFn }) {
  return (
    <input
      type={type}
      id={id}
      disabled={disabled}
      className={styledInput}
      {...formFn}
    ></input>
  );
}

export default Input;
