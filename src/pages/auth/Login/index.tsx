import {
  AppShell,
  Button,
  Card,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { basicLogin, IBasicLoginRequest } from "../../../apis/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IApiError } from "../../../apis";

export default function LoginPage() {
  const form = useForm<IBasicLoginRequest>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const basicLoginMutation = useMutation({
    mutationKey: ["basic-login"],
    mutationFn: basicLogin,
    onSuccess: () => {
      console.log("Login successful");
    },
    onError: (error: AxiosError<IApiError>) => {
      console.error("Login failed", error.response?.data);
    },
  });

  return (
    <AppShell>
      <AppShell.Main>
        <Stack h="100vh" justify="center" align="center">
          <Card w={{ xs: 240, sm: 360, md: 480 }} shadow="xs" padding="lg">
            <Stack>
              <Title order={2}>Login</Title>
              <form
                onSubmit={form.onSubmit((values) =>
                  basicLoginMutation.mutate(values)
                )}
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
