import { Card, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import blogsCssModule from "./blogs.module.css";
import landingCssModule from "./landing.module.css";
import { BlogResponse } from "../../hooks/apis/blog";
import dayjs from "dayjs";

export interface BlogCardProps {
  variant?: "blogs" | "landing";
  withBorder?: boolean;
  blog?: BlogResponse;
}

export default function BlogCard({ variant, withBorder, blog }: BlogCardProps) {
  return (
    <Card
      withBorder={variant == "landing" || withBorder}
      component={Link}
      to={`/blog/${blog?.id}`}
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
        {blog?.title}
      </Title>
      <Text c="dimmed" fz="sm">
        Last Updated: {dayjs(blog?.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
      </Text>
      <Text>{blog?.shortDescription}</Text>
    </Card>
  );
}
