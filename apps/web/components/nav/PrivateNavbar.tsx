"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ECOSYSTEM = [
  { label: "Services", slug: "services" },
  { label: "Fitness", slug: "fitness" },
  { label: "Finance", slug: "finance" },
  { label: "Tech", slug: "tech" },
  { label: "Lab", slug: "lab" },
  { label: "Family", slug: "family" },
  { label: "Apparel", slug: "apparel" },
  { label: "Study", slug: "study" },
  { label: "Music", slug: "music" },
];

export default function PrivateNavbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="navShell">
      <div className="navInner">
        {/* Brand */}
        <Link href="/dashboard" className="navBrand">
          DaFTitude
        </Link>

        {/* Primary Nav */}
        <nav className="navLinks" aria-label="Primary">
          <Link
            href="/dashboard"
            className="navLink"
            aria-current={isActive("/dashboard") ? "page" : undefined}
          >
            Dashboard
          </Link>

          {ECOSYSTEM.map(({ label, slug }) => {
            const href = `/apps/${slug}`;
            return (
              <Link
                key={slug}
                href={href}
                className="navLink"
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="navActions">
          <Link className="navBtnGhost" href="/apps/account">
            Account
          </Link>
          <Link className="navBtnPrimary" href="/apps/contact">
            Support
          </Link>
        </div>
      </div>
    </header>
  );
}
 