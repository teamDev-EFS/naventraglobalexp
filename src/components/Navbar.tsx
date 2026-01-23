import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/NaventraGlobal-logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/global-markets', label: 'Global Markets' },
  { to: '/team', label: 'Team' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container-xl flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Naventra Global"
            className="h-11 w-11 rounded-xl border border-[rgb(var(--border))] object-contain"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">Naventra Global</p>
            <p className="text-xs text-slate-600">Premium Exports</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[rgb(var(--muted))] lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-cyan-800 ${isActive ? 'text-cyan-800' : 'text-slate-600'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </nav>

        <button
          className="lg:hidden rounded-full border border-slate-200 p-2 text-slate-700"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed inset-y-0 right-0 z-40 w-80 bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-800 to-cyan-600 text-white">
                    NG
                  </div>
                  <p className="text-sm font-semibold text-slate-900">Naventra Global</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-slate-200 p-2 text-slate-700"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <div className="mt-6 space-y-3 text-sm font-medium text-slate-800">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 transition ${
                        isActive ? 'bg-cyan-50 text-cyan-800' : 'hover:bg-slate-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-[rgb(var(--brand))] px-4 py-3 text-white font-semibold shadow-md"
                >
                  Request a Quote
                </Link>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                <p>Phone: 9340830988 / 8770102860</p>
                <p>Email: naventraglobalexp@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
