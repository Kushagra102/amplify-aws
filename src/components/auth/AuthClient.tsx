"use client";

import { Authenticator } from "@aws-amplify/ui-react";

const AuthClient = () => {
  return <Authenticator signUpAttributes={["name", "preferred_username"]} />;
};

export default AuthClient;
