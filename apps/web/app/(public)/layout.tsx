import type { ReactNode } from "react";
import PublicNavbar from "@/components/nav/PublicNavbar";
import Footer from "@/components/Footer";


export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicNavbar />
      {children}
      <Footer variant="public" />
    </>
  );
}
