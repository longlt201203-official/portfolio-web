import {
  AppShell,
  Button,
  Card,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function ChangePasswordPage() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <AppShell>
      <AppShell.Main>
        <Stack h="100vh" justify="center" align="center">
          <Card w={{ xs: 240, sm: 360, md: 480 }} shadow="xs" padding="lg">
            <Stack>
              <Title order={2}>Change Password</Title>
              <form onSubmit={form.onSubmit((values) => {})}>
                <Stack>
                  <TextInput
                    label="Old Password"
                    placeholder="Old Password"
                    key={form.key("oldPassword")}
                    {...form.getInputProps("oldPassword")}
                  />
                  <PasswordInput
                    label="New Password"
                    placeholder="New Password"
                    key={form.key("password")}
                    {...form.getInputProps("password")}
                  />
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    key={form.key("password")}
                    {...form.getInputProps("password")}
                  />
                  <Group justify="space-between">
                    <Button type="submit">Login</Button>
                    <Checkbox
                      label="Remember me"
                      labelPosition="left"
                      key={form.key("remember")}
                      {...form.getInputProps("remember")}
                    />
                  </Group>
                </Stack>
              </form>
            </Stack>
          </Card>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
