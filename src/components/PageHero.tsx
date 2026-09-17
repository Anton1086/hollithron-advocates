type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
};

export function PageHero({ eyebrow, title, lede }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl"
      />
      <div className="shell relative py-16 md:py-24">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="display mt-3 max-w-4xl text-5xl md:text-6xl">{title}</h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">{lede}</p>
        ) : null}
      </div>
    </section>
  );
}
