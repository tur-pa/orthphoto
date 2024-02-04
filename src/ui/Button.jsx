function Button({ children, onClick, type = `baseBtn` }) {
  const base = `appearance-none font-medium border border-gray-200 cursor-pointer hover:border-gray-300 focus:border-gray-300 rounded-lg p-2.5 transition-all duration-500 inline-flex items-center`;

  const styles = {
    baseBtn: base,
    bgBtn: base + ` my-7 mx-5 bg-gray-100`,
    iconBtn: base + ` border-none p-1`,
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
