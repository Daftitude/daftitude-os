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
  tiles: Tile[];
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
                  Program
                </button>
                <button className="previewTab" type="button" role="tab">
                  Tracking
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
              Sign in to save plans, track streaks, and unlock your personal dashboard.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FitnessPage() {
  const tiles: Tile[] = [
    { k: "Featured", t: "Discipline OS", s: "Consistency system that actually sticks." },
    { k: "Program", t: "Calisthenics Paths", s: "Skills, progressions, mobility." },
    { k: "Workflow", t: "Tracking + Streaks", s: "Plans, receipts, and momentum." },
  ];

  return (
    <main className="page fitnessPage">
      {/* HERO */}
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Fitness">
          <Image
            src="/brand/daftitude-fitness.png"
            alt="DaFTitude Fitness"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Fitness</div>

        <h1 className="homeHeadline">
          Train with structure.
          <br />
          Keep the receipts.
        </h1>

        <p className="homeSub">
          This is the “show up daily” system: discipline frameworks, calisthenics progressions,
          and tracking that makes consistency normal.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-fitness"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-fitness");
            }}
          >
            Preview the system →
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
          href="#preview-fitness"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-fitness");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      {/* PREVIEW */}
      <PreviewSection
        id="preview-fitness"
        iconSrc="/brand/daftitude-fitness.png"
        eyebrow="Fitness"
        title="A system that makes progress repeatable."
        body="Preview the Discipline OS + calisthenics structure. Create an account to save plans, track streaks, and build your personal dashboard over time."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}