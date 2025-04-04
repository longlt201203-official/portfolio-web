import { Button, Group, SimpleGrid, Stack, Title, Modal, TextInput, NumberInput } from "@mantine/core";
import TimelineCard from "./TimelineCard";
import { useTimelineApis } from "../../../hooks/apis/timeline";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { TimelineResponse, CreateTimelineRequest } from "../../../hooks/apis/timeline";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";

export default function TimelinePage() {
  const { getTimelines, createTimeline, updateTimeline, deleteTimeline } = useTimelineApis();
  const queryClient = useQueryClient();
  const [opened, { open, close }] = useDisclosure(false);
  const [editingTimeline, setEditingTimeline] = useState<TimelineResponse | null>(null);

  // Query to fetch timelines
  const timelinesQuery = useQuery({
    queryKey: ["timelines"],
    queryFn: getTimelines
  });

  // Form for adding/editing timelines
  const form = useForm<CreateTimelineRequest>({
    initialValues: {
      time: "",
      title: "",
      content: [""],
      sort: 0
    }
  });

  // Mutation to create a timeline
  const createTimelineMutation = useMutation({
    mutationFn: createTimeline,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timelines"] });
      toast.success("Timeline created successfully");
      close();
      form.reset();
    },
    onError: (error) => {
      toast.error("Failed to create timeline");
      console.error(error);
    }
  });

  // Mutation to update a timeline
  const updateTimelineMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreateTimelineRequest }) => 
      updateTimeline(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timelines"] });
      toast.success("Timeline updated successfully");
      close();
      setEditingTimeline(null);
      form.reset();
    },
    onError: (error) => {
      toast.error("Failed to update timeline");
      console.error(error);
    }
  });

  // Mutation to delete a timeline
  const deleteTimelineMutation = useMutation({
    mutationFn: deleteTimeline,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timelines"] });
      toast.success("Timeline deleted successfully");
    },
    onError: (error) => {
      toast.error("Failed to delete timeline");
      console.error(error);
    }
  });

  const handleOpenModal = (timeline?: TimelineResponse) => {
    if (timeline) {
      setEditingTimeline(timeline);
      form.setValues({
        time: timeline.time,
        title: timeline.title,
        content: timeline.content,
        sort: timeline.sort
      });
    } else {
      setEditingTimeline(null);
      form.reset();
    }
    open();
  };

  const handleSubmit = (values: CreateTimelineRequest) => {
    if (editingTimeline) {
      updateTimelineMutation.mutate({ id: editingTimeline.id, data: values });
    } else {
      createTimelineMutation.mutate(values);
    }
  };

  const handleAddContentField = () => {
    form.insertListItem('content', '');
  };

  const handleRemoveContentField = (index: number) => {
    form.removeListItem('content', index);
  };

  return (
    <Stack>
      <Title>Timeline</Title>
      <Group>
        <Button onClick={() => handleOpenModal()}>Add</Button>
      </Group>
      
      {timelinesQuery.isLoading ? (
        <div>Loading timelines...</div>
      ) : timelinesQuery.error ? (
        <div>Error loading timelines</div>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
          {timelinesQuery.data?.map((timeline) => (
            <TimelineCard 
              key={timeline.id} 
              timeline={timeline} 
              onEdit={handleOpenModal}
              onDelete={(id) => deleteTimelineMutation.mutate(id)}
            />
          ))}
        </SimpleGrid>
      )}

      <Modal 
        opened={opened} 
        onClose={close} 
        title={editingTimeline ? "Edit Timeline" : "Add Timeline"}
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Time"
              placeholder="e.g., 01/2024"
              required
              {...form.getInputProps('time')}
            />
            
            <TextInput
              label="Title"
              placeholder="e.g., Software Developer at Company"
              required
              {...form.getInputProps('title')}
            />
            
            <NumberInput
              label="Sort Order"
              placeholder="0"
              required
              {...form.getInputProps('sort')}
            />
            
            <Stack>
              <Group justify="space-between">
                <Title order={6}>Content Items</Title>
                <Button size="xs" onClick={handleAddContentField}>Add Item</Button>
              </Group>
              
              {form.values.content.map((_, index) => (
                <Group key={index}>
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder={`Content item ${index + 1}`}
                    {...form.getInputProps(`content.${index}`)}
                  />
                  {form.values.content.length > 1 && (
                    <Button 
                      color="red" 
                      size="xs"
                      onClick={() => handleRemoveContentField(index)}
                    >
                      Remove
                    </Button>
                  )}
                </Group>
              ))}
            </Stack>
            
            <Group justify="flex-end">
              <Button variant="outline" onClick={close}>Cancel</Button>
              <Button type="submit">
                {editingTimeline ? "Update" : "Create"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </Stack>
  );
}