"use client";
import { getCommunityById } from "@/app/_actions/actions";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useCallback, useEffect, useState } from "react";

const CommunityInfo = ({
  communityId,
  communityInfoState,
}: {
  communityId: string;
  communityInfoState: any;
}) => {
  const [data, setData] = useState<any>(null);

  const updateCommunityData = useCallback(() => {
    (async function communityData() {
      setData(await getCommunityById({ id: communityId }));
    })();
  }, []);

  useEffect(() => {
    updateCommunityData();
  }, [communityInfoState]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">By:</span> {data.owner}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Description:</span> {data.description}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Started On:</span>{" "}
        {new Date(data.createdAt).toLocaleDateString()}
      </p>
      <div className="w-full h-64 bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
        {data.banner ? (
          <StorageImage
            alt={`banner ${data.name}`}
            path={data.banner}
            className="w-full h-full object-cover"
          />
        ) : (
          <p>No banner available</p>
        )}
      </div>
    </div>
  );
};

export default CommunityInfo;
