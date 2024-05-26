import React from "react";
import { getAuthenticatedUser } from "@/utils/amplify-utils";
import Tab from "@/components/Tab";
import { isUserTheOwnerOfCommunity } from "@/app/_actions/actions";

const Home = async ({ params }: { params: { id: string } }) => {

  const user = await getAuthenticatedUser();
  const owner = await isUserTheOwnerOfCommunity({
    communityId: params.id,
    userId: user?.userId || "",
  });

  return <>
    <Tab owner={owner} user={user} communityId={params.id} />
  </>
};

export default Home;
