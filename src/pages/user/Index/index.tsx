import { Container, Divider, Space, Title } from "@mantine/core";
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

  const isLoading = getLandingPageInfoQuery.isLoading;

  return isLoading ? (
    <PageLoading />
  ) : (
    <>
      <Hero info={data?.info} />

      <Container size="xl" py="xl">
        <Divider
          my="xl"
          label={<Title order={2}>My Projects</Title>}
          labelPosition="center"
        />
        <Projects projects={data?.projects} />

        <Space h={100} />

        <Divider
          my="xl"
          label={<Title order={2}>My Journey</Title>}
          labelPosition="center"
        />
        <TimelineSection timelines={data?.timelines} />

        <Space h={100} />

        <Divider
          my="xl"
          label={<Title order={2}>Latest Articles</Title>}
          labelPosition="center"
        />
        <Blog blogs={data?.blogs} />
      </Container>

      <Prefooter info={data?.info} />
    </>
  );
}
