import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative isolate py-28 text-center text-white">
      {/* CTA.png is NOT pre-darkened (unlike Banner.png), add an overlay */}
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-4xl md:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-sm text-white/90">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="#"
          className="mt-10 inline-flex items-center gap-3 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-white/85"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
