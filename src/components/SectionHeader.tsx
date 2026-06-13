import { Reveal } from "./Reveal";

export function SectionHeader({
  cmd,
  title,
  desc,
}: {
  cmd: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal className="mb-10">
      <p className="text-sm text-faint">
        <span className="text-accent">priyanshu@portfolio</span>
        <span className="text-muted">:</span>
        <span className="text-cyan">~</span>
        <span className="text-muted">$ </span>
        <span className="text-fg">{cmd}</span>
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-fg">
        <span className="text-accent">#</span> {title}
      </h2>
      {desc ? <p className="mt-2 max-w-2xl text-muted text-sm sm:text-base">{desc}</p> : null}
    </Reveal>
  );
}
