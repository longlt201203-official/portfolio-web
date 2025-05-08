import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer, Zoom } from "react-toastify";
import { GoogleOAuthProvider } from '@react-oauth/google';

const client = new QueryClient();
const googleClientId = "342915674625-cl917ofe9adcm40udcgaihqj978hlajl.apps.googleusercontent.com";

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <GoogleOAuthProvider clientId={googleClientId}>
          <AuthProvider>
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="light"
              transition={Zoom}
            />
            <Outlet />
          </AuthProvider>
        </GoogleOAuthProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
