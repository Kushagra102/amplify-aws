"use server";
import { cookieBasedClient, getAuthenticatedUser } from "@/utils/amplify-utils";
import { Schema } from "../../../amplify/data/resource";
import { redirect } from "next/navigation";

export const getAllCommunities = async (payload: {
  name: Schema["Community"]["type"]["name"];
}) => {
  if (!payload.name) {
    const data = await cookieBasedClient.models.Community.list({
      authMode: "apiKey",
      selectionSet: [
        "announcements.*",
        "name",
        "id",
        "description",
        "owner",
        "banner",
      ],
    });
    return data.data;
  }

  const data = await cookieBasedClient.models.Community.list({
    filter: {
      name: {
        eq: payload.name,
      },
    },
    selectionSet: [
      "announcements.*",
      "name",
      "id",
      "description",
      "owner",
      "banner",
    ],
    authMode: "apiKey",
  });

  return data.data;
};

export const getCommunityById = async (payload: {
  id: Schema["Community"]["type"]["id"];
}) => {
  const data = await cookieBasedClient.models.Community.list({
    filter: {
      id: {
        eq: payload.id,
      },
    },
    selectionSet: ["name", "id", "description", "owner", "banner", "createdAt"],
    authMode: "apiKey",
  });

  return data.data[0];
};

export const createCommunity = async (payload: {
  name: Schema["Community"]["type"]["name"];
  description: Schema["Community"]["type"]["description"];
  banner: Schema["Community"]["type"]["banner"];
}) => {
  const { data } = await cookieBasedClient.models.Community.create({
    name: payload.name,
    description: payload.description,
    banner: payload.banner,
  });

  console.log(data);
  redirect("/community");
};

export const updateCommunity = async (payload: {
  id: Schema["Community"]["type"]["id"];
  name: Schema["Community"]["type"]["name"];
  description: Schema["Community"]["type"]["description"];
  banner: Schema["Community"]["type"]["banner"];
}) => {
  const { data } = await cookieBasedClient.models.Community.update({
    id: payload.id,
    name: payload.name,
    description: payload.description,
    banner: payload.banner,
  });

  console.log(data);
};

export const deleteCommunity = async (payload: {
  id: Schema["Community"]["type"]["id"];
}) => {
  const { data } = await cookieBasedClient.models.Community.delete({
    id: payload.id,
  });
};

export const isUserPartOfCommunity = async (payload: {
  userId: Schema["User"]["type"]["id"];
  communityId: Schema["Community"]["type"]["id"];
}) => {
  const data = await cookieBasedClient.models.UserCommunity.list({
    filter: {
      userId: {
        eq: payload.userId,
      },
      communityId: {
        eq: payload.communityId,
      },
    },
    authMode: "apiKey",
  });

  return data.data.length > 0;
};

export const isUserTheOwnerOfCommunity = async (payload: {
  userId: Schema["User"]["type"]["id"];
  communityId: Schema["Community"]["type"]["id"];
}) => {
  const data = await cookieBasedClient.models.Community.list({
    authMode: "apiKey",
  });
  data.data = data.data.filter(
    (community) =>
      community.owner === payload.userId && community.id === payload.communityId
  );
  return data.data.length > 0 ? true : false;
};

export const createAnnouncement = async (payload: {
  communityId: Schema["Community"]["type"]["id"];
  title: Schema["Announcement"]["type"]["title"];
  content: Schema["Announcement"]["type"]["content"];
  tags: Schema["Announcement"]["type"]["tags"];
}) => {
  const { data } = await cookieBasedClient.models.Announcement.create({
    communityId: payload.communityId,
    title: payload.title,
    content: payload.content,
    tags: payload.tags,
    likeCount: 0,
  });

  console.log(data);
};

export const getAllAnnouncementsForCommunity = async (payload: {
  communityId: Schema["Community"]["type"]["id"];
}) => {
  const data = await cookieBasedClient.models.Announcement.list({
    filter: {
      communityId: {
        eq: payload.communityId,
      },
    },
    authMode: "apiKey",
    selectionSet: [
      "communityId",
      "title",
      "likeCount",
      "content",
      "tags",
      "communityId",
      "createdAt",
      "community.*",
    ],
  });

  return data.data;
};

export const fetchAuthenticatedUser = async () => {
  try {
    const data = await getAuthenticatedUser();
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};
