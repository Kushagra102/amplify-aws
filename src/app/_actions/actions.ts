"use server";
import { cookieBasedClient } from "@/utils/amplify-utils";
import { Schema } from "../../../amplify/data/resource";

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
