import { ActionIcon, Button, Card, Divider, Group, Paper, Stack, TextInput } from "@mantine/core";
import { AccountResponse } from "../../../hooks/apis/account";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { UseFormReturnType } from "@mantine/form";

export interface EditInfoFormProps {
    form: UseFormReturnType<AccountResponse, (values: AccountResponse) => AccountResponse>;
    loading?: boolean;
    handleSubmit?: (values: AccountResponse) => void;
    onClose?: () => void;
}

export default function EditInfoForm({ form, loading, handleSubmit, onClose }: EditInfoFormProps) {
    const addItem = (field: "emails" | "phoneNumbers" | "addresses") => {
        form.insertListItem(field, "");
    };

    const removeItem = (field: "emails" | "phoneNumbers" | "addresses", index: number) => {
        if (form.values[field].length > 0) {
            form.removeListItem(field, index);
        }
    };

    return (
        <form onSubmit={handleSubmit && form.onSubmit(handleSubmit)}>
            <Card shadow="sm" padding="lg">
                <Stack>
                    <Group grow>
                        <TextInput
                            label="First Name"
                            placeholder="First Name"
                            {...form.getInputProps("firstName")}
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Last Name"
                            {...form.getInputProps("lastName")}
                        />
                    </Group>

                    <Divider my="sm" label="Email Addresses" labelPosition="center" />

                    {form.values.emails.map((_, index) => (
                        <Group key={index}>
                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Email Address"
                                {...form.getInputProps(`emails.${index}`)}
                            />
                            <ActionIcon
                                color="red"
                                onClick={() => removeItem("emails", index)}
                                disabled={form.values.emails.length <= 0}
                            >
                                <TrashIcon className="h-4 w-4" />
                            </ActionIcon>
                        </Group>
                    ))}
                    <Button
                        leftSection={<PlusIcon className="h-4 w-4" />}
                        variant="outline"
                        onClick={() => addItem("emails")}
                        size="xs"
                    >
                        Add Email
                    </Button>

                    <Divider my="sm" label="Phone Numbers" labelPosition="center" />

                    {form.values.phoneNumbers.map((_, index) => (
                        <Group key={index}>
                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Phone Number"
                                {...form.getInputProps(`phoneNumbers.${index}`)}
                            />
                            <ActionIcon
                                color="red"
                                onClick={() => removeItem("phoneNumbers", index)}
                                disabled={form.values.phoneNumbers.length <= 0}
                            >
                                <TrashIcon className="h-4 w-4" />
                            </ActionIcon>
                        </Group>
                    ))}
                    <Button
                        leftSection={<PlusIcon className="h-4 w-4" />}
                        variant="outline"
                        onClick={() => addItem("phoneNumbers")}
                        size="xs"
                    >
                        Add Phone Number
                    </Button>

                    <Divider my="sm" label="Addresses" labelPosition="center" />

                    {form.values.addresses.map((_, index) => (
                        <Paper p="xs" withBorder key={index}>
                            <Group>
                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="Address"
                                    {...form.getInputProps(`addresses.${index}`)}
                                />
                                <ActionIcon
                                    color="red"
                                    onClick={() => removeItem("addresses", index)}
                                    disabled={form.values.addresses.length <= 0}
                                >
                                    <TrashIcon className="h-4 w-4" />
                                </ActionIcon>
                            </Group>
                        </Paper>
                    ))}
                    <Button
                        leftSection={<PlusIcon className="h-4 w-4" />}
                        variant="outline"
                        onClick={() => addItem("addresses")}
                        size="xs"
                    >
                        Add Address
                    </Button>

                    <Group justify="flex-end" mt="md">
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" loading={loading}>
                            Save Changes
                        </Button>
                    </Group>
                </Stack>
            </Card>
        </form>
    )
}