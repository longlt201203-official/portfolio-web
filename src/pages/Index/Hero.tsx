import { Button, Group, Stack, Title } from "@mantine/core";

export default function Hero() {
  return (
    <Stack className="h-screen" justify="center" align="center" gap="xl">
      <Title className="text-center" fz={{ base: 24, sm: 32, md: 48 }}>
        Hi, I'm Long! I'm a developer.
      </Title>
      <Group>
        <Button size="lg">Contact Me</Button>
        <Button variant="outline" size="lg">
          Visit My Blog
        </Button>
      </Group>
    </Stack>
  );
}
