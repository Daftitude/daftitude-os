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
  tabs?: [string, string, string];
  tiles: Tile[];
  footnote?: string;
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
    tabs = ["Overview", "Guides", "Tools"],
    tiles,
    footnote = "Sign in to bookmark topics, request breakdowns, and track what you’ve read.",
  } = props;

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
                  {tabs[0]}
                </button>
                <button className="previewTab" type="button" role="tab">
                  {tabs[1]}
                </button>
                <button className="previewTab" type="button" role="tab">
                  {tabs[2]}
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

            <div className="previewTiles grid4">
              {tiles.map((x) => (
                <div key={`${id}-${x.t}`} className="previewTile">
                  <div className="previewTileKicker">{x.k}</div>
                  <div className="previewTileTitle">{x.t}</div>
                  <div className="previewTileSub">{x.s}</div>
                </div>
              ))}
            </div>

            <div className="previewStageFoot">{footnote}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TechPage() {
  const tiles: Tile[] = [
    {
      k: "AI",
      t: "AI + Automation",
      s: "Practical patterns that reduce friction (not hype demos).",
    },
    {
      k: "Secure",
      t: "Security + Privacy",
      s: "Hardening, surveillance reality, and how to protect yourself.",
    },
    {
      k: "Systems",
      t: "Systems Thinking",
      s: "How incentives shape products—and why outcomes feel weird.",
    },
    {
      k: "Fix",
      t: "Real-World Fixes",
      s: "Networks, smart home, devices, workflows—make it reliable.",
    },
  ];

  return (
    <main className="page techPage">
      {/* HERO */}
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Tech">
          <Image
            src="/brand/daftitude-tech.png"
            alt="DaFTitude Tech"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Tech</div>

        <h1 className="homeHeadline">
          Design intelligence.
          <br />
          Built for real systems.
        </h1>

        <p className="homeSub">
          Guides, tools, and System Briefs that explain how tech (and people) behave under pressure.
          Create an account to bookmark topics, request breakdowns, and track what you’ve read.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-tech"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-tech");
            }}
          >
            Preview Tech →
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
          href="#preview-tech"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-tech");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      {/* PREVIEW */}
      <PreviewSection
        id="preview-tech"
        iconSrc="/brand/daftitude-tech.png"
        eyebrow="TECH HUB"
        title="Tech that survives the real world."
        body="This is the Tech Hub preview. Sign in to save modules, request topics, and unlock member-only tools as they ship."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tabs={["Overview", "Briefs", "Tools"]}
        tiles={tiles}
        footnote="Sign in to bookmark modules, request topics, and get updates when new tools drop."
      />
    </main>
  );
}
