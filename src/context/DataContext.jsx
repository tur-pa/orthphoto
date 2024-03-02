import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [filterCategory, setFilterCategory] = useState("photos");
  const [searchCategory, setSearchCategory] = useState("name");

  const [filter, setFilter] = useState([
    { name: "name", array: [] },
    { name: "author", array: [] },
    { name: "category", array: [] },
    { name: "country", array: [] },
  ]);

  return (
    <DataContext.Provider
      value={{
        filter,
        setFilter,
        filterCategory,
        setFilterCategory,
        searchCategory,
        setSearchCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside of DataContextProvider");
  return context;
}

export { DataProvider, useDataContext };
