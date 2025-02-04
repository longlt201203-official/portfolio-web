import { List, Stack, Text, Title } from "@mantine/core";
import GitHubIcon from "../../components/icons/GitHubIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";

export default function Info() {
  return (
    <Stack p="md" gap="xl" align="center" bg="white" className="rounded-lg">
      <Title className="text-center">My Info</Title>
      <List spacing="lg">
        <List.Item icon={<GitHubIcon size={32} />}>
          <Text>longlt201203</Text>
        </List.Item>
        <List.Item icon={<LinkedInIcon size={32} fill="#1060a5" />}>
          <Text>Thành Long Lê</Text>
        </List.Item>
        <List.Item icon={<FacebookIcon size={32} fill="#0080ff" />}>
          <Text>Lê Thành Long</Text>
        </List.Item>
      </List>
    </Stack>
  );
}
