import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePageMeta } from '../hooks/usePageMeta'
import { products, productCategories } from '../data/products'
import ProductCard from '../components/products/ProductCard'
import ExportBackdrop from '../components/ExportBackdrop'
import logo from '../assets/NaventraGlobal-logo.png'
import bgImage from '../assets/naventraglobal background.png'

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
      <section className="container-xl">
        <div
          className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-white p-10 shadow-sm"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <ExportBackdrop />
          <div className="absolute inset-0 bg-white/88 pointer-events-none" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6 rounded-2xl bg-white/92 p-6 shadow-md backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--brand))] bg-[rgb(var(--brand-soft))] px-4 py-2 text-xs font-semibold text-[rgb(var(--brand))]">
                Premium Indian Agro Commodities
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Premium Indian Agro Commodities for Global Markets
              </h1>
              <p className="text-lg text-slate-800">
                Turmeric • Fox Nuts (Makhana) • Basmati Rice — export-grade quality, verified
                documentation, and on-time delivery worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/products" className="btn btn-primary">
                  Explore Products
                  <span aria-hidden>→</span>
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Request a Quote
                </Link>
                <Link to="/certificates" className="btn btn-outline">
                  View Certifications
                </Link>
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-4 text-sm">
                <div className="card p-4 shadow-none">
                  <p className="text-slate-600">Product categories</p>
                  <p className="text-xl font-semibold text-slate-900">Turmeric · Makhana · Rice</p>
                </div>
                <div className="card p-4 shadow-none">
                  <p className="text-slate-600">Global reach</p>
                  <p className="text-xl font-semibold text-slate-900">MEA · EU · NA · SEA</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative grid gap-4 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--brand-soft))] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Naventra Global" className="h-12 w-12 rounded-xl object-contain border border-[rgb(var(--border))]" />
                  <div>
                    <p className="text-sm font-semibold text-[rgb(var(--brand))]">Naventra Global</p>
                    <p className="text-xs text-slate-700">Premium Exports</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[rgb(var(--brand))]">Trusted Export Readiness</p>
                <ul className="space-y-3 text-slate-700">
                  <li>• Moisture, purity, and grading controls for every lot.</li>
                  <li>• Destination-ready documents: COA, MSDS, packing lists, invoices.</li>
                  <li>• Packaging from 100g pouches to 50kg bulk — retail or food service.</li>
                  <li>• SLA-backed dispatch and proactive milestone updates.</li>
                </ul>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="rounded-xl border border-[rgb(var(--border))] bg-white px-3 py-2">
                    Compliance-forward
                  </div>
                  <div className="rounded-xl border border-[rgb(var(--border))] bg-white px-3 py-2">
                    Private label ready
                  </div>
                  <div className="rounded-xl border border-[rgb(var(--border))] bg-white px-3 py-2">Food service</div>
                  <div className="rounded-xl border border-[rgb(var(--border))] bg-white px-3 py-2">Bulk supply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">Why Naventra Global</p>
          <h2 className="text-3xl font-semibold text-slate-900">Export-grade reliability, every shipment</h2>
          <p className="text-slate-600">
            A disciplined export pod that owns quality, documentation, packaging, and logistics with clear SLAs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whyCards.map((card) => (
            <motion.div
              key={card.title}
              {...fade}
              viewport={{ once: true, amount: 0.2 }}
              className="card h-full p-5"
            >
              <p className="text-sm font-semibold text-cyan-900">{card.title}</p>
              <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">Featured Products</p>
          <h2 className="text-3xl font-semibold text-slate-900">Quality you can ship now</h2>
          <p className="text-slate-600">Curated picks across basmati rice, turmeric, and makhana.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard
              key={product.slug}
              product={{
                name: product.name,
                shortDesc: product.shortDesc,
                categoryLabel: product.categoryName,
                categorySlug: product.categorySlug,
                slug: product.slug,
                heroImage: product.heroImage,
                highlights: product.highlights,
              }}
              view="grid"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="badge"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">Global Markets</p>
          <h2 className="text-3xl font-semibold text-slate-900">Built for compliance across regions</h2>
          <p className="text-slate-600">Documentation, packaging, and labeling tuned to each destination.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {markets.map((market) => (
            <motion.div
              key={market.region}
              {...fade}
              viewport={{ once: true, amount: 0.2 }}
              className="card h-full p-5"
            >
              <p className="text-sm font-semibold text-cyan-900">{market.region}</p>
              <p className="mt-2 text-sm text-slate-600">{market.focus}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">Partnerships</p>
          <h2 className="text-3xl font-semibold text-slate-900">Fit for how you go to market</h2>
          <p className="text-slate-600">Private label, bulk supply, and distributor-ready packs.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {partnerships.map((item) => (
            <div key={item.title} className="card p-5">
              <p className="text-sm font-semibold text-cyan-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">Testimonials</p>
          <h2 className="text-3xl font-semibold text-slate-900">Trusted by global partners</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card h-full p-5">
              <p className="text-lg text-slate-900">“{item.quote}”</p>
              <p className="mt-3 text-sm text-cyan-900 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-xl">
        <div className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-white p-8 shadow-sm">
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">Next step</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                Ready to ship? Let’s align on specs, packaging, and lanes.
              </h3>
              <p className="mt-2 text-slate-600">Share your product mix and destination — we’ll reply within one business day.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Request a Quote
              </Link>
              <Link
                to="/products"
                className="btn btn-outline"
              >
                View Products
              </Link>
              <Link to="/global-markets" className="btn btn-outline">
                View Key Markets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
