import {
  Button,
  Card,
  Stack,
  Title,
  SimpleGrid,
  Image,
  FileInput,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  InfoResponse,
  UpdateInfoRequest,
  useInfoApis,
} from "../../../hooks/apis/info";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function InfoPage() {
  const { getInfo, updateInfo } = useInfoApis();

  const form = useForm<UpdateInfoRequest>({
    mode: "uncontrolled",
    initialValues: {
      avt: null,
      name: "",
      introduction: "",
      email: "",
      phone: "",
      location: "",
      githubLink: "",
      githubUsername: "",
      linkedinLink: "",
      linkedinName: "",
    },
  });

  const getInfoQuery = useQuery<InfoResponse>({
    queryKey: ["getInfo"],
    initialData: {
      avt: "",
      name: "",
      introduction: "",
      email: "",
      phone: "",
      location: "",
      githubLink: "",
      githubUsername: "",
      linkedinName: "",
      linkedinLink: "",
    },
    queryFn: getInfo,
  });

  const updateInfoMutation = useMutation({
    mutationFn: updateInfo,
    onSuccess: () => {
      getInfoQuery.refetch();
      form.reset();
    },
  });

  useEffect(() => {
    if (getInfoQuery.data) {
      form.setValues({
        avt: null,
        name: getInfoQuery.data.name,
        introduction: getInfoQuery.data.introduction,
        email: getInfoQuery.data.email,
        phone: getInfoQuery.data.phone,
        location: getInfoQuery.data.location,
        githubLink: getInfoQuery.data.githubLink,
        githubUsername: getInfoQuery.data.githubUsername,
        linkedinLink: getInfoQuery.data.linkedinLink,
        linkedinName: getInfoQuery.data.linkedinName,
      });
    }
  }, [getInfoQuery.data]);

  return (
    <Stack>
      <Title>My Information</Title>

      <Card shadow="sm" padding="lg">
        <form
          onSubmit={form.onSubmit((values) =>
            updateInfoMutation.mutate(values)
          )}
        >
          <SimpleGrid cols={2} spacing="xl">
            <div>
              <Stack>
                <div className="w-[200px] h-[200px] mx-auto">
                  <Image
                    src={getInfoQuery.data.avt}
                    fallbackSrc="https://placehold.co/200"
                    radius="md"
                  />
                </div>
                <FileInput
                  label="Avatar"
                  placeholder="Select a file"
                  key={form.key("avt")}
                  {...form.getInputProps("avt")}
                />
                <TextInput
                  label="Name"
                  placeholder="Input name"
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                />
                <Textarea
                  label="Introduction"
                  placeholder="Write introduction"
                  key={form.key("introduction")}
                  {...form.getInputProps("introduction")}
                />
              </Stack>
            </div>

            <div>
              <Stack>
                <TextInput
                  label="Email"
                  placeholder="Input email"
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                />
                <TextInput
                  label="Phone Number"
                  placeholder="Input phone number"
                  key={form.key("phone")}
                  {...form.getInputProps("phone")}
                />
                <TextInput
                  label="Location"
                  placeholder="Input location"
                  key={form.key("location")}
                  {...form.getInputProps("location")}
                />
                <SimpleGrid cols={2} spacing="lg">
                  <TextInput
                    label="GitHub Username"
                    placeholder="Input GitHub username"
                    key={form.key("githubUsername")}
                    {...form.getInputProps("githubUsername")}
                  />
                  <TextInput
                    label="GitHub Link"
                    placeholder="Input GitHub link"
                    key={form.key("github")}
                    {...form.getInputProps("githubLink")}
                  />
                </SimpleGrid>
                <SimpleGrid cols={2} spacing="lg">
                  <TextInput
                    label="LinkedIn Name"
                    placeholder="Input LinkedIn Name"
                    key={form.key("linkedinName")}
                    {...form.getInputProps("linkedinName")}
                  />
                  <TextInput
                    label="LinkedIn"
                    placeholder="Input LinkedIn link"
                    key={form.key("linkedinLink")}
                    {...form.getInputProps("linkedinLink")}
                  />
                </SimpleGrid>
                <Button type="submit">Save</Button>
              </Stack>
            </div>
          </SimpleGrid>
        </form>
      </Card>
    </Stack>
  );
}
