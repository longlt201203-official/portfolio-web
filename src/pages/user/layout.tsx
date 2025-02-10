import { AppShell } from "@mantine/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 48 }}>
      <Header />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
