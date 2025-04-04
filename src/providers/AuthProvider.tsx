import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useAuthApis } from "../hooks/apis/auth";

export interface AuthProviderProps extends PropsWithChildren {}

export default function AuthProvider({ children }: AuthProviderProps) {
  const { getProfile } = useAuthApis();

  const getProfileQuery = useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
    initialData: {
      id: "",
      emails: [],
      firstName: "",
      lastName: "",
      phoneNumbers: [],
      addresses: [],
      superEmail: ""
    },
    retry: 0,
    enabled: false,
  });

  const fetchProfile = () => {
    getProfileQuery.refetch();
  };

  return (
    <AuthContext.Provider
      value={{
        profile: getProfileQuery.data,
        fetchProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
