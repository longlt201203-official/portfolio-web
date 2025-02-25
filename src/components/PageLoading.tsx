import { Loader, Stack, Text } from "@mantine/core";

export default function PageLoading() {
  return (
    <Stack
      pos="absolute"
      top={0}
      left={0}
      mih="100%"
      miw="100%"
      mah="100vh"
      maw="100vw"
      justify="center"
      align="center"
    >
      <Loader />
      <Text>Loading...</Text>
    </Stack>
  );
}
