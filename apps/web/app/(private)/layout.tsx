import type { ReactNode } from "react";
import PrivateNavbar from "@/components/nav/PrivateNavbar";
import Footer from "@/components/Footer";


export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PrivateNavbar />
      {children}
      <Footer variant="private" />
    </>
  );
}
