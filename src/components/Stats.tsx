import { stats, awards, about } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Trophy, Activity } from "lucide-react";

export function Stats() {
  return (
    <section id="stats" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        cmd="./stats --awards --rating"
        title="Stats & Awards"
        desc="Competitive programming ratings, accomplishments, and a little about how I work."
      />

      {/* CP stat cards — character-sheet style */}
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-5 text-center transition-colors hover:border-accent/40">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <Activity className="mx-auto mb-2 h-4 w-4 text-accent" />
              <p className="text-3xl font-extrabold text-fg sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-accent">{s.label}</p>
              <p className="text-xs text-faint">{s.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Awards */}
        <Reveal>
          <div className="h-full rounded-xl border border-border bg-surface/60 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-fg">
              <Trophy className="h-5 w-5 text-amber" /> Accomplishments
            </h3>
            <ul className="space-y-4">
              {awards.map((a) => (
                <li key={a.title} className="flex gap-3">
                  <span className="mt-1 text-amber">★</span>
                  <div>
                    <p className="font-semibold text-fg">{a.title}</p>
                    <p className="text-sm text-muted">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* About / cat README */}
        <Reveal delay={0.08}>
          <div className="h-full overflow-hidden rounded-xl border border-border bg-[#080b10]">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="ml-2 text-xs text-faint">cat README.md</span>
            </div>
            <div className="space-y-3 p-6 text-sm leading-relaxed">
              <p className="text-faint"># whoami</p>
              {about.map((line, i) => (
                <p key={i} className="text-fg/85">
                  {line}
                </p>
              ))}
              <p className="pt-1 text-accent">
                {"> "}status: <span className="text-fg">always learning, always shipping</span>
                <span className="cursor-bar" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
