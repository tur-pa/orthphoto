function Form({ children }) {
  return (
    <form className="border border-gray-200 rounded-lg overflow-hidden text-xl w-[80rem] py-10 px-5">
      {children}
    </form>
  );
}

export default Form;
