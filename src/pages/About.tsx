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
    <div className="container-xl pb-16 space-y-10">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">About</p>
        <h1 className="text-3xl font-semibold text-slate-900">Built for reliable, compliant exports</h1>
        <p className="text-slate-700 max-w-3xl">
          Naventra Global Exports is a focused export studio for premium agro commodities — basmati rice, turmeric, and fox nuts (makhana).
          We align sourcing, grading, packaging, and documentation so partners can scale confidently in global markets.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="card h-full p-5">
            <p className="text-sm font-semibold text-[rgb(var(--brand))]">{pillar.title}</p>
            <p className="mt-2 text-sm text-slate-700">{pillar.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr,1fr]">
        <div className="card p-6 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">Leadership</p>
          <h2 className="text-2xl font-semibold text-slate-900">Meet the founder</h2>
          <p className="text-slate-700">
            Naventra Global is led by operators who stay accountable to your service levels and documentation standards.
          </p>
          <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--brand-soft))] p-5">
            <p className="text-lg font-semibold text-slate-900">Ansh Joshi</p>
            <p className="text-sm font-semibold text-[rgb(var(--brand))]">Director & Proprietor</p>
            <p className="mt-2 text-sm text-slate-700">
              Oversees sourcing, partner onboarding, and compliance so every shipment meets destination requirements.
            </p>
          </div>
        </div>
        <div className="card p-6 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">CTA</p>
          <h2 className="text-xl font-semibold text-slate-900">Let’s discuss your next lane</h2>
          <p className="text-slate-700">Share your destination, packaging needs, and timelines.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="btn btn-primary">Request a call</a>
            <a href="/products" className="btn btn-outline">View products</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
