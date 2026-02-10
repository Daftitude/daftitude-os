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
                  Intro
                </button>
                <button className="previewTab" type="button" role="tab">
                  Scope
                </button>
                <button className="previewTab" type="button" role="tab">
                  Next
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
              Sign in to submit requests, track status, and keep everything in one place.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const tiles: Tile[] = [
    { k: "Fast", t: "Quick Intake", s: "Short questions that prevent wasted time." },
    { k: "Clear", t: "Scope First", s: "Define outcomes before tools." },
    { k: "Trackable", t: "Request History", s: "Private account keeps receipts + progress." },
  ];

  return (
    <main className="page contactPage">
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Contact">
          <Image
            src="/brand/daftitude-services.png"
            alt="Contact DaFTitude"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Contact</div>

        <h1 className="homeHeadline">
          Talk it through.
          <br />
          Keep it clean.
        </h1>

        <p className="homeSub">
          If you’re unsure what you need, that’s normal. The goal is clarity fast—then execution.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-contact"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-contact");
            }}
          >
            Preview the process →
          </a>

          <Link href="/login" className="heroLink">
            Sign in →
          </Link>

          <Link href="/signup" className="heroLink">
            Create account →
          </Link>
        </div>

        <a
          className="homeScrollHint"
          href="#preview-contact"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-contact");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      <PreviewSection
        id="preview-contact"
        iconSrc="/brand/daftitude-services.png"
        eyebrow="Contact"
        title="A simple process that prevents expensive confusion."
        body="Public contact stays lightweight. Private accounts unlock intake forms, request tracking, and a clean record of what we agreed on."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}