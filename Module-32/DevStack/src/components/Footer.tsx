import logo from "../../public/assets/logo-text.png";

const linkGroups = [
  {
    title: 'Product',
    links: [
      ['Home', '#home'],
      ['Technologies', '#technologies'],
      ['Projects', '#projects'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#about'],
      ['Contact', '#contact'],
      ['Careers', '#contact'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '#home'],
      ['Terms of Service', '#home'],
    ],
  },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/70">
      <div className="mx-auto w-[calc(100%-40px)] max-w-content py-12 lg:py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div className="max-w-sm">
            <a className="inline-flex items-center gap-2" href="#home">
              <img src={logo} alt="Dev Stack Logo" />
            </a>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-slate-500">
              <a
                className="hover:text-slate-900"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="hover:text-slate-900"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>

              <a
                className="hover:text-slate-900"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-slate-900">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                {group.links.map(([label, href]) => (
                  <a
                    className="hover:text-slate-900"
                    href={href}
                    key={label}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 Dev Stack. All rights reserved.
          </span>

          <div className="flex gap-5">
            <a className="hover:text-slate-700" href="#home">
              Privacy
            </a>

            <a className="hover:text-slate-700" href="#home">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

