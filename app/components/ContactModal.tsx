"use client";

import { useState, type FormEvent } from "react";
import Modal from "./ui/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Placeholder submit — wire to a backend later.
    console.log("Contact form submitted:", { name, email, message });
  }

  return (
    <Modal open={open} onClose={onClose} title="Get in touch">
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <div className="modal-form-actions">
          <button type="submit" className="modal-cta-primary">
            Send message
          </button>
          <a
            className="modal-cta-secondary"
            href="/assets/Isaac_Mackenzie_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume ↗
          </a>
        </div>
      </form>
    </Modal>
  );
}
