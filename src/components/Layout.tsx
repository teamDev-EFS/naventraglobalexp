import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = () => (
  <div className="relative min-h-screen bg-navy-900 text-slate-100">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-10 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-grid-dots bg-[length:32px_32px] opacity-40" />
    </div>
    <Navbar />
    <main className="relative pt-28">
      <Outlet />
    </main>
    <Footer />
  </div>
)
