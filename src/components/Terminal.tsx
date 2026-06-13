"use client";

import { useEffect, useRef, useState } from "react";
import { profile, skills, projects, experience, stats } from "@/lib/data";
import { Reveal } from "./Reveal";

type Line = { type: "in" | "out"; text: string; tone?: "accent" | "cyan" | "amber" | "muted" | "red" };

const PROMPT = "guest@priyanshu:~$";

const HELP: Line[] = [
  { type: "out", text: "Available commands:", tone: "cyan" },
  { type: "out", text: "  help        list commands" },
  { type: "out", text: "  whoami      who is Priyanshu" },
  { type: "out", text: "  skills      core tech stack" },
  { type: "out", text: "  projects    shipped work" },
  { type: "out", text: "  experience  work history" },
  { type: "out", text: "  stats       competitive programming" },
  { type: "out", text: "  socials     where to find me" },
  { type: "out", text: "  contact     how to reach me" },
  { type: "out", text: "  neofetch    system info" },
  { type: "out", text: "  sudo        try it ;)" },
  { type: "out", text: "  clear       wipe the screen" },
];

const BANNER: Line[] = [
  { type: "out", text: "Type a command and hit Enter. Try 'help' or 'neofetch'.", tone: "muted" },
];

function run(raw: string): Line[] | "CLEAR" {
  const cmd = raw.trim().toLowerCase();
  const arg = raw.trim().split(/\s+/).slice(1).join(" ");

  switch (cmd.split(/\s+/)[0]) {
    case "":
      return [];
    case "help":
    case "?":
      return HELP;
    case "whoami":
      return [
        { type: "out", text: profile.name, tone: "accent" },
        { type: "out", text: `${profile.role}` },
        { type: "out", text: profile.tagline, tone: "muted" },
      ];
    case "skills":
      return skills.flatMap((g) => [
        { type: "out", text: `~/${g.category.toLowerCase()}`, tone: "cyan" } as Line,
        { type: "out", text: "  " + g.skills.map((s) => s.name).join(" · ") } as Line,
      ]);
    case "projects":
      return projects.flatMap((p) => [
        { type: "out", text: `● ${p.name}  (${p.period})`, tone: "accent" } as Line,
        { type: "out", text: `  ${p.blurb}` } as Line,
        { type: "out", text: `  ${p.live || p.repo || ""}`, tone: "muted" } as Line,
      ]);
    case "experience":
      return experience.flatMap((e) => [
        { type: "out", text: `${e.role} @ ${e.company}`, tone: "accent" } as Line,
        { type: "out", text: `  ${e.period} · ${e.location}`, tone: "muted" } as Line,
        ...e.points.slice(0, 2).map(
          (pt) => ({ type: "out", text: `  - ${pt.text}` }) as Line
        ),
      ]);
    case "stats":
      return stats.map(
        (s) => ({ type: "out", text: `${s.label.padEnd(12)} ${s.value} ${s.sub}`, tone: "amber" }) as Line
      );
    case "socials":
      return [
        { type: "out", text: `github    ${profile.socials.github}`, tone: "cyan" },
        { type: "out", text: `linkedin  ${profile.socials.linkedin}`, tone: "cyan" },
        { type: "out", text: `web       ${profile.website}`, tone: "cyan" },
      ];
    case "contact":
      return [
        { type: "out", text: `email  ${profile.email}`, tone: "accent" },
        { type: "out", text: `phone  ${profile.phone}` },
        { type: "out", text: "or scroll to ./contact and send a message ↓", tone: "muted" },
      ];
    case "neofetch":
      return [
        { type: "out", text: "        _nnnn_         guest@priyanshu", tone: "accent" },
        { type: "out", text: "       dGGGGMMb        ---------------", tone: "accent" },
        { type: "out", text: "      @p~qp~~qMb       OS:    ArchLinux (btw)", tone: "accent" },
        { type: "out", text: "      M|@||@) M|       Shell: zsh", tone: "accent" },
        { type: "out", text: "      @,----.JM|       Role:  " + profile.role, tone: "accent" },
        { type: "out", text: "     JS^\\__/  qKL      Langs: C++ · TypeScript · JS · C", tone: "accent" },
        { type: "out", text: "    dZP        qKRb    Edu:   B.Tech IT, KNIT '27", tone: "accent" },
        { type: "out", text: "   dZP          qKKb   Loves: systems, search, infra", tone: "accent" },
        { type: "out", text: "  fZP            SMMb  Uptime: caffeinated", tone: "accent" },
      ];
    case "echo":
      return [{ type: "out", text: arg || "" }];
    case "ls":
      return [
        {
          type: "out",
          text: "experience/  projects/  skills/  stats/  contact/  README.md",
          tone: "cyan",
        },
      ];
    case "cat":
      return [{ type: "out", text: "Backend & full-stack engineer. Lives in the terminal." }];
    case "pwd":
      return [{ type: "out", text: "/home/priyanshu" }];
    case "date":
      return [{ type: "out", text: "always shipping o'clock", tone: "muted" }];
    case "sudo":
      return [
        { type: "out", text: "guest is not in the sudoers file.", tone: "red" },
        { type: "out", text: "This incident will be reported. (jk, hire me instead)", tone: "muted" },
      ];
    case "rm":
      return [{ type: "out", text: "nice try 😈 — read-only filesystem", tone: "red" }];
    case "exit":
      return [{ type: "out", text: "There is no escape. Just kidding — scroll on.", tone: "muted" }];
    case "clear":
      return "CLEAR";
    default:
      return [
        {
          type: "out",
          text: `command not found: ${cmd}. type 'help' for options.`,
          tone: "red",
        },
      ];
  }
}

const toneClass: Record<NonNullable<Line["tone"]>, string> = {
  accent: "text-accent",
  cyan: "text-cyan",
  amber: "text-amber",
  muted: "text-muted",
  red: "text-red",
};

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(BANNER);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const submit = (raw: string) => {
    const result = run(raw);
    if (result === "CLEAR") {
      setLines([]);
    } else {
      setLines((prev) => [...prev, { type: "in", text: raw }, ...result]);
    }
    if (raw.trim()) setHistory((h) => [raw, ...h]);
    setHIdx(-1);
    setValue("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHIdx((i) => {
        const next = Math.min(i + 1, history.length - 1);
        if (history[next] !== undefined) setValue(history[next]);
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHIdx((i) => {
        const next = Math.max(i - 1, -1);
        setValue(next === -1 ? "" : history[next] ?? "");
        return next;
      });
    }
  };

  const quick = ["help", "whoami", "projects", "skills", "neofetch"];

  return (
    <Reveal>
      <div
        className="overflow-hidden rounded-xl border border-border bg-[#080b10] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)]"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red/80" />
          <span className="h-3 w-3 rounded-full bg-amber/80" />
          <span className="h-3 w-3 rounded-full bg-accent/80" />
          <span className="ml-3 text-xs text-faint">guest@priyanshu: ~ — interactive shell</span>
        </div>

        <div
          ref={scrollRef}
          className="h-[340px] overflow-y-auto p-4 text-sm leading-relaxed sm:text-[13.5px]"
        >
          {lines.map((line, i) =>
            line.type === "in" ? (
              <p key={i} className="whitespace-pre-wrap break-words">
                <span className="text-accent">{PROMPT}</span>{" "}
                <span className="text-fg">{line.text}</span>
              </p>
            ) : (
              <p
                key={i}
                className={`whitespace-pre-wrap break-words ${
                  line.tone ? toneClass[line.tone] : "text-fg/90"
                }`}
              >
                {line.text}
              </p>
            )
          )}

          <div className="flex items-center">
            <span className="shrink-0 text-accent">{PROMPT}</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal command input"
              className="ml-2 w-full bg-transparent text-fg caret-accent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-border bg-surface px-4 py-2.5">
          <span className="text-xs text-faint">quick:</span>
          {quick.map((q) => (
            <button
              key={q}
              onClick={() => {
                submit(q);
                inputRef.current?.focus();
              }}
              className="rounded border border-border bg-surface-2 px-2 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
