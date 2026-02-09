"use client";

import Link from "next/link";
import Image from "next/image";

type CostRow = {
  type: string;
  info: string;
  typicalLabel: string;
  typical: string;
  expanded: string;
  custom: string;
};

const COST_ROWS: CostRow[] = [
  {
    type: "🌐 Website Development",
    info:
      "Planning, structure, build, deployment, and cleanup. Focused on clarity, performance, and maintainability.",
    typicalLabel: "Small business, personal, or landing sites",
    typical: "$500 – $800",
    expanded: "$900 – $1,500",
    custom: "Scoped case-by-case",
  },
  {
    type: "📱 Digital Business Cards",
    info:
      "Lightweight, mobile-first personal or business cards. Hosted, editable, and easy to share.",
    typicalLabel: "Hosted, mobile-friendly, easy to update",
    typical: "$100 – $150",
    expanded: "$200 – $300",
    custom: "Rarely needed",
  },
  {
    type: "📣 Social / Online Presence",
    info:
      "Account setup, cleanup, structure, and strategy — not content farming or gimmicks.",
    typicalLabel: "Setup, cleanup, or light management",
    typical: "$300 / month",
    expanded: "$600 / month",
    custom: "Depends on cadence",
  },
  {
    type: "📶 WiFi & Network Optimization",
    info:
      "Diagnostics, layout analysis, hardware placement, and performance tuning.",
    typicalLabel: "Home, apartment, or small office",
    typical: "$120 – $180",
    expanded: "$250 – $400",
    custom: "Complex layouts",
  },
  {
    type: "🛠️ On-Demand Tech Help",
    info:
      "Troubleshooting, fixes, cleanup, and guidance. Focused on solving root issues, not quick patches.",
    typicalLabel: "Fixes, troubleshooting, cleanup",
    typical: "$80 – $120",
    expanded: "$200 – $300",
    custom: "$400 / month",
  },
  {
    type: "🏠 Smart Home & Security",
    info:
      "Cameras, locks, sensors, automations, and privacy-aware configuration.",
    typicalLabel: "Cameras, locks, automations",
    typical: "$200 – $300",
    expanded: "$400 – $700",
    custom: "Custom installs",
  },
  {
    type: "📺 Home Theater / Media Setup",
    info:
      "Display mounting, audio tuning, cable management, and device configuration.",
    typicalLabel: "TVs, sound, streaming, tuning",
    typical: "$150 – $250",
    expanded: "$350 – $500",
    custom: "Room-specific",
  },
  {
    type: "🖥️ Office / Workspace Tech",
    info:
      "Remote setups, productivity workflows, hardware, and reliability improvements.",
    typicalLabel: "Remote work, hardware, workflows",
    typical: "$100 – $150",
    expanded: "$250 – $400",
    custom: "$500 / month",
  },
  {
    type: "🧠 Consulting & Business Strategy",
    info:
      "Technical decision support, system planning, and helping avoid costly mistakes.",
    typicalLabel: "Direction, planning, decision-making",
    typical: "$150 – $250",
    expanded: "$400 – $750",
    custom: "Ongoing advisory",
  },
  {
    type: "🤖 AI Integrations & Setup",
    info:
      "AI tools, automations, and integrations tailored to actual workflows — not hype or generic bots.",
    typicalLabel: "LLMs, automations, workflow AI",
    typical: "$250 – $400",
    expanded: "$600 – $1,200",
    custom: "Custom systems",
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  window.history.replaceState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
type PreviewTile = { k: string; t: string; s: string };

function PreviewSection({
  id,
  iconSrc,
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tiles,
}: {
  id: string;
  iconSrc: string;
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  tiles: PreviewTile[];
}) {
  return (
    <section id={id} className="previewSection">
      <div className="previewShell">
        <div className="previewCols">
          {/* LEFT */}
          <div className="previewCopy">
            <div className="shellEyebrow">{eyebrow}</div>
            <h3 className="previewTitle">{title}</h3>
            <p className="previewBody">{body}</p>

            <div className="previewLogoRow" aria-hidden="true">
              <Image
                src={iconSrc}
                alt=""
                width={160}
                height={160}
                className="previewLogo"
              />
            </div>

            <div className="previewCtas">
              <a
                href={primaryHref}
                className="heroLink heroLinkPrimary"
                onClick={(e) => {
                  // support in-page anchors with smooth scroll
                  if (primaryHref.startsWith("#")) {
                    e.preventDefault();
                    scrollToId(primaryHref.replace("#", ""));
                  }
                }}
              >
                {primaryLabel} →
              </a>

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
                  Services
                </button>
                <button className="previewTab" type="button" role="tab">
                  Projects
                </button>
                <button className="previewTab" type="button" role="tab">
                  Support
                </button>
              </div>
            </div>

            {/* Visual mock UI */}
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

            {/* Tiles = service grid */}
            <div className="previewTiles stack3">
              {tiles.map((x) => (
                <div key={`${id}-${x.t}`} className="previewTile">
                  <div className="previewTileKicker">{x.k}</div>
                  <div className="previewTileTitle">{x.t}</div>
                  <div className="previewTileSub">{x.s}</div>
                </div>
              ))}
            </div>

            <div className="previewStageFoot">
              <div className="previewFootRow">
                <div className="previewFootCopy">
                  <div className="previewFootTitle">Member access</div>
                  <div className="previewFootSub">
                    Sign in to request a quote, save your scope, and track work in one place.
                  </div>
                </div>

                <div className="previewFootCtas">
                  <Link className="navBtnGhost" href="/login">
                    Sign in
                  </Link>
                  <Link className="navBtnPrimary" href="/signup">
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

const SERVICES_TILES: PreviewTile[] = [
  { k: "Build", t: "Website Development", s: "Landing pages to small business sites. Structure, build, deploy, cleanup." },
  { k: "Optimize", t: "WiFi & Network", s: "Diagnostics, layout analysis, placement, tuning, stability improvements." },
  { k: "Fix", t: "On-Demand Tech Help", s: "Troubleshooting, cleanup, root-cause fixes, guidance." },
  { k: "Secure", t: "Smart Home & Security", s: "Cameras, locks, sensors, automations — privacy-aware configuration." },
  { k: "Work", t: "Office / Workspace", s: "Remote setups, workflows, hardware + reliability improvements." },
  { k: "Automate", t: "AI Integrations", s: "Workflow AI + automations that reduce friction and wasted time." },
];

export default function ServicesPage() {
  return (
    <main className="page servicesPage">
      {/* HERO */}
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Services">
          <Image
            src="/brand/daftitude-services.png"
            alt="DaFTitude Services"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Services</div>

        <h1 className="homeHeadline">
          Clear scope.
          <br />
          Clean execution.
        </h1>

        <p className="homeSub">
          Practical help for websites, systems, networks, and automation—built to
          be reliable, maintainable, and easy to live with. No fluff. No mystery
          pricing.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#pricing"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("pricing");
            }}
          >
            View pricing →
          </a>

          <Link href="/contact" className="heroLink">
            Talk it through →
          </Link>

          <Link href="/tech" className="heroLink">
            See how I build →
          </Link>
        </div>

        <a
          className="homeScrollHint"
          href="#services"
          aria-label="Scroll to services"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("services");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="sectionShell">
        <div className="sectionInner">
          <header className="sectionHeader">
            <h2 className="sectionTitle">What I actually do</h2>
            <p className="sectionLead">
              Focused scopes. Solid delivery. No “mystery tech” that only works
              on my laptop.
            </p>
          </header>

          {/* SERVICES PREVIEW GRID */}
          <PreviewSection
            id="services"
            iconSrc="/brand/daftitude-services.png"
            eyebrow="Services"
            title="Real work. Real outcomes. Built clean."
            body="This is the practical side of DaFTitude: building, fixing, optimizing, and advising. The tiles reflect the main ways people usually need help—each one can expand into dedicated pages and case studies later."
            primaryHref="#pricing"
            primaryLabel="View pricing"
            secondaryHref="/contact"
            secondaryLabel="Talk it through"
            tiles={SERVICES_TILES}
          />

        </div>
      </section>
      <section className="sectionShell">
        <div className="sectionInner">
          <header className="sectionHeader">
            <h2 className="sectionTitle">Why create an account?</h2>
            <p className="sectionLead">
              It’s not for spam. It’s for clarity, tracking, and getting you a real answer faster.
            </p>
          </header>

          <div className="cardGrid">
            <div className="glassCard">
              <div className="glassCardTop"><div className="pill">Quote</div></div>
              <h3 className="glassCardTitle">Request pricing for your exact scope</h3>
              <p className="glassCardDesc">Submit details once, get a response that matches reality.</p>
            </div>

            <div className="glassCard">
              <div className="glassCardTop"><div className="pill">Intake</div></div>
              <h3 className="glassCardTitle">Guided intake (no back-and-forth)</h3>
              <p className="glassCardDesc">Answer a few questions and upload screenshots/files if needed.</p>
            </div>

            <div className="glassCard">
              <div className="glassCardTop"><div className="pill">Tracking</div></div>
              <h3 className="glassCardTitle">Project updates + receipts</h3>
              <p className="glassCardDesc">Progress, notes, deliverables, and invoices in one place.</p>
            </div>
          </div>

          <div className="sectionCtaRow">
            <p className="muted">
              You can browse everything publicly. Accounts unlock the “do the work” workflow.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="navBtnGhost" href="/login">Sign in</Link>
              <Link className="navBtnPrimary" href="/signup">Get started →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING REFERENCE */}
      <section id="pricing" className="sectionShell">
        <div className="sectionInner">
          <header className="sectionHeader">
            <h2 className="sectionTitle">What Similar Work Has Cost</h2>
            <p className="sectionLead">
              <span className="muted">
                ⓘ These numbers reflect past projects and typical scopes. They’re
                meant to set expectations, not force a fixed price. Actual needs
                vary.
              </span>
            </p>
            <p className="sectionLead">
              The list below shows the kinds of work I do and what similar
              projects have cost in the past. Think of this as reference data,
              not a menu.
            </p>
          </header>

          <div
            className="pricingTableShell"
            role="region"
            aria-label="Pricing reference"
          >
            <div className="pricingTableHeader">
              <div className="pricingCol pricingType">Type of Work</div>
              <div className="pricingCol">Typical</div>
              <div className="pricingCol">Expanded</div>
              <div className="pricingCol">Custom / Ongoing</div>
            </div>

            <div className="pricingTableBody">
              {COST_ROWS.map((row) => (
                <div className="pricingRow" key={row.type}>
                  <div className="pricingCol pricingType">
                    <div className="pricingTypeTop">
                      <div className="pricingTypeTitle">{row.type}</div>
                      <div className="pricingInfo muted">ⓘ {row.info}</div>
                    </div>
                    <div className="pricingTypeSub muted">
                      {row.typicalLabel}
                    </div>
                  </div>

                  <div className="pricingCol pricingMoney">{row.typical}</div>
                  <div className="pricingCol pricingMoney">{row.expanded}</div>
                  <div className="pricingCol pricingMoney">{row.custom}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sectionCtaRow">
            <p className="muted">
              If you’re unsure where your situation fits, that’s normal. The fastest path is creating
              an account and submitting your scope — you’ll get a direct answer without guesswork.
            </p>
            <Link className="navBtnPrimary" href="/signup">
              Create account →
            </Link>

            <Link className="navBtnPrimary" href="/contact">
              Talk it through →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  title,
  desc,
  href,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  tag: string;
}) {
  return (
    <div className="glassCard">
      <div className="glassCardTop">
        <div className="pill">{tag}</div>
      </div>
      <h3 className="glassCardTitle">{title}</h3>
      <p className="glassCardDesc">{desc}</p>
      <div className="glassCardActions">
        <Link className="navBtnGhost" href={href}>
          Learn more →
        </Link>
      </div>
    </div>
  );
}
