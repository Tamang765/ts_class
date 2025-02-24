import { createContext } from "react";

const userContext = createContext("");

type Children = {
  children?: React.ReactNode;
};

const UserProvider: React.FC<Children> = ({ children }) => {
  const user = {
    name: "Ramesh",
    address: "Swyambu",
    isAuthorized: true,
  };

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export { UserProvider, userContext };
