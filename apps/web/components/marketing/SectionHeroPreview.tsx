"use client";

import Link from "next/link";
import Image from "next/image";

type Tile = { k: string; t: string; s: string };

export type SectionPageConfig = {
  slug: string;          // "fitness"
  eyebrow: string;       // "DaFTitude • Fitness"
  titleTop: string;      // "Discipline OS"
  titleBottom: string;   // "+ Calisthenics systems"
  subtitle: string;
  markSrc: string;       // "/brand/daftitude-fitness.png"
  previewId: string;     // "preview-fitness"
  previewTitle: string;
  previewBody: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  tiles: Tile[];
  stageWide?: boolean;   // true => 2x2 tile grid
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.history.replaceState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SectionHeroPreview({ c }: { c: SectionPageConfig }) {
  return (
    <main className={`page ${c.slug}Page`}>
      {/* HERO */}
      <section className="homeHero">
        <div className="homeHeroMark" aria-label={c.eyebrow}>
          <Image
            src={c.markSrc}
            alt={c.eyebrow}
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">{c.eyebrow}</div>

        <h1 className="homeHeadline">
          {c.titleTop}
          <br />
          {c.titleBottom}
        </h1>

        <p className="homeSub">{c.subtitle}</p>

        <div className="homeHeroLinks">
          <a
            href={`#${c.previewId}`}
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId(c.previewId);
            }}
          >
            Preview → 
          </a>

          <Link href={c.primaryHref} className="heroLink">
            {c.primaryLabel} →
          </Link>

          <Link href={c.secondaryHref} className="heroLink">
            {c.secondaryLabel} →
          </Link>
        </div>

        <a
          className="homeScrollHint"
          href={`#${c.previewId}`}
          aria-label={`Scroll to ${c.slug} preview`}
          onClick={(e) => {
            e.preventDefault();
            scrollToId(c.previewId);
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      {/* PREVIEW */}
      <section id={c.previewId} className="previewSection">
        <div className="previewShell">
          <div className="previewCols">
            {/* LEFT COPY */}
            <div className="previewCopy">
              <div className="shellEyebrow">{c.slug}</div>
              <h3 className="previewTitle">{c.previewTitle}</h3>
              <p className="previewBody">{c.previewBody}</p>

              <div className="previewLogoRow" aria-hidden="true">
                <Image
                  src={c.markSrc}
                  alt=""
                  width={160}
                  height={160}
                  className="previewLogo"
                />
              </div>

              <div className="previewCtas">
                <Link href={c.primaryHref} className="heroLink heroLinkPrimary">
                  {c.primaryLabel} →
                </Link>
                <Link href={c.secondaryHref} className="heroLink">
                  {c.secondaryLabel} →
                </Link>
              </div>
            </div>

            {/* RIGHT STAGE */}
            <div className="previewStage" aria-label={`${c.slug} preview`}>
              <div className="previewStageTop">
                <div className="previewStageTitleRow">
                  <div className="previewIcon" aria-hidden="true">
                    <Image src={c.markSrc} alt="" width={36} height={36} />
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

              <div className={c.stageWide ? "previewTiles grid4" : "previewTiles stack3"}>
                {c.tiles.map((x) => (
                  <div key={`${c.slug}-${x.t}`} className="previewTile">
                    <div className="previewTileKicker">{x.k}</div>
                    <div className="previewTileTitle">{x.t}</div>
                    <div className="previewTileSub">{x.s}</div>
                  </div>
                ))}
              </div>

              <div className="previewStageFoot">
                This will become real screenshots, widgets, or mini dashboards later.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}