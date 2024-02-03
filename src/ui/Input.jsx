function Input({ children, type, id, disabled }) {
  return (
    <input
      type={type}
      id={id}
      disabled={disabled}
      className="border border-gray-300 bg-gray-0 rounded-md py-3 px-5 shadow"
    >
      {children}
    </input>
  );
}

export default Input;
