"use client";

import Image from "next/image";
import Modal from "./ui/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SKILLS = ["React", "TypeScript", "Next.js", "Firebase", "Stripe"];

export default function RecruiterModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Quick Look · For Recruiters">
      <p className="modal-bio">
        I&apos;m a frontend developer based in Honolulu, focused on shipping
        production React, Next.js, and TypeScript applications. I founded IMDEV
        in late 2025 and shipped InkPlan — a live AI-powered SaaS — owning the
        full design-to-deployment pipeline.
      </p>

      <div className="modal-skills">
        <span className="modal-skills-label">Key skills</span>
        <div className="modal-skills-row">
          {SKILLS.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="modal-meta">
        <div>
          <span>Location</span>
          <b>Honolulu, HI · GMT-10</b>
        </div>
        <div>
          <span>Availability</span>
          <b>Open to FT &amp; contract</b>
        </div>
      </div>

      <div className="modal-credentials">
        <a
          className="cred-card"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cred-pdf">
            <span>PDF</span>
          </div>
          <div className="cred-info">
            <span className="cred-label">Download Resume ↗</span>
            <span className="cred-meta">2026 · IMDEV / Frontend Simplified</span>
          </div>
        </a>
        <a
          className="cred-card"
          href="/certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cred-thumb">
            <Image
              src="/assets/Frontend Simplified.jpg"
              alt="Frontend Simplified Full-Stack Engineering certificate, awarded February 2026"
              fill
              sizes="(min-width: 600px) 240px, 80vw"
            />
          </div>
          <div className="cred-info">
            <span className="cred-label">Frontend Simplified ↗</span>
            <span className="cred-meta">Full-Stack Engineering · Feb 2026 · PDF</span>
          </div>
        </a>
      </div>

      <a
        className="modal-secondary-link"
        href="mailto:imdevventures@gmail.com"
      >
        Or email me directly: imdevventures@gmail.com ↗
      </a>
    </Modal>
  );
}
