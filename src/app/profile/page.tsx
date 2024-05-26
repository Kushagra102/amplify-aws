"use client";
import React from "react";
import { AccountSettings, Divider, Heading, View } from "@aws-amplify/ui-react";

const Home = () => {
  const handleSuccess = () => {
    alert("password is successfully changed!");
  };

  return (
    <View padding={"30px"}>
      <Heading level={2}>Account Settings</Heading>
      <Divider marginTop={"20px"} marginBottom={"20px"} />
      <Heading level={3} marginBottom="20px">
        Change Password
      </Heading>
      <AccountSettings.ChangePassword onSuccess={handleSuccess} />
    </View>
  );
};

export default Home;
