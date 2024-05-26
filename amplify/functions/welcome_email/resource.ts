import { defineFunction } from "@aws-amplify/backend";

export const welcomeEmail = defineFunction({
  name: "welcome-email",
  timeoutSeconds: 60,
});
