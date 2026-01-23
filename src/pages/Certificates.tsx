import { useState } from 'react'
import { Link } from 'react-router-dom'

type Cert = {
  id: string
  title: string
  desc: string
  file: string
}

const CERTS: Cert[] = [
  {
    id: 'udyam',
    title: 'Udyam Registration Certificate',
    desc: 'Official MSME registration verification document.',
    file: '/certificates/udyam-certificate.pdf',
  },
  {
    id: 'est',
    title: 'Establishment Certification',
    desc: 'Establishment document supporting export readiness.',
    file: '/certificates/establishment-certificate.pdf',
  },
]

function isPdf(path: string) {
  return path.toLowerCase().endsWith('.pdf')
}

export default function CertificatesPage() {
  const [open, setOpen] = useState<Cert | null>(null)

  return (
    <div className="container-xl py-10">
      <p className="text-xs font-semibold text-cyan-800">
        <Link className="text-slate-600 hover:text-slate-900" to="/">
          Home
        </Link>{' '}
        <span className="text-slate-400">/</span> Certificates
      </p>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Legitimacy you can verify</h1>
      <p className="mt-2 text-slate-600">Certificates shown for verification. For official copies, contact us.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CERTS.map((c) => (
          <div key={c.id} className="card overflow-hidden">
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
            </div>

            <div className="px-5 pb-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden aspect-[16/10]">
                {isPdf(c.file) ? (
                  <iframe
                    title={c.title}
                    src={`${c.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="h-full w-full"
                  />
                ) : (
                  <img src={c.file} alt={c.title} className="h-full w-full object-cover" />
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button className="btn btn-primary" onClick={() => setOpen(c)}>
                  View Fullscreen
                </button>
                <a className="btn btn-outline" href={c.file} download>
                  Download
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Replace with official certificate files under <b>/public/certificates</b>.
              </p>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 p-4" onClick={() => setOpen(null)}>
          <div
            className="mx-auto h-full max-w-5xl rounded-2xl bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 py-2">
              <div>
                <h4 className="text-sm font-semibold text-slate-900">{open.title}</h4>
                <p className="text-xs text-slate-500">{open.desc}</p>
              </div>
              <button className="btn btn-outline" onClick={() => setOpen(null)}>
                Close
              </button>
            </div>

            <div className="h-[calc(100%-56px)] overflow-hidden rounded-xl border border-slate-200">
              {isPdf(open.file) ? (
                <iframe
                  title={open.title}
                  src={`${open.file}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="h-full w-full"
                />
              ) : (
                <img src={open.file} alt={open.title} className="h-full w-full object-contain bg-slate-50" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
