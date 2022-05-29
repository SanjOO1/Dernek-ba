import { createContext, useContext, useState } from "react";

const defaultValue = {
  userData: undefined,
  setUserData: () => null,
};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user_data")) || {}
  );

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx.userData) throw new Error("AuthContext is not defined");

  return ctx;
};
