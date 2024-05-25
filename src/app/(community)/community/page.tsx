import AllCommunity from "@/components/AllCommunity";
import { getAllCommunities } from "../../_actions/actions";

export default function Home() {
  return <AllCommunity getAllCommunities={getAllCommunities} />;
}
