"use client";
import { Alert, Tabs } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import UpdateCommunityForm from "./theme/UpdateCommunityForm";
import CommunityInfo from "./CommunityInfo";
import DeleteCommunity from "./theme/DeleteCommunity";
import { useState } from "react";

const Tab = ({
  communityId,
  user,
  owner,
}: {
  communityId: string;
  user: AuthUser | null;
  owner: boolean;
}) => {
  const [tab, setTab] = useState("Tab 1");
  const [communityInfoState, setCommunityInfoState] = useState(false);

  return (
    <>
      <Tabs.Container
        onValueChange={(tab) => setTab(tab)}
        defaultValue={tab}
        value={tab}
        width="relative.full"
        height="relative.full"
      >
        <Tabs.List>
          <Tabs.Item value="Tab 1">About</Tabs.Item>
          <Tabs.Item value="Tab 2">Announcements</Tabs.Item>
          <Tabs.Item value="Tab 3">Manage</Tabs.Item>
        </Tabs.List>
        <Tabs.Panel value="Tab 1" width="relative.full" height="relative.full">
          <CommunityInfo
            communityInfoState={communityInfoState}
            communityId={communityId}
          />
        </Tabs.Panel>
        <Tabs.Panel value="Tab 2">Tab 1 content</Tabs.Panel>
        {owner === true ? (
          <Tabs.Panel value="Tab 3">
            <UpdateCommunityForm
              loggedUser={user}
              communityId={communityId}
              onSubmitForm={() => {
                setTab("Tab 1");
                setCommunityInfoState(!communityInfoState);
              }}
            />
            <DeleteCommunity communityId={communityId} />
          </Tabs.Panel>
        ) : (
          <Tabs.Panel value="Tab 3" isDisabled>
            <Alert>You are not the owner of the community.</Alert>
          </Tabs.Panel>
        )}
      </Tabs.Container>
    </>
  );
};

export default Tab;
