type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#f7bf62]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#fff8ec] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-[#d9c8ad]">{description}</p>
      ) : null}
    </div>
  );
}
