"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, MapPin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { MatrixRain } from "./MatrixRain";
import { DeveloperAvatar } from "./DeveloperAvatar";
import { gsap, useGSAP } from "@/lib/gsap";

const roles = [
  "Backend & Full-Stack Engineer",
  "Systems & Infra Tinkerer",
  "Competitive Programmer",
  "Computerphile",
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function Hero() {
  const reduced = useReducedMotion();
  const section = useRef<HTMLElement>(null);

  // Rotating role typewriter
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState(reduced ? roles[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setTyped(roles[0]);
      return;
    }
    const full = roles[roleIdx];
    if (!deleting && typed === full) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && typed === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(
      () => {
        setTyped((prev) =>
          deleting ? full.slice(0, prev.length - 1) : full.slice(0, prev.length + 1)
        );
      },
      deleting ? 35 : 70
    );
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx, reduced]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance timeline
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".hero-line", { y: 28, opacity: 0, duration: 0.7, stagger: 0.12 }, 0.1)
          .from(".hero-avatar", { scale: 0.9, opacity: 0, duration: 0.9, ease: "back.out(1.4)" }, 0.3);

        // Scroll parallax — layers move at different speeds
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
        tl.to(".hero-content", { y: -70, opacity: 0.25, ease: "none" }, 0)
          .to(".hero-avatar", { y: 120, ease: "none" }, 0)
          .to(".hero-grid", { y: 90, ease: "none" }, 0)
          .to(".hero-matrix", { y: 50, ease: "none" }, 0)
          .to(".hero-glow", { y: 60, scale: 1.1, ease: "none" }, 0);
      });
      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      id="top"
      className="scanlines relative flex min-h-dvh items-center overflow-hidden pt-14"
    >
      <div className="hero-grid bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="hero-matrix pointer-events-none absolute inset-0 -z-10">
        <MatrixRain />
      </div>
      <div className="hero-glow bg-radial-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-bg/30 via-bg/60 to-bg" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Left: identity */}
        <div className="hero-content">
          <p className="hero-line mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            available for opportunities
          </p>

          <h1 className="hero-line text-4xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-6xl">
            Priyanshu
            <br />
            <span className="text-accent text-glow">Chaurasia</span>
          </h1>

          <p className="hero-line mt-5 h-7 text-lg text-cyan text-glow-cyan sm:text-xl">
            <span className="text-faint">{"> "}</span>
            {typed}
            <span className="blink text-accent">_</span>
          </p>

          <p className="hero-line mt-4 max-w-xl text-muted">{profile.tagline}</p>

          <div className="hero-line mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-faint">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5 text-accent" /> {profile.email}
            </a>
          </div>

          <div className="hero-line mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md border border-accent/50 bg-accent/15 px-5 py-2.5 text-sm font-semibold text-accent shadow-glow transition-all hover:bg-accent/25 hover:shadow-[0_0_30px_-4px_rgba(34,197,94,0.5)]"
            >
              view projects →
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-faint hover:bg-surface-2"
            >
              get in touch
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="hero-avatar">
          <DeveloperAvatar />
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-faint transition-colors hover:text-accent"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
