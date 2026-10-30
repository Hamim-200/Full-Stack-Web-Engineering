
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Add Destinations", href: "/add-destination" },
  { name: "My Bookings", href: "/my-bookings" },
  { name: "Profile", href: "/profile", icon: true },
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
];

export function Navbar() {
  return (
    <header className="bg-white">
      <nav className="relative mx-auto flex h-16 items-center justify-between px-6 lg:px-10">

        <ul className="flex items-center gap-6 text-sm lg:gap-10">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  link.name === "Home"
                    ? "text-[#1391A5] underline underline-offset-4"
                    : "text-foreground transition-colors hover:text-[#1391A5]"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2"
          aria-label="Wanderlast home"
        >
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlast"
            width={144}
            height={30}
            priority
          />
        </Link>

        <div className="flex items-center gap-5 text-sm lg:gap-8">
          {navLinks.slice(4).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-foreground transition-colors hover:text-[#1391A5]"
            >
              {link.icon && <User className="size-4" />}
              {link.name}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}
