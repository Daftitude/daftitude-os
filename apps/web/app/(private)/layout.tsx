import { auth } from "@clerk/nextjs/server";
import type { ReactNode } from "react";
import PrivateNavbar from "@/components/nav/PrivateNavbar";
import Footer from "@/components/Footer";

export default async function PrivateLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();
  if (!userId) {
    // If not signed in, Clerk will handle redirect based on your configured URLs
    // You can also redirect manually if you prefer.
  }

  return (
    <>
      <PrivateNavbar />
      {children}
      <Footer variant="private" />
    </>
  );
}
