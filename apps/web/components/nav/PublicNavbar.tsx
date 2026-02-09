"use client";

import Link from "next/link";
import NavbarShell from "./NavbarShell";
import { PUBLIC_NAV } from "./nav.config";

export default function PublicNavbar() {
  return (
    <NavbarShell
      brandHref="/"
      items={PUBLIC_NAV}
      rightSlot={
        <>
          <Link className="navBtnGhost" href="/login">
            Sign in
          </Link>
          <Link className="navBtnPrimary" href="/signup">
            Get started
          </Link>
        </>
      }
    />
  );
}
