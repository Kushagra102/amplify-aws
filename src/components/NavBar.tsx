"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Divider, Flex, Heading, Image } from "@aws-amplify/ui-react";
import {
  AuthUser,
  fetchUserAttributes,
  FetchUserAttributesOutput,
  signOut,
} from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { Hub } from "aws-amplify/utils";
import { useTransition } from "react";
import logo from "../images/logo.png";

export default function NavBar({
  authUser,
  isLandingPage,
}: {
  authUser: AuthUser | null;
  isLandingPage?: boolean;
}) {
  const [authCheck, setAuthCheck] = useState(!!authUser);
  const [isPending, startTransition] = useTransition();
  const [username, setUsername] = useState<string | null>(null);

  const router = useRouter();
  useEffect(() => {
    const hubListenerCancel = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          setAuthCheck(true);
          startTransition(() => router.push("/community"));
          startTransition(() => router.refresh());
          break;
        case "signedOut":
          setAuthCheck(false);
          startTransition(() => router.push("/auth"));
          startTransition(() => router.refresh());
          break;
      }
    });

    return () => hubListenerCancel();
  }, [router]);

  useEffect(() => {
    const fetchUserAttributes_ = async () => {
      if (authCheck) {
        const userAttributes = await fetchUserAttributes();
        setUsername(userAttributes.preferred_username as string | null);
      }
    };

    fetchUserAttributes_();

    return () => setUsername(null);
  }, [authCheck]);

  const signOutSignIn = async () => {
    if (authCheck) {
      await signOut();
    } else {
      router.push("/auth");
    }
  };
  const defaultRoutes: {
    href: string;
    label: string;
    loggedIn?: boolean;
  }[] = [
    { href: "/community", label: "View Community", loggedIn: true },
    {
      href: "/community-create",
      label: "Create Community",
      loggedIn: true,
    },
  ];

  const routes = defaultRoutes.filter(
    (route) => route.loggedIn === authCheck || route.loggedIn === undefined
  );

  return (
    <>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={"1rem"}
          width={"fit-content"}
        >
          <Image src={logo.src} alt="Logo" height="70px" />
          <Flex as="nav" alignItems="center" gap="3rem" margin="0 2rem">
            {routes.map((route) => (
              <Link
                className="p-2 rounded-md text-[#047D95] font-semibold"
                key={route.href}
                href={route.href}
              >
                {route.label}
              </Link>
            ))}
          </Flex>
        </Flex>
        {!isLandingPage && (
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding={"1rem"}
            width={"fit-content"}
          >
            <p className="w-fit">
              {username ? `Welcome, ${username}...` : "Welcome"}
            </p>
            <Button
              variation="primary"
              borderRadius="2rem"
              className="mr-4"
              onClick={signOutSignIn}
            >
              {authCheck ? "Sign Out" : "Sign In"}
            </Button>
          </Flex>
        )}
      </Flex>
      <Divider size="small"></Divider>
    </>
  );
}
