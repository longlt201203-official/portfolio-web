import { LanguageIcon } from "@heroicons/react/24/solid";
import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  AppShell,
  Button,
  Card,
  Container,
  Group,
  Menu,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function IndexPage() {
  return (
    <>
      <AppShell>
        <AppShell.Header>
          <Container py="xs">
            <Group justify="space-between">
              <Text>LE THANH LONG</Text>
              <Group gap="xs">
                <Button variant="white">Home</Button>
                <Button variant="white">Projects</Button>
                <Button variant="white">Blog</Button>
                <Button variant="white">Contact</Button>
                <Menu>
                  <Menu.Target>
                    <ActionIcon variant="white">
                      <LanguageIcon className="h-6 w-6" />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>English</Menu.Item>
                    <Menu.Item>Tiếng Việt</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Group>
          </Container>
        </AppShell.Header>
        <AppShell.Main>
          <Stack className="h-screen" justify="center" align="center">
            <Title>Hi, I'm Long! I'm a developer.</Title>
            <Group>
              <Button size="lg">Contact Me</Button>
              <Button variant="outline" size="lg">
                Visit My Blog
              </Button>
            </Group>
          </Stack>
          <Stack className="h-screen" justify="center" align="center">
            <Title>My Projects</Title>
            <Container px={20}>
              <Carousel
                slideSize="20%"
                height={200}
                align="start"
                slideGap="md"
                controlsOffset="xs"
                controlSize={24}
                p={20}
              >
                <Carousel.Slide>
                  <Card shadow="sm" padding="md" radius="md" withBorder></Card>
                </Carousel.Slide>
              </Carousel>
            </Container>
          </Stack>
        </AppShell.Main>
        <AppShell.Footer>
          <Container py="xs">
            <Group justify="center">
              <Text c="dimmed">
                &copy; 2025 - Le Thanh Long - All Rights Reserved
              </Text>
            </Group>
          </Container>
        </AppShell.Footer>
      </AppShell>
    </>
  );
}
