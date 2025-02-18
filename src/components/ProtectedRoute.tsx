import { PropsWithChildren, useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { fetchProfile } = useAuth();

  useEffect(() => {
    fetchProfile();
  }, []);

  return <>{children}</>;
}
