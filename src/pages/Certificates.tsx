import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

type Certificate = { title: string; file: string; note: string }

const certificates: Certificate[] = [
  {
    title: 'Udyam Registration Certificate',
    file: '/certificates/udyam-certificate.pdf',
    note: 'Official registration demonstrating MSME status.',
  },
  {
    title: 'Establishment Certification',
    file: '/certificates/establishment-certificate.pdf',
    note: 'Establishment document supporting export readiness.',
  },
]

const Certificates = () => {
  usePageMeta({
    title: 'Certificates | Naventra Global Exports',
    description: 'Verification documents including Udyam and Establishment certificates for Naventra Global Exports.',
    url: 'https://www.naventraglobal.com/certificates',
  })

  const [active, setActive] = useState<Certificate | null>(null)

  return (
    <div className="container-grid pb-16 space-y-8">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Certificates' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Certificates</p>
        <h1 className="text-3xl font-semibold text-sand">Legitimacy you can verify</h1>
        <p className="text-slate-300 max-w-3xl">
          Certificates shown for verification. For official copies, contact us at naventraglobalexp@gmail.com.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((cert) => (
          <div key={cert.title} className="card-surface h-full space-y-3 p-5">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <object data={cert.file} type="application/pdf" className="h-full w-full" aria-label={cert.title}>
                <p className="p-3 text-sm text-slate-300">Preview not available. Download below.</p>
              </object>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold-200">{cert.title}</p>
              <p className="text-sm text-slate-300">{cert.note}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActive(cert)}
                className="rounded-xl border border-white/15 px-4 py-2 text-sm text-sand hover:border-gold-400/70 focus-ring"
              >
                View Fullscreen
              </button>
              <a
                href={cert.file}
                download
                className="rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 px-4 py-2 text-sm font-semibold text-navy-800 shadow-lg shadow-black/20 focus-ring"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-6 z-50 overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <p className="text-sm font-semibold text-sand">{active.title}</p>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-sand focus-ring"
                >
                  Close
                </button>
              </div>
              <object data={active.file} type="application/pdf" className="h-full w-full">
                <p className="p-3 text-sm text-slate-300">Preview not available. Download instead.</p>
              </object>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Certificates
