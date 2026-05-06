"use client";

import Image from "next/image";

interface SpinningPrismProps {
  size?: number;
  src?: string;
  alt?: string;
}

export default function SpinningPrism({
  size = 48,
  src = "/assets/logo.jpg",
  alt = "Isaac Mackenzie",
}: SpinningPrismProps) {
  const faceSize = Math.round(size * 0.625);
  const translateZ = Math.round(faceSize / 2);

  return (
    <figure
      className="spinning-prism"
      style={{
        width: size,
        height: size,
      }}
      aria-label={alt}
    >
      <div className="prism">
        <div className="face face--back">
          <Image src={src} alt={alt} width={faceSize} height={faceSize} priority />
        </div>
        <div className="face face--right">
          <Image src={src} alt="" width={faceSize} height={faceSize} priority />
        </div>
        <div className="face face--left">
          <Image src={src} alt="" width={faceSize} height={faceSize} priority />
        </div>
      </div>

      <style jsx>{`
        .spinning-prism {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          perspective: 1000px;
        }

        .prism {
          width: ${faceSize}px;
          height: ${faceSize}px;
          position: relative;
          transform-style: preserve-3d;
          animation: prism-spin 14s infinite linear;
        }

        .face {
          position: absolute;
          width: ${faceSize}px;
          height: ${faceSize}px;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(26, 26, 26, 0.08);
        }

        .face :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .face--back {
          transform: rotateY(180deg) translateZ(${translateZ}px);
        }

        .face--right {
          transform: rotateY(60deg) translateZ(${translateZ}px);
        }

        .face--left {
          transform: rotateY(-60deg) translateZ(${translateZ}px);
        }

        .prism:hover {
          animation-duration: 7s;
        }

        @keyframes prism-spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .prism {
            animation: none;
          }
        }
      `}</style>
    </figure>
  );
}