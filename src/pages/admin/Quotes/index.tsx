import { Button, Group, Stack, Title } from "@mantine/core";
import QuotesTable from "./QuotesTable";
import QuoteOfTheDay from "./QuoteOfTheDay";

export default function QuotesPage() {
  return (
    <Stack>
      <Title>Quotes</Title>
      <QuoteOfTheDay />
      <Group>
        <Button>Add Quote</Button>
      </Group>
      <QuotesTable />
    </Stack>
  );
}
