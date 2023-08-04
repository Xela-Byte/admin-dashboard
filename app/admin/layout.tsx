import "@/app/globals.css";
import Layout from "@/components/layout/AdminLayout";
import { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Dasboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={`lg:overflow-hidden bg-gray-100`}>
        <Layout>
          <main className="w-full lg:h-[85vh] lg:overflow-scroll">
            {children}
          </main>
        </Layout>
      </div>
    </>
  );
}
