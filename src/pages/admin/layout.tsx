import {
  AppShell,
  Burger,
  Container,
  Divider,
  Group,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useLocation } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const navItems = [
  {
    label: "Dashboard",
    to: "/admin/",
  },
  {
    label: "Posts",
    to: "/admin/posts",
  },
  {
    label: "Quotes",
    to: "/admin/quotes",
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
  const location = useLocation();
  const parts = location.pathname.split("/");

  return (
    <ProtectedRoute>
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
              active={parts[2] === item.to.split("/")[2]}
              component="a"
              key={index}
              label={item.label}
              href={item.to}
            />
          ))}
          <Divider my="xs" />
          <NavLink
            href="/api/auth/logout"
            label="Logout"
            rightSection={<ArrowLongRightIcon className="h-4 w-4" />}
          />
        </AppShell.Navbar>
        <AppShell.Main className="h-screen">
          <Container fluid py="sm" className="h-full">
            <Outlet />
          </Container>
        </AppShell.Main>
      </AppShell>
    </ProtectedRoute>
  );
}
