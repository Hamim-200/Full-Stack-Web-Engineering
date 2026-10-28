import Image from "next/image";
import { User } from "lucide-react";

const links = ["Home", "Destinations", "My Bookings", "Admin"];

export function Navbar() {
  return (
    <header className="bg-white">
      <nav className="relative mx-auto flex h-16 items-center justify-between px-6 lg:px-10">
        <ul className="flex items-center gap-6 text-sm lg:gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={
                  link === "Home"
                    ? "text-[#1391A5] underline underline-offset-4"
                    : "text-foreground transition-colors hover:text-[#1391A5]"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
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
        </a>

        <div className="flex items-center gap-5 text-sm lg:gap-8">
          <a
            href="#"
            className="flex items-center gap-2 text-foreground transition-colors hover:text-[#1391A5]"
          >
            <User className="size-4" />
            Profile
          </a>
          <a
            href="#"
            className="text-foreground transition-colors hover:text-[#1391A5]"
          >
            Login
          </a>
          <a
            href="#"
            className="text-foreground transition-colors hover:text-[#1391A5]"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
