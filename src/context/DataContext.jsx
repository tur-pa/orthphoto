import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <DataContext.Provider
      value={{ searchData, setSearchData, setIsSearching, isSearching }}
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
