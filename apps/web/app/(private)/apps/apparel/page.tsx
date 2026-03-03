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
                  Drops
                </button>
                <button className="previewTab" type="button" role="tab">
                  Staples
                </button>
                <button className="previewTab" type="button" role="tab">
                  Fit
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
              Sign in to get drop alerts and member access.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ApparelPage() {
  const tiles: Tile[] = [
    { k: "Featured", t: "Drops", s: "Limited releases and staple basics." },
    { k: "Design", t: "Identity", s: "Clean visuals, no noise." },
    { k: "Quality", t: "Fit & Finish", s: "Wearable, not gimmicky." },
  ];

  return (
    <main className="page apparelPage">
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Apparel">
          <Image
            src="/brand/daftitude-apparel.png"
            alt="DaFTitude Apparel"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Apparel</div>

        <h1 className="homeHeadline">
          Utility-first.
          <br />
          No cringe merch.
        </h1>

        <p className="homeSub">
          Gear designed like a product. Create an account for drop alerts, member access, and saved sizing.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-apparel"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-apparel");
            }}
          >
            Preview drops →
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
          href="#preview-apparel"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-apparel");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      <PreviewSection
        id="preview-apparel"
        iconSrc="/brand/daftitude-apparel.png"
        eyebrow="Apparel"
        title="Minimal. Clean. Purpose-built."
        body="Preview the Apparel pipeline. Sign in to get drop alerts and access member-only releases as they go live."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}