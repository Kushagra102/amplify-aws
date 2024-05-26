"use client";

import { updateCommunity, createAnnouncement } from "@/app/_actions/actions";
import CommunityUpdateForm from "../../../ui-components/CommunityUpdateForm";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import AnnouncementCreateForm from "../../../ui-components/AnnouncementCreateForm";
import { Divider, Heading } from "@aws-amplify/ui-react";

const UpdateCommunityForm = ({
  loggedUser,
  communityId,
  onSubmitForm,
}: {
  loggedUser: AuthUser | null;
  communityId: string | null;
  onSubmitForm: (tab: string) => void;
}) => {
  return (
    <>
      {loggedUser ? (
        <>
          <Heading marginTop={"20px"} marginLeft={"20px"} level={3}>
            Create Announcement
          </Heading>
          <AnnouncementCreateForm
            onSuccess={() => {
              console.log("Community updated successfully");
            }}
            onError={(error) => {
              console.error("Failed to update community", error);
            }}
            onSubmit={(fields) => {
              (async () => {
                try {
                  await createAnnouncement({
                    communityId: communityId || "",
                    title: fields?.title,
                    content: fields?.content,
                    tags: fields?.tags,
                  });
                  onSubmitForm("Tab 2");
                } catch (error) {
                  console.error("Failed to update community", error);
                  throw error;
                }
              })();
              return fields;
            }}
            overrides={{
              announcementId: {
                display: "none",
              },
              likeCount: {
                display: "none",
              },
            }}
          />
          <Divider marginTop={"20px"} orientation="horizontal" />
          <Heading marginTop={"20px"} marginLeft={"20px"} level={3}>
            Update Community
          </Heading>
          <CommunityUpdateForm
            id={communityId || ""}
            onSuccess={() => {
              console.log("Community updated successfully");
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
                  onSubmitForm("Tab 1");
                } catch (error) {
                  console.error("Failed to update community", error);
                  throw error;
                }
              })();
              return fields;
            }}
          />
        </>
      ) : (
        redirect(`/community`)
      )}
    </>
  );
};

export default UpdateCommunityForm;
