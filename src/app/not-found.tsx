import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[80svh] overflow-hidden pt-28">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-24 select-none text-[12rem] leading-none text-accent/35 blur-[1px] sm:text-[18rem]"
      >
        404
      </p>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl"
      />
      <div className="shell relative py-24">
        <h1 className="display max-w-xl text-5xl md:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-lg text-white/55">
          The page you requested is not available. Return home or contact the office.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
