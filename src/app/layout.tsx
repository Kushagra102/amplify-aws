import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Auth from "@/components/auth/Auth";
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
    <html lang="en">
      <body className={inter.className}>
        <Auth>{children}</Auth>
      </body>
    </html>
  );
}
