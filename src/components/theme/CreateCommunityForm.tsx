"use client";

import { createCommunity } from "@/app/_actions/actions";
import CommunityCreateForm from "../../../ui-components/CommunityCreateForm";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { getUrl, uploadData } from "aws-amplify/storage";
import { v4 as uuidV4 } from "uuid";

const CreateCommunityForm = ({
  loggedUser,
}: {
  loggedUser: AuthUser | null;
}) => {
  return (
    <>
      {loggedUser ? (
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
                const uuidForFileName = uuidV4();
                const res = await uploadData({
                  path: `banners/${uuidForFileName}.png`,
                  data: fields.banner as File,
                }).result;

                await createCommunity({
                  name: fields.name,
                  description: fields.description,
                  banner: `banners/${uuidForFileName}.png`,
                });
              } catch (error) {
                console.log(error);
                console.error("Failed to create community", error);
                throw error;
              }
            })();
            return fields;
          }}
          clearOnSuccess={true}
          overrides={{ banner: { type: "file" } }}
        />
      ) : (
        redirect("/community")
      )}
    </>
  );
};

export default CreateCommunityForm;
