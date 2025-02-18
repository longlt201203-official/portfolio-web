import {
  AppShell,
  Button,
  Card,
  Group,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import {
  ChangePasswordRequest,
  ChangePasswordSchema,
  useAuthApis,
} from "../../../hooks/apis/auth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useState } from "react";

export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const { changePassword } = useAuthApis();

  const [errMsg, setErrMsg] = useState<string | null>(null);
  const form = useForm<ChangePasswordRequest>({
    mode: "uncontrolled",
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validate: zodResolver(ChangePasswordSchema),
  });

  const changePasswordMutation = useMutation({
    mutationKey: ["changePassword"],
    mutationFn: changePassword,
    onSuccess: () => {
      navigate("/auth/login");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        setErrMsg(error.response?.data.code);
      } else {
        setErrMsg("An error occurred");
        console.log(error);
      }
    },
  });

  return (
    <AppShell>
      <AppShell.Main>
        <Stack h="100vh" justify="center" align="center">
          <Card w={{ xs: 240, sm: 360, md: 480 }} shadow="xs" padding="lg">
            <Stack>
              <Title order={2}>Change Password</Title>
              {errMsg && <Text c="red">{errMsg}</Text>}
              <form
                onSubmit={form.onSubmit((values) =>
                  changePasswordMutation.mutate(values)
                )}
              >
                <Stack>
                  <PasswordInput
                    label="Current Password"
                    placeholder="Current Password"
                    withAsterisk
                    key={form.key("currentPassword")}
                    {...form.getInputProps("currentPassword")}
                  />
                  <PasswordInput
                    label="New Password"
                    placeholder="New Password"
                    withAsterisk
                    key={form.key("newPassword")}
                    {...form.getInputProps("newPassword")}
                  />
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    withAsterisk
                    key={form.key("confirmPassword")}
                    {...form.getInputProps("confirmPassword")}
                  />
                  <Group justify="space-between">
                    <Button type="submit">Change Password</Button>
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
