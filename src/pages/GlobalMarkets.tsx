import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

const regions = [
  {
    title: 'Middle East (UAE/GCC)',
    bullets: [
      'Halal alignment, bilingual labeling, and packaging compliance.',
      'Fast dispatch with milestone updates and duty optimization.',
      'Lane experience into Dubai and GCC hubs.',
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
  {
    title: 'Southeast Asia',
    bullets: [
      'Value-aligned SKUs with agile replenishment.',
      'Packaging flexibility for modern trade and quick commerce.',
      'Documentation tuned to regional customs needs.',
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
    <div className="container-grid pb-16 space-y-8">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Global Markets' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Global Markets</p>
        <h1 className="text-3xl font-semibold text-sand">Compliance-led exports across key regions</h1>
        <p className="text-slate-300 max-w-3xl">
          Destination-ready documentation, packaging, and logistics with proactive updates across Middle East, Europe, North America, and Southeast Asia.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {regions.map((region) => (
          <div key={region.title} className="card-surface h-full p-5">
            <p className="text-sm font-semibold text-gold-200">{region.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {region.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GlobalMarkets
