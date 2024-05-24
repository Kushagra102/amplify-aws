import { useRouter } from "next/navigation";
import React from "react";

const Home = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default Home;
