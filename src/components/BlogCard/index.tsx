import { Card, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import blogsCssModule from "./blogs.module.css";
import landingCssModule from "./landing.module.css";

export interface BlogCardProps {
  variant?: "blogs" | "landing";
}

export default function BlogCard({ variant }: BlogCardProps) {
  return (
    <Card
      withBorder={variant == "landing"}
      component={Link}
      to="/blog/1"
      classNames={{
        root:
          variant == "landing" ? landingCssModule.card : blogsCssModule.card,
      }}
    >
      <Title
        c="tawnyPort"
        classNames={{
          root:
            variant == "landing"
              ? landingCssModule.cardTitle
              : blogsCssModule.cardTitle,
        }}
      >
        Card Title
      </Title>
      <Text c="dimmed" fz="sm">
        Published At: 20-12-2003 00:00
      </Text>
      <Text>This is a short description</Text>
    </Card>
  );
}
