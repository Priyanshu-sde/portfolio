import { profile } from "@/lib/data";
import { Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#080b10]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-faint">
          <span className="text-accent">$</span> echo &quot;built by {profile.name}&quot;
          <br className="sm:hidden" />
          <span className="ml-0 sm:ml-2 text-muted">— Next.js · Tailwind · Framer Motion</span>
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="rounded p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
