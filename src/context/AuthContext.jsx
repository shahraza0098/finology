"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { user, isLoaded } = useUser();
  const [dbUser, setDbUser] = useState(null);

  useEffect( () => {
    if (isLoaded && user) {
        fetch("/api/get-user")
        .then((res) => res.json())
        .then((data) => setDbUser(data.getUser))
        .catch((err) => console.error("Failed to load DB user:", err));
    } else {
      setDbUser(null);
    }
  }, [user, isLoaded]);


  return (
    <AuthContext.Provider value={{ dbUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
