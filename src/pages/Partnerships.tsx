import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

const tracks = [
  {
    title: 'Importers & Distributors',
    bullets: ['Portfolio-ready SKUs', 'Destination documentation', 'Reliable replenishment'],
  },
  {
    title: 'Retailers & Private Label',
    bullets: ['Custom packs and labeling', 'Shelf-life friendly packaging', 'QC aligned to retail standards'],
  },
  {
    title: 'Bulk Supply',
    bullets: ['Food-service pack sizes', 'Value-optimized logistics', 'Consistent grading and moisture'],
  },
]

const Partnerships = () => {
  usePageMeta({
    title: 'Partnerships | Naventra Global Exports',
    description:
      'Partner with Naventra Global Exports for importer, distributor, retail, private label, and bulk supply programs.',
    url: 'https://www.naventraglobal.com/partnerships',
  })

  return (
    <div className="container-grid pb-16 space-y-8">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Partnerships' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Partnerships</p>
        <h1 className="text-3xl font-semibold text-sand">Built to fit your go-to-market</h1>
        <p className="text-slate-300 max-w-3xl">
          From importers and distributors to private label and bulk supply, we align specs, packaging, and timelines to how you sell.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {tracks.map((track) => (
          <div key={track.title} className="card-surface h-full p-5">
            <p className="text-sm font-semibold text-gold-200">{track.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {track.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-gold-500/30 bg-gradient-to-r from-gold-500/15 via-amber-400/10 to-sky-500/10 p-8 shadow-2xl shadow-black/30">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-200">Let’s collaborate</p>
            <h2 className="text-2xl font-semibold text-sand">Ready to co-create your product lineup?</h2>
            <p className="text-slate-200">Share your channel, destination, and timelines — we’ll tailor a plan.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3 text-sm font-semibold text-navy-800 shadow-lg shadow-black/20 focus-ring"
            >
              Contact Team
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-sand hover:border-gold-400/70 focus-ring"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnerships
