"use client";

import Link from "next/link";

export default function PrivateNavbar() {
  return (
    <header className="navShell">
      <div className="navInner">
        <Link href="/dashboard" className="navBrand">
          DaFTitude
        </Link>

        <nav className="navLinks" aria-label="App navigation">
          <Link className="navLink" href="/services">Services</Link>
          <Link className="navLink" href="/fitness">Fitness</Link>
          <Link className="navLink" href="/finance">Finance</Link>
          <Link className="navLink" href="/tech">Tech</Link>
          <Link className="navLink" href="/lab">Lab</Link>
          <Link className="navLink" href="/family">Family</Link>
          <Link className="navLink" href="/apparel">Apparel</Link>
          <Link className="navLink" href="/study">Study</Link>
          <Link className="navLink" href="/music">Music</Link>
        </nav>

        <div className="navActions">
          <Link className="navBtnGhost" href="/account">Account</Link>
          <Link className="navBtnPrimary" href="/logout">Log out</Link>
        </div>
      </div>
    </header>
  );
}
