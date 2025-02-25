import Hero from "./Hero";
import Projects from "./Projects";
import TimelineSection from "./TimelineSection";
import Blog from "./Blog";
import Prefooter from "./Prefooter";
import { useFrontApis } from "../../../hooks/apis/front";
import { useQuery } from "@tanstack/react-query";
import PageLoading from "../../../components/PageLoading";

export default function IndexPage() {
  const { getLandingPageInfo } = useFrontApis();

  const getLandingPageInfoQuery = useQuery({
    queryKey: ["getLandingPageInfo"],
    queryFn: getLandingPageInfo,
  });
  const data = getLandingPageInfoQuery.data;

  return getLandingPageInfoQuery.isLoading ? (
    <PageLoading />
  ) : (
    <>
      <Hero />
      <Projects />
      <TimelineSection />
      <Blog blogs={data?.blogs} />
      <Prefooter />
    </>
  );
}
