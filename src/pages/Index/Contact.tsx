import { Button, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Contact() {
  const form = useForm({});

  return (
    <Stack gap="xl" p="md" bg="white" className="rounded-lg">
      <Title className="text-center">Contact</Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack>
          <TextInput
            w="100%"
            label="Email"
            placeholder="Enter your email"
            size="lg"
          />
          <Textarea
            label="Message"
            placeholder="Enter your message"
            size="lg"
            rows={4}
          />
          <Button type="submit" size="lg">
            Send
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
