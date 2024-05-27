import { defineFunction, secret } from "@aws-amplify/backend";

export const welcomeEmail = defineFunction({
  name: "welcome-email",
  timeoutSeconds: 60,
  environment: {
    EMAIL_ID: secret("EMAIL_ID"),
    EMAIL_PASSWORD: secret("EMAIL_PASSWORD"),
  },
});
