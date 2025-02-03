import { LanguageIcon } from "@heroicons/react/24/solid";
import {
  ActionIcon,
  AppShell,
  Button,
  Container,
  Group,
  Menu,
  Text,
} from "@mantine/core";

export default function Header() {
  return (
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
  );
}
