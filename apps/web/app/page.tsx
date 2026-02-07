// apps/web/src/app/page.tsx
import Link from "next/link";

type Metric = {
  value: string;
  label: string;
  sub?: string;
};

function EcosystemCard({
  title,
  subtitle,
  status,
  launchHref,
  readHref,
  metrics,
}: {
  title: string;
  subtitle: string;
  status?: "Active" | "In Development" | "Experimental";
  launchHref: string;
  readHref: string;
  metrics: [Metric, Metric, Metric];
}) {
  return (
    <section className="menuCard" aria-label={`${title} card`}>
      <div className="menuCardTop">
        <div className="menuCardTitle">{title}</div>
        {status ? <div className="pill">{status}</div> : null}
      </div>

      <div className="menuCardSub">{subtitle}</div>

      <div className="cardActions" aria-label={`${title} actions`}>
        <Link href={launchHref} className="cardBtn cardBtnPrimary">
          Launch App
        </Link>
        <Link href={readHref} className="cardBtn cardBtnGhost">
          Read More
        </Link>
      </div>

      <div className="cardMetrics" aria-label={`${title} metrics`}>
        {metrics.map((m) => (
          <div key={`${title}-${m.label}`} className="cardMetric">
            <div className="cardMetricValue">{m.value}</div>
            <div className="cardMetricLabel">{m.label}</div>
            {m.sub ? <div className="cardMetricSub">{m.sub}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="homeWrap">
        <div className="homeInner">
          <header className="homeHero">
            <div className="shellEyebrow">DaFTitude • Systems, Not Fluff</div>

            <h1 className="homeHeadline">
              Most problems aren’t that complicated.
              <br />
              Most solutions are.
            </h1>

            <p className="homeSub">
              DaFTitude is a suite of practical apps for building systems: tech,
              finance, fitness, family operations, and experimental tools — all
              designed to survive real constraints.
            </p>

            <div className="homeHeroLinks">
              <Link href="#ecosystem" className="heroLink heroLinkPrimary">
                Explore the ecosystem →
              </Link>
              <Link href="/about" className="heroLink">
                How I Think →
              </Link>
              <Link href="/tech" className="heroLink">
                Start with Tech →
              </Link>
            </div>

            <div className="homeScrollHint">↓ scroll ↓</div>
          </header>

          <section id="ecosystem" aria-label="DaFTitude ecosystem">
            <h2 className="homeSectionTitle">The DaFTitude Ecosystem</h2>
            <p className="homeSectionSub">
              Pick a system. Launch the app when it’s time to execute — or read
              the brief first.
            </p>

            <div className="menuGrid">
              <EcosystemCard
                title="Services"
                subtitle="Build help, audits, and system setups — with clear pricing."
                status="Active"
                launchHref="/services"
                readHref="/services#pricing"
                metrics={[
                  { value: "$", label: "Transparent", sub: "Clear scope" },
                  { value: "Fast", label: "Turnaround", sub: "No dragging" },
                  { value: "Real", label: "Outcomes", sub: "Working systems" },
                ]}
              />

              <EcosystemCard
                title="Finance"
                subtitle="Risk-first tools for markets, crypto, and decision support."
                status="Experimental"
                launchHref="/finance"
                readHref="/finance#overview"
                metrics={[
                  { value: "R1", label: "Risk First", sub: "Protect capital" },
                  { value: "TA+", label: "Signals", sub: "Not vibes" },
                  { value: "0%", label: "Hype Tax", sub: "Minimized" },
                ]}
              />

              <EcosystemCard
                title="Fitness"
                subtitle="Discipline OS + Calisthenics — body mastery, not motivation."
                status="Active"
                launchHref="/fitness"
                readHref="/fitness#overview"
                metrics={[
                  { value: "1", label: "Daily Win", sub: "Show up" },
                  { value: "BW", label: "Skill Focus", sub: "Control first" },
                  { value: "365", label: "Consistency", sub: "Stack days" },
                ]}
              />

              <EcosystemCard
                title="Lab / Tools"
                subtitle="Prototypes, experiments, and things still becoming real."
                status="Experimental"
                launchHref="/lab"
                readHref="/lab#overview"
                metrics={[
                  { value: "WIP", label: "Build Mode", sub: "Fast loops" },
                  { value: "v0+", label: "Prototypes", sub: "Test reality" },
                  { value: "R&D", label: "Exploration", sub: "Try, measure" },
                ]}
              />

              <EcosystemCard
                title="Family"
                subtitle="Structure, roles, trust mechanics, and a home dashboard."
                status="In Development"
                launchHref="/family"
                readHref="/family#overview"
                metrics={[
                  { value: "Roles", label: "Clarity", sub: "Who does what" },
                  { value: "Trust", label: "Contracts", sub: "Rules that stick" },
                  { value: "Sync", label: "Planning", sub: "One board" },
                ]}
              />

              <EcosystemCard
                title="Tech"
                subtitle="Engineering, automation, security, and real-world systems."
                status="Active"
                launchHref="/tech"
                readHref="/tech#overview"
                metrics={[
                  { value: "24/7", label: "Ops Mindset", sub: "Always on" },
                  { value: "0", label: "Fluff Tolerance", sub: "Strict" },
                  { value: "∞", label: "Iterations", sub: "Ship + refine" },
                ]}
              />

            </div>
          </section>
        </div>
      </div>

      <footer className="footer">
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
    </main>
  );
}
