"use client";

import Link from "next/link";

type CardStatus = "Active" | "In Development" | "Experimental";

type EcosystemItem = {
  key: string;
  title: string;
  subtitle: string;
  status?: CardStatus;
  appHref: string;     // signed-in destination
  publicHref: string;  // public marketing page
  previewId: string;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
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

      <div className="cardActions" onClick={(e) => e.stopPropagation()}>
        <Link href={item.appHref} className="cardBtn cardBtnPrimary">
          OPEN APP
        </Link>
        <Link href={item.publicHref} className="cardBtn cardBtnGhost">
          DETAILS
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
              Replace this stage with live widgets and real screenshots later.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DashboardPage() {
  const ecosystem: EcosystemItem[] = [
    {
      key: "tech",
      title: "Tech",
      subtitle: "Engineering, automation, security, and real-world systems.",
      status: "Active",
      appHref: "/apps/tech",
      publicHref: "/tech",
      previewId: "preview-tech",
    },
    {
      key: "finance",
      title: "Finance",
      subtitle: "Risk-first tools for markets, crypto, and decision support.",
      status: "Experimental",
      appHref: "/apps/finance",
      publicHref: "/finance",
      previewId: "preview-finance",
    },
    {
      key: "fitness",
      title: "Fitness",
      subtitle: "Discipline OS + calisthenics systems built for consistency.",
      status: "Active",
      appHref: "/apps/fitness",
      publicHref: "/fitness",
      previewId: "preview-fitness",
    },
    {
      key: "family",
      title: "Family",
      subtitle: "Structure, roles, trust mechanics, and a home dashboard.",
      status: "In Development",
      appHref: "/apps/family",
      publicHref: "/family",
      previewId: "preview-family",
    },
    {
      key: "lab",
      title: "Lab / Tools",
      subtitle: "Prototypes, experiments, and utilities that ship fast.",
      status: "Experimental",
      appHref: "/apps/lab",
      publicHref: "/lab",
      previewId: "preview-lab",
    },
    {
      key: "services",
      title: "Services",
      subtitle: "Pricing, packages, and practical help you can actually use.",
      status: "Active",
      appHref: "/apps/services",
      publicHref: "/services",
      previewId: "preview-services",
    },
  ];

  return (
    <main className="homeWrap">
      <div className="homeInner">
        <section className="homeHero">
          <div className="shellEyebrow">DaFTitude • Signed In</div>

          <h1 className="homeHeadline">
            Most problems aren’t that complicated.
            <br />
            Most solutions are.
          </h1>

          <p className="homeSub">
            You’re signed in. This hub is your launchpad—jump into any system, or preview first.
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
              Explore your apps →
            </a>

            <Link href="/account" className="heroLink">
              Account →
            </Link>

            <Link href="/apps/tech" className="heroLink">
              Open Tech →
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

        <section id="ecosystem" style={{ scrollMarginTop: 90 }}>
          <div className="homeSectionTitle">Your DaFTitude Apps</div>
          <p className="homeSectionSub">
            Click a system to preview it here—use OPEN APP when you’re ready to use it.
          </p>

          <div className="menuGrid">
            {ecosystem.map((item) => (
              <EcosystemCard key={item.key} item={item} />
            ))}
          </div>
        </section>

        <PreviewSection
          id="preview-tech"
          icon="🧠"
          eyebrow="Tech"
          title="Developer-grade systems, built to survive production."
          body="Your tools and workflows: engineering foundations, automation, security, and applied AI."
          primaryHref="/apps/tech"
          primaryLabel="Open Tech"
          secondaryHref="/tech"
          secondaryLabel="Public overview"
        />

        <PreviewSection
          id="preview-finance"
          icon="📈"
          eyebrow="Finance"
          title="Risk first. Signals second. Hype last."
          body="Dashboards, calculators, and guardrails for markets and crypto decision-making."
          primaryHref="/apps/finance"
          primaryLabel="Open Finance"
          secondaryHref="/finance"
          secondaryLabel="Public overview"
        />

        <PreviewSection
          id="preview-fitness"
          icon="🦾"
          eyebrow="Fitness"
          title="Discipline OS + Calisthenics—structured, measurable progress."
          body="Your training systems: consistency frameworks + skill-based progressions."
          primaryHref="/apps/fitness"
          primaryLabel="Open Fitness"
          secondaryHref="/fitness"
          secondaryLabel="Public overview"
        />

        <PreviewSection
          id="preview-family"
          icon="🏠"
          eyebrow="Family"
          title="A home dashboard for planning, roles, and trust."
          body="Shared planning + routines + structure. Built for adoption, not just aesthetics."
          primaryHref="/apps/family"
          primaryLabel="Open Family"
          secondaryHref="/family"
          secondaryLabel="Public overview"
        />

        <PreviewSection
          id="preview-lab"
          icon="🧪"
          eyebrow="Lab / Tools"
          title="Experiments and prototypes you can actually use."
          body="Fast iterations and utilities—some become full products, some stay sharp single-purpose tools."
          primaryHref="/apps/lab"
          primaryLabel="Open Lab"
          secondaryHref="/lab"
          secondaryLabel="Public overview"
        />

        <PreviewSection
          id="preview-services"
          icon="🧰"
          eyebrow="Services"
          title="Packages, pricing, and direct help."
          body="When you want DaFTitude applied to your situation: builds, audits, and advisory."
          primaryHref="/apps/services"
          primaryLabel="Open Services"
          secondaryHref="/services"
          secondaryLabel="Public overview"
        />
      </div>
    </main>
  );
}
