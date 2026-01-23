type Props = {
  title: string
  desc: string
  preview: string
  pdf: string
  onView: () => void
}

const placeholder =
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=60&sat=-50'

const CertificateCard = ({ title, desc, preview, pdf, onView }: Props) => {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={preview}
          alt={title}
          onError={(e) => {
            ;(e.currentTarget as HTMLImageElement).src = placeholder
          }}
          className="aspect-[16/10] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-2 left-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-800">
          Click to view
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={onView}>
            View Fullscreen
          </button>
          <a className="btn btn-outline" href={pdf} download>
            Download PDF
          </a>
          <a
            className="btn btn-outline"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard
