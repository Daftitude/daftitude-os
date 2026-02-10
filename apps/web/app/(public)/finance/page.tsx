"use client";

import Link from "next/link";
import Image from "next/image";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.history.replaceState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Tile = { k: string; t: string; s: string };

function PreviewSection(props: {
  id: string;
  iconSrc: string;
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  tiles: Tile[];
}) {
  const { id, iconSrc, eyebrow, title, body, primaryHref, primaryLabel, secondaryHref, secondaryLabel, tiles } =
    props;

  return (
    <section id={id} className="previewSection">
      <div className="previewShell">
        <div className="previewCols">
          <div className="previewCopy">
            <div className="shellEyebrow">{eyebrow}</div>
            <h3 className="previewTitle">{title}</h3>
            <p className="previewBody">{body}</p>

            <div className="previewLogoRow" aria-hidden="true">
              <Image src={iconSrc} alt="" width={160} height={160} className="previewLogo" />
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
                  Risk
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

            <div className="previewTiles grid4">
              {tiles.map((x) => (
                <div key={`${id}-${x.t}`} className="previewTile">
                  <div className="previewTileKicker">{x.k}</div>
                  <div className="previewTileTitle">{x.t}</div>
                  <div className="previewTileSub">{x.s}</div>
                </div>
              ))}
            </div>

            <div className="previewStageFoot">
              Sign in to save watchlists, calculators, and your risk rules.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FinancePage() {
  const tiles: Tile[] = [
    { k: "Featured", t: "Dashboards", s: "Tracking and clarity panels." },
    { k: "Tools", t: "Calculators", s: "Trade math + decision support." },
    { k: "Research", t: "Notes & Models", s: "Frameworks without hype." },
    { k: "Control", t: "Risk Guardrails", s: "Protect capital first." },
  ];

  return (
    <main className="page financePage">
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Finance">
          <Image
            src="/brand/daftitude-finance.png"
            alt="DaFTitude Finance"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Finance</div>

        <h1 className="homeHeadline">
          Risk first.
          <br />
          Signals second.
        </h1>

        <p className="homeSub">
          Finance tools built for clarity under uncertainty: dashboards, calculators, and guardrails.
          Create an account to save your setup.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-finance"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-finance");
            }}
          >
            Preview the tools →
          </a>

          <Link href="/login" className="heroLink">
            Sign in →
          </Link>

          <Link href="/signup" className="heroLink">
            Get started →
          </Link>
        </div>

        <a
          className="homeScrollHint"
          href="#preview-finance"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-finance");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      <PreviewSection
        id="preview-finance"
        iconSrc="/brand/daftitude-finance.png"
        eyebrow="Finance"
        title="Tools that keep you honest."
        body="Preview the finance system. Sign in to save watchlists, calculators, and your risk rules so you’re not rebuilding the wheel every time."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}