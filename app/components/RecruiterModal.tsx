"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./ui/Modal";
import PdfModal from "./PdfModal";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface PdfDoc {
  src: string;
  title: string;
  download: string;
}

const SKILLS = ["React", "TypeScript", "Next.js", "Firebase", "Stripe"];

const RESUME_DOC: PdfDoc = {
  src: "/assets/isaac-resume.pdf",
  title: "Resume — Isaac Mackenzie",
  download: "Isaac_Mackenzie_Resume.pdf",
};

const CERT_DOC: PdfDoc = {
  src: "/assets/isaac-certificate.pdf",
  title: "Frontend Simplified · Full-Stack Engineering",
  download: "Isaac_Mackenzie_Frontend_Simplified_Certificate.pdf",
};

export default function RecruiterModal({ open, onClose }: Props) {
  const [pdf, setPdf] = useState<PdfDoc | null>(null);

  return (
    <>
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
            <span>Open to</span>
            <b>
              Part-time frontend contracts (Mon–Wed, remote, HST). Production
              React/Next.js work, paid trials, and IMDEV studio engagements.
            </b>
          </div>
        </div>

        <div className="modal-credentials">
          <button
            type="button"
            className="cred-card"
            onClick={() => setPdf(RESUME_DOC)}
          >
            <div className="cred-pills">
              <span className="cred-pill">PDF · Preview</span>
              <span className="cred-pill cred-pill--accent">2026</span>
            </div>
            <div className="cred-pdf">
              <span>PDF</span>
            </div>
            <div className="cred-info">
              <span className="cred-label">
                Resume <em>— Isaac Mackenzie</em>
              </span>
              <span className="cred-meta">IMDEV / Frontend Simplified</span>
            </div>
            <div className="cred-footer">
              <span>1 page · A4</span>
              <span className="cred-arrow">View ↗</span>
            </div>
          </button>
          <button
            type="button"
            className="cred-card"
            onClick={() => setPdf(CERT_DOC)}
          >
            <div className="cred-pills">
              <span className="cred-pill">Certificate</span>
              <span className="cred-pill cred-pill--accent">Feb 2026</span>
            </div>
            <div className="cred-thumb">
              <Image
                src="/assets/Frontend Simplified.jpg"
                alt="Frontend Simplified Full-Stack Engineering certificate, awarded February 2026"
                fill
                sizes="(min-width: 600px) 240px, 80vw"
              />
            </div>
            <div className="cred-info">
              <span className="cred-label">
                Frontend Simplified <em>— Full-Stack</em>
              </span>
              <span className="cred-meta">Engineering Program · 2026</span>
            </div>
            <div className="cred-footer">
              <span>Graduated</span>
              <span className="cred-arrow">View ↗</span>
            </div>
          </button>
        </div>

        <a
          className="modal-secondary-link"
          href="mailto:imdevventures@gmail.com"
        >
          Or email me directly: imdevventures@gmail.com ↗
        </a>
      </Modal>

      <PdfModal
        open={pdf !== null}
        onClose={() => setPdf(null)}
        title={pdf?.title ?? ""}
        src={pdf?.src ?? ""}
        downloadName={pdf?.download}
      />
    </>
  );
}
