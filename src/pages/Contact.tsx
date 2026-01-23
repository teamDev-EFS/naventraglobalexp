import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

const Contact = () => {
  usePageMeta({
    title: 'Contact | Naventra Global Exports',
    description:
      'Request a quote for premium Indian agro commodities — Turmeric, Fox Nuts (Makhana), and Basmati Rice — from Naventra Global Exports.',
    url: 'https://www.naventraglobal.com/contact',
  })

  const [searchParams] = useSearchParams()
  const [product, setProduct] = useState(searchParams.get('product') ?? '')

  useEffect(() => {
    const fromParam = searchParams.get('product')
    if (fromParam) setProduct(fromParam)
  }, [searchParams])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const requiredFields = ['name', 'email', 'phone', 'company', 'country']
    const missing = requiredFields.filter((f) => !formData.get(f))
    if (missing.length > 0) {
      toast.error('Please fill all required fields.')
      return
    }
    toast.success('Thanks! We received your request.')
    form.reset()
  }

  return (
    <div className="container-grid pb-16 space-y-8">
      <div className="space-y-3">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Contact</p>
        <h1 className="text-3xl font-semibold text-sand">Request a quote</h1>
        <p className="text-slate-300 max-w-3xl">
          Share your product, destination, packaging, and timelines. We respond within one business day.
        </p>
        <p className="text-xs text-slate-400">
          Prefer email? <a href="mailto:naventraglobalexp@gmail.com" className="text-gold-200 underline">naventraglobalexp@gmail.com</a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        name="naventra-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="card-surface space-y-4 p-6"
      >
        <input type="hidden" name="form-name" value="naventra-contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Your name" />
          <Field label="Email" name="email" required type="email" placeholder="you@company.com" />
          <Field label="Phone" name="phone" required placeholder="+1 234 567 890" />
          <Field label="Company" name="company" required placeholder="Company name" />
          <Field label="Country" name="country" required placeholder="Destination country" />
          <div>
            <label className="text-sm text-slate-300">Interested Product</label>
            <input
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g., 1121 Basmati Rice"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sand focus-ring"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-slate-300">Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Share packaging needs, volume, lane, timelines."
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sand focus-ring"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 px-5 py-3 text-sm font-semibold text-navy-800 shadow-lg shadow-black/20 focus-ring"
          >
            Send Request
          </button>
          <a
            href="mailto:naventraglobalexp@gmail.com"
            className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-sand hover:border-gold-400/70 focus-ring"
          >
            Or email us directly
          </a>
        </div>
      </form>
    </div>
  )
}

const Field = ({
  label,
  name,
  required,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  required?: boolean
  type?: string
  placeholder?: string
}) => (
  <div>
    <label className="text-sm text-slate-300">
      {label}
      {required && <span className="text-gold-300"> *</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sand focus-ring"
    />
  </div>
)

export default Contact
