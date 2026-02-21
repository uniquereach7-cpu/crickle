import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Crickle",
  description: "Crickle sports courts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
