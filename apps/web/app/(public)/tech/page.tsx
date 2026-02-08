// apps/web/app/tech/page.tsx
import PageShell, { FeedItem, GridCard, StatTile } from "@/components/PageShell";

const stats: StatTile[] = [
  { label: "Briefs", value: "9", sublabel: "3 live • 6 queued" },
  { label: "Guides", value: "0", sublabel: "building library" },
  { label: "Tools", value: "2", sublabel: "in lab" },
  { label: "Focus", value: "Systems", sublabel: "behavior + incentives" },
  { label: "Mode", value: "Practical", sublabel: "real-world constraints" },
  { label: "Updated", value: "Today", sublabel: "active build" },
];

const gridCards: GridCard[] = [
  {
    title: "🧠 Explore the Tech Hub",
    subtitle: "Tips, guides, and deep dives into tech made simple.",
    href: "/tech",
    tag: "Active",
  },
  {
    title: "📦 Unboxings & Reviews",
    subtitle: "The real scoop on devices and gadgets before you buy.",
    href: "/tech",
    tag: "Building",
  },
  {
    title: "🛠️ DIY Setup & Fixes",
    subtitle: "Smart home installs, TV mounting, networks, and repairs.",
    href: "/tech",
    tag: "Active",
  },
  {
    title: "📊 Product Comparisons",
    subtitle: "Side-by-side breakdowns to pick the best fit.",
    href: "/tech",
    tag: "Building",
  },
  {
    title: "🤖 AI & Automation Tips",
    subtitle: "Practical AI usage + automation patterns that reduce friction.",
    href: "/tech",
    tag: "Active",
  },
  {
    title: "📁 System Briefs",
    subtitle: "Short, current observations about systems under pressure.",
    href: "/tech",
    tag: "Active",
  },
];

const feedItems: FeedItem[] = [
  {
    title: "Why Skill-Based Matchmaking Still Feels Unfair",
    excerpt:
      "Competitive matchmaking systems aim for balance, yet player trust often erodes even when outcomes are statistically fair.",
    tags: ["Games", "Matchmaking"],
    date: "Dec 2025",
    href: "#",
  },
  {
    title: "Dating Apps Are Optimizing for Engagement, Not Matches",
    excerpt:
      "Dating platforms increasingly reward attention and retention over successful long-term outcomes.",
    tags: ["Platforms", "Algorithms"],
    date: "Dec 2025",
    href: "#",
  },
  {
    title: "Flock Safety Cameras and the Normalization of Surveillance",
    excerpt:
      "License plate recognition systems are spreading rapidly, reshaping expectations around privacy and public safety.",
    tags: ["Security", "Society"],
    date: "Dec 2025",
    href: "#",
  },
  {
    title: "Social Media Is Reshaping Behavior Faster Than We Can Measure It",
    excerpt: "Coming soon.",
    tags: ["Platforms", "Psychology"],
    comingSoon: true,
  },
  {
    title: "Subscription Fatigue Is a Systemic Design Choice",
    excerpt: "Coming soon.",
    tags: ["Economy", "Products"],
    comingSoon: true,
  },
  {
    title: "The Job Market Isn’t Broken — It’s Optimized Differently",
    excerpt: "Coming soon.",
    tags: ["Work", "Incentives"],
    comingSoon: true,
  },
];

export default function TechPage() {
  return (
    <PageShell
      eyebrow="DAFTITUDE • TECH HUB"
      headline="Design intelligence for real-world systems."
      subhead="Tips, guides, and deep dives into technology made simple — plus System Briefs that decode how platforms, incentives, and human behavior actually behave under pressure."
      primaryCta={{ label: "Explore the Hub →", href: "/tech" }}
      secondaryCta={{ label: "Request a Topic →", href: "/contact" }}
      chips={[
        "AI + Automation",
        "Security + Privacy",
        "Systems Thinking",
        "Real-World Fixes",
        "Device Truth",
      ]}
      stats={stats}
      gridTitle="Modules"
      gridCards={gridCards}
      feedTitle="System Briefs"
      feedItems={feedItems}
      ctaBandTitle="Got a topic you want covered?"
      ctaBandBody="Tell me what you’re curious about and why it matters. I’ll turn it into a clean breakdown or a practical guide."
      ctaBandPrimary={{ label: "Request a Topic →", href: "/contact" }}
      ctaBandSecondary={{ label: "Donate →", href: "/donate" }}
    />
  );
}
