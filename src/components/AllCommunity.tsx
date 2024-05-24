"use client";
import { Card, Flex, Grid, Heading, SearchField } from "@aws-amplify/ui-react";
import React, { useCallback, useEffect, useState } from "react";
import { Schema } from "../../amplify/data/resource";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AllCommunity = ({
  getAllCommunities,
}: {
  getAllCommunities: (payload: {
    name: Schema["Community"]["type"]["name"];
  }) => any;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [communities, setCommunities] = useState<Schema["Community"]["type"][]>(
    []
  );

  const router = useRouter();

  const getCommunitiesFunction = useCallback(
    async (overrideQuery: string | null) => {
      const data = await getAllCommunities({
        name: overrideQuery || searchQuery,
      });
      setCommunities(data);
    },
    []
  );

  useEffect(() => {
    const urlQuery = new URLSearchParams(window.location.search).get("q");
    if (urlQuery) {
      setSearchQuery(urlQuery);
    }

    getCommunitiesFunction(urlQuery);
  }, []);

  useEffect(() => {
    const url = new URL(window?.location.href);
    url.searchParams.set("q", searchQuery);
    window?.history.pushState({}, "", url);
  }, [searchQuery]);

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"fit-content"}
    >
      <Heading
        level={1}
        margin={"auto"}
        marginTop={"20px"}
        maxWidth={"700px"}
        textAlign={"center"}
      >
        Discover new Communities among developers
      </Heading>

      <SearchField
        label="Search For Communities"
        margin={"auto"}
        marginTop={"20px"}
        width={"400px"}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onSubmit={() => {
          getCommunitiesFunction(searchQuery);
        }}
        value={searchQuery}
      />

      <Grid templateColumns="1fr 1fr" marginTop={"20px"}>
        {communities.map((community) => {
          return (
            <Card
              onClick={() => {
                router.push(`/community/${community.id}`);
              }}
              key={community.id}
              padding={"10px"}
              border={"1px solid #ddd"}
              borderRadius={"5px"}
              margin={"10px"}
              width={"fit-content"}
            >
              <Image
                src={
                  community.banner! ||
                  "https://3dc.opensutd.org/imgs/banner.jpg"
                }
                alt={community.name!}
                width={400}
                height={10}
              />
              <Heading level={3}>{community.name}</Heading>
              <p>{community.description}</p>
              <p>Owner: {community.owner}</p>
            </Card>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default AllCommunity;
