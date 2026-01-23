type Props = {
  title: string
  desc?: string
  pdf: string
  onClose: () => void
}

const CertificateModal = ({ title, desc, pdf, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} viewer`}
    >
      <div
        className="mx-auto flex h-full max-w-5xl flex-col gap-3 rounded-2xl bg-white p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-base font-semibold text-slate-900">{title}</h4>
            {desc && <p className="text-xs text-slate-600">{desc}</p>}
          </div>
          <div className="flex items-center gap-2">
            <a
              className="btn btn-outline"
              href={pdf}
              download
              rel="noreferrer"
            >
              Download PDF
            </a>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-slate-50">
          <iframe
            title={title}
            src={`${pdf}#toolbar=1&navpanes=1&scrollbar=1`}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default CertificateModal
