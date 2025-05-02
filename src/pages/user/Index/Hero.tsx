import { Button, Group, Image, Stack, Title } from "@mantine/core";
import { InfoResponse } from "../../../hooks/apis/info";

export interface HeroProps {
  info?: InfoResponse;
}

export default function Hero({ info }: HeroProps) {
  return (
    <Stack className="h-screen" justify="center" align="center" gap="xl">
      <Image src={info?.avt} h={240} fit="contain" />
      <Title className="text-center" fz={{ base: 24, sm: 32, md: 48 }}>
        Hi, I'm Long! I'm a developer.
      </Title>
      <Group>
        <Button size="lg">Contact Me</Button>
        <Button variant="outline" size="lg">
          Visit My Blog
        </Button>
      </Group>
    </Stack>
  );
}
