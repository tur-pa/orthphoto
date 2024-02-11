const styledRow = `grid items-center grid-cols-[24rem_1fr_1.2fr] gap-9 py-5 first:pt-0 last:pb-0 has-[button]:flex has-[button]:justify-end has-[button]:gap-5`;
const styledLabel = `font-medium`;
const styledError = `text-lg text-red-700`;

function FormRow({ label, error, children }) {
  return (
    <div className={styledRow}>
      {label && <label className={styledLabel}>{label}</label>}
      {children}
      {error && <span className={styledError}></span>}
    </div>
  );
}

export default FormRow;
