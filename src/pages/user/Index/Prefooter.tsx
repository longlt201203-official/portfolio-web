import { Container, SimpleGrid } from "@mantine/core";
import Contact from "./Contact";
import Info from "./Info";
import { InfoResponse } from "../../../hooks/apis/info";

export interface PrefooterProps {
  info?: InfoResponse;
}

export default function Prefooter({ info }: PrefooterProps) {
  return (
    <Container fluid bg="tawnyPort" p="xl">
      <Container
        bg="white"
        size="lg"
        styles={{ root: { borderRadius: "4px" } }}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Info info={info} />
          <Contact />
        </SimpleGrid>
      </Container>
    </Container>
  );
}
