import { Link, NavLink, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  {
    title: 'Global fulfillment orchestration',
    description:
      'Design, launch, and manage distributed fulfillment so every order ships from the optimal node.',
    details: 'Network modeling • SLA design • Exception playbooks',
  },
  {
    title: 'Strategic procurement & sourcing',
    description:
      'Supplier discovery, negotiations, and risk programs that keep your production resilient.',
    details: 'Should-costing • Multi-sourcing • Compliance-ready documentation',
  },
  {
    title: 'Digital operations cockpit',
    description:
      'Unified visibility across partners, lanes, and orders with alerting that your team will actually use.',
    details: 'Control tower • API & EDI pipelines • Predictive ETA insights',
  },
  {
    title: 'Cross-border compliance',
    description:
      'Harmonized classification, duty optimization, and automated paperwork so freight keeps moving.',
    details: 'HS codes • Trade automation • Audit-ready recordkeeping',
  },
]

const industries = [
  'Medtech & life sciences',
  'Consumer electronics',
  'E-commerce & retail',
  'Aerospace suppliers',
  'Industrial IoT',
  'Automotive after-market',
]

const stats = [
  { label: 'Countries served', value: '22', hint: 'Carrier & 3PL network' },
  { label: 'Avg. cycle time reduction', value: '18%', hint: 'Across pilot programs' },
  { label: 'Supplier onboarding', value: '<14 days', hint: 'From discovery to live' },
  { label: 'Accuracy on landed cost', value: '±2%', hint: 'With our duty models' },
]

const process = [
  {
    title: 'Discover & map',
    description: 'We map your current flow, service levels, and the true constraints to fix first.',
  },
  {
    title: 'Design the route',
    description:
      'Network, supplier, and technology blueprint with quantified upside and clear rollout gates.',
  },
  {
    title: 'Deploy & orchestrate',
    description: 'We stand up partners, playbooks, and dashboards — staying on the hook for outcomes.',
  },
  {
    title: 'Measure & optimize',
    description: 'Weekly governance, KPI reviews, and continuous testing to harden the wins.',
  },
]

const testimonials = [
  {
    quote:
      'Naventra plugged into our ops like an embedded team. We launched two new lanes without any service dip.',
    name: 'Priya Nair',
    role: 'VP Operations, consumer electronics brand',
  },
  {
    quote:
      'Their control tower gave us the first single view of orders, duties, and exceptions. Support tickets dropped 30%.',
    name: 'Eric Morales',
    role: 'Head of CX, DTC retailer',
  },
]

const caseStudies = [
  {
    title: 'North America → EU launch',
    result: '92% on-time delivery in first 60 days with automated trade docs.',
  },
  {
    title: 'Medtech supplier resilience',
    result: 'Dual-sourced critical SKUs and cut lead time volatility by 22%.',
  },
  {
    title: 'Digital control tower',
    result: 'Single dashboard for 6 3PLs with proactive SLA alerts and ETA predictions.',
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Layout = () => (
  <div className="relative min-h-screen bg-slate-950 text-slate-100">
    <GradientBackdrop />
    <Navbar />
    <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <Outlet />
    </main>
    <Footer />
  </div>
)

const Hero = () => (
  <motion.section
    {...fadeIn}
    viewport={{ once: true, amount: 0.3 }}
    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/20 p-8 shadow-2xl shadow-blue-500/10 md:p-12"
  >
    <div className="absolute inset-0 gradient-blob opacity-60 blur-3xl" />
    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Supply chain, procurement, and digital operations — one partner.
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Build a resilient, data-led supply chain for the next 12 months — not just the next week.
        </h1>
        <p className="max-w-xl text-lg text-slate-200">
          Naventra Global is the embedded team that designs, launches, and operates your fulfillment,
          sourcing, and cross-border programs so you can scale without surprises.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-5 py-3 font-semibold text-slate-950 shadow-glow transition hover:shadow-xl hover:shadow-sky-500/30"
          >
            Schedule an intro
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-sky-400/60 hover:text-sky-100"
          >
            Explore solutions
          </Link>
        </div>
        <div className="grid max-w-2xl grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
          {stats.slice(0, 2).map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-sm uppercase tracking-wide text-slate-400">{item.label}</p>
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="text-sm text-slate-400">{item.hint}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-sky-500/30 to-emerald-400/20 blur-3xl" />
        <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-sky-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Current health</p>
              <p className="text-3xl font-semibold text-white">On track</p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-200">
              Live
            </span>
          </div>
          <div className="space-y-3">
            {services.slice(0, 3).map((service, idx) => (
              <div key={service.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-400">Program {idx + 1}</p>
                    <p className="text-lg font-semibold text-white">{service.title}</p>
                  </div>
                  <span className="text-sm text-emerald-300">↑ steady</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{service.details}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-emerald-400/15 via-sky-400/15 to-indigo-400/15 p-4">
            <p className="text-sm text-slate-300">
              Dedicated control tower keeps exceptions visible — and resolved — before customers feel them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
)

const Stats = () => (
  <motion.section
    {...fadeIn}
    viewport={{ once: true, amount: 0.3 }}
    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  >
    {stats.map((item) => (
      <div
        key={item.label}
        className="gradient-border rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow shadow-sky-500/10"
      >
        <p className="text-sm uppercase tracking-wide text-slate-400">{item.label}</p>
        <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
        <p className="text-sm text-slate-400">{item.hint}</p>
      </div>
    ))}
  </motion.section>
)

const Services = () => (
  <motion.section
    {...fadeIn}
    viewport={{ once: true, amount: 0.2 }}
    className="space-y-6"
  >
    <SectionHeader
      title="What we run for you"
      kicker="Solutions"
      description="From procurement to last-mile, we design and operate the processes, partners, and digital rails that keep your customer promises."
    />
    <div className="grid gap-6 lg:grid-cols-2">
      {services.map((service) => (
        <motion.div
          key={service.title}
          whileHover={{ translateY: -4 }}
          className="gradient-border rounded-2xl border border-white/5 bg-slate-900/60 p-6 shadow shadow-sky-500/10"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-slate-300">{service.description}</p>
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-sky-200">
              Managed
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-400">{service.details}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
)

const Industries = () => (
  <motion.section {...fadeIn} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
    <SectionHeader
      title="Industries we serve"
      kicker="Focus"
      description="Programs tailored for regulated, high-velocity, and multi-region operations."
    />
    <div className="flex flex-wrap gap-3">
      {industries.map((industry) => (
        <span
          key={industry}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
        >
          {industry}
        </span>
      ))}
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {caseStudies.map((cs) => (
        <div
          key={cs.title}
          className="rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-5 shadow shadow-sky-500/10"
        >
          <p className="text-sm text-sky-200">{cs.title}</p>
          <p className="mt-3 text-lg font-semibold text-white">{cs.result}</p>
        </div>
      ))}
    </div>
  </motion.section>
)

const Process = () => (
  <motion.section {...fadeIn} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
    <SectionHeader
      title="How we work together"
      kicker="Method"
      description="A proven, paced approach that keeps stakeholders aligned while outcomes land fast."
    />
    <div className="grid gap-4 md:grid-cols-2">
      {process.map((step, index) => (
        <div
          key={step.title}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-5"
        >
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-500/10" />
          <div className="relative flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-100">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-slate-300">{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
)

const Testimonials = () => (
  <motion.section {...fadeIn} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
    <SectionHeader
      title="Teams that run with Naventra"
      kicker="Proof"
      description="We operate like an embedded ops pod — accountable to the same dashboards you are."
    />
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((item) => (
        <div
          key={item.name}
          className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-6 shadow shadow-sky-500/10"
        >
          <p className="text-lg text-slate-100">“{item.quote}”</p>
          <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
          <p className="text-sm text-slate-400">{item.role}</p>
        </div>
      ))}
    </div>
  </motion.section>
)

const ContactSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    form.reset()
    toast.success('Thanks — our team will reach out shortly.')
  }

  return (
    <motion.section {...fadeIn} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
      <SectionHeader
        title="Tell us about your next milestone"
        kicker="Contact"
        description="Share your launch window, the lanes that keep you up at night, and we will come back with a tailored run plan."
      />
      <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-sky-500/10"
        >
          <div>
            <label className="text-sm text-slate-300">Name</label>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/70"
              placeholder="Alex Kim"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-slate-300">Company</label>
              <input
                name="company"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/70"
                placeholder="Naventra Labs"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/70"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-300">What are you planning?</label>
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/70"
              placeholder="E.g., launch EU fulfillment, build duty calculator, or onboard new 3PLs."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-4 py-3 font-semibold text-slate-950 shadow-glow transition hover:shadow-xl hover:shadow-sky-500/30"
          >
            Send message
          </button>
        </form>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <h3 className="text-xl font-semibold text-white">What to expect</h3>
          <ul className="space-y-3 text-slate-300">
            <li>• 30-minute discovery to map your goals and constraints.</li>
            <li>• A tailored rollout plan with clear timelines and success metrics.</li>
            <li>• Access to a pilot team within two weeks of alignment.</li>
          </ul>
          <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200">
            Prefer email? Reach us at{' '}
            <a className="text-sky-200 underline" href="mailto:hello@naventra.global">
              hello@naventra.global
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

const CTA = () => (
  <motion.section {...fadeIn} viewport={{ once: true, amount: 0.2 }}>
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-400/20 p-8 shadow-2xl shadow-sky-500/20 md:p-12">
      <div className="absolute inset-0 gradient-blob opacity-40" />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">Next step</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Ready for a pilot? We can mobilize a launch pod in under two weeks.
          </h3>
          <p className="mt-2 text-slate-100">
            Get a roadmap that connects your commercial goals to the supply chain moves that make it real.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-500/20 transition hover:translate-y-[-2px]"
          >
            Book a working session
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-white/40"
          >
            Meet the team
          </Link>
        </div>
      </div>
    </div>
  </motion.section>
)

const SectionHeader = ({
  title,
  description,
  kicker,
}: {
  title: string
  description: string
  kicker: string
}) => (
  <div className="space-y-2">
    <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">{kicker}</p>
    <h2 className="text-3xl font-semibold text-white">{title}</h2>
    <p className="text-slate-300">{description}</p>
  </div>
)

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 font-semibold text-slate-950 shadow-lg shadow-sky-500/30">
          N
        </span>
        <div>
          <p className="text-sm font-semibold text-white">Naventra Global</p>
          <p className="text-xs text-slate-400">Supply chain & growth studio</p>
        </div>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `transition hover:text-white ${isActive ? 'text-white' : 'text-slate-300'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Link
          to="/contact"
          className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-400/70 md:inline-flex"
        >
          Talk to us
        </Link>
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40"
        >
          Start a pilot
        </Link>
      </div>
    </div>
    <div className="border-t border-white/5 bg-slate-950/80 px-4 py-3 text-sm text-slate-300 md:hidden">
      <div className="flex flex-wrap gap-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `rounded-full border px-3 py-1 transition ${
                isActive ? 'border-sky-400/60 text-white' : 'border-white/10 text-slate-300'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  </header>
)

const Footer = () => (
  <footer className="border-t border-white/5 bg-slate-950/80">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-lg font-semibold text-white">Naventra Global</p>
        <p className="text-sm text-slate-400">Designing and operating resilient supply chains.</p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-slate-300">
        <Link to="/about" className="hover:text-white">
          About
        </Link>
        <Link to="/solutions" className="hover:text-white">
          Solutions
        </Link>
        <Link to="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>
    </div>
  </footer>
)

const GradientBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
    <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
  </div>
)

const HomePage = () => (
  <div className="space-y-24">
    <Hero />
    <Stats />
    <Services />
    <Industries />
    <Process />
    <Testimonials />
    <CTA />
  </div>
)

const SolutionsPage = () => (
  <div className="space-y-16">
    <SectionHeader
      title="Solutions that stay live"
      kicker="Solutions"
      description="Ops pods that design and run fulfillment, procurement, and control towers with clear SLAs."
    />
    <Services />
    <Process />
    <CTA />
  </div>
)

const IndustriesPage = () => (
  <div className="space-y-16">
    <SectionHeader
      title="Where we specialize"
      kicker="Industries"
      description="We thrive in regulated, multi-region, multi-partner supply chains where precision matters."
    />
    <Industries />
    <Testimonials />
    <CTA />
  </div>
)

const AboutPage = () => (
  <div className="space-y-16">
    <SectionHeader
      title="Built by operators for operators"
      kicker="About"
      description="We are a distributed team of supply chain strategists, procurement leaders, and product builders."
    />
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
        <h3 className="text-xl font-semibold text-white">Why Naventra</h3>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>• We build with your partners, not just for them.</li>
          <li>• We bring the dashboards and the operators to run them.</li>
          <li>• We sequence change so you keep service levels during rollout.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
        <h3 className="text-xl font-semibold text-white">How to engage</h3>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>• 2-week discovery sprint to map opportunities.</li>
          <li>• 60-90 day pilot focused on 2-3 clear outcomes.</li>
          <li>• Scale-up with shared governance and weekly reviews.</li>
        </ul>
      </div>
    </div>
    <CTA />
  </div>
)

const ContactPage = () => (
  <div className="space-y-16">
    <SectionHeader
      title="Let’s build your next program"
      kicker="Contact"
      description="Share a few details and we will respond within one business day."
    />
    <ContactSection />
  </div>
)

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="solutions" element={<SolutionsPage />} />
      <Route path="industries" element={<IndustriesPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
)

export default App
