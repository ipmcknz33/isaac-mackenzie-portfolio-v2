import Image from "next/image";
import SpinningPrism from "./components/SpinningPrism";
import BackgroundShapes from "./components/BackgroundShapes";

const projects = [
  {
    number: "01",
    title: "InkPlan",
    tag: "Featured / Founder Project / Live in production",
    year: "2025",
    stack: "React 18 / TypeScript / Supabase / Stripe / Lovable AI",
    blurb:
      "Live full-stack AI SaaS for tattoo training. Subscription paywall, Supabase Auth (email + Google OAuth), Stripe billing live and sandbox, AI coach via Lovable Gateway. Solo build under IMDEV.",
    image: "/assets/ink-plan.jpg.png",
    live: "https://inkplan.net/",
    repo: null,
  },
  {
    number: "02",
    title: "Skinstric",
    tag: "Frontend / 2025",
    year: "2025",
    stack: "Next.js / TypeScript / GSAP / REST API",
    blurb:
      "AI-powered skincare analysis interface with camera and gallery capture flow.",
    image: "/assets/skinstric-app.png",
    live: "https://skinstric-clone-eight.vercel.app/",
    repo: "https://github.com/ipmcknz33/Skinstric-clone",
  },
  {
    number: "03",
    title: "Summarist",
    tag: "Full-stack / 2025",
    year: "2025",
    stack: "Next.js / TypeScript / Redux / Firebase Auth / Stripe",
    blurb:
      "Subscription-gated book summary platform. Protected routes, audio playback, free-to-paid conversion.",
    image: "/assets/summarist-app.png",
    live: "https://summarist-clone-isaac.vercel.app/",
    repo: "https://github.com/ipmcknz33/sumerarist-intern-build",
  },
  {
    number: "04",
    title: "Ultraverse",
    tag: "Frontend / 2024",
    year: "2024",
    stack: "React / Axios / REST API / Routing",
    blurb: "API-driven NFT marketplace with routed product views.",
    image: "/assets/Ultraverse NFT Marketplace.png.png",
    live: "https://i-mackenzie-intership-1g61.vercel.app/",
    repo: "https://github.com/ipmcknz33/i.mackenzie-nft-marketplace",
  },
];

const contacts: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  {
    label: "Email",
    value: "imdevventures@gmail.com",
    href: "mailto:imdevventures@gmail.com",
  },
  {
    label: "Phone",
    value: "480-369-5423",
    href: "tel:+14803695423",
  },
  {
    label: "LinkedIn",
    value: "in/isaac-mackenzie-dev",
    href: "https://linkedin.com/in/isaac-mackenzie-dev",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/ipmcknz33",
    href: "https://github.com/ipmcknz33",
    external: true,
  },
  {
    label: "Studio",
    value: "imdev.studio",
    href: "https://imdev.studio",
    external: true,
  },
  {
    label: "Resume",
    value: "Isaac_Mackenzie_Resume.pdf",
    href: "/assets/Isaac_Mackenzie_Resume.pdf",
    external: true,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream text-ink">
      <BackgroundShapes />

      <div className="relative z-10">
        <nav className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 pt-8 flex items-center justify-between">
          <SpinningPrism size={48} />
          <ul className="flex items-center gap-8 font-sans text-sm">
            <li>
              <a
                href="#work"
                className="text-ink/70 hover:text-ink transition"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#background"
                className="text-ink/70 hover:text-ink transition"
              >
                Background
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-ink/70 hover:text-ink transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section className="mx-auto max-w-6xl px-6 pt-32 pb-24 md:px-10 lg:px-16">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink/60 mb-8">
            Im / Isaac Mackenzie / Frontend Developer / 2026
          </p>

          <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent mb-6">
            01 - Index
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink mb-10">
            Frontend developer
            <br />
            <span className="italic text-ink/80">who ships</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-ink/75 max-w-2xl leading-relaxed mb-12">
            I&apos;m Isaac Mackenzie - a frontend developer building production
            React, Next.js, and TypeScript applications. Founder of{" "}
            <span className="font-medium text-ink">IMDEV</span>, where I shipped{" "}
            <span className="font-medium text-ink">InkPlan</span>, a live
            full-stack AI SaaS, owning the full design-to-deployment pipeline.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-ink/15 pt-8">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                Currently
              </p>
              <p className="font-sans text-sm text-ink">
                IMDEV / Frontend Simplified
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                Stack
              </p>
              <p className="font-sans text-sm text-ink">
                React / Next / TS / Supabase
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                Background
              </p>
              <p className="font-sans text-sm text-ink">15+ yrs visual craft</p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                Available
              </p>
              <p className="font-sans text-sm text-ink">
                Mon-Wed / Remote / GMT-10
              </p>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-16 border-t border-ink/15"
        >
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent mb-6">
            02 - Work
          </p>

          <h2 className="font-display text-4xl md:text-6xl leading-[1.0] tracking-tight text-ink mb-16 max-w-3xl">
            Selected projects<span className="text-accent">,</span>{" "}
            <span className="italic text-ink/80">shipped.</span>
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
            {projects.map((p) => (
              <li key={p.title}>
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-cream-soft rounded-sm">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <p className="font-sans text-xs uppercase tracking-[0.16em] text-ink/55">
                    {p.number} / {p.tag}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/40">
                    {p.year}
                  </p>
                </div>

                <h3 className="font-display text-3xl md:text-4xl tracking-tight text-ink mb-3">
                  {p.title}
                  <span className="text-accent">.</span>
                </h3>

                <p className="font-sans text-base text-ink/75 leading-relaxed mb-4 max-w-md">
                  {p.blurb}
                </p>

                <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-4">
                  {p.stack}
                </p>

                <div className="flex items-center gap-5 font-sans text-sm">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-accent hover:text-accent transition"
                  >
                    Live
                  </a>
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/70 underline underline-offset-4 decoration-ink/20 hover:decoration-accent hover:text-accent transition"
                    >
                      Repo
                    </a>
                  ) : (
                    <span className="text-ink/40">Repo private</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="background"
          className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-16 border-t border-ink/15"
        >
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent mb-6">
            03 - Background
          </p>

          <h2 className="font-display text-4xl md:text-6xl leading-[1.0] tracking-tight text-ink mb-16 max-w-3xl">
            Two crafts<span className="text-accent">,</span>{" "}
            <span className="italic text-ink/80">one eye for detail.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-6 font-sans text-base md:text-lg text-ink/75 leading-relaxed">
              <p>
                Before I wrote a line of production code, I spent fifteen years
                tattooing - composing line, weight, and balance on something
                that has to read at a glance and hold up for decades. That eye
                for permanence shapes the way I build software.
              </p>
              <p>
                I run my tattoo studio Thursday through Sunday at TNT Tattoo in
                Aiea, Hawaii, and I write code Monday through Wednesday. In
                2024 I started engineering full time through Frontend
                Simplified, and in 2025 I founded IMDEV - the studio I use to
                ship production work, starting with InkPlan.
              </p>
              <p>
                I care about typographic rhythm, motion that respects user
                intent, and shipping the smallest version of the feature that
                actually solves the problem.
              </p>
            </div>

            <aside className="md:col-span-5 md:border-l md:border-ink/15 md:pl-10">
              <dl className="space-y-6">
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                    Studio
                  </dt>
                  <dd className="font-sans text-sm text-ink">
                    Tattoos by Isaac M LLC at TNT Tattoo, Aiea HI
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                    Years tattooing
                  </dt>
                  <dd className="font-sans text-sm text-ink">15+</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                    Engineering since
                  </dt>
                  <dd className="font-sans text-sm text-ink">
                    2024 / IMDEV founded 2025
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
                    Education
                  </dt>
                  <dd className="font-sans text-sm text-ink">
                    Frontend Simplified / Art Institute of Phoenix
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-16 border-t border-ink/15"
        >
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent mb-6">
            04 - Contact
          </p>

          <h2 className="font-display text-4xl md:text-6xl leading-[1.0] tracking-tight text-ink mb-16 max-w-3xl">
            Open for Mon-Wed<span className="text-accent">.</span>{" "}
            <span className="italic text-ink/80">Remote, GMT-10.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink/15">
            {contacts.map((c, i) => {
              const cols = 3;
              const colIndex = i % cols;
              const rowIndex = Math.floor(i / cols);
              const totalRows = Math.ceil(contacts.length / cols);
              const isLastColMd = colIndex === cols - 1;
              const isLastRowMd = rowIndex === totalRows - 1;
              const isLastMobile = i === contacts.length - 1;
              const className = [
                "group py-8 px-6 hover:bg-cream-soft/60 transition",
                isLastMobile ? "" : "border-b border-ink/15",
                isLastRowMd ? "md:border-b-0" : "",
                isLastColMd ? "" : "md:border-r md:border-ink/15",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={className}
                >
                  <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-3">
                    {c.label}
                  </p>
                  <p className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition">
                    {c.value}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        <footer className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 py-10 border-t border-ink/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-sans text-xs uppercase tracking-[0.14em] text-ink/50">
          <p>(c) 2026 Isaac Mackenzie / IMDEV</p>
          <p>Honolulu HI / Mon-Wed / Remote</p>
        </footer>
      </div>
    </main>
  );
}
