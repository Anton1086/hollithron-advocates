import Link from "next/link";

type LogoProps = {
  href: string;
  inverted?: boolean;
  showTagline?: boolean;
  compact?: boolean;
};

export function Logo({ href, compact = false }: LogoProps) {
  return (
    <Link
      href={href}
      className={`flex shrink-0 flex-col justify-end bg-accent text-white no-underline ${
        compact
          ? "h-16 w-[4.5rem] p-2"
          : "h-[5.5rem] w-[5.5rem] p-2.5 sm:h-[9.25rem] sm:w-[9.25rem] sm:p-4"
      }`}
      aria-label="Hollithron Advocates"
    >
      <span
        className={`block leading-[1.08] ${
          compact ? "text-[0.68rem]" : "text-[0.78rem] sm:text-[1.15rem]"
        }`}
      >
        Hollithron
        <br />
        Advocates
      </span>
    </Link>
  );
}
