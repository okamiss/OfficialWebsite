type Props = { zh: string; code: string };

/** 零壹 01 wordmark — mono numerals carry the binary brand. */
export default function Logo({ zh, code }: Props) {
  return (
    <a
      href="#home"
      className="group flex items-center gap-2.5"
      aria-label={`${zh} ${code} 首页`}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-[var(--c-line-strong)] bg-[rgba(255,255,255,0.03)] font-mono text-sm font-bold text-gradient">
        {code}
        <span className="absolute inset-0 rounded-lg shadow-[inset_0_0_18px_-6px_rgba(59,109,255,0.9)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-wide">
          {zh}
        </span>
        <span className="mt-0.5 font-mono text-[0.6rem] tracking-[0.3em] text-faint">
          ZERO·ONE
        </span>
      </span>
    </a>
  );
}
