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
                  Projects
                </button>
                <button className="previewTab" type="button" role="tab">
                  Templates
                </button>
                <button className="previewTab" type="button" role="tab">
                  Sound
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
              Sign in to save projects, templates, and your workflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MusicPage() {
  const tiles: Tile[] = [
    { k: "Featured", t: "Projects", s: "Tracks and experiments." },
    { k: "Workflow", t: "Templates", s: "Repeatable creative pipelines." },
    { k: "Sound", t: "Design", s: "Textures, energy, and polish." },
  ];

  return (
    <main className="page musicPage">
      <section className="homeHero">
        <div className="homeHeroMark" aria-label="DaFTitude Music">
          <Image
            src="/brand/daftitude-music.png"
            alt="DaFTitude Music"
            width={220}
            height={220}
            priority
            className="homeHeroMarkImg"
          />
        </div>

        <div className="shellEyebrow">DaFTitude • Music</div>

        <h1 className="homeHeadline">
          Creative output.
          <br />
          Engineered.
        </h1>

        <p className="homeSub">
          Production experiments, templates, playlists, and process. Create an account to save what you’re building.
        </p>

        <div className="homeHeroLinks">
          <a
            href="#preview-music"
            className="heroLink heroLinkPrimary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("preview-music");
            }}
          >
            Preview the workflow →
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
          href="#preview-music"
          aria-label="Scroll to preview"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("preview-music");
          }}
        >
          ↓ scroll ↓
        </a>
      </section>

      <PreviewSection
        id="preview-music"
        iconSrc="/brand/daftitude-music.png"
        eyebrow="Music"
        title="Sound as a system."
        body="Preview the Music hub. Sign in to save projects, templates, and the workflow that makes output consistent."
        primaryHref="/signup"
        primaryLabel="Create account"
        secondaryHref="/login"
        secondaryLabel="Sign in"
        tiles={tiles}
      />
    </main>
  );
}