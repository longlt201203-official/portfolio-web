import { LanguageIcon } from "@heroicons/react/24/solid";
import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Menu,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Contact",
    to: "/",
  },
];

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <Drawer
        position="top"
        size="100%"
        opened={opened}
        onClose={() => close()}
      >
        {links.map((link) => (
          <NavLink
            component={Link}
            to={link.to}
            label={link.label}
            onClick={() => close()}
          />
        ))}
      </Drawer>
      <AppShell.Header>
        <Container py="xs" h="100%">
          <Group justify="space-between" align="center" h="100%">
            <Text>LE THANH LONG</Text>
            <Group gap="xs">
              <Group display={{ base: "none", xs: "block" }} gap="xs">
                {links.map((link) => (
                  <Button variant="white" component={Link} to={link.to}>
                    {link.label}
                  </Button>
                ))}
              </Group>
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
              <Burger
                display={{ xs: "none" }}
                opened={opened}
                lineSize={2}
                size="sm"
                onClick={toggle}
                color="tawnyPort"
              />
            </Group>
          </Group>
          <Stack></Stack>
        </Container>
      </AppShell.Header>
    </>
  );
}
