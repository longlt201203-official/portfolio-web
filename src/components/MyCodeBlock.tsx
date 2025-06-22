import { Code, CodeProps, Stack, Text } from "@mantine/core";
import { useEffect, useRef } from "react";
import hljs from "highlight.js"

export interface MyCodeBlockProps extends CodeProps {
  topText?: string;
  bottomText?: string;
}

export default function MyCodeBlock(props: MyCodeBlockProps) {
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef.current && props.children) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [codeRef, props.children])

  return (
    <Stack gap={0}>
      {props.topText && <Text size="xs">{props.topText}</Text>}
      <Code ref={codeRef} {...props} block />
      {props.bottomText && <Text size="xs">{props.bottomText}</Text>}
    </Stack>
  );
}
