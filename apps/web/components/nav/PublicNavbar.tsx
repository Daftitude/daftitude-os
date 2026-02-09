"use client";

import Link from "next/link";

export default function PublicNavbar() {
  return (
    <header className="navShell">
      <div className="navInner">
        <Link href="/" className="navBrand">
          DaFTitude
        </Link>

        <nav className="navLinks" aria-label="Primary">
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
          <Link className="navBtnGhost" href="/login">Sign in</Link>
          <Link className="navBtnPrimary" href="/signup">Get started</Link>
        </div>
      </div>
    </header>
  );
}
