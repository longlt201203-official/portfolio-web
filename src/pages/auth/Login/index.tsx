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
import { useSearchParams } from "react-router-dom";
import { IBasicLoginRequest } from "../../../hooks/apis/auth";

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const error = searchParams.get("error");

  const form = useForm<IBasicLoginRequest>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  return (
    <AppShell>
      <AppShell.Main>
        <Stack h="100vh" justify="center" align="center">
          <Card w={{ xs: 240, sm: 360, md: 480 }} shadow="xs" padding="lg">
            <Stack>
              <Title order={2}>Login</Title>
              {error && <Text c="red">{error}</Text>}
              <form
                onSubmit={form.onSubmit((values) => {
                  const code = btoa(`${values.email}:${values.password}`);
                  window.location.href = `/api/auth/login?code=${code}&type=basic`;
                })}
              >
                <Stack>
                  <TextInput
                    label="Email"
                    placeholder="Email"
                    key={form.key("email")}
                    {...form.getInputProps("email")}
                  />
                  <PasswordInput
                    label="Password"
                    placeholder="Password"
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
              <Divider label="Or" />
              <Button variant="light">Login with Google</Button>
            </Stack>
          </Card>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
