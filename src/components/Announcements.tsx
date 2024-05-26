"use client";
import { AuthUser } from "aws-amplify/auth";
import React, { useEffect } from "react";
import {
  Flex,
  Heading,
  Card,
  Text,
  Divider,
  View,
  Badge,
} from "@aws-amplify/ui-react";
import { getAllAnnouncementsForCommunity } from "@/app/_actions/actions";
import { Schema } from "../../amplify/data/resource";

const Announcements = ({
  communityId,
  user,
  owner,
  announcementInfoState,
}: {
  communityId: string;
  user: AuthUser | null;
  owner: boolean;
  announcementInfoState: boolean;
}) => {
  const [announcements, setAnnouncements] = React.useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const announcements = await getAllAnnouncementsForCommunity({
          communityId: communityId,
        });
        setAnnouncements(announcements);
      } catch (error) {
        console.error("Failed to get announcements", error);
        throw error;
      }
    })();
  }, [announcementInfoState]);

  return (
    <Flex direction="column" padding="1rem" gap="1rem">
      <Heading level={2}>Community Announcements</Heading>
      {announcements
        .sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
        })
        .map((announcement) => (
          <Card key={announcement.id} variation="outlined" padding="1rem">
            <Flex direction="column" gap="0.5rem">
              <Heading level={4}>{announcement.title}</Heading>
              <Text>{announcement.content}</Text>
              <View>
                <Text fontWeight="bold">Tags: </Text>
                {announcement.tags.split(" ").map((tag: any, index: any) => (
                  <Badge key={index} margin="0.2rem">
                    {tag}
                  </Badge>
                ))}
              </View>
              <Divider />
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="small" color="gray">
                  Posted on:{" "}
                  {new Date(announcement.createdAt).toLocaleDateString()}
                </Text>
                <Text fontSize="small" color="gray">
                  Likes: {announcement.likeCount}
                </Text>
              </Flex>
            </Flex>
          </Card>
        ))}
    </Flex>
  );
};

export default Announcements;
