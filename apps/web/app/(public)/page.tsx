"use client";

// apps/web/app/page.tsx
import Link from "next/link";

type CardStatus = "Active" | "In Development" | "Experimental";

type EcosystemItem = {
  key: string;
  title: string;
  subtitle: string;
  status?: CardStatus;
  viewHref: string;
  readHref: string;
  previewId: string;
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
    >
      <div className="menuCardTop">
        <div className="menuCardTitle">{item.title}</div>
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
  icon,
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  const isWideGrid = id.includes("tech") || id.includes("finance") || id.includes("lab");

  const tiles =
    id.includes("tech")
      ? [
          { k: "Featured", t: "Developer Tools", s: "Core utilities and workflows." },
          { k: "Build", t: "Systems & Architecture", s: "Patterns that survive production." },
          { k: "Secure", t: "Security Practices", s: "Hardening, checks, and guardrails." },
          { k: "Ship", t: "Automation", s: "Faster loops with fewer mistakes." },
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
      : id.includes("services")
      ? [
          { k: "Featured", t: "Packages", s: "Clear scope. Clear outcomes." },
          { k: "Build", t: "Custom Systems", s: "From idea to working product." },
          { k: "Audit", t: "Fix & Improve", s: "Security, performance, UX cleanup." },
        ]
      : [
          { k: "Featured", t: "Prototypes", s: "Experiments that may graduate." },
          { k: "Tool", t: "Utilities", s: "Small tools that solve one thing well." },
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
                  {icon}
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
   * With .menuCard { grid-column: span 4; } you'll get a 3×2 grid on desktop.
   */
  const ecosystem: EcosystemItem[] = [
    {
      key: "tech",
      title: "Tech",
      subtitle: "Engineering, automation, security, and real-world systems.",
      status: "Active",
      viewHref: "/tech",
      readHref: "/tech#overview",
      previewId: "preview-tech",
    },
    {
      key: "finance",
      title: "Finance",
      subtitle: "Risk-first tools for markets, crypto, and decision support.",
      status: "Experimental",
      viewHref: "/finance",
      readHref: "/finance#overview",
      previewId: "preview-finance",
    },
    {
      key: "fitness",
      title: "Fitness",
      subtitle: "Discipline OS + calisthenics systems built for consistency.",
      status: "Active",
      viewHref: "/fitness/discipline",
      readHref: "/fitness#overview",
      previewId: "preview-fitness",
    },
    {
      key: "family",
      title: "Family",
      subtitle: "Structure, roles, trust mechanics, and a home dashboard.",
      status: "In Development",
      viewHref: "/family",
      readHref: "/family#overview",
      previewId: "preview-family",
    },
    {
      key: "lab",
      title: "Lab / Tools",
      subtitle: "Prototypes, experiments, and utilities that ship fast.",
      status: "Experimental",
      viewHref: "/lab",
      readHref: "/lab#overview",
      previewId: "preview-lab",
    },
    {
      key: "services",
      title: "Services",
      subtitle: "Pricing, packages, and practical help you can actually use.",
      status: "Active",
      viewHref: "/services",
      readHref: "/services#pricing",
      previewId: "preview-services",
    },
  ];

  return (
    <main className="homeWrap">
      <div className="homeInner">
        {/* HERO */}
        <section className="homeHero">
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
              How I Think →
            </Link>

            <Link href="/tech" className="heroLink">
              Start with Tech →
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
          id="preview-tech"
          icon="🧠"
          eyebrow="Tech"
          title="Developer-grade systems, not motivational posters."
          body="Automation, security, engineering foundations, and tools designed to survive real usage. This is the backbone category—everything else plugs into it."
          primaryHref="/tech"
          primaryLabel="Open Tech"
          secondaryHref="/tech#systems"
          secondaryLabel="See modules"
        />

        <PreviewSection
          id="preview-finance"
          icon="📈"
          eyebrow="Finance"
          title="Risk first. Signals second. Hype last."
          body="Decision tools for markets and crypto: structure, tracking, and guardrails. The goal is clarity under uncertainty, not gambling with extra steps."
          primaryHref="/finance"
          primaryLabel="Open Finance"
          secondaryHref="/finance#tools"
          secondaryLabel="See tools"
        />

        <PreviewSection
          id="preview-fitness"
          icon="🦾"
          eyebrow="Fitness"
          title="Discipline OS + Calisthenics—built like a game plan."
          body="A repeatable system for showing up daily, plus skill-based calisthenics progressions. No random workouts—just progression, structure, and receipts."
          primaryHref="/fitness/discipline"
          primaryLabel="Open Discipline OS"
          secondaryHref="/fitness/calisthenics"
          secondaryLabel="Open Calisthenics"
        />

        <PreviewSection
          id="preview-family"
          icon="🏠"
          eyebrow="Family"
          title="A home dashboard that rewards structure and trust."
          body="Roles, routines, shared planning, and system mechanics that make family operations smoother. Still evolving—built to be adopted, not just admired."
          primaryHref="/family"
          primaryLabel="Open Family"
          secondaryHref="/family#roadmap"
          secondaryLabel="See roadmap"
        />

        <PreviewSection
          id="preview-lab"
          icon="🧪"
          eyebrow="Lab / Tools"
          title="Where experiments become products."
          body="Prototypes, utilities, and fast iterations. Some will graduate into full systems, some will stay sharp little tools that solve one problem extremely well."
          primaryHref="/lab"
          primaryLabel="Open Lab"
          secondaryHref="/lab#latest"
          secondaryLabel="What’s new"
        />

        <PreviewSection
          id="preview-services"
          icon="🧰"
          eyebrow="Services"
          title="Practical help, clear pricing, no mystery meat."
          body="Packages and rates for building, fixing, advising, or auditing. This is where people go when they want DaFTitude applied directly to their situation."
          primaryHref="/services#pricing"
          primaryLabel="View pricing"
          secondaryHref="/contact"
          secondaryLabel="Talk first"
        />

        {/* FOOTER */}
        <footer className="footer" style={{ marginTop: 26 }}>
          <div className="footerInner">
            <div className="footerLeft">© {new Date().getFullYear()} DaFTitude</div>
            <div className="footerRight">
              <Link href="/donate" className="footerLink">
                Donate
              </Link>
              <Link href="/contact" className="footerLink">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
