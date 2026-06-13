"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const BASE_W = 1440;

/**
 * Renders a live site inside a scaled, non-interactive iframe so the whole
 * desktop view fits the preview box. Clicking opens the real site.
 * Falls back to a terminal mock when no live URL exists (or it can't frame).
 */
export function LivePreview({
  url,
  name,
  fallbackCmd,
}: {
  url?: string;
  name: string;
  fallbackCmd?: string[];
}) {
  const box = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ scale: 0.35, h: 900 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      const h = entry.contentRect.height;
      const scale = w / BASE_W;
      setDims({ scale, h: scale > 0 ? h / scale : h });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={box} className="relative h-full w-full overflow-hidden bg-[#05080c]">
      {url ? (
        <>
          {/* loading shimmer */}
          {!loaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#05080c]">
              <span className="text-xs text-faint">
                <span className="text-accent">$</span> curl {new URL(url).hostname} ...
              </span>
            </div>
          )}
          <iframe
            src={url}
            title={`${name} live preview`}
            loading="lazy"
            tabIndex={-1}
            scrolling="no"
            onLoad={() => setLoaded(true)}
            sandbox="allow-scripts allow-same-origin allow-popups-to-escape-sandbox"
            className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
            style={{
              width: `${BASE_W}px`,
              height: `${dims.h}px`,
              transform: `scale(${dims.scale})`,
            }}
          />
        </>
      ) : (
        <div className="flex h-full flex-col gap-1.5 p-5 text-xs leading-relaxed sm:text-sm">
          <p className="text-faint">{name.toLowerCase()} — terminal</p>
          {(fallbackCmd ?? []).map((line, i) => (
            <p key={i} className={line.startsWith("$") ? "text-accent" : "text-fg/80"}>
              {line}
            </p>
          ))}
          <span className="mt-1 text-accent cursor-bar" />
        </div>
      )}

      {/* gradient + scanline polish */}
      <div className="scanlines pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />

      {/* live badge */}
      <span className="absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-bg/70 px-2.5 py-1 text-[11px] text-accent backdrop-blur">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        {url ? "live" : "cli"}
      </span>

      {/* hover overlay → open live */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name} live site`}
          className="absolute inset-0 z-20 flex items-center justify-center bg-bg/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent/15 px-4 py-2 text-sm font-semibold text-accent shadow-glow">
            <ExternalLink className="h-4 w-4" /> enter site
          </span>
        </a>
      )}
    </div>
  );
}
