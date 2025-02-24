import { Loader, Stack } from "@mantine/core";

export default function PageLoading() {
  return (
    <Stack h="full" justify="center" align="center">
      <Loader />
    </Stack>
  );
}
