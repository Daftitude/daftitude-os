"use client";

// apps/web/app/(public)/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

type CardStatus = "Active" | "In Development" | "Experimental";

type EcosystemItem = {
  key: string;
  title: string;
  subtitle: string;
  status?: CardStatus;
  viewHref: string;
  readHref: string;
  previewId: string;
  iconSrc: string;   // small icon (top-left)
  logoBgSrc: string; // watermark background
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  // update hash without hard jump
  window.history.replaceState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function EcosystemCard({ item }: { item: EcosystemItem }) {
  return (
    <div
      className="menuCard"
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title} preview`}
      onClick={() => scrollToId(item.previewId)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToId(item.previewId);
        }
      }}
      style={
        {
          ["--cardLogo" as any]: `url(${item.logoBgSrc})`,
        } as CSSProperties
      }
    >
      {/* Background watermark */}
      <div className="menuCardLogoBg" aria-hidden="true" />

      <div className="menuCardTop">
        <div className="menuCardTitleRow">
          <span className="menuCardIcon" aria-hidden="true">
            <Image src={item.iconSrc} alt="" width={32} height={32} />
          </span>
          <div className="menuCardTitle">{item.title}</div>
        </div>

        {item.status ? <div className="pill">{item.status}</div> : null}
      </div>

      <div className="menuCardSub">{item.subtitle}</div>

      {/* Buttons should NOT trigger the card scroll */}
      <div className="cardActions" onClick={(e) => e.stopPropagation()}>
        <Link href={item.viewHref} className="cardBtn cardBtnPrimary">
          VIEW
        </Link>
        <Link href={item.readHref} className="cardBtn cardBtnGhost">
          READ MORE
        </Link>
      </div>

      <div className="menuCardHint">Preview ↓</div>
    </div>
  );
}
function PreviewSection({
  id,
  iconSrc,
  logoSrc,
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  id: string;
  iconSrc: string;
  logoSrc?: string; // optional; if omitted, iconSrc is used
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  const isWideGrid = id.includes("tech") || id.includes("finance") || id.includes("lab");
  const logo = logoSrc ?? iconSrc;

  const tiles =
    id.includes("services")
      ? [
        { k: "Featured", t: "Packages", s: "Clear scope. Clear outcomes." },
        { k: "Build", t: "Custom Systems", s: "From idea to working product." },
        { k: "Audit", t: "Fix & Improve", s: "Security, performance, UX cleanup." },
      ]
      : id.includes("finance")
        ? [
          { k: "Featured", t: "Dashboards", s: "Tracking and clarity panels." },
          { k: "Tools", t: "Calculators", s: "Decision support and trade math." },
          { k: "Research", t: "Notes & Models", s: "Frameworks without hype." },
          { k: "Control", t: "Risk Guardrails", s: "Protect capital first." },
        ]
        : id.includes("fitness")
          ? [
            { k: "Featured", t: "Discipline OS", s: "Consistency system that scales." },
            { k: "Program", t: "Calisthenics Paths", s: "Skills, progressions, mobility." },
            { k: "Workflow", t: "Tracking", s: "Plans, streaks, and receipts." },
          ]
          : id.includes("family")
            ? [
              { k: "Featured", t: "Home Dashboard", s: "Shared planning + coordination." },
              { k: "System", t: "Roles & Rules", s: "Clarity and accountability." },
              { k: "Workflow", t: "Routines", s: "Make consistency normal." },
            ]
            : id.includes("tech")
              ? [
                { k: "Featured", t: "Developer Tools", s: "Core utilities and workflows." },
                { k: "Build", t: "Systems & Architecture", s: "Patterns that survive production." },
                { k: "Secure", t: "Security Practices", s: "Hardening, checks, and guardrails." },
                { k: "Ship", t: "Automation", s: "Faster loops with fewer mistakes." },
              ]
              : id.includes("apparel")
                ? [
                  { k: "Featured", t: "Drops", s: "Limited releases and staple basics." },
                  { k: "Design", t: "Identity", s: "Clean visuals, no noise." },
                  { k: "Quality", t: "Fit & Finish", s: "Wearable, not gimmicky." },
                ]
                : id.includes("study")
                  ? [
                    { k: "Featured", t: "Roadmaps", s: "Structured learning paths." },
                    { k: "Tools", t: "Notes & Drills", s: "Retention + repetition systems." },
                    { k: "Output", t: "Projects", s: "Proof, not vibes." },
                  ]
                  : id.includes("music")
                    ? [
                      { k: "Featured", t: "Projects", s: "Tracks and experiments." },
                      { k: "Workflow", t: "Templates", s: "Repeatable creative pipelines." },
                      { k: "Sound", t: "Design", s: "Textures, energy, and polish." },
                    ]
                    : [
                      { k: "Featured", t: "Prototypes", s: "Experiments that may graduate." },
                      { k: "Tool", t: "Utilities", s: "Solve one thing extremely well." },
                      { k: "R&D", t: "Exploration", s: "Try, measure, iterate." },
                      { k: "WIP", t: "Build Queue", s: "What’s currently cooking." },
                    ];

  return (
    <section id={id} className="previewSection">
      <div className="previewShell">
        <div className="previewCols">
          {/* LEFT */}
          <div className="previewCopy">
            <div className="shellEyebrow">{eyebrow}</div>
            <h3 className="previewTitle">{title}</h3>
            <p className="previewBody">{body}</p>

            {/* Logo under body, before CTA labels */}
            <div className="previewLogoRow" aria-hidden="true">
              <Image src={logo} alt="" width={160} height={160} className="previewLogo" />
            </div>

            <div className="previewCtas">
              <Link href={primaryHref} className="heroLink heroLinkPrimary">
                {primaryLabel} →
              </Link>
              <Link href={secondaryHref} className="heroLink">
                {secondaryLabel} →
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="previewStage" aria-label={`${eyebrow} preview`}>
            <div className="previewStageTop">
              <div className="previewStageTitleRow">
                <div className="previewIcon" aria-hidden="true">
                  <Image src={iconSrc} alt="" width={36} height={36} />
                </div>
                <div className="previewStageTitle">Preview</div>
              </div>

              <div className="previewTabs" role="tablist" aria-label="Preview tabs">
                <button className="previewTab isActive" type="button" role="tab">
                  Overview
                </button>
                <button className="previewTab" type="button" role="tab">
                  Tools
                </button>
                <button className="previewTab" type="button" role="tab">
                  Notes
                </button>
              </div>
            </div>

            {/* Visual mock UI (swap later for screenshots/widgets) */}
            <div className="previewMock" aria-hidden="true">
              <div className="previewMockBar" />
              <div className="previewMockRow">
                <div className="previewMockChip" />
                <div className="previewMockChip" />
                <div className="previewMockChip" />
              </div>
              <div className="previewMockCards">
                <div className="previewMockCard" />
                <div className="previewMockCard" />
              </div>
            </div>

            <div className={isWideGrid ? "previewTiles grid4" : "previewTiles stack3"}>
              {tiles.map((x) => (
                <div key={`${id}-${x.t}`} className="previewTile">
                  <div className="previewTileKicker">{x.k}</div>
                  <div className="previewTileTitle">{x.t}</div>
                  <div className="previewTileSub">{x.s}</div>
                </div>
              ))}
            </div>

            <div className="previewStageFoot">
              Replace this stage with screenshots, mini dashboards, embeds, or live widgets later.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  /**
   * Ecosystem order is controlled here.
   * With .menuCard { grid-column: span 4; } you'll get a 3×2 grid on desktop (first 6),
   * but you now have 9 cards so it will naturally become 3×3.
   */
  const ecosystem: EcosystemItem[] = [
    {
      key: "services",
      title: "Services",
      subtitle: "Pricing, packages, and practical help you can actually use.",
      status: "Active",
      viewHref: "/services",
      readHref: "/services#pricing",
      previewId: "preview-services",
      iconSrc: "/brand/daftitude-services.png",
      logoBgSrc: "/brand/daftitude-services.png",
    },
    {
      key: "fitness",
      title: "Fitness",
      subtitle: "Discipline OS + calisthenics systems built for consistency.",
      status: "Active",
      viewHref: "/fitness/discipline",
      readHref: "/fitness#overview",
      previewId: "preview-fitness",
      iconSrc: "/brand/daftitude-fitness.png",
      logoBgSrc: "/brand/daftitude-fitness.png",
    },
    {
      key: "finance",
      title: "Finance",
      subtitle: "Risk-first tools for markets, crypto, and decision support.",
      status: "Experimental",
      viewHref: "/finance",
      readHref: "/finance#overview",
      previewId: "preview-finance",
      iconSrc: "/brand/daftitude-finance.png",
      logoBgSrc: "/brand/daftitude-finance.png",
    },
    {
      key: "tech",
      title: "Tech",
      subtitle: "Engineering, automation, security, and real-world systems.",
      status: "Active",
      viewHref: "/tech",
      readHref: "/tech#overview",
      previewId: "preview-tech",
      iconSrc: "/brand/daftitude-tech.png",
      logoBgSrc: "/brand/daftitude-tech.png",
    },
    {
      key: "lab",
      title: "Lab / Tools",
      subtitle: "Prototypes, experiments, and utilities that ship fast.",
      status: "Experimental",
      viewHref: "/lab",
      readHref: "/lab#overview",
      previewId: "preview-lab",
      iconSrc: "/brand/daftitude-lab.png",
      logoBgSrc: "/brand/daftitude-lab.png",
    },
    {
      key: "family",
      title: "Family",
      subtitle: "Structure, roles, trust mechanics, and a home dashboard.",
      status: "In Development",
      viewHref: "/family",
      readHref: "/family#overview",
      previewId: "preview-family",
      iconSrc: "/brand/daftitude-family.png",
      logoBgSrc: "/brand/daftitude-family.png",
    },
    {
      key: "apparel",
      title: "Apparel",
      subtitle: "DaFTitude gear, drops, and utility merch (no cringe).",
      status: "Experimental",
      viewHref: "/apparel",
      readHref: "/apparel#overview",
      previewId: "preview-apparel",
      iconSrc: "/brand/daftitude-apparel.png",
      logoBgSrc: "/brand/daftitude-apparel.png",
    },
    {
      key: "study",
      title: "Study",
      subtitle: "My learning systems: notes, drills, roadmaps, and mastery plans.",
      status: "Active",
      viewHref: "/study",
      readHref: "/study#overview",
      previewId: "preview-study",
      iconSrc: "/brand/daftitude-study.png",
      logoBgSrc: "/brand/daftitude-study.png",
    },
    {
      key: "music",
      title: "Music",
      subtitle: "Sound experiments, production, playlists, and creative output.",
      status: "Experimental",
      viewHref: "/music",
      readHref: "/music#overview",
      previewId: "preview-music",
      iconSrc: "/brand/daftitude-music.png",
      logoBgSrc: "/brand/daftitude-music.png",
    },
  ];

  return (
    <main className="homeWrap">
      <div className="homeInner">
        {/* HERO */}
        <section className="homeHero">
          {/* Hero centerpiece logo */}
          <div className="homeHeroMark" aria-label="DaFTitude">
            <Image
              src="/brand/daftitude-logo-main.png"
              alt="DaFTitude"
              width={220}
              height={220}
              priority
              className="homeHeroMarkImg"
            />
          </div>

          <div className="shellEyebrow">DaFTitude • Ecosystem Hub</div>



          <h1 className="homeHeadline">
            Most problems aren’t that complicated.
            <br />
            Most solutions are.
          </h1>

          <p className="homeSub">
            DaFTitude is the umbrella. Each section below is a focused system—built to be used
            under real constraints by real people.
          </p>

          <div className="homeHeroLinks">
            <a
              href="#ecosystem"
              className="heroLink heroLinkPrimary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("ecosystem");
              }}
            >
              Explore the ecosystem →
            </a>

            <Link href="/about" className="heroLink">
              Meet Daft →
            </Link>

            <Link href="/tech" className="heroLink">
              Login →
            </Link>
          </div>

          <a
            className="homeScrollHint"
            href="#ecosystem"
            aria-label="Scroll to ecosystem"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("ecosystem");
            }}
          >
            ↓ scroll ↓
          </a>
        </section>

        {/* ECOSYSTEM GRID */}
        <section id="ecosystem" style={{ scrollMarginTop: 90 }}>
          <div className="homeSectionTitle">The DaFTitude Ecosystem</div>
          <p className="homeSectionSub">
            Click a system to preview it here—use VIEW when you’re ready to jump into the app.
          </p>

          <div className="menuGrid">
            {ecosystem.map((item) => (
              <EcosystemCard key={item.key} item={item} />
            ))}
          </div>
        </section>

        {/* PREVIEWS */}
        <PreviewSection
          id="preview-services"
          iconSrc="/brand/daftitude-services.png"
          eyebrow="Services"
          title="Practical help, clear pricing, no mystery meat."
          body="Packages and rates for building, fixing, advising, or auditing. This is where people go when they want DaFTitude applied directly to their situation."
          primaryHref="/services#pricing"
          primaryLabel="View pricing"
          secondaryHref="/contact"
          secondaryLabel="Talk first"
        />

        <PreviewSection
          id="preview-fitness"
          iconSrc="/brand/daftitude-fitness.png"
          eyebrow="Fitness"
          title="Discipline OS + Calisthenics—built like a game plan."
          body="A repeatable system for showing up daily, plus skill-based calisthenics progressions. No random workouts—just progression, structure, and receipts."
          primaryHref="/fitness/discipline"
          primaryLabel="Open Discipline OS"
          secondaryHref="/fitness/calisthenics"
          secondaryLabel="Open Calisthenics"
        />

        <PreviewSection
          id="preview-finance"
          iconSrc="/brand/daftitude-finance.png"
          eyebrow="Finance"
          title="Risk first. Signals second. Hype last."
          body="Decision tools for markets and crypto: structure, tracking, and guardrails. The goal is clarity under uncertainty, not gambling with extra steps."
          primaryHref="/finance"
          primaryLabel="Open Finance"
          secondaryHref="/finance#tools"
          secondaryLabel="See tools"
        />

        <PreviewSection
          id="preview-tech"
          iconSrc="/brand/daftitude-tech.png"
          eyebrow="Tech"
          title="Developer-grade systems, not motivational posters."
          body="Automation, security, engineering foundations, and tools designed to survive real usage. This is the backbone category—everything else plugs into it."
          primaryHref="/tech"
          primaryLabel="Open Tech"
          secondaryHref="/tech#systems"
          secondaryLabel="See modules"
        />

        <PreviewSection
          id="preview-lab"
          iconSrc="/brand/daftitude-lab.png"
          eyebrow="Lab / Tools"
          title="Where experiments become products."
          body="Prototypes, utilities, and fast iterations. Some will graduate into full systems, some will stay sharp little tools that solve one problem extremely well."
          primaryHref="/lab"
          primaryLabel="Open Lab"
          secondaryHref="/lab#latest"
          secondaryLabel="What’s new"
        />

        <PreviewSection
          id="preview-family"
          iconSrc="/brand/daftitude-family.png"
          eyebrow="Family"
          title="A home dashboard that rewards structure and trust."
          body="Roles, routines, shared planning, and system mechanics that make family operations smoother. Still evolving—built to be adopted, not just admired."
          primaryHref="/family"
          primaryLabel="Open Family"
          secondaryHref="/family#roadmap"
          secondaryLabel="See roadmap"
        />

        <PreviewSection
          id="preview-apparel"
          iconSrc="/brand/daftitude-apparel.png"
          eyebrow="Apparel"
          title="Utility-first drops. Minimal. Clean. Purpose-built."
          body="DaFTitude gear and releases—designed like products, not merch. Limited drops, staple basics, and system-themed pieces that don’t scream for attention."
          primaryHref="/apparel"
          primaryLabel="Open Apparel"
          secondaryHref="/apparel#drops"
          secondaryLabel="See drops"
        />

        <PreviewSection
          id="preview-study"
          iconSrc="/brand/daftitude-study.png"
          eyebrow="Study"
          title="Learning systems that turn chaos into compounding skill."
          body="Notes, drills, roadmaps, and curated resources. This is the backend of the DaFTitude brain—built for retention, repetition, and real outcomes."
          primaryHref="/study"
          primaryLabel="Open Study"
          secondaryHref="/study#systems"
          secondaryLabel="See systems"
        />

        <PreviewSection
          id="preview-music"
          iconSrc="/brand/daftitude-music.png"
          eyebrow="Music"
          title="Creative output with structure—sound as a system."
          body="Production experiments, track ideas, playlists, and the process. Less ‘artist mystique’, more ‘creative engineering’—iterate until it hits."
          primaryHref="/music"
          primaryLabel="Open Music"
          secondaryHref="/music#projects"
          secondaryLabel="See projects"
        />
      </div>
    </main>
  );
}
