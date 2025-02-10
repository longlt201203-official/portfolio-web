import Hero from "./Hero";
import Projects from "./Projects";
import TimelineSection from "./TimelineSection";
import Blog from "./Blog";
import Prefooter from "./Prefooter";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Projects />
      <TimelineSection />
      <Blog />
      <Prefooter />
    </>
  );
}
