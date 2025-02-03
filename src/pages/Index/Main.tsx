import { AppShell } from "@mantine/core";
import Hero from "./Hero";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Contact from "./Contact";

export default function Main() {
  return (
    <AppShell.Main>
      <Hero />
      <Projects />
      <Timeline />
      <Contact />
    </AppShell.Main>
  );
}
