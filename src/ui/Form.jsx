const styledForm = `border border-gray-200 rounded-lg py-10 px-5`;
const styledModalForm = `w-[60rem] overflow-hidden text-lg`;

function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styledModalForm}>
      {children}
    </form>
  );
}

export default Form;
