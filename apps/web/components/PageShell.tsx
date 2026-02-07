// apps/web/components/PageShell.tsx
import Link from "next/link";

export type PageCTA = {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
};

export type StatTile = {
    label: string;
    value: string;
    sublabel?: string;
};

export type GridCard = {
    title: string;
    subtitle: string;
    href?: string;
    tag?: string;
};

export type FeedItem = {
    title: string;
    excerpt: string;
    tags: string[];
    date?: string;
    href?: string;
    comingSoon?: boolean;
};

export type PageShellProps = {
    eyebrow: string;
    headline: string;
    subhead: string;
    codeSample?: string;

    primaryCta: PageCTA;
    secondaryCta?: PageCTA;

    chips?: string[];

    stats?: StatTile[];

    gridTitle?: string;
    gridCards?: GridCard[];

    feedTitle?: string;
    feedItems?: FeedItem[];

    ctaBandTitle?: string;
    ctaBandBody?: string;
    ctaBandPrimary?: PageCTA;
    ctaBandSecondary?: PageCTA;

    footerLeft?: string;
};

function Pill({ label }: { label: string }) {
    return <span className="pill">{label}</span>;
}

function ButtonLink({ cta }: { cta: PageCTA }) {
    const cls = cta.variant === "secondary" ? "heroLink" : "heroLink heroLinkPrimary";
    return (
        <Link href={cta.href} className={cls}>
            {cta.label}
        </Link>
    );
}

function Card({ item }: { item: GridCard }) {
    const Wrapper: any = item.href ? Link : "div";
    const props = item.href ? { href: item.href } : {};
    return (
        <Wrapper
            {...props}
            className="menuCard"
            style={{ cursor: item.href ? "pointer" : "default" }}
        >
            <div className="menuCardTop">
                <div className="menuCardTitle">{item.title}</div>
                {item.tag ? <Pill label={item.tag} /> : null}
            </div>
            <div className="menuCardSub">{item.subtitle}</div>
            {item.href ? <div className="menuCardHint">Open →</div> : null}
        </Wrapper>
    );
}

function FeedCard({ item }: { item: FeedItem }) {
    const Wrapper: any = item.href ? Link : "div";
    const props = item.href ? { href: item.href } : {};
    return (
        <Wrapper
            {...props}
            className="menuCard"
            style={{ cursor: item.href ? "pointer" : "default" }}
        >
            <div className="menuCardTop">
                <div className="menuCardTitle">{item.title}</div>
                {item.comingSoon ? <Pill label="Coming Soon" /> : null}
            </div>

            <div className="menuCardSub">{item.excerpt}</div>

            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                {item.tags.map((t) => (
                    <Pill key={t} label={t} />
                ))}
                {item.date ? (
                    <span style={{ color: "var(--muted2)", fontSize: 12 }}>{item.date}</span>
                ) : null}
            </div>

            {item.href ? <div className="menuCardHint">Read →</div> : null}
        </Wrapper>
    );
}

export default function PageShell(props: PageShellProps) {
    return (
        <main className="page">
            {/* Top bar */}
            <section style={{ padding: "26px 20px 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <Link href="/" className="heroLink">
                            ← Back to Hub
                        </Link>
                        <Link href="/contact" className="heroLink">
                            Contact
                        </Link>
                        <Link href="/donate" className="heroLink">
                            Donate
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hero */}
            <section className="shellHero">
                <div className="shellHeroInner">
                    <div className="shellEyebrow">{props.eyebrow}</div>

                    <h1 className="shellHeadline">{props.headline}</h1>

                    <p className="shellSubhead">{props.subhead}</p>

                    {props.codeSample ? (
                        <div className="shellCode">{props.codeSample}</div>
                    ) : null}

                    <div className="shellCtas">
                        <ButtonLink cta={{ ...props.primaryCta, variant: "primary" }} />
                        {props.secondaryCta ? (
                            <ButtonLink cta={{ ...props.secondaryCta, variant: "secondary" }} />
                        ) : null}
                    </div>

                    {props.chips?.length ? (
                        <div className="shellChips">
                            {props.chips.map((c) => (
                                <span key={c} className="chip">
                                    {c}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    {props.stats?.length ? (
                        <div className="shellStats">
                            {props.stats.map((s) => (
                                <div key={s.label} className="statTile">
                                    <div className="statValue">{s.value}</div>
                                    <div className="statLabel">{s.label}</div>
                                    {s.sublabel ? <div className="statSub">{s.sublabel}</div> : null}
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </section>


            {/* Grid */}
            {props.gridCards?.length ? (
                <section style={{ padding: "18px 20px 0" }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                        {props.gridTitle ? (
                            <>
                                <h2 className="shellSectionTitle">{props.gridTitle}</h2>
                                <p className="shellSectionSub">Pick a lane. Go deeper.</p>
                            </>
                        ) : null}

                        <div className="menuGrid" style={{ maxWidth: 1100 }}>
                            {props.gridCards.map((c) => (
                                <Card key={c.title} item={c} />
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {/* Feed */}
            {props.feedItems?.length ? (
                <section style={{ padding: "22px 20px 0" }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                        <h2 className="shellSectionTitle">{props.feedTitle ?? "Featured"}</h2>
                        <p className="shellSectionSub">Short, current observations. No filler.</p>

                        <div style={{ display: "grid", gap: 14 }}>
                            {props.feedItems.map((f) => (
                                <FeedCard key={f.title} item={f} />
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {/* CTA Band */}
            {props.ctaBandTitle ? (
                <section style={{ padding: "26px 20px 70px" }}>
                    <div className="ctaBand">
                        <div className="ctaBandInner">
                            <div>
                                <div className="ctaBandTitle">{props.ctaBandTitle}</div>
                                {props.ctaBandBody ? <div className="ctaBandBody">{props.ctaBandBody}</div> : null}
                            </div>

                            <div className="ctaBandBtns">
                                {props.ctaBandPrimary ? (
                                    <Link className="heroLink heroLinkPrimary" href={props.ctaBandPrimary.href}>
                                        {props.ctaBandPrimary.label}
                                    </Link>
                                ) : null}
                                {props.ctaBandSecondary ? (
                                    <Link className="heroLink" href={props.ctaBandSecondary.href}>
                                        {props.ctaBandSecondary.label}
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div style={{ height: 60 }} />
            )}

            <footer className="footer">
                <div className="footerInner" style={{ maxWidth: 1100 }}>
                    <div className="footerLeft">{props.footerLeft ?? `© ${new Date().getFullYear()} DaFTitude`}</div>
                    <div className="footerRight">
                        <Link href="/donate" className="footerLink">
                            Donate
                        </Link>
                        <Link href="/contact" className="footerLink">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
