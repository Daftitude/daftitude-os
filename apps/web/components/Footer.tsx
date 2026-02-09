import Link from "next/link";

type FooterVariant = "public" | "private";

export default function Footer({ variant = "public" }: { variant?: FooterVariant }) {
    const year = new Date().getFullYear();

    return (
        <footer className="siteFooter" role="contentinfo">
            <div className="siteFooterInner">
                <div className="siteFooterGrid">
                    {/* Brand / Blurb */}
                    <div className="siteFooterBrand">
                        <div className="siteFooterTitle">DaFTitude</div>
                        <p className="siteFooterBlurb">
                            Smart Tech, Simple Solutions. I provide expert tech support, smart home setups,
                            and digital services tailored to your needs.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="siteFooterCol">
                        <div className="siteFooterHeading">Contact Me</div>
                        <div className="siteFooterLines">
                            <div>
                                <span className="siteFooterLabel">Email:</span>{" "}
                                <a className="siteFooterLink" href="mailto:Kyhl_Hines@daftitude.com">
                                    Kyhl_Hines@daftitude.com
                                </a>
                            </div>
                            <div>
                                <span className="siteFooterLabel">Phone:</span>{" "}
                                <a className="siteFooterLink" href="tel:+12052108012">
                                    +1 (205) 210 8012
                                </a>
                            </div>
                            <div>
                                <span className="siteFooterLabel">Location:</span> Birmingham, AL
                            </div>
                        </div>
                    </div>

                    {/* Links / Social */}
                    <div className="siteFooterCol">
                        <div className="siteFooterHeading">Follow Me</div>
                        <div className="siteFooterSocial" aria-label="Social links">
                            {/* Replace these with real links when ready */}
                            <a className="siteFooterSocialBtn" href="#" aria-label="Website">
                                🌐
                            </a>
                            <a className="siteFooterSocialBtn" href="#" aria-label="Twitter/X">
                                🐦
                            </a>
                            <a className="siteFooterSocialBtn" href="#" aria-label="Instagram">
                                📸
                            </a>
                            <a className="siteFooterSocialBtn" href="#" aria-label="TikTok">
                                📹
                            </a>
                            <a className="siteFooterSocialBtn" href="#" aria-label="YouTube">
                                🎥
                            </a>
                            <a className="siteFooterSocialBtn" href="#" aria-label="TechHub">
                                🖥️
                            </a>
                            <a className="siteFooterSocialBtn" href="#" aria-label="LinkedIn">
                                💼
                            </a>
                        </div>

                        {variant === "private" ? (
                            <div className="siteFooterMeta">
                                <span className="pill">Signed in</span>
                                <Link className="siteFooterMiniLink" href="/account">
                                    Account
                                </Link>
                                <span className="siteFooterDot">•</span>
                                <Link className="siteFooterMiniLink" href="/logout">
                                    Logout
                                </Link>
                            </div>
                        ) : (
                            <div className="siteFooterMeta">
                                <Link className="siteFooterMiniLink" href="/services">
                                    Services
                                </Link>
                                <span className="siteFooterDot">•</span>
                                <Link className="siteFooterMiniLink" href="/contact">
                                    Contact
                                </Link>
                                <span className="siteFooterDot">•</span>
                                <Link className="siteFooterMiniLink" href="/privacy">
                                    Privacy
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="siteFooterBottom">
                    <div className="siteFooterBottomLeft">
                        © {year} DaFTitude. All rights reserved.
                    </div>

                    <div className="siteFooterBottomRight">
                        <div>
                        <Link href="/donate" className="siteFooterBottomLink">
                            Donate
                        </Link>
                        </div>
                        <div>
                        <Link href="/contact" className="siteFooterBottomLink">
                            Contact
                        </Link>
                        </div>
                        <div>
                        <Link href="/privacy" className="siteFooterBottomLink">
                            Privacy
                        </Link>
                        </div>
                        <div>
                        <Link href="/terms" className="siteFooterBottomLink">
                            Terms
                        </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
