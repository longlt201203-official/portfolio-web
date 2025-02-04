import { AppShell } from "@mantine/core";
import Hero from "./Hero";
import Projects from "./Projects";
import TimelineSection from "./TimelineSection";
import Prefooter from "./Prefooter";
import Blog from "./Blog";

export default function Main() {
  return (
    <AppShell.Main>
      <Hero />
      <Projects />
      <TimelineSection />
      <Blog />
      <Prefooter />
    </AppShell.Main>
  );
}
