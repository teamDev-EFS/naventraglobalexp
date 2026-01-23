import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CertificateModal from '../components/CertificateModal'
import CertificateCard from '../components/CertificateCard'

type Cert = {
  id: string
  title: string
  desc: string
  file: string
  preview: string
}

const CERTS: Cert[] = [
  {
    id: 'udyam',
    title: 'Udyam Registration Certificate',
    desc: 'Official MSME registration verification document.',
    file: '/certificates/udyam-certificate.pdf',
    preview: '/certificates/udyam-preview.png',
  },
  {
    id: 'est',
    title: 'Establishment Certification',
    desc: 'Establishment document supporting export readiness.',
    file: '/certificates/establishment-certificate.pdf',
    preview: '/certificates/establishment-preview.png',
  },
]

export default function CertificatesPage() {
  const [open, setOpen] = useState<Cert | null>(null)
  const [scrollLocked, setScrollLocked] = useState(false)

  useEffect(() => {
    if (open && !scrollLocked) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      setScrollLocked(true)
      return () => {
        document.body.style.overflow = prev
        setScrollLocked(false)
      }
    }
    if (!open && scrollLocked) {
      document.body.style.overflow = ''
      setScrollLocked(false)
    }
  }, [open, scrollLocked])

  const cards = useMemo(() => CERTS, [])

  return (
    <div className="container-xl py-12">
      {/* Hero */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-[rgb(var(--brand))]">
          <Link className="text-slate-700 hover:text-slate-900" to="/">
            Home
          </Link>{' '}
          <span className="text-slate-500">/</span> Certificates
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">Compliance & Certificates</h1>
        <p className="text-slate-700">
          Verified documentation for global partners. Download or view full screen.
        </p>
      </div>

      {/* Trust bar */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {['Verified Documents', 'Export-ready', 'Transparent Compliance'].map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map((c) => (
          <CertificateCard
            key={c.id}
            title={c.title}
            desc={c.desc}
            preview={c.preview}
            pdf={c.file}
            onView={() => setOpen(c)}
          />
        ))}
      </div>

      {/* Modal */}
      {open && (
        <CertificateModal
          title={open.title}
          desc={open.desc}
          pdf={open.file}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  )
}
