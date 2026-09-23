import { useState } from 'react'
import logo from "../../public/assets/logo-text.png"

const links = [
  'Home',
  'Technologies',
  'Projects',
  'About',
  'Contact',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">

      <nav
        className="mx-auto grid h-20 w-[calc(100%-24px)] max-w-content grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-1 sm:w-[calc(100%-40px)] sm:grid-cols-[1fr_auto_1fr] lg:grid-cols-[auto_1fr_auto] lg:gap-8"
        aria-label="Main navigation"
      >

        <button
          className="btn btn-ghost btn-square justify-self-start lg:hidden"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <img
              src="/assets/hamburger.png"
              alt=""
              className="h-5 w-6 object-contain"
              aria-hidden="true"
            />
          )}
        </button>

        <a
          className="flex min-w-0 items-center justify-self-center gap-2 lg:justify-self-start"
          aria-label="Dev Stack home"
        >
          <img src={logo} alt="Dev Stack Logo" />
        </a>

        <div className="hidden items-center justify-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {links.map((link, index) => (
            <a
              key={link}
              className={`transition hover:text-pink-600 ${index === 0 ? 'font-semibold text-pink-600' : ''
                }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-self-end gap-1 sm:gap-2">

          <button
            className="btn btn-ghost h-9 min-h-0 px-1.5 text-[11px] font-medium text-slate-700 sm:h-10 sm:px-3 sm:text-sm"
            type="button"
          >
            Sign In
          </button>

          <button
            className="btn h-9 min-h-0 rounded-full border-0 bg-brand px-2.5 text-[11px] font-semibold text-white shadow-[0_4px_10px_rgba(216,27,126,.12)] hover:opacity-95 sm:h-10 sm:px-5 sm:text-sm"
            type="button"
          >
            Sign Up
          </button>

        </div>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-20 border-b border-slate-100 bg-white px-5 py-4 shadow-soft lg:hidden"
        >
          <div className="mx-auto flex max-w-content flex-col">

            {links.map((link) => (
              <a
                key={link}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}

          </div>
        </div>
      )}

    </header>
  )
}

