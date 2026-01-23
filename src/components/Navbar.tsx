import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/global-markets', label: 'Global Markets' },
  { to: '/partnerships', label: 'Partnerships' },
  { to: '/team', label: 'Team' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-navy-900/80 backdrop-blur-xl">
      <div className="container-grid flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-500 to-amber-400 text-navy-800 shadow-lg shadow-black/30">
            <span className="text-lg font-bold">NG</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-sand">Naventra Global</p>
            <p className="text-xs text-slate-400">Premium Exports</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-gold-300 ${isActive ? 'text-gold-300' : 'text-slate-200'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-gold-500 to-amber-400 px-4 py-2 text-sm font-semibold text-navy-800 shadow-lg shadow-black/20 hover:translate-y-[-1px] transition focus-ring"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          className="lg:hidden rounded-full border border-white/10 p-2 text-slate-100 focus-ring"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="sr-only">Open menu</span>
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
              className="fixed inset-y-0 right-0 z-40 w-80 bg-navy-800/95 p-6 shadow-2xl shadow-black/40 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-500 to-amber-400 text-navy-800">
                    NG
                  </div>
                  <p className="text-sm font-semibold text-sand">Naventra Global</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-slate-100 focus-ring"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <div className="mt-6 space-y-3 text-sm font-medium text-slate-100">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 transition ${
                        isActive ? 'bg-white/10 text-gold-300' : 'hover:bg-white/5'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 px-4 py-3 text-navy-800 font-semibold shadow-lg shadow-black/30"
                >
                  Request a Quote
                </Link>
              </div>
              <div className="mt-6 text-xs text-slate-400">
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
