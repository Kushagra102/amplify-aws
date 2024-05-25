"use client";

import { createCommunity } from "@/app/_actions/actions";
import CommunityCreateForm from "../../../ui-components/CommunityCreateForm";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";


const CreateCommunityForm = ({ loggedUser }: { loggedUser: AuthUser | null }) => {
    return <>
        {loggedUser ?
            <CommunityCreateForm
                onSuccess={() => {
                    console.log("Community created successfully");
                }}
                onError={(error) => {
                    console.error("Failed to create community", error);
                }}
                onSubmit={(fields) => {
                    (async () => {
                        try {
                            await createCommunity({
                                name: fields.name,
                                description: fields.description,
                                banner: fields.banner,
                            });
                        } catch (error) {
                            console.error("Failed to create community", error);
                            throw error;
                        }
                    })();
                    return fields;
                }}
                clearOnSuccess={true}
            /> : redirect("/community")}
    </>
};

export default CreateCommunityForm;
