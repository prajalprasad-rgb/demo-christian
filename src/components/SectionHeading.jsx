export default function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={center ? "mx-auto mb-10 max-w-2xl text-center" : "mb-10 max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="display-title">{title}</h2>
      {text && <p className="mt-4 text-sm leading-7 text-[color-mix(in_srgb,var(--color-ink),transparent_24%)] sm:text-base">{text}</p>}
    </div>
  );
}
