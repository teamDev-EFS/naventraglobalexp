import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePageMeta } from '../hooks/usePageMeta'
import { products, productCategories } from '../data/products'
import { ProductCard } from '../components/ProductCard'

const fade = { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 } }

const whyCards = [
  { title: 'Quality assurance', desc: 'Export-grade QC with moisture, purity, and grading checkpoints for every lot.' },
  { title: 'Export compliance', desc: 'Aligned with destination regulations and documentation to clear customs smoothly.' },
  { title: 'On-time delivery', desc: 'Route planning with reliable partners and SLA governance across lanes.' },
  { title: 'Global network', desc: 'Sourcing and logistics network across India with reach to MEA, EU, NA, and SEA.' },
]

const testimonials = [
  { quote: 'Documentation and packaging were dialed-in from day one. Clearance was seamless.', name: 'Import Partner, Dubai' },
  { quote: 'Consistent grain length and moisture helped us standardize our private label SKUs.', name: 'Retail Buyer, Europe' },
  { quote: 'Responsive team, clear visibility, and dependable ETAs for every shipment.', name: 'Distributor, North America' },
]

const markets = [
  { region: 'Middle East', focus: 'Dubai / UAE, GCC — Halal, labeling, and fast lead times.' },
  { region: 'Europe', focus: 'Traceability, packaging compliance, and retailer-ready documentation.' },
  { region: 'North America', focus: 'FSMA-aligned documentation, duty optimization, and 3PL readiness.' },
  { region: 'Southeast Asia', focus: 'Value-aligned SKUs with agile replenishment across key ports.' },
]

const partnerships = [
  { title: 'Importers & Distributors', desc: 'Portfolio-ready SKUs with compliant documentation.' },
  { title: 'Retail & Private Label', desc: 'Custom packs, branding support, and QC aligned to shelf standards.' },
  { title: 'Bulk Supply', desc: 'Food-service friendly pack sizes with cost-optimized logistics.' },
]

const Home = () => {
  usePageMeta({
    title: 'Naventra Global Exports | Premium Indian Agro Commodities',
    description:
      'Premium Indian agro commodities for global markets: Turmeric, Fox Nuts (Makhana), and Basmati Rice with export-grade quality and compliance.',
    url: 'https://www.naventraglobal.com',
  })

  const featured = products.slice(0, 4)

  return (
    <div className="space-y-20 pb-16">
      <section className="container-grid">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 via-navy-800/80 to-navy-700/70 p-10 shadow-2xl shadow-black/30">
          <div className="absolute inset-0 gradient-blob opacity-60 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gold-200">
                Premium Indian Agro Commodities
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-sand sm:text-5xl">
                Premium Indian Agro Commodities for Global Markets
              </h1>
              <p className="text-lg text-slate-200">
                Turmeric • Fox Nuts (Makhana) • Basmati Rice — export-grade quality, verified
                documentation, and on-time delivery worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 px-5 py-3 font-semibold text-navy-800 shadow-lg shadow-black/20 transition hover:translate-y-[-1px] focus-ring"
                >
                  Explore Products
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-sand transition hover:border-gold-400/70 focus-ring"
                >
                  Request a Quote
                </Link>
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-slate-400">Product categories</p>
                  <p className="text-xl font-semibold text-sand">Turmeric · Makhana · Rice</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-slate-400">Global reach</p>
                  <p className="text-xl font-semibold text-sand">MEA · EU · NA · SEA</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-gold-500/25 via-sky-400/15 to-teal-300/15 blur-3xl" />
              <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-navy-800/70 p-6 shadow-xl shadow-black/30">
                <p className="text-sm font-semibold text-gold-200">Trusted Export Readiness</p>
                <ul className="space-y-3 text-slate-200">
                  <li>• Moisture, purity, and grading controls for every lot.</li>
                  <li>• Destination-ready documents: COA, MSDS, packing lists, invoices.</li>
                  <li>• Packaging from 100g pouches to 50kg bulk — retail or food service.</li>
                  <li>• SLA-backed dispatch and proactive milestone updates.</li>
                </ul>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    Compliance-forward
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    Private label ready
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Food service</div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Bulk supply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-grid space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Why Naventra Global</p>
          <h2 className="text-3xl font-semibold text-sand">Export-grade reliability, every shipment</h2>
          <p className="text-slate-300">
            A disciplined export pod that owns quality, documentation, packaging, and logistics with clear SLAs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whyCards.map((card) => (
            <motion.div
              key={card.title}
              {...fade}
              viewport={{ once: true, amount: 0.2 }}
              className="card-surface h-full p-5"
            >
              <p className="text-sm font-semibold text-gold-200">{card.title}</p>
              <p className="mt-2 text-sm text-slate-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-grid space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Featured Products</p>
          <h2 className="text-3xl font-semibold text-sand">Quality you can ship now</h2>
          <p className="text-slate-300">Curated picks across basmati rice, turmeric, and makhana.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-sand hover:border-gold-400/70 focus-ring"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-grid space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Global Markets</p>
          <h2 className="text-3xl font-semibold text-sand">Built for compliance across regions</h2>
          <p className="text-slate-300">Documentation, packaging, and labeling tuned to each destination.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {markets.map((market) => (
            <motion.div
              key={market.region}
              {...fade}
              viewport={{ once: true, amount: 0.2 }}
              className="card-surface h-full p-5"
            >
              <p className="text-sm font-semibold text-gold-200">{market.region}</p>
              <p className="mt-2 text-sm text-slate-300">{market.focus}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-grid space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Partnerships</p>
          <h2 className="text-3xl font-semibold text-sand">Fit for how you go to market</h2>
          <p className="text-slate-300">Private label, bulk supply, and distributor-ready packs.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {partnerships.map((item) => (
            <div key={item.title} className="card-surface p-5">
              <p className="text-sm font-semibold text-gold-200">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-grid space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Testimonials</p>
          <h2 className="text-3xl font-semibold text-sand">Trusted by global partners</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card-surface h-full p-5">
              <p className="text-lg text-sand">“{item.quote}”</p>
              <p className="mt-3 text-sm text-gold-200">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-grid">
        <div className="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-r from-gold-500/15 via-amber-400/10 to-sky-500/10 p-8 shadow-2xl shadow-black/30">
          <div className="absolute inset-0 gradient-blob opacity-50 blur-2xl" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold-200">Next step</p>
              <h3 className="mt-2 text-2xl font-semibold text-sand">
                Ready to ship? Let’s align on specs, packaging, and lanes.
              </h3>
              <p className="mt-2 text-slate-200">Share your product mix and destination — we’ll reply within one business day.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3 font-semibold text-navy-800 shadow-lg shadow-black/20 hover:translate-y-[-1px] focus-ring"
              >
                Request a Quote
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-sand transition hover:border-gold-400/70 focus-ring"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
