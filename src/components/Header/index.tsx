import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import GitHubIcon from "../icons/GitHubIcon";

const links = [
  // {
  //   label: "Home",
  //   to: "/",
  // },
  {
    label: "Blog",
    to: "/blog",
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
        {links.map((link, index) => (
          <NavLink
            key={index}
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
            <Text component="a" href="/">
              LE THANH LONG
            </Text>
            <Group gap="xs">
              <Group display={{ base: "none", xs: "block" }} gap="xs">
                {links.map((link, index) => (
                  <Button
                    key={index}
                    variant="white"
                    component="a"
                    href={link.to}
                  >
                    {link.label}
                  </Button>
                ))}
              </Group>
              <ActionIcon
                variant="white"
                component="a"
                href="https://github.com/longlt201203/"
                target="_blank"
              >
                <GitHubIcon className="h-6 w-6" fill="#b45360" />
              </ActionIcon>
              {/* <Menu>
                <Menu.Target>
                  <ActionIcon variant="white">
                    <LanguageIcon className="h-6 w-6" />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>English</Menu.Item>
                  <Menu.Item>Tiếng Việt</Menu.Item>
                </Menu.Dropdown>
              </Menu> */}
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
