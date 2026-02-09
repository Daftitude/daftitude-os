// components/nav/nav.config.ts

export type EcosystemItem = {
  label: string;
  slug: string;
};

/**
 * Single source of truth for DaFTitude ecosystem sections
 * These MUST exist as routes:
 *
 * Public:  /{slug}
 * Private: /apps/{slug}
 */
export const ECOSYSTEM: EcosystemItem[] = [
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

/* --------------------------------------------------
   Derived Nav Sets (NO DUPLICATION)
-------------------------------------------------- */

export const PUBLIC_NAV = ECOSYSTEM.map((item) => ({
  label: item.label,
  href: `/${item.slug}`,
}));

export const PRIVATE_NAV = [
  { label: "Dashboard", href: "/dashboard" },
  ...ECOSYSTEM.map((item) => ({
    label: item.label,
    href: `/apps/${item.slug}`,
  })),
];

/* --------------------------------------------------
   Utility / Secondary (Optional)
-------------------------------------------------- */

export const PUBLIC_UTIL = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
];

export const PRIVATE_UTIL = [
  { label: "About", href: "/apps/about" },
  { label: "Contact", href: "/apps/contact" },
  { label: "Donate", href: "/apps/donate" },
];
