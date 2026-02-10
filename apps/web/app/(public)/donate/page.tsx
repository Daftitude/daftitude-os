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
                  Why
                </button>
                <button className="previewTab" type="button" role="tab">
                  Where
                </button>
                <button className="previewTab" type="button" role="tab">
                  Proof
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
              Sign in to view donation history, perks, and supporter updates.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DonatePage() {
  const tiles: Tile[] = [
    { k: "Support", t: "Build the Ecosystem", s: "Tools, content, and systems that ship." },
    { k: "Transparency", t: "Where It Goes", s: "Clear intent + receipts over time." },
    { k: "Access", t: "Supporter Space", s: "Private updates and early access paths." },
  ];

  return (
    <main className="page donatePage">
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Donate">
          <Image
            src="/brand/daftitude-logo-main.png"
            alt="Support DaFTitude"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Donate</div>

        <h1 className="homeHeadline">
          Support the build.
          <br />
          Fund the tools.
        </h1>

        <p className="homeSub">
          Donations help accelerate the ecosystem: tools, learning systems, and privacy-first infrastructure.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-donate"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-donate");
            }}
          >
            Preview the impact →
          </a>

          <Link href="/signup" className="heroLink">
            Create account →
          </Link>

          <Link href="/login" className="heroLink">
            Sign in →
          </Link>
        </div>

        <a
          className="homeScrollHint"
          href="#preview-donate"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-donate");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      <PreviewSection
        id="preview-donate"
        iconSrc="/brand/daftitude-logo-main.png"
        eyebrow="Donate"
        title="Back the mission—without the gimmicks."
        body="Public donation stays simple. Private accounts unlock donation history, supporter perks, and updates that show what your support accelerated."
        primaryHref="/signup"
        primaryLabel="Create supporter account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}