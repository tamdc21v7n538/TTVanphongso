"use client";

import { createContext, useState, ReactNode } from "react";

type User = {
  name: string;
  role: string;
} | null;

type AppContextType = {
  user: User;
  setUser: (user: User) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}