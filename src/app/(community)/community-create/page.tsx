import CreateCommunityForm from "@/components/theme/CreateCommunityForm";
import { getAuthenticatedUser } from "@/utils/amplify-utils";
import { Flex } from "@aws-amplify/ui-react";

const Home = async ({}: {}) => {
  return (
    <div className="flex w-full my-auto flex-col max-w-3xl mx-auto">
      <div className="w-full flex items-center justify-center py-8">
        <p className="text-3xl font-bold">Create Your Community today!</p>
      </div>
      <div className="w-full">
        <CreateCommunityForm loggedUser={await getAuthenticatedUser()} />
      </div>
    </div>
  );
};

export default Home;
