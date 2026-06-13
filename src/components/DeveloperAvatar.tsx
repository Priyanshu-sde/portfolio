"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const haloSymbols = [
  { t: "</>", x: 380, y: 210, c: "var(--color-accent)" },
  { t: "{ }", x: 327, y: 337, c: "var(--color-cyan)" },
  { t: "01", x: 200, y: 392, c: "var(--color-accent)" },
  { t: "( )", x: 73, y: 337, c: "var(--color-cyan)" },
  { t: "#!", x: 20, y: 210, c: "var(--color-accent)" },
  { t: ";;", x: 73, y: 83, c: "var(--color-cyan)" },
  { t: "λ", x: 200, y: 30, c: "var(--color-accent)" },
  { t: "*", x: 327, y: 83, c: "var(--color-cyan)" },
];

export function DeveloperAvatar() {
  const root = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const float = useRef<SVGGElement>(null);
  const halo = useRef<SVGGElement>(null);
  const eyes = useRef<SVGGElement>(null);
  const antenna = useRef<SVGCircleElement>(null);
  const particles = useRef<SVGGElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Orbiting code ring
        gsap.to(halo.current, {
          rotation: 360,
          transformOrigin: "200px 210px",
          duration: 44,
          ease: "none",
          repeat: -1,
        });
        // Idle float
        gsap.to(float.current, {
          y: -16,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        // Blink
        gsap
          .timeline({ repeat: -1, repeatDelay: 2.6 })
          .to(eyes.current, {
            scaleY: 0.1,
            transformOrigin: "center center",
            duration: 0.09,
            yoyo: true,
            repeat: 1,
          });
        // Antenna pulse
        gsap.to(antenna.current, {
          opacity: 0.35,
          duration: 0.9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        // Drifting particles
        gsap.to(particles.current, {
          y: -10,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        // Pointer-driven parallax + eye tracking + tilt
        const tiltY = gsap.quickTo(tilt.current, "rotationY", { duration: 0.7, ease: "power3" });
        const tiltX = gsap.quickTo(tilt.current, "rotationX", { duration: 0.7, ease: "power3" });
        const pupX = gsap.quickTo(eyes.current, "x", { duration: 0.5, ease: "power3" });
        const pupY = gsap.quickTo(eyes.current, "y", { duration: 0.5, ease: "power3" });
        const haloX = gsap.quickTo(halo.current, "x", { duration: 0.9, ease: "power3" });
        const haloY = gsap.quickTo(halo.current, "y", { duration: 0.9, ease: "power3" });

        const onMove = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          tiltY(nx * 16);
          tiltX(-ny * 14);
          pupX(nx * 16);
          pupY(ny * 12);
          haloX(nx * -24);
          haloY(ny * -24);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[440px]" style={{ perspective: 1100 }}>
      <div ref={tilt} style={{ transformStyle: "preserve-3d" }}>
        <svg
          viewBox="0 0 400 460"
          className="h-auto w-full overflow-visible drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          role="img"
          aria-label="Animated developer robot avatar"
        >
          <defs>
            <radialGradient id="orb" cx="50%" cy="46%" r="55%">
              <stop offset="0%" stopColor="rgba(34,197,94,0.5)" />
              <stop offset="55%" stopColor="rgba(34,197,94,0.12)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0)" />
            </radialGradient>
            <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f2d40" />
              <stop offset="100%" stopColor="#0e1622" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2332" />
              <stop offset="100%" stopColor="#0c1320" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a1018" />
              <stop offset="100%" stopColor="#04070b" />
            </linearGradient>
            <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="orbBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {/* Glow orb */}
          <circle cx="200" cy="212" r="170" fill="url(#orb)" filter="url(#orbBlur)" />

          {/* Orbiting code ring */}
          <g ref={halo}>
            {haloSymbols.map((s, i) => (
              <text
                key={i}
                x={s.x}
                y={s.y}
                fill={s.c}
                opacity="0.55"
                fontSize="22"
                fontWeight="700"
                fontFamily="var(--font-jetbrains, monospace)"
                textAnchor="middle"
                dominantBaseline="central"
              >
                {s.t}
              </text>
            ))}
          </g>

          {/* Bot */}
          <g ref={float}>
            {/* ground shadow */}
            <ellipse cx="200" cy="404" rx="78" ry="13" fill="#000" opacity="0.45" filter="url(#softShadow)" />

            {/* shoulders / body */}
            <rect x="116" y="332" width="168" height="92" rx="32" fill="url(#bodyGrad)" stroke="#243044" />
            <rect x="150" y="344" width="100" height="8" rx="4" fill="var(--color-accent)" opacity="0.7" />
            <circle cx="200" cy="384" r="9" fill="#05080c" stroke="var(--color-accent)" strokeWidth="2" />

            {/* neck */}
            <rect x="184" y="312" width="32" height="26" rx="8" fill="#0f1722" stroke="#243044" />

            {/* headphone band */}
            <path d="M104 210 Q200 104 296 210" fill="none" stroke="#2a3a52" strokeWidth="13" strokeLinecap="round" />

            {/* head */}
            <rect x="110" y="150" width="180" height="172" rx="34" fill="url(#headGrad)" stroke="#2a3a52" strokeWidth="2" />
            <rect x="118" y="158" width="164" height="44" rx="22" fill="#fff" opacity="0.03" />

            {/* antenna */}
            <line x1="200" y1="150" x2="200" y2="120" stroke="#2a3a52" strokeWidth="4" strokeLinecap="round" />
            <circle ref={antenna} cx="200" cy="113" r="7" fill="var(--color-accent)" filter="url(#glow)" />

            {/* ear cups */}
            <rect x="90" y="196" width="34" height="74" rx="15" fill="#16202f" stroke="#2a3a52" strokeWidth="2" />
            <rect x="100" y="214" width="6" height="38" rx="3" fill="var(--color-accent)" opacity="0.6" />
            <rect x="276" y="196" width="34" height="74" rx="15" fill="#16202f" stroke="#2a3a52" strokeWidth="2" />
            <rect x="294" y="214" width="6" height="38" rx="3" fill="var(--color-accent)" opacity="0.6" />

            {/* face screen */}
            <rect x="132" y="178" width="136" height="116" rx="24" fill="url(#screenGrad)" stroke="#1a2332" strokeWidth="2" />
            <rect x="140" y="186" width="120" height="20" rx="10" fill="#fff" opacity="0.025" />

            {/* eyes (tracked + blink) */}
            <g ref={eyes}>
              <rect x="158" y="214" width="26" height="34" rx="13" fill="var(--color-accent)" filter="url(#glow)" />
              <rect x="216" y="214" width="26" height="34" rx="13" fill="var(--color-accent)" filter="url(#glow)" />
              <circle cx="166" cy="222" r="3.5" fill="#eafff0" opacity="0.9" />
              <circle cx="224" cy="222" r="3.5" fill="#eafff0" opacity="0.9" />
            </g>

            {/* smile */}
            <path d="M178 268 Q200 282 222 268" fill="none" stroke="var(--color-cyan)" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* front floating particles */}
          <g ref={particles} opacity="0.7">
            <circle cx="58" cy="120" r="3" fill="var(--color-accent)" />
            <circle cx="350" cy="150" r="2.5" fill="var(--color-cyan)" />
            <text x="60" y="320" fill="var(--color-cyan)" fontSize="16" fontFamily="var(--font-jetbrains, monospace)">+</text>
            <text x="338" y="300" fill="var(--color-accent)" fontSize="16" fontFamily="var(--font-jetbrains, monospace)">+</text>
            <circle cx="330" cy="380" r="3" fill="var(--color-accent)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
