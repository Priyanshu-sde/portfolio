"use client";

import { useEffect, useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";

const links = [
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "stats", label: "stats" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-bold text-fg"
          aria-label="Back to top"
        >
          <TerminalIcon className="h-4 w-4 text-accent" />
          <span className="text-accent">~/</span>
          <span className="hidden sm:inline">{profile.handle}</span>
          <span className="cursor-bar" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded px-3 py-1.5 text-sm transition-colors hover:bg-surface-2 hover:text-accent ${
                  active === l.id ? "text-accent" : "text-muted"
                }`}
              >
                <span className="text-faint">/</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="ml-1 rounded border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            ./hire-me
          </a>
        </div>
      </nav>
    </header>
  );
}
