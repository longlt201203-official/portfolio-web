import { AppShell, Stack, Text } from "@mantine/core";

export default function Footer() {
  return (
    <AppShell.Footer bg="tawnyPort">
      <Stack justify="center" align="center" h="100%">
        <Text c="white" className="text-center">
          &copy; 2025 - Le Thanh Long - All Rights Reserved
        </Text>
      </Stack>
    </AppShell.Footer>
  );
}
