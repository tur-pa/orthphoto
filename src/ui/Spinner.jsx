function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center space-x-2">
      <div className="h-8 w-8 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-gray-700"></div>
    </div>
  );
}

export default Spinner;
