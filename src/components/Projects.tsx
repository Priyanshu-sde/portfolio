"use client";

import { useRef } from "react";
import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { LivePreview } from "./LivePreview";
import { ExternalLink, Package } from "lucide-react";
import { GithubIcon } from "./icons";
import { gsap, useGSAP } from "@/lib/gsap";

const accentMap = {
  accent: {
    text: "text-accent",
    border: "group-hover:border-accent/50",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]",
    dot: "bg-accent",
    tag: "bg-accent/10 text-accent/90",
    num: "text-accent/30",
  },
  cyan: {
    text: "text-cyan",
    border: "group-hover:border-cyan/50",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(34,211,238,0.5)]",
    dot: "bg-cyan",
    tag: "bg-cyan/10 text-cyan/90",
    num: "text-cyan/30",
  },
  magenta: {
    text: "text-magenta",
    border: "group-hover:border-magenta/50",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(232,121,249,0.5)]",
    dot: "bg-magenta",
    tag: "bg-magenta/10 text-magenta/90",
    num: "text-magenta/30",
  },
} as const;

export function Projects() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rows = gsap.utils.toArray<HTMLElement>(".project-row");
        rows.forEach((row, i) => {
          gsap.from(row, {
            opacity: 0,
            y: 40,
            x: i % 2 === 0 ? -40 : 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 82%" },
          });
          // subtle parallax drift on the preview frame
          const preview = row.querySelector(".project-preview");
          if (preview) {
            gsap.fromTo(
              preview,
              { yPercent: 4 },
              {
                yPercent: -4,
                ease: "none",
                scrollTrigger: {
                  trigger: row,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.5,
                },
              }
            );
          }
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        cmd="ls -la ~/projects"
        title="Projects"
        desc="Live previews — hover a panel to step inside. Built and shipped, from platforms to published packages."
      />

      <div className="space-y-8 sm:space-y-10">
        {projects.map((p, i) => {
          const a = accentMap[p.accent];
          const previewRight = i % 2 === 1;
          return (
            <article
              key={p.name}
              className={`project-row group grid overflow-hidden rounded-2xl border border-border bg-surface/50 transition-all duration-300 hover:-translate-y-1 ${a.border} ${a.glow} lg:grid-cols-2 lg:h-[360px]`}
            >
              {/* Preview panel (cell clips; inner wrapper parallaxes) */}
              <div
                className={`relative h-60 overflow-hidden border-b border-border sm:h-72 lg:h-auto lg:border-b-0 ${
                  previewRight ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r"
                }`}
              >
                {/* browser chrome */}
                <div className="absolute inset-x-0 top-0 z-30 flex items-center gap-2 border-b border-border bg-surface/90 px-3 py-2 backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="ml-2 truncate text-[11px] text-faint">
                    {p.live ? p.live.replace(/^https?:\/\//, "") : `${p.name.toLowerCase()} · cli`}
                  </span>
                </div>
                <div className="project-preview absolute inset-0 top-[33px]">
                  <div className="h-full w-full scale-[1.12] transition-transform duration-500 group-hover:scale-[1.18]">
                    <LivePreview url={p.live} name={p.name} fallbackCmd={p.fallbackCmd} />
                  </div>
                </div>
              </div>

              {/* Description panel */}
              <div
                className={`relative flex flex-col justify-center p-6 sm:p-8 ${
                  previewRight ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span
                  className={`pointer-events-none absolute right-5 top-4 text-5xl font-extrabold ${a.num}`}
                >
                  0{i + 1}
                </span>

                <div className="flex items-center gap-2.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${a.dot}`} />
                  <h3 className={`text-2xl font-bold ${a.text}`}>{p.name}</h3>
                  <span className="ml-auto text-xs text-faint">{p.period}</span>
                </div>

                <p className="mt-2 text-sm text-muted">{p.blurb}</p>

                <ul className="mt-4 space-y-2">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-fg/80">
                      <span className={`mt-1 ${a.text}`}>▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className={`rounded px-1.5 py-0.5 text-[11px] ${a.tag}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 font-medium ${a.text} transition-opacity hover:opacity-80`}
                    >
                      <ExternalLink className="h-4 w-4" /> live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-fg"
                    >
                      <GithubIcon className="h-4 w-4" /> code
                    </a>
                  )}
                  {p.extra && (
                    <a
                      href={p.extra.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-fg"
                    >
                      <Package className="h-4 w-4" /> {p.extra.label}
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
