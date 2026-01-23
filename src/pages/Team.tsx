import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

const members = [
  { name: 'Aarav Menon', role: 'Founder & Director', focus: 'Strategy, key accounts, compliance oversight.' },
  { name: 'Neha Kapoor', role: 'Export Manager', focus: 'Documentation, customs coordination, dispatch governance.' },
  { name: 'Rahul Iyer', role: 'Quality Lead', focus: 'Lot-wise QC, grading, moisture, and packaging integrity.' },
  { name: 'Sara Thomas', role: 'Logistics Coordinator', focus: 'Lane planning, partner orchestration, milestone updates.' },
  { name: 'Vikram Rao', role: 'Sales Lead', focus: 'Private label and distributor programs across regions.' },
]

const Team = () => {
  usePageMeta({
    title: 'Team | Naventra Global Exports',
    description: 'Meet the Naventra Global Exports team leading quality, compliance, and delivery.',
    url: 'https://www.naventraglobal.com/team',
  })

  return (
    <div className="container-grid pb-16 space-y-8">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Team' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Team</p>
        <h1 className="text-3xl font-semibold text-sand">Operators behind every shipment</h1>
        <p className="text-slate-300 max-w-3xl">
          A focused pod of operators covering sourcing, QC, documentation, and logistics to deliver export-grade commodities.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.name} className="card-surface h-full p-5">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-200">{member.role}</div>
            </div>
            <p className="mt-3 text-lg font-semibold text-sand">{member.name}</p>
            <p className="mt-1 text-sm text-slate-300">{member.focus}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
