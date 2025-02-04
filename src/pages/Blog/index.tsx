import { AppShell } from "@mantine/core";
import Header from "./Header";
import Main from "./Main";

export default function BlogPage() {
  return (
    <AppShell header={{ height: 60 }}>
      <Header />
      <Main />
    </AppShell>
  );
}
