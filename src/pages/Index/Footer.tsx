import { AppShell, Container, Group, Text } from "@mantine/core";

export default function Footer() {
  return (
    <AppShell.Footer>
      <Container py="xs">
        <Group justify="center">
          <Text c="dimmed">
            &copy; 2025 - Le Thanh Long - All Rights Reserved
          </Text>
        </Group>
      </Container>
    </AppShell.Footer>
  );
}
