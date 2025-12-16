"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type CustomerUser = {
  username: string;
  email: string;
};

type CustomerAuthContextType = {
  user: CustomerUser | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const CustomerAuthContext = createContext<CustomerAuthContextType | undefined>(
  undefined
);

const VALID_CREDENTIALS = {
  username: "admin",
  password: "admin",
};

export function CustomerAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CustomerUser | null>(null);

  const login = (username: string, password: string): boolean => {
    if (
      username === VALID_CREDENTIALS.username &&
      password === VALID_CREDENTIALS.password
    ) {
      setUser({ username, email: "customer@sweetdelights.com" });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <CustomerAuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        login,
        logout,
      }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
}

export function useCustomerAuth() {
  const context = useContext(CustomerAuthContext);
  if (context === undefined) {
    throw new Error(
      "useCustomerAuth must be used within a CustomerAuthProvider"
    );
  }
  return context;
}
