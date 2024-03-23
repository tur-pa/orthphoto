import { createContext, useContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  return <UserContext.Provider>{children}</UserContext.Provider>;
}

function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("User was used outside of DataUserProvider");
  return context;
}

export { UserProvider, useUserContext };
