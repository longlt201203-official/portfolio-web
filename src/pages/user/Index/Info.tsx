import { List, Space, Stack, Text, Title } from "@mantine/core";
import GitHubIcon from "../../../components/icons/GitHubIcon";
import LinkedInIcon from "../../../components/icons/LinkedInIcon";
import FacebookIcon from "../../../components/icons/FacebookIcon";
import { InfoResponse } from "../../../hooks/apis/info";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export interface InfoProps {
  info?: InfoResponse;
}

export default function Info({ info }: InfoProps) {
  return (
    <Stack p="md" gap="xl">
      <Title>Contact</Title>
      <Space />
      <List p="lg" className="shadow-lg shadow-primary-2 rounded-lg">
        <List.Item icon={<MapPinIcon className="h-8 w-8 p-0.5" />}>
          <Text>{info?.location}</Text>
        </List.Item>
        <List.Item icon={<PhoneIcon className="h-8 w-8 p-1" />}>
          <Text>{info?.phone}</Text>
        </List.Item>
        <List.Item icon={<GitHubIcon size={32} />}>
          <Text component="a" target="_blank" href={info?.githubLink}>
            {info?.githubUsername}
          </Text>
        </List.Item>
        <List.Item icon={<LinkedInIcon size={32} fill="#1060a5" />}>
          <Text component="a" target="_blank" href={info?.linkedinLink}>
            {info?.linkedinName}
          </Text>
        </List.Item>
      </List>
    </Stack>
  );
}
