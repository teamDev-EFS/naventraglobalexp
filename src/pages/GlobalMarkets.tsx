import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

const regions = [
  {
    title: 'Middle East (UAE / GCC)',
    bullets: [
      'Halal alignment, bilingual labeling, and packaging compliance.',
      'Fast dispatch with milestone updates and duty optimization.',
      'Dubai hub expertise with reliable partners across GCC.',
    ],
  },
  {
    title: 'India Domestic & Re-export',
    bullets: [
      'Origin sourcing, grading, and compliance-ready documentation.',
      'Network across key producing states for rice, turmeric, and makhana.',
      'Pack formats for domestic retail and re-export needs.',
    ],
  },
  {
    title: 'Europe',
    bullets: [
      'Traceability and documentation to support EU regulations.',
      'Retail-ready packs with labeling and barcoding support.',
      'Temperature and moisture controls for long-haul lanes.',
    ],
  },
  {
    title: 'North America',
    bullets: [
      'FSMA-aligned documentation and COA support.',
      'Duty and landed-cost awareness with packaging tailored to distribution.',
      'Reliable 3PL readiness for e-commerce and retail channels.',
    ],
  },
]

const GlobalMarkets = () => {
  usePageMeta({
    title: 'Global Markets | Naventra Global Exports',
    description:
      'Naventra Global Exports serves Middle East, Europe, North America, and Southeast Asia with compliant documentation and reliable logistics.',
    url: 'https://www.naventraglobal.com/global-markets',
  })

  return (
    <div className="container-xl pb-16 space-y-8">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Global Markets' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">Global Markets</p>
        <h1 className="text-3xl font-semibold text-slate-900">Middle East & India first, with reach beyond</h1>
        <p className="text-slate-700 max-w-3xl">
          Destination-ready documentation, packaging, and logistics with proactive updates — anchored in Middle East and India lanes, extending to Europe and North America.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {regions.map((region) => (
          <div key={region.title} className="card h-full p-5">
            <p className="text-sm font-semibold text-[rgb(var(--brand))]">{region.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {region.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">Let’s plan your lane</p>
          <h3 className="text-xl font-semibold text-slate-900">Middle East or India dispatch in focus?</h3>
          <p className="text-slate-700">Share your product mix, port, and target SLA — we’ll map packaging and docs.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-primary">
            Request a plan
          </Link>
          <Link to="/products" className="btn btn-outline">
            View products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GlobalMarkets
