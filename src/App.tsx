import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
