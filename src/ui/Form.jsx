const styledForm = `border border-gray-200 rounded-lg overflow-hidden text-xl w-[80rem] py-10 px-5`;

function Form({ children }) {
  return <form className={styledForm}>{children}</form>;
}

export default Form;
