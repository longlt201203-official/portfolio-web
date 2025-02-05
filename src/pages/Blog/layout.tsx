import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import Header from "./Header";
import Main from "./Main";

export default function BlogLayout(props: PropsWithChildren) {
  return (
    <AppShell header={{ height: 60 }}>
      <Header />
      <Main>{props.children}</Main>
    </AppShell>
  );
}
