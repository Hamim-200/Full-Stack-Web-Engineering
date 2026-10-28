import Image from "next/image";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { label: "Location", placeholder: "Address, City Or Zip" },
  { label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { label: "Budget", placeholder: "$0-$3000" },
  { label: "People", placeholder: "5-10" },
];

export function Banner() {
  return (
    <section className="relative isolate flex min-h-[640px] flex-col text-white">
      {/* Banner.png ships pre-darkened, no extra overlay needed */}
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#1391A5] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-[#0e7a8b]"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center border border-white/70 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            View Destination
          </a>
        </div>
      </div>

      <form className="grid grid-cols-2 divide-x divide-white/15 border-t border-white/15 bg-black/40 backdrop-blur-sm md:grid-cols-5">
        {searchFields.map((field) => (
          <label
            key={field.label}
            className="cursor-pointer px-6 py-3.5 transition-colors hover:bg-white/5"
          >
            <span className="block text-sm font-medium">{field.label}</span>
            <span className="mt-1 block text-xs text-white/70">
              {field.placeholder}
            </span>
          </label>
        ))}
        <button
          type="submit"
          className="col-span-2 bg-[#1391A5] px-6 py-3.5 text-base font-semibold transition-colors hover:bg-[#0e7a8b] md:col-span-1"
        >
          Search
        </button>
      </form>
    </section>
  );
}
