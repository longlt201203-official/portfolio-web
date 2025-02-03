import { AppShell } from "@mantine/core";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function IndexPage() {
  return (
    <>
      <AppShell header={{ height: 56 }} footer={{ height: 44.8 }}>
        <Header />
        <Main />
        <Footer />
      </AppShell>
    </>
  );
}
