import type { SVGProps } from "react";
import { ArrowUpRight, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const columns = [
  {
    title: "Quick Links",
    links: ["Home", "Destinations", "My Bookings", "My Profile"],
  },
  {
    title: "Support",
    links: ["Help Center", "Terms of Service", "Privacy Policy"],
  },
  {
    title: "Contact Us",
    links: ["786 901 1622", "info@wandarland.com"],
  },
];

const socials = [
  { label: "X (Twitter)", icon: XIcon },
  { label: "LinkedIn", icon: LinkedinIcon },
  { label: "Instagram", icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div>
          <p className="font-serif text-5xl leading-none md:text-7xl">
            Wanderlast
          </p>
          <p className="mt-4 text-xs text-white/70 md:text-sm">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-x-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest">
              Newsletter
            </p>
            <p className="mt-2.5 text-xs text-white/60">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form
              className="mt-4 flex h-10 max-w-[13.5rem]"
              action="#"
            >
              <Input
                type="email"
                aria-label="Email address"
                placeholder="Enter email"
                className="h-full flex-1 rounded-none rounded-l-none border-white/10 bg-[#1f1f1f] border-r-0 pl-3 text-sm text-white placeholder:text-white/40 focus-visible:ring-0 md:text-sm"
              />
              <Button
                type="submit"
                aria-label="Subscribe"
                className="h-full w-11 shrink-0 rounded-none rounded-r-none bg-[#333333] text-white hover:bg-[#404040]"
              >
                <ArrowUpRight className="size-4" />
              </Button>
            </form>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-medium uppercase tracking-widest">
                {column.title}
              </p>
              <ul className="mt-5 space-y-3.5 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      className="text-white/75 transition-colors hover:text-white"
                      {...(link.includes("@")
                        ? { href: `mailto:${link}` }
                        : link === "786 901 1622"
                          ? { href: "tel:+17869011622" }
                          : { href: "#" })}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/15 py-6">
          <p className="text-xs text-white/50">
            © 2026 Wanderlast. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="text-white/80 transition-colors hover:text-white"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
