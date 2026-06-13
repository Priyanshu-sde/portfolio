"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertTriangle, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot
    if (data.get("_gotcha")) return;

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(profile.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong. Try email instead.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please email me directly.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-md border border-border bg-[#080b10] px-3.5 py-2.5 text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-accent/60 focus:ring-1 focus:ring-accent/40";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        cmd="mail -s 'let's build something' priyanshu"
        title="Contact"
        desc="Got a role, a project, or just want to talk systems? Drop a message."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-border bg-surface/60">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="ml-2 text-xs text-faint">new_message.sh</span>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 py-10 text-center"
                  >
                    <CheckCircle2 className="h-12 w-12 text-accent" />
                    <p className="text-lg font-bold text-fg">Message sent.</p>
                    <p className="max-w-sm text-sm text-muted">
                      <span className="text-accent">{"> "}</span>
                      Thanks for reaching out — I&apos;ll get back to you soon.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 rounded-md border border-border bg-surface-2 px-4 py-2 text-sm text-muted transition-colors hover:text-fg"
                    >
                      send another →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={onSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                          <span className="text-accent">const</span> name <span className="text-red">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Ada Lovelace"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                          <span className="text-accent">const</span> email <span className="text-red">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@domain.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                        <span className="text-accent">const</span> message <span className="text-red">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me what you're building..."
                        className={`${inputClass} resize-y`}
                      />
                    </div>

                    {/* honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    {status === "error" && (
                      <p
                        role="alert"
                        className="flex items-center gap-2 rounded-md border border-red/30 bg-red/10 px-3 py-2 text-sm text-red"
                      >
                        <AlertTriangle className="h-4 w-4 shrink-0" />
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-accent/50 bg-accent/15 px-5 py-2.5 text-sm font-semibold text-accent shadow-glow transition-all hover:bg-accent/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> ./send-message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent/40"
            >
              <span className="rounded-lg bg-accent/10 p-3 text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-fg">Email</p>
                <p className="truncate text-sm text-muted group-hover:text-accent">
                  {profile.email}
                </p>
              </div>
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-cyan/40"
            >
              <span className="rounded-lg bg-cyan/10 p-3 text-cyan">
                <GithubIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-fg">GitHub</p>
                <p className="truncate text-sm text-muted group-hover:text-cyan">
                  @{profile.handle}
                </p>
              </div>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-cyan/40"
            >
              <span className="rounded-lg bg-cyan/10 p-3 text-cyan">
                <LinkedinIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-fg">LinkedIn</p>
                <p className="truncate text-sm text-muted group-hover:text-cyan">
                  priyanshu-chaurasia
                </p>
              </div>
            </a>
            <div className="mt-auto rounded-xl border border-border bg-[#080b10] p-5 text-sm">
              <p className="text-faint"># response time</p>
              <p className="mt-1 text-fg/85">
                Usually within <span className="text-accent">24 hours</span>. Based in{" "}
                {profile.location}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
