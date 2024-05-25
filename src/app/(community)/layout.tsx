import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import { getAuthenticatedUser } from "@/utils/amplify-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title Listing App",
  description: "List All Titles and Comments",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <NavBar authUser={await getAuthenticatedUser()} isLandingPage={false} />
      {children}
    </section>
  );
}
