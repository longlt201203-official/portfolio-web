import { Code, CodeProps, Stack, Text } from "@mantine/core";

export interface MyCodeBlockProps extends CodeProps {
  topText?: string;
  bottomText?: string;
}

export default function MyCodeBlock(props: MyCodeBlockProps) {
  return (
    <Stack gap={0}>
      {props.topText && <Text size="xs">{props.topText}</Text>}
      <Code {...props} block />
      {props.bottomText && <Text size="xs">{props.bottomText}</Text>}
    </Stack>
  );
}
