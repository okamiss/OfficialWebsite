type Props = {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

/** Shared section header. The mono `index` (0x0N) is the binary-brand spine. */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const center = align === "center";
  return (
    <div
      data-reveal
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-xs text-faint">{index}</span>
        <span className="h-px w-8 bg-[var(--c-line-strong)]" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.85rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
