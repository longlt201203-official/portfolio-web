import { Blockquote, Text } from "@mantine/core";

export default function QuoteOfTheDay() {
  return (
    <Blockquote cite="- Steve Jobs">
      <Text fs="italic">
        "The only way to do great work is to love what you do."
      </Text>
    </Blockquote>
  );
}
