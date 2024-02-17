function SelectFilter({ options }) {
  return (
    <form class="mx-auto">
      <select class="block w-full rounded-md border border-gray-100 p-2 font-medium text-gray-800 shadow-sm">
        <option value="all" selected>
          Sortuj według
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </form>
  );
}

export default SelectFilter;
