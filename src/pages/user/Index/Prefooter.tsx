import { Container, SimpleGrid } from "@mantine/core";
import Contact from "./Contact";
import Info from "./Info";

export default function Prefooter() {
  return (
    <Container fluid bg="tawnyPort" p="xl">
      <Container
        bg="white"
        size="lg"
        styles={{ root: { borderRadius: "4px" } }}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Info />
          <Contact />
        </SimpleGrid>
      </Container>
    </Container>
  );
}
