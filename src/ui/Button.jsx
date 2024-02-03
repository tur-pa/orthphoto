function Button({ children, onClick, type = `button` }) {
  const base = `appearance-none font-medium border border-gray-200 cursor-pointer hover:border-gray-300 focus:border-gray-300 rounded-lg p-2.5 transition-all duration-500`;

  const styles = {
    button: base,
    bgButton: base + `bg bg-gray-100 mt-7`,
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
