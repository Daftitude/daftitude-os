import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function sanitize(s: unknown) {
  return String(s ?? "").trim();
}

async function sendContactEmail(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  // ✅ Pick ONE provider:
  // Option A: Resend (recommended)
  // - npm i resend
  // - add RESEND_API_KEY + CONTACT_TO_EMAIL in env
  //
  // Option B: Nodemailer/SMTP
  // - depends on your SMTP provider

  // --- Example: Resend ---
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "DaFTitude Contact <onboarding@resend.dev>",
  //   to: [process.env.CONTACT_TO_EMAIL!],
  //   reply_to: payload.email,
  //   subject: `[Contact] ${payload.subject || "No subject"} — ${payload.name || "Anonymous"}`,
  //   text: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\n${payload.message}`,
  // });

  // For now: throw if not configured so you don’t think it’s working when it isn’t.
  if (!process.env.CONTACT_TO_EMAIL) {
    throw new Error("Missing CONTACT_TO_EMAIL env var");
  }

  // If you haven’t wired a provider yet, this is intentionally a no-op beyond config validation.
  // Once you enable Resend/SMTP above, the email will actually send.
  void payload;
}

async function submitContact(formData: FormData) {
  "use server";

  const name = sanitize(formData.get("name"));
  const email = sanitize(formData.get("email"));
  const subject = sanitize(formData.get("subject"));
  const message = sanitize(formData.get("message"));

  // Strict + boring validation
  if (!name || name.length < 2) redirect("/contact?error=name#preview-contact");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    redirect("/contact?error=email#preview-contact");
  if (!message || message.length < 10) redirect("/contact?error=message#preview-contact");
  if (message.length > 5000) redirect("/contact?error=toolong#preview-contact");

  // ✅ This path should NOT create an account.
  await sendContactEmail({ name, email, subject, message });

  redirect("/contact?sent=1#preview-contact");
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
  sent?: boolean;
  error?: string;
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
    sent,
    error,
  } = props;

  const errorText =
    error === "name"
      ? "Please enter your name."
      : error === "email"
      ? "Please enter a valid email."
      : error === "message"
      ? "Message is too short."
      : error === "toolong"
      ? "Message is too long."
      : "";

  return (
    <section id={id} className="previewSection">
      <div className="previewShell">
        <div className="previewCols">
          {/* LEFT COPY — keep the same pattern */}
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

          {/* RIGHT STAGE — Book Now contains the real form */}
          <div className="previewStage" aria-label={`${eyebrow} booking`}>
            <div className="previewStageTop">
              <div className="previewStageTitleRow">
                <div className="previewIcon" aria-hidden="true">
                  <Image src={iconSrc} alt="" width={36} height={36} />
                </div>
                <div className="previewStageTitle">Book Now</div>
              </div>

              <div className="previewTabs" role="tablist" aria-label="Booking steps">
                <button className="previewTab isActive" type="button" role="tab">
                  Message
                </button>
                <button className="previewTab" type="button" role="tab">
                  Review
                </button>
                <button className="previewTab" type="button" role="tab">
                  Send
                </button>
              </div>
            </div>

            {(sent || errorText) && (
              <div className={`previewNotice ${sent ? "isSuccess" : "isError"}`} role="status">
                {sent
                  ? "Message sent. If you want tracking + history, create an account."
                  : errorText}
              </div>
            )}

            {/* FORM lives inside the stage */}
            <div className="previewMock previewFormWrap">
              <form action={submitContact} className="previewForm">
                <div className="previewField">
                  <label className="previewLabel" htmlFor="name">
                    Your Name:
                  </label>
                  <input
                    className="previewInput"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="previewField">
                  <label className="previewLabel" htmlFor="email">
                    Your Email:
                  </label>
                  <input
                    className="previewInput"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    type="email"
                    required
                  />
                </div>

                <div className="previewField">
                  <label className="previewLabel" htmlFor="subject">
                    Subject:
                  </label>
                  <input
                    className="previewInput"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="previewField">
                  <label className="previewLabel" htmlFor="message">
                    Your Message:
                  </label>
                  <textarea
                    className="previewTextarea"
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={5}
                    required
                  />
                </div>

                <div className="previewFormActions">
                  <button className="heroLink heroLinkPrimary" type="submit">
                    Send Message →
                  </button>

                  <span className="previewHint">
                    For tracking + history:{" "}
                    <Link className="previewInlineLink" href="/signup">
                      create an account
                    </Link>
                    .
                  </span>
                </div>
              </form>
            </div>

            {/* Steps remain as reinforcement */}
            <div className="previewTiles stack3">
              {tiles.map((x) => (
                <div key={`${id}-${x.t}`} className="previewTile">
                  <div className="previewTileKicker">{x.k}</div>
                  <div className="previewTileTitle">{x.t}</div>
                  <div className="previewTileSub">{x.s}</div>
                </div>
              ))}
            </div>

            {/* Footer nudges stay */}
            <div className="previewStageFoot">
              <div className="previewFootRow">
                <div className="previewFootCopy">
                  <div className="previewFootTitle">Private tracking</div>
                  <div className="previewFootSub">
                    Sign in to submit requests, track status, and keep everything in one place.
                  </div>
                </div>

                <div className="previewFootCtas">
                  <Link href="/login" className="heroLink heroLinkPrimary">
                    Sign in →
                  </Link>
                  <Link href="/signup" className="heroLink">
                    Create account →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end stage */}
        </div>
      </div>
    </section>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = (await searchParams) ?? {};

  const sent = sp.sent === "1";
  const error = typeof sp.error === "string" ? sp.error : undefined;

  const previewTiles: Tile[] = [
    { k: "Step 1", t: "Message", s: "Describe your goal or issue clearly." },
    { k: "Step 2", t: "Review", s: "Confirm scope, timeline, and constraints." },
    { k: "Step 3", t: "Send", s: "Submit and receive next steps." },
  ];

  return (
    <main className="page contactPage">
      {/* HERO (centered) */}
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
          A simple process that prevents expensive confusion.
          <br />
          Public contact stays lightweight. Private accounts unlock intake forms, request tracking,
          and a clean record of what we agreed on.
        </p>

        <div className="homeHeroLinks">
          <Link href="/signup" className="heroLink heroLinkPrimary">
            Create account →
          </Link>

          <Link href="/login" className="heroLink">
            Sign in →
          </Link>

          <a href="#preview-contact" className="heroLink">
            Book now →
          </a>
        </div>

        <a className="homeScrollHint" href="#preview-contact" aria-label="Scroll to booking form">
          ↓ scroll ↓
        </a>
      </section>

      {/* PREVIEW SECTION */}
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
        tiles={previewTiles}
        sent={sent}
        error={error}
      />
    </main>
  );
}