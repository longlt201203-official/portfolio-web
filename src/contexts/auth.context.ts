import { createContext } from "react";
import { AccountResponse } from "../hooks/apis/account";

export interface AuthContextProps {
  profile: AccountResponse;
  fetchProfile: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
