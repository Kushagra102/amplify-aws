"use client";

import { updateCommunity } from "@/app/_actions/actions";
import CommunityUpdateForm from "../../../ui-components/CommunityUpdateForm";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";



const UpdateCommunityForm = ({ loggedUser, communityId }: { loggedUser: AuthUser | null, communityId: string | null}) => {

    return <>
        {loggedUser ?
            <CommunityUpdateForm
                id={communityId || ""}
                onSuccess={() => {
                    console.log("Community updated successfully");
                    redirect(`/community/{communityId}`);
                }}
                onError={(error) => {
                    console.error("Failed to update community", error);
                }}
                onSubmit={(fields) => {
                    (async () => {
                        try {
                            await updateCommunity({
                                id: communityId || "",
                                name: fields?.name,
                                description: fields?.description,
                                banner: fields?.banner,
                            });
                        } catch (error) {
                            console.error("Failed to update community", error);
                            throw error;
                        }
                    })();
                    return fields;
                }}
            /> : redirect(`/community`)}
    </>
};

export default UpdateCommunityForm;