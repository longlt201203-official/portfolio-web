import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function Main(props: PropsWithChildren) {
  return <AppShell.Main>{props.children}</AppShell.Main>;
}
