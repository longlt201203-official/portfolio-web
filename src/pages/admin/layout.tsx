import {
  AppShell,
  Burger,
  Container,
  Group,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";

const navItems = [
  {
    label: "Dashboard",
    to: "/admin",
  },
  {
    label: "Posts",
    to: "/admin/posts",
  },
  {
    label: "Contacts",
    to: "/admin/contacts",
  },
  {
    label: "My Info",
    to: "/admin/info",
  },
];

export default function AdminLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 256,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      header={{ height: 48 }}
    >
      <AppShell.Header p="sm">
        <Stack justify="center" h="100%">
          <Group justify="space-between">
            <Text>LE THANH LONG</Text>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
          </Group>
        </Stack>
      </AppShell.Header>
      <AppShell.Navbar>
        {navItems.map((item, index) => (
          <NavLink
            active={index === 0}
            component={Link}
            key={index}
            label={item.label}
            to={item.to}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Container fluid py="sm">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
