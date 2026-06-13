"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skills[active];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        cmd="cat /proc/skills"
        title="Skills"
        desc="The toolkit I reach for. Pick a directory to inspect."
      />

      <Reveal>
        <div className="overflow-hidden rounded-xl border border-border bg-surface/60">
          <div className="grid md:grid-cols-[260px_1fr]">
            {/* Sidebar: category list as a file tree */}
            <div className="border-b border-border bg-[#080b10] p-3 md:border-b-0 md:border-r">
              <p className="px-2 pb-2 text-xs text-faint">~/skills</p>
              <ul className="flex flex-wrap gap-1.5 md:flex-col">
                {skills.map((g, i) => (
                  <li key={g.category}>
                    <button
                      onClick={() => setActive(i)}
                      className={`flex w-full items-center gap-2 rounded px-2.5 py-2 text-left text-sm transition-colors ${
                        active === i
                          ? "bg-accent/15 text-accent"
                          : "text-muted hover:bg-surface-2 hover:text-fg"
                      }`}
                    >
                      <span className={active === i ? "text-accent" : "text-faint"}>
                        {active === i ? "▸" : "·"}
                      </span>
                      {g.category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main: bars */}
            <div className="p-5 sm:p-7">
              <p className="mb-5 text-sm text-faint">
                <span className="text-accent">$</span> {group.cmd}
              </p>
              <div className="space-y-5">
                {group.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-baseline justify-between text-sm">
                      <span className="text-fg">{s.name}</span>
                      <span className="text-faint">{s.level}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-surface-2">
                      <motion.div
                        key={`${active}-${s.name}`}
                        className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
