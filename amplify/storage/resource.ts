import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "bannerStorage",
  access: (allow) => ({
    "banners/*": [
      allow.authenticated.to(["read", "write"]),
      allow.guest.to(["read"]),
    ],
  }),
});
