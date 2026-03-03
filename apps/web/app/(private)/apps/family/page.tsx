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
                  Overview
                </button>
                <button className="previewTab" type="button" role="tab">
                  Roles
                </button>
                <button className="previewTab" type="button" role="tab">
                  Routines
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
              Sign in to create a family space and assign roles.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FamilyPage() {
  const tiles: Tile[] = [
    { k: "Featured", t: "Home Dashboard", s: "Shared planning + coordination." },
    { k: "System", t: "Roles & Rules", s: "Clarity and accountability." },
    { k: "Workflow", t: "Routines", s: "Make consistency normal." },
  ];

  return (
    <main className="page familyPage">
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Family">
          <Image
            src="/brand/daftitude-family.png"
            alt="DaFTitude Family"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Family</div>

        <h1 className="homeHeadline">
          Run the home.
          <br />
          Like a system.
        </h1>

        <p className="homeSub">
          Shared planning, routines, roles, and trust mechanics. Create an account to set up a family space
          and unlock the dashboard workflow.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-family"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-family");
            }}
          >
            Preview the dashboard →
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
          href="#preview-family"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-family");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      <PreviewSection
        id="preview-family"
        iconSrc="/brand/daftitude-family.png"
        eyebrow="Family"
        title="A home dashboard that rewards structure and trust."
        body="Preview the Family system. Sign in to create your family space, assign roles, and start using the tools as one coordinated dashboard."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}