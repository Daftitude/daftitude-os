export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[]; // future dropdown support (no rewrites later)
};

export type NavGroup = {
  id: string;
  items: NavItem[];
};
