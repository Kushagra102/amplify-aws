import CreateCommunityForm from "@/components/theme/CreateCommunityForm";
import { getAuthenticatedUser } from "@/utils/amplify-utils";

const Home = async ({ }: {}) => {
    return (
        <CreateCommunityForm loggedUser={await getAuthenticatedUser()} />
    );
};

export default Home;
