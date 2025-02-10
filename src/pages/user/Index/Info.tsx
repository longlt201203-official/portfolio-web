import { List, Space, Stack, Text, Title } from "@mantine/core";
import GitHubIcon from "../../../components/icons/GitHubIcon";
import LinkedInIcon from "../../../components/icons/LinkedInIcon";
import FacebookIcon from "../../../components/icons/FacebookIcon";

export default function Info() {
  return (
    <Stack p="md" gap="xl">
      <Title>Contact</Title>
      <Space />
      <List p="lg" className="shadow-lg shadow-primary-2 rounded-lg">
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
