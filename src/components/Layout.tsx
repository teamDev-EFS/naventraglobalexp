import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = () => (
  <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
    <Navbar />
    <main className="pt-24">
      <Outlet />
    </main>
    <Footer />
  </div>
)
