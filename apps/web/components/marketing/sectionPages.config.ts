import type { SectionPageConfig } from "./SectionHeroPreview";

export const SECTION_PAGES: Record<string, SectionPageConfig> = {
  fitness: {
    slug: "fitness",
    eyebrow: "DaFTitude • Fitness",
    titleTop: "Discipline OS",
    titleBottom: "+ Calisthenics systems",
    subtitle:
      "Consistency, progressions, mobility, and receipts. Built like a system, not a random workout generator.",
    markSrc: "/brand/daftitude-fitness.png",
    previewId: "preview-fitness",
    previewTitle: "Train like a system, not a mood.",
    previewBody:
      "This hub will evolve into dashboards, skill tracks, and routines you can actually follow. Minimal noise. Maximum follow-through.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    tiles: [
      { k: "Featured", t: "Discipline OS", s: "Streaks, structure, and consistency." },
      { k: "Program", t: "Calisthenics Paths", s: "Skills, progressions, mobility." },
      { k: "Workflow", t: "Tracking", s: "Plans, logs, and proof." },
    ],
  },

  finance: {
    slug: "finance",
    eyebrow: "DaFTitude • Finance",
    titleTop: "Risk-first tools",
    titleBottom: "for markets + crypto",
    subtitle:
      "Dashboards, calculators, guardrails, and research — designed to reduce stupid decisions under pressure.",
    markSrc: "/brand/daftitude-finance.png",
    previewId: "preview-finance",
    previewTitle: "Signals second. Protection first.",
    previewBody:
      "This becomes the place you sanity-check trades, track exposure, and run the math before you press buttons.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    stageWide: true,
    tiles: [
      { k: "Featured", t: "Dashboards", s: "Clarity panels that stay honest." },
      { k: "Tools", t: "Calculators", s: "Position sizing, risk, and entries." },
      { k: "Research", t: "Notes & Models", s: "Frameworks without hype." },
      { k: "Control", t: "Guardrails", s: "Rules that prevent blowups." },
    ],
  },

  tech: {
    slug: "tech",
    eyebrow: "DaFTitude • Tech",
    titleTop: "Engineering systems",
    titleBottom: "that survive production",
    subtitle:
      "Architecture, automation, security, and developer tooling built for real-world constraints.",
    markSrc: "/brand/daftitude-tech.png",
    previewId: "preview-tech",
    previewTitle: "Tools, patterns, and hardening.",
    previewBody:
      "This hub becomes a library of real implementations, checklists, and utilities you can reuse across products.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    stageWide: true,
    tiles: [
      { k: "Featured", t: "Developer Tools", s: "Core utilities and workflows." },
      { k: "Build", t: "Architecture", s: "Patterns that don’t collapse later." },
      { k: "Secure", t: "Hardening", s: "Guardrails, checks, tests." },
      { k: "Ship", t: "Automation", s: "Faster loops with fewer mistakes." },
    ],
  },

  lab: {
    slug: "lab",
    eyebrow: "DaFTitude • Lab",
    titleTop: "Prototypes + utilities",
    titleBottom: "that ship fast",
    subtitle:
      "Experiments, tools, and quick iterations. Some graduate into products. Some stay sharp and small.",
    markSrc: "/brand/daftitude-lab.png",
    previewId: "preview-lab",
    previewTitle: "Where experiments become products.",
    previewBody:
      "This hub is the build queue: what’s cooking, what’s shipping, and what’s getting cut.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    stageWide: true,
    tiles: [
      { k: "Featured", t: "Prototypes", s: "Fast builds with real intent." },
      { k: "Tool", t: "Utilities", s: "Solve one thing extremely well." },
      { k: "R&D", t: "Exploration", s: "Try, measure, iterate." },
      { k: "WIP", t: "Build Queue", s: "What’s currently cooking." },
    ],
  },

  family: {
    slug: "family",
    eyebrow: "DaFTitude • Family",
    titleTop: "Structure + trust",
    titleBottom: "for home life",
    subtitle:
      "Roles, routines, shared planning, and accountability systems designed to be adopted — not just admired.",
    markSrc: "/brand/daftitude-family.png",
    previewId: "preview-family",
    previewTitle: "A home dashboard that rewards structure.",
    previewBody:
      "This becomes shared planning, routines, and family tools — tied together by trust mechanics and clarity.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    tiles: [
      { k: "Featured", t: "Home Dashboard", s: "Shared planning + coordination." },
      { k: "System", t: "Roles & Rules", s: "Clarity and accountability." },
      { k: "Workflow", t: "Routines", s: "Make consistency normal." },
    ],
  },

  apparel: {
    slug: "apparel",
    eyebrow: "DaFTitude • Apparel",
    titleTop: "Utility-first drops",
    titleBottom: "minimal + clean",
    subtitle:
      "Gear designed like products, not merch. Limited drops, staple basics, system-themed pieces.",
    markSrc: "/brand/daftitude-apparel.png",
    previewId: "preview-apparel",
    previewTitle: "Designed like products, not gimmicks.",
    previewBody:
      "This hub becomes drops, sizing, fit notes, and the story behind releases — clean and intentional.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    tiles: [
      { k: "Featured", t: "Drops", s: "Limited releases and staples." },
      { k: "Design", t: "Identity", s: "Clean visuals, no noise." },
      { k: "Quality", t: "Fit & Finish", s: "Wearable, not cringe." },
    ],
  },

  study: {
    slug: "study",
    eyebrow: "DaFTitude • Study",
    titleTop: "Learning systems",
    titleBottom: "that compound skill",
    subtitle:
      "Roadmaps, notes, drills, and projects — designed for retention, repetition, and real output.",
    markSrc: "/brand/daftitude-study.png",
    previewId: "preview-study",
    previewTitle: "Chaos → structure → mastery.",
    previewBody:
      "This becomes structured learning paths with drills and projects that prove competence — not vibes.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    tiles: [
      { k: "Featured", t: "Roadmaps", s: "Structured learning paths." },
      { k: "Tools", t: "Notes & Drills", s: "Retention systems." },
      { k: "Output", t: "Projects", s: "Proof, not vibes." },
    ],
  },

  music: {
    slug: "music",
    eyebrow: "DaFTitude • Music",
    titleTop: "Creative output",
    titleBottom: "with structure",
    subtitle:
      "Production experiments, templates, playlists, and process — creative engineering instead of mystique.",
    markSrc: "/brand/daftitude-music.png",
    previewId: "preview-music",
    previewTitle: "Sound as a system.",
    previewBody:
      "This becomes a pipeline: templates, experiments, released work, and the repeatable process behind it.",
    primaryHref: "/signup",
    primaryLabel: "Create account",
    secondaryHref: "/login",
    secondaryLabel: "Sign in",
    tiles: [
      { k: "Featured", t: "Projects", s: "Tracks and experiments." },
      { k: "Workflow", t: "Templates", s: "Repeatable pipelines." },
      { k: "Sound", t: "Design", s: "Textures, energy, polish." },
    ],
  },
};