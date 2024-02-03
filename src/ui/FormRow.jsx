function FormRow({ label, error, children }) {
  return (
    <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-9 p-5 first:pt-0 last:pb-0  has-[button]:flex has-[button]:justify-end has-[button]:gap-5">
      {label && <label className="font-medium">{label}</label>}
      {children}
      {error && <span className="text-red-700 text-xl"></span>}
    </div>
  );
}

export default FormRow;
