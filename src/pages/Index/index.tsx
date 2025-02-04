import { AppShell } from "@mantine/core";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function IndexPage() {
  return (
    <>
      <AppShell header={{ height: 60 }} footer={{ height: 48 }}>
        <Header />
        <Main />
        <Footer />
      </AppShell>
    </>
  );
}
