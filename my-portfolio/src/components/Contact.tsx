import { profile } from "../data/portfolio";
import type { ReactNode } from "react";

export default function Contact() {

    const links: { label: string; icon: ReactNode; href: string | null }[] = [
        { label: 'Github', icon: '🐙', href: profile.links.github },
        { label: 'X(旧Twitter)', icon: '', href: profile.links.twitter },
        { label: 'Email', icon: '✉', href: profile.links.email }
    ]

    return (
        <section className="section" id="contact">
            <div className="Container">
                <div contact-inner>
                    <h2 className="section-title">
                        <span>Contant</span>
                    </h2>
                    <p className="section-sub">連絡先</p>

                    <p className="contact-sub">
                        連絡先はこちらになります。
                    </p>

                    <div className="contact-links">
                        {links
                        .filter((link):link is typeof link & {href : string} => link.href !== null)
                        .map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="contact-link-item"
                                target={link.href.startsWith('mailto') ?
                                    undefined : '_blank'}
                                rel="noreferrer"
                            >
                                <span className="contact-like-icon">
                                    {link.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
