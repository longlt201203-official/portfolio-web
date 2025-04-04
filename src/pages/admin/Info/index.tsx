import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
    Button,
    Card,
    Group,
    Stack,
    Text,
    Title,
    Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { AccountResponse, useAccountApis } from "../../../hooks/apis/account";
import { toast } from "react-toastify";
import EditInfoForm from "./EditInfoForm";
import useAuth from "../../../hooks/useAuth";

export default function InfoPage() {
    const { profile, fetchProfile } = useAuth();
    const { updateAccount } = useAccountApis();
    const [isEditing, setIsEditing] = useState(false);

    const form = useForm<AccountResponse>({
        initialValues: {
            id: "",
            emails: [""],
            firstName: "",
            lastName: "",
            phoneNumbers: [""],
            addresses: [""],
            superEmail: "",
        },
    });

    useEffect(() => {
        if (profile) {
            form.setValues(profile);
        }
    }, [profile]);

    // Use the account API to update the profile
    const updateProfileMutation = useMutation({
        mutationFn: (data: AccountResponse) => updateAccount(data.id, data),
        onSuccess: () => {
            toast.success("Profile updated successfully");
            setIsEditing(false);
            fetchProfile();
        },
        onError: (error) => {
            toast.error("Failed to update profile");
            console.error(error);
        },
    });

    const handleSubmit = (values: AccountResponse) => {
        updateProfileMutation.mutate(values);
    };

    return (
        <Stack>
            <Title>My Information</Title>

            {!isEditing ? (
                <Card shadow="sm" padding="lg">
                    <Stack>
                        <Group justify="space-between">
                            <Title order={3}>
                                {profile?.firstName} {profile?.lastName}
                            </Title>
                            <Button onClick={() => setIsEditing(true)}>Edit</Button>
                        </Group>

                        <Divider my="sm" />

                        <Stack>
                            <Title order={5}>Super Email</Title>
                            {profile.superEmail}
                        </Stack>

                        <Stack>
                            <Title order={5}>Email Addresses</Title>
                            {profile?.emails.map((email, index) => (
                                <Text key={index}>{email}</Text>
                            ))}
                        </Stack>

                        <Stack>
                            <Title order={5}>Phone Numbers</Title>
                            {profile?.phoneNumbers.map((phone, index) => (
                                <Text key={index}>{phone}</Text>
                            ))}
                        </Stack>

                        <Stack>
                            <Title order={5}>Addresses</Title>
                            {profile?.addresses.map((address, index) => (
                                <Text key={index}>{address}</Text>
                            ))}
                        </Stack>
                    </Stack>
                </Card>
            ) : (
                <EditInfoForm form={form} handleSubmit={handleSubmit} loading={updateProfileMutation.isPending} onClose={() => setIsEditing(false)} />
            )}
        </Stack>
    );
}