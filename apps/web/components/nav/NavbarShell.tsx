"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  href: string;
};

type NavbarShellProps = {
  brandHref: string;
  items: NavItem[];
  rightSlot?: ReactNode;
};

export default function NavbarShell({
  brandHref,
  items,
  rightSlot,
}: NavbarShellProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="navShell">
      <div className="navInner">
        <Link href={brandHref} className="navBrand">
          DaFTitude
        </Link>

        <nav className="navLinks" aria-label="Primary">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navLink"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navActions">{rightSlot}</div>
      </div>
    </header>
  );
}
