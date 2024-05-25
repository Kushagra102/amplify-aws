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
    filter: {
      id: {
        eq: payload.communityId,
      },
      owner: {
        eq: payload.userId,
      },
    },
  });

  return data.data.length > 0;
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
