import { createContext } from "react";

export type AuthContextData = {
    authenticated: boolean;
  };

export type AuthContextType = {
    authContextData: AuthContextData;
    setAuthContextData: (authContextType: AuthContextData) => void;
}

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated: false
    },
    setAuthContextData: () => null
})