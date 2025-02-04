import { Card, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import cssModule from "./index.module.css";

export default function BlogCard() {
  return (
    <Card component={Link} to="/blog" classNames={{ root: cssModule.root }}>
      <Title c="tawnyPort">Card Title</Title>
      <Text c="dimmed" fz="sm">
        Published At: 20-12-2003 00:00
      </Text>
      <Text>This is a short description</Text>
    </Card>
  );
}
