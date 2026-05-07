"use client";

import Modal from "./ui/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  src: string;
  downloadName?: string;
}

export default function PdfModal({
  open,
  onClose,
  title,
  src,
  downloadName,
}: Props) {
  return (
    <Modal open={open} onClose={onClose} title={title} size="wide">
      <div className="pdf-frame">
        <iframe
          src={`${src}#view=FitH`}
          title={title}
          aria-label={title}
        />
      </div>
      <div className="pdf-actions">
        <a
          className="modal-cta-primary"
          href={src}
          download={downloadName}
        >
          Download ↓
        </a>
        <a
          className="modal-cta-secondary"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in new tab ↗
        </a>
      </div>
    </Modal>
  );
}
