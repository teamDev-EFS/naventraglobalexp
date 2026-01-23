import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/global-markets', label: 'Global Markets' },
  { to: '/team', label: 'Team' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/90">
    <div className="container-xl grid gap-8 py-10 md:grid-cols-[1.2fr,1fr,1fr]">
      <div>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[rgb(var(--brand))] text-white font-semibold">
            NG
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Naventra Global Exports</p>
            <p className="text-xs text-slate-600">Premium Indian Agro Commodities</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Turmeric • Fox Nuts (Makhana) • Basmati Rice — export-grade quality, compliant
          documentation, and on-time delivery to global markets.
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">Quick Links</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-cyan-800">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-2 text-sm text-slate-700">
        <p className="text-sm font-semibold text-slate-900">Contact</p>
        <p>Website: www.naventraglobal.com</p>
        <p>
          Email:{' '}
          <a href="mailto:naventraglobalexp@gmail.com" className="hover:text-cyan-800">
            naventraglobalexp@gmail.com
          </a>
        </p>
        <p>Phone: 9340830988, 8770102860</p>
        <p className="text-xs text-slate-500">© Naventra Global Exports</p>
      </div>
    </div>
  </footer>
)
