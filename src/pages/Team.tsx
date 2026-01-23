import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

const members = [
  { name: 'Ansh Joshi', role: 'Director & Proprietor', focus: 'Leads sourcing, partner onboarding, and compliance across lanes.' },

]

const Team = () => {
  usePageMeta({
    title: 'Team | Naventra Global Exports',
    description: 'Meet the Naventra Global Exports team leading quality, compliance, and delivery.',
    url: 'https://www.naventraglobal.com/team',
  })

  return (
    <div className="container-xl pb-16 space-y-8">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Team' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">Team</p>
        <h1 className="text-3xl font-semibold text-slate-900">Operators behind every shipment</h1>
        <p className="text-slate-700 max-w-3xl">
          A focused pod of operators covering sourcing, QC, documentation, and logistics to deliver export-grade commodities.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.name} className="card h-full p-5 space-y-2">
            <div className="inline-flex rounded-full border border-[rgb(var(--brand))] bg-[rgb(var(--brand-soft))] px-3 py-1 text-xs font-semibold text-[rgb(var(--brand))]">
              {member.role}
            </div>
            <p className="text-lg font-semibold text-slate-900">{member.name}</p>
            <p className="text-sm text-slate-700">{member.focus}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
