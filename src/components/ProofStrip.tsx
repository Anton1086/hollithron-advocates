type ProofItem = {
  kicker: string;
  title: string;
  body: string;
};

export function ProofStrip({ items }: { items: ProofItem[] }) {
  return (
    <section className="red-wash">
      <div className="shell grid gap-10 py-20 md:grid-cols-3 lg:py-28">
        {items.map((item) => (
          <div key={`${item.kicker}-${item.title}`}>
            <p className="flex items-baseline gap-3">
              <span className="display text-6xl leading-none sm:text-7xl">{item.title}</span>
              <span className="text-2xl text-white/80">{item.kicker}</span>
            </p>
            <div className="mt-5 h-px w-24 bg-white/20" />
            <p className="mt-5 max-w-[16rem] text-[0.95rem] leading-7 text-white/70">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
