import { usePageMeta } from '../hooks/usePageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'

const pillars = [
  { title: 'Mission', desc: 'Deliver premium Indian agro commodities to global partners with uncompromising quality and compliance.' },
  { title: 'Quality promise', desc: 'Lot-wise QC, moisture checks, grading, and packaging integrity validated before dispatch.' },
  { title: 'Traceability', desc: 'Source transparency with documentation that supports regulatory needs in MEA, EU, NA, and SEA.' },
  { title: 'Packaging standards', desc: 'Retail, private label, and bulk packs with food-safe materials and labeling alignment.' },
  { title: 'Ethics', desc: 'Responsible sourcing, fair partnerships, and compliance with local and destination regulations.' },
]

const About = () => {
  usePageMeta({
    title: 'About | Naventra Global Exports',
    description:
      'Learn how Naventra Global Exports delivers premium Indian agro commodities with rigorous quality, documentation, and on-time delivery.',
    url: 'https://www.naventraglobal.com/about',
  })

  return (
    <div className="container-grid pb-16 space-y-10">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">About</p>
        <h1 className="text-3xl font-semibold text-sand">Built for reliable, compliant exports</h1>
        <p className="text-slate-300 max-w-3xl">
          Naventra Global Exports is a focused export studio for premium agro commodities — basmati rice, turmeric, and fox nuts (makhana).
          We align sourcing, grading, packaging, and documentation so partners can scale confidently in global markets.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="card-surface h-full p-5">
            <p className="text-sm font-semibold text-gold-200">{pillar.title}</p>
            <p className="mt-2 text-sm text-slate-300">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
