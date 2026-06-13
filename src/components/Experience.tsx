import { experience, education } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        cmd="git log --oneline --graph"
        title="Experience"
        desc="Where I've shipped production code."
      />

      <div className="relative pl-6 sm:pl-8">
        <span className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-accent via-border to-transparent" />

        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <article className="relative mb-10">
              <span className="absolute -left-[26px] top-1.5 flex h-3 w-3 sm:-left-[34px]">
                {job.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                )}
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              </span>

              <div className="rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent/30 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-fg">
                    <Briefcase className="h-4 w-4 text-accent" />
                    {job.role}
                    <span className="text-muted">@</span>
                    <span className="text-accent">{job.company}</span>
                  </h3>
                  <span className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-xs text-faint">{job.location}</p>

                <ul className="mt-4 space-y-3">
                  {job.points.map((pt, j) => (
                    <li key={j} className="text-sm leading-relaxed text-fg/85">
                      <div className="flex gap-2">
                        <span className="mt-1.5 text-accent">▹</span>
                        <span>{pt.text}</span>
                      </div>
                      <div className="ml-5 mt-1.5 flex flex-wrap gap-1.5">
                        {pt.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-accent/10 px-1.5 py-0.5 text-[11px] text-accent/90"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.1}>
          <article className="relative">
            <span className="absolute -left-[26px] top-1.5 flex h-3 w-3 sm:-left-[34px]">
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-cyan bg-bg" />
            </span>
            <div className="rounded-xl border border-border bg-surface/60 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex items-center gap-2 text-lg font-bold text-fg">
                  <GraduationCap className="h-4 w-4 text-cyan" />
                  {education.degree}
                </h3>
                <span className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-xs text-muted">
                  {education.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-cyan">{education.school}</p>
              <p className="text-xs text-faint">{education.location}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
