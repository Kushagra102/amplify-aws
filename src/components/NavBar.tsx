"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Divider, Flex, Heading, Image } from "@aws-amplify/ui-react";
import { AuthUser, signOut } from "aws-amplify/auth";
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
  }[] = [];

  const routes = defaultRoutes.filter(
    (route) => route.loggedIn === authCheck || route.loggedIn === undefined
  );

  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={"1rem"}
      >
        <Image src={logo.src} alt="Logo" height="70px" />
        {!isLandingPage && (
          <>
            <Flex as="nav" alignItems="center" gap="3rem" margin="0 2rem">
              {routes.map((route) => (
                <Link key={route.href} href={route.href}>
                  {route.label}
                </Link>
              ))}
            </Flex>
            <p className="w-fit">
              {authCheck
                ? `Welcome, ${authUser?.username.substring(0, 8)}...`
                : "Welcome"}
            </p>
            <Button
              variation="primary"
              borderRadius="2rem"
              className="mr-4"
              onClick={signOutSignIn}
            >
              {authCheck ? "Sign Out" : "Sign In"}
            </Button>
          </>
        )}
      </Flex>
      <Divider size="small"></Divider>
    </>
  );
}
