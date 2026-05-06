import SpinningPrism from "./components/SpinningPrism";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <nav className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 pt-8 flex items-center justify-between">
        <SpinningPrism size={48} />
        <ul className="flex items-center gap-8 font-sans text-sm">
          <li>
            <a href="#about" className="text-ink/70 hover:text-ink transition">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-ink/70 hover:text-ink transition"
            >
              Work
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
          Im &nbsp;·&nbsp; Isaac Mackenzie / Frontend Developer &nbsp;·&nbsp;
          2026
        </p>

        <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent mb-6">
          01 — Index
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink mb-10">
          Frontend developer
          <br />
          <span className="italic text-ink/80">who ships</span>
          <span className="text-accent">.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-ink/75 max-w-2xl leading-relaxed mb-12">
          I&apos;m Isaac Mackenzie — a frontend developer building production
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
              IMDEV · Frontend Simplified
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">
              Stack
            </p>
            <p className="font-sans text-sm text-ink">
              React · Next · TS · Supabase
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
              Mon–Wed · Remote · GMT−10
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
