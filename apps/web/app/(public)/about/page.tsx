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
  const {
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
  } = props;

  return (
    <section id={id} className="previewSection">
      <div className="previewShell">
        <div className="previewCols">
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
                  Story
                </button>
                <button className="previewTab" type="button" role="tab">
                  Values
                </button>
                <button className="previewTab" type="button" role="tab">
                  Ecosystem
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
              Sign in to access private versions + member tools across the ecosystem.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const tiles: Tile[] = [
    { k: "Mission", t: "Clarity + Protection", s: "No fluff. No confusion. Just usable systems." },
    { k: "Method", t: "Build What Holds", s: "Structure, maintainability, and real constraints." },
    { k: "Ecosystem", t: "Modules That Connect", s: "Services, tech, finance, fitness—designed to plug in." },
  ];

  return (
    <main className="page aboutPage">
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude About">
          <Image
            src="/brand/daftitude-logo-main.png"
            alt="DaFTitude"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • About</div>

        <h1 className="homeHeadline">
          A brand is a promise.
          <br />
          A system is proof.
        </h1>

        <p className="homeSub">
          DaFTitude is built around practical truth: most people don’t need “more tech,” they need clean systems that reduce chaos.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-about"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-about");
            }}
          >
            Preview the story →
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
          href="#preview-about"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-about");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      <PreviewSection
        id="preview-about"
        iconSrc="/brand/daftitude-logo-main.png"
        eyebrow="About"
        title="What DaFTitude is (and what it refuses to be)."
        body="This is the public intro. The private version gets deeper: playbooks, tooling, and the ecosystem’s internal structure."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}