import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dasboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} lg:overflow-hidden bg-gray-100`}>
        <Layout>
          <main className="w-full lg:h-[85vh] lg:overflow-scroll">
            {children}
          </main>
        </Layout>
      </body>
    </html>
  );
}
