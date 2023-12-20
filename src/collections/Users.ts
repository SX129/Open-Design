import { CollectionConfig } from "payload/types";

// Defining and authenticating types of users
export const Users: CollectionConfig = {
    slug: "users",
    auth: true,
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: "role",
            admin: {
                condition: () => false,
            },
            type: "select",
            options: [
                {
                    label: "Admin",
                    value: "admin"
                },
                {
                    label: "User",
                    value: "user",
                }
            ]
        },
    ],
}