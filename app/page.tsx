"use client";

import Image from "next/image";
import { useState, type CSSProperties, type MouseEvent } from "react";
import SpinningPrism from "./components/SpinningPrism";
import BackgroundShapes from "./components/BackgroundShapes";
import ThemeToggle from "./components/ThemeToggle";
import RecruiterModal from "./components/RecruiterModal";
import ContactModal from "./components/ContactModal";

type ProjectArt = "ink" | "skin" | "sum" | "nft" | "imd" | "tat";

interface Project {
  art: ProjectArt;
  wide?: boolean;
  pillLeft: string;
  pillLeftStyle?: CSSProperties;
  pillRight: string;
  pillRightStyle?: CSSProperties;
  pillRightLive?: boolean;
  stack: string[];
  titlePrefix: string;
  titleEm: string;
  titleSuffix: string;
  blurb: string;
  yearMeta: string;
  links: { label: string; href: string }[];
}

interface IndexItem {
  num: string;
  titlePrefix: string;
  titleEm: string;
  meta: string;
  tags: string[];
}

interface TimelineRow {
  year: string;
  rolePrefix: string;
  roleEm: string;
  company: string;
  desc: string;
  tag: string;
}

interface ContactRow {
  label: string;
  value: string;
}

interface StackGroup {
  label: string;
  items: string[];
}

const projects: Project[] = [
  {
    art: "ink",
    wide: true,
    pillLeft: "Featured · Founder Project",
    pillRight: "Live in production",
    pillRightLive: true,
    stack: ["React", "TypeScript", "Firebase", "Stripe", "AI"],
    titlePrefix: "InkPlan — ",
    titleEm: "AI-powered SaaS",
    titleSuffix: " for tattoo studios",
    blurb:
      "A subscription dashboard, onboarding flows, and AI-integrated interfaces — owned end-to-end from design to deployment under IMDEV.",
    yearMeta: "2025 — 2026 · IMDEV",
    links: [
      { label: "Live demo ↗", href: "https://inkplan.net/" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
  {
    art: "skin",
    pillLeft: "01 · Skinstric",
    pillRight: "Live demo",
    pillRightLive: true,
    stack: ["React", "TypeScript", "REST API"],
    titlePrefix: "Skinstric — ",
    titleEm: "AI Skin Analysis",
    titleSuffix: "",
    blurb:
      "Camera-based capture, real-time analysis rendering, and a multi-step diagnostic UI built to internship-level specification.",
    yearMeta: "2025 · Frontend",
    links: [
      { label: "Live ↗", href: "https://skinstric-clone-eight.vercel.app/" },
      { label: "Code ↗", href: "https://github.com/ipmcknz33/Skinstric-clone" },
    ],
  },
  {
    art: "sum",
    pillLeft: "02 · Summarist",
    pillRight: "Live demo",
    pillRightLive: true,
    stack: ["Next.js", "Firebase", "Stripe", "Redux"],
    titlePrefix: "Summarist — ",
    titleEm: "Read or listen",
    titleSuffix: " to book summaries",
    blurb:
      "Subscription-gated book summary platform with Firebase Auth, Stripe checkout, audio playback, and a free-to-paid conversion flow.",
    yearMeta: "2025 · Full-stack",
    links: [
      { label: "Live ↗", href: "https://summarist-clone-isaac.vercel.app/" },
      {
        label: "Code ↗",
        href: "https://github.com/ipmcknz33/sumerarist-intern-build",
      },
    ],
  },
  {
    art: "nft",
    pillLeft: "03 · NFT Marketplace",
    pillRight: "Live demo",
    pillRightLive: true,
    stack: ["React", "Axios", "REST API"],
    titlePrefix: "NFT Marketplace — ",
    titleEm: "Browse, collect",
    titleSuffix: ", manage",
    blurb:
      "API-driven marketplace with dynamic collection browsing, asset detail views, cart state management, and client-side routing.",
    yearMeta: "2024 · Frontend",
    links: [
      {
        label: "Live ↗",
        href: "https://i-mackenzie-intership-1g61.vercel.app/",
      },
      {
        label: "Code ↗",
        href: "https://github.com/ipmcknz33/i.mackenzie-nft-marketplace",
      },
    ],
  },
  {
    art: "imd",
    pillLeft: "04 · IMDEV Studio",
    pillRight: "Live",
    pillRightLive: true,
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    titlePrefix: "IMDEV.studio — ",
    titleEm: "Studio platform",
    titleSuffix: "",
    blurb:
      "Custom motion design and a responsive layout system across all breakpoints — the home for IMDEV's products and writing.",
    yearMeta: "2025 · Founder",
    links: [{ label: "Live ↗", href: "https://imdev.studio" }],
  },
  {
    art: "tat",
    wide: true,
    pillLeft: "05 · Tattoos by Isaac M LLC",
    pillRight: "Since 2008",
    pillRightStyle: {
      color: "#FFB58A",
      borderColor: "rgba(255,181,138,0.4)",
    },
    stack: ["Visual Communication", "Composition", "Client Craft"],
    titlePrefix: "Tattoos by Isaac M — ",
    titleEm: "The other side",
    titleSuffix: " of the practice",
    blurb:
      "Two decades running a client-facing creative business. The visual eye, attention to detail, and craft discipline that shows up in every interface I build.",
    yearMeta: "2008 — Present · Honolulu, HI",
    links: [{ label: "Portfolio ↗", href: "#" }],
  },
];

const indexItems: IndexItem[] = [
  {
    num: "01",
    titlePrefix: "InkPlan — ",
    titleEm: "AI-powered SaaS",
    meta: "2025–26 · Founder, lead dev",
    tags: ["React", "Firebase", "Stripe", "AI"],
  },
  {
    num: "02",
    titlePrefix: "Skinstric — ",
    titleEm: "AI Skin Analysis",
    meta: "2025 · Frontend Developer",
    tags: ["React", "TypeScript", "REST"],
  },
  {
    num: "03",
    titlePrefix: "Summarist — ",
    titleEm: "Subscription book platform",
    meta: "2025 · Full-stack",
    tags: ["Next.js", "Firebase", "Stripe", "Redux"],
  },
  {
    num: "04",
    titlePrefix: "NFT Marketplace — ",
    titleEm: "API-driven",
    meta: "2024 · Frontend Developer",
    tags: ["React", "Axios", "REST"],
  },
  {
    num: "05",
    titlePrefix: "IMDEV.studio — ",
    titleEm: "Studio platform",
    meta: "2025 · Founder",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    num: "06",
    titlePrefix: "OPEN-EDITORS — ",
    titleEm: "Carousel interaction",
    meta: "2024 · Open source",
    tags: ["HTML", "JS", "CSS"],
  },
  {
    num: "07",
    titlePrefix: "E-commerce — ",
    titleEm: "Product flow",
    meta: "2024 · Practice build",
    tags: ["HTML", "CSS", "JS"],
  },
];

const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3 / Tailwind"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Redux", "Framer Motion"],
  },
  {
    label: "Backend & APIs",
    items: ["Firebase v9", "Firestore / Auth", "REST APIs", "Node.js"],
  },
  {
    label: "Tools",
    items: ["Git / GitHub", "Vercel", "Stripe", "Figma"],
  },
];

const timeline: TimelineRow[] = [
  {
    year: "Late 2025 — Now",
    rolePrefix: "Founder & Frontend ",
    roleEm: "Developer",
    company: "IMDEV · Remote",
    desc: "Started building InkPlan in late 2025; first GitHub commits early 2026; LLC formally registered April 1, 2026. Architected and shipped InkPlan as a live AI-powered SaaS, plus imdev.studio with Next.js, Tailwind, and Framer Motion.",
    tag: "Founder",
  },
  {
    year: "Sep 2025 — Feb 2026",
    rolePrefix: "Frontend ",
    roleEm: "Developer",
    company: "Frontend Simplified · Remote",
    desc: "Delivered production-style React and TypeScript projects on three-day sprint cycles with 100% on-time completion. Translated Figma designs into pixel-accurate, responsive components.",
    tag: "Contract",
  },
  {
    year: "Feb 2026 — Mar 2026",
    rolePrefix: "Skinstric ",
    roleEm: "Internship",
    company: "Frontend internship · Remote",
    desc: "Frontend internship building a multi-step AI skin analysis interface with camera capture, real-time results rendering, and pixel-accurate Figma implementation. Final commit March 30, 2026.",
    tag: "Internship",
  },
  {
    year: "2008 — Now",
    rolePrefix: "Professional ",
    roleEm: "Tattoo Artist",
    company: "Tattoos by Isaac M LLC · Honolulu",
    desc: "A 17+ year client-facing creative business. Visual communication and attention-to-detail skills that directly inform frontend UI work.",
    tag: "LLC",
  },
  {
    year: "Sep 2025 — Feb 2026",
    rolePrefix: "Full-Stack Engineering ",
    roleEm: "Program",
    company: "Frontend Simplified",
    desc: "Graduated. Hands-on program covering modern full-stack architecture, API design, and scalable frontend patterns.",
    tag: "Education",
  },
];

const contactMeta: ContactRow[] = [
  { label: "Phone", value: "(808) 761-6910" },
  { label: "Based", value: "Honolulu, Hawaiʻi" },
  { label: "GitHub", value: "ipmcknz33" },
  { label: "LinkedIn", value: "in/isaac-mackenzie-dev" },
  { label: "Studio", value: "imdev.studio" },
];

const tickerItems = [
  "React",
  "TypeScript",
  "Next.js",
  "Firebase",
  "Tailwind",
  "Framer Motion",
  "Stripe",
  "Redux",
];

function ProjectArtLayer({ art }: { art: ProjectArt }) {
  switch (art) {
    case "ink":
      return (
        <div className="art art-ink">
          <div className="lines"></div>
          <div className="ornament"></div>
          <div className="ink-mark">
            Ink
            <br />
            Plan
          </div>
        </div>
      );
    case "skin":
      return (
        <div className="art art-skin">
          <div className="face"></div>
          <div className="scan-grid"></div>
          <div className="scan-line"></div>
        </div>
      );
    case "sum":
      return (
        <div className="art art-sum">
          <div className="pages"></div>
          <div className="glow"></div>
          <div className="mark">S</div>
          <div className="label">
            Read or <b>listen</b>.
          </div>
        </div>
      );
    case "nft":
      return (
        <div className="art art-nft">
          <div className="grid-bg"></div>
          <div className="frame"></div>
          <div className="mark">NFT</div>
          <div className="label">
            Browse, <b>collect</b>.
          </div>
        </div>
      );
    case "imd":
      return (
        <div className="art art-imd">
          <div className="ribbon"></div>
          <div className="tag">IMDEV.STUDIO</div>
          <div className="display">
            Studio
            <br />
            <b>platform</b>
          </div>
        </div>
      );
    case "tat":
      return (
        <div className="art art-tat">
          <div className="num">17+</div>
          <div className="strokes"></div>
          <div className="word">
            <b>Seventeen</b> years
            <br />
            of visual craft.
          </div>
        </div>
      );
  }
}

export default function Home() {
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  function openContact(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    event.preventDefault();
    setContactOpen(true);
  }

  return (
    <main>
      <BackgroundShapes />

      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            <span className="mark">
              <SpinningPrism size={36} />
            </span>
            <span>
              Isaac Mackenzie / <b>Frontend Developer · 2026</b>
            </span>
          </a>
          <div className="nav-links">
            <a href="#work">
              <span className="num">01</span>Work
            </a>
            <a href="#index">
              <span className="num">02</span>Index
            </a>
            <a href="#about">
              <span className="num">03</span>About
            </a>
            <a href="#experience">
              <span className="num">04</span>Experience
            </a>
            <a
              href="#contact"
              className="contact-link"
              onClick={openContact}
            >
              <span className="num">05</span>Contact
            </a>
            <span className="availability">
              <span className="dot"></span>Open to work
            </span>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-meta">
            <span>① Index — IMDEV / Independent</span>
            <span>Honolulu, Hawaiʻi · GMT−10</span>
          </div>
          <h1>
            Frontend
            <br />
            developer
            <br />
            who <em>ships</em>.
          </h1>
          <div className="hero-row">
            <p className="hero-lede">
              I&apos;m <span className="accent">Isaac Mackenzie</span> — a
              frontend developer building production React, Next.js, and
              TypeScript applications. Founder of{" "}
              <span className="accent">IMDEV</span>, where I shipped{" "}
              <span className="accent">InkPlan</span>, a live AI-powered SaaS,
              owning the full design-to-deployment pipeline.
            </p>
            <div className="hero-aside">
              <div className="row">
                <span>Currently</span>
                <b>IMDEV · Frontend Simplified</b>
              </div>
              <div className="row">
                <span>Stack</span>
                <b>React · Next · TS · Firebase</b>
              </div>
              <div className="row">
                <span>Background</span>
                <b>17+ yrs visual craft</b>
              </div>
              <div className="row">
                <span>Open to</span>
                <b>FT &amp; contract roles</b>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn-secondary hero-cta"
            onClick={() => setRecruiterOpen(true)}
          >
            Quick Look · For Recruiters <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="wrap">
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {tickerItems.concat(tickerItems).map((item, i) => (
                <span key={i}>
                  {item} <span className="dot"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <span className="sec-num">02 / Project Showcase</span>
            <h2 className="sec-title">
              Things I&apos;ve <em>shipped</em>.
            </h2>
          </div>
          <div className="sec-meta sec-meta-row">
            <span>6 projects · React, Next.js, TypeScript</span>
            <span>2024 — 2026</span>
          </div>

          <div className="gallery">
            {projects.map((p, i) => (
              <article
                key={i}
                className={`gcard${p.wide ? " wide" : ""}`}
              >
                <ProjectArtLayer art={p.art} />
                <div className="meta-top">
                  <span className="pill" style={p.pillLeftStyle}>
                    {p.pillLeft}
                  </span>
                  <span
                    className={`pill${p.pillRightLive ? " live" : ""}`}
                    style={p.pillRightStyle}
                  >
                    {p.pillRight}
                  </span>
                </div>
                <div className="canvas">
                  <div className="info">
                    <div className="stack">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <h3>
                      {p.titlePrefix}
                      <em>{p.titleEm}</em>
                      {p.titleSuffix}
                    </h3>
                    <p>{p.blurb}</p>
                    <div className="footer-row">
                      <span>{p.yearMeta}</span>
                      <div className="links">
                        {p.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        id="index"
        style={{ paddingTop: 0, borderTop: "none" }}
      >
        <div className="wrap">
          <div className="section-head">
            <span className="sec-num">— Index</span>
            <h2 className="sec-title">
              All projects, <em>at a glance</em>.
            </h2>
          </div>
          <div className="work-list">
            {indexItems.map((item) => (
              <a key={item.num} className="work-item" href="#">
                <span className="work-num">{item.num}</span>
                <h3 className="work-title">
                  {item.titlePrefix}
                  <em>{item.titleEm}</em>
                </h3>
                <span className="work-meta">{item.meta}</span>
                <div className="work-tags">
                  {item.tags.map((tg) => (
                    <span key={tg} className="tag">
                      {tg}
                    </span>
                  ))}
                </div>
                <span className="work-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="section-head">
            <span className="sec-num">03 / About</span>
            <h2 className="sec-title">
              A maker who came to code <em>through craft</em>.
            </h2>
          </div>
          <div className="about">
            <div className="about-body">
              <p>
                I&apos;m a Frontend Developer focused on building{" "}
                <span className="accent">
                  clean, responsive, user-centered
                </span>{" "}
                web applications — modern frontend with JavaScript, TypeScript,
                React, Next.js, Firebase, and REST APIs.
              </p>
              <p>
                I founded <span className="accent">IMDEV</span> and shipped real
                products: an AI-powered skincare analysis platform, a
                subscription-based learning app, and a full-stack tattoo
                planning SaaS. Each one demonstrated my ability to translate
                complex ideas into intuitive, functional products.
              </p>
              <p>
                I come from a creative background in tattooing and design — that
                visual eye, the attention to detail, the visual consistency, and
                end-to-end thinking show up in every build.
              </p>
            </div>
            <aside className="stack-grid">
              {stackGroups.map((group) => (
                <div key={group.label}>
                  <h4>{group.label}</h4>
                  <ul>
                    {group.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="wrap">
          <div className="section-head">
            <span className="sec-num">04 / Experience</span>
            <h2 className="sec-title">
              Where I&apos;ve <em>spent the hours</em>.
            </h2>
          </div>
          <div className="timeline">
            {timeline.map((row, i) => (
              <div key={i} className="tl-row">
                <span className="tl-year">{row.year}</span>
                <div>
                  <div className="tl-role">
                    {row.rolePrefix}
                    <em>{row.roleEm}</em>
                  </div>
                  <div className="tl-co">{row.company}</div>
                </div>
                <div className="tl-desc">{row.desc}</div>
                <div className="tl-tag">{row.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <span className="sec-num">05 / Contact</span>
            <span className="sec-meta">
              Open to full-time &amp; contract roles
            </span>
          </div>
          <h2>
            Let&apos;s build
            <br />
            something <em>good.</em>
          </h2>
          <div className="contact-row">
            <div>
              <button
                type="button"
                className="contact-cta"
                onClick={openContact}
              >
                Get in touch
                <span className="arr">↗</span>
              </button>
            </div>
            <div className="contact-meta">
              {contactMeta.map((row) => (
                <div key={row.label} className="row">
                  <span>{row.label}</span>
                  <b>{row.value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-mark">
            <Image
              src="/assets/vectorwhite.png"
              alt="IMDEV"
              width={28}
              height={28}
            />
            <span>© 2026 Isaac Mackenzie · IMDEV</span>
          </div>
          <div className="socials">
            <a
              href="https://github.com/ipmcknz33"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/isaac-mackenzie-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://imdev.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              imdev.studio ↗
            </a>
          </div>
          <span>v 4.0 · Built by hand</span>
        </div>
      </footer>

      <RecruiterModal
        open={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
      />
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
