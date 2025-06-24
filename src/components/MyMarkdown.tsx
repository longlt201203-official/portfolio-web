import { Code, List, Text, Title } from "@mantine/core";
import Markdown from "react-markdown";
import MyCodeBlock from "./MyCodeBlock";
export interface MyMarkdownProps {
  content?: string;
}

export default function MyMarkdown({ content }: MyMarkdownProps) {
  return (
    <Markdown
      components={{
        h1: (props) => (
          <Title
            order={1}
            {...props}
            id={props.children?.toString().toLowerCase()}
          />
        ),
        h2: (props) => (
          <Title
            order={2}
            {...props}
            id={props.children?.toString().toLowerCase()}
          />
        ),
        h3: (props) => (
          <Title
            order={3}
            {...props}
            id={props.children?.toString().toLowerCase()}
          />
        ),
        h4: (props) => (
          <Title
            order={4}
            {...props}
            id={props.children?.toString().toLowerCase()}
          />
        ),
        h5: (props) => (
          <Title
            order={5}
            {...props}
            id={props.children?.toString().toLowerCase()}
          />
        ),
        p: (props) => <Text {...props} />,
        span: (props) => <Text component="span" {...props} />,
        a: (props) => (
          <Text c="blue" td="underline" component="a" href={props.href}>
            {props.children}
          </Text>
        ),
        ul: (props) => <List {...props} className="list-disc" />,
        ol: (props) => (
          <List {...props} type="ordered" className="list-decimal" />
        ),
        li: (props) => <List.Item {...props} />,
        code: (props) => <Code {...props} />,
        pre: (props) => <MyCodeBlock {...props} />,
      }}
    >
      {content}
    </Markdown>
  );
}
