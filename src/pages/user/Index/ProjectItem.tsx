import { Card, Spoiler, Text, Title } from "@mantine/core";

export default function ProjectItem() {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Spoiler
        showLabel="Show Details"
        hideLabel="Hide Details"
        maxHeight={160}
      >
        <Title order={3}>Project name</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          arcu nisl, consequat sed pretium ac, fringilla id nunc. Nunc cursus
          est est, vitae mattis sem maximus bibendum. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nam augue justo, cursus id felis at, semper tincidunt ante.
          Donec convallis, purus at consequat accumsan, mi odio venenatis metus,
          a tincidunt eros magna vitae dolor. Duis tristique interdum arcu, sit
          amet egestas lorem maximus et. Quisque tellus sapien, faucibus non
          tellus a, dictum ultricies elit.
        </Text>
      </Spoiler>
    </Card>
  );
}
