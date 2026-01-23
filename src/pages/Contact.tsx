import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePageMeta } from '../hooks/usePageMeta'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  company: z.string().min(2, 'Company is required'),
  country: z.string().min(2, 'Country is required'),
  product: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

export default function ContactPage() {
  usePageMeta({
    title: 'Contact | Naventra Global Exports',
    description:
      'Request a quote for premium Indian agro commodities — Turmeric, Fox Nuts (Makhana), and Basmati Rice — from Naventra Global Exports.',
    url: 'https://www.naventraglobal.com/contact',
  })

  const [params] = useSearchParams()
  const prefillProduct = params.get('product') || ''

  const defaultValues = useMemo<FormValues>(
    () => ({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      product: prefillProduct,
      message: '',
    }),
    [prefillProduct],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onBlur',
  })

  const onSubmit = async (values: FormValues) => {
    const subject = encodeURIComponent(
      `Naventra Global Quote Request: ${values.product || 'General'}`,
    )
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nCompany: ${values.company}\nCountry: ${values.country}\nProduct: ${values.product}\n\nMessage:\n${values.message}`,
    )

    // mailto fallback
    window.location.href = `mailto:naventraglobalexp@gmail.com?subject=${subject}&body=${body}`

    reset(defaultValues)
  }

  return (
    <div className="container-xl py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Request a quote</h1>
      <p className="mt-2 text-slate-600">
        Share product, destination, packaging, and timelines. We respond within 1 business day.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card mt-6 p-6"
        name="naventra-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="naventra-contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Name" required error={errors.name?.message}>
            <input className="input mt-1" {...register('name')} placeholder="Your name" />
          </Field>

          <Field label="Email" required error={errors.email?.message}>
            <input className="input mt-1" {...register('email')} placeholder="you@company.com" />
          </Field>

          <Field label="Phone" required error={errors.phone?.message}>
            <input className="input mt-1" {...register('phone')} placeholder="+91 9XXXXXXXXX" />
          </Field>

          <Field label="Company" required error={errors.company?.message}>
            <input className="input mt-1" {...register('company')} placeholder="Company name" />
          </Field>

          <Field label="Country" required error={errors.country?.message}>
            <input className="input mt-1" {...register('country')} placeholder="Destination country" />
          </Field>

          <Field label="Interested Product" error={errors.product?.message}>
            <input
              className="input mt-1"
              {...register('product')}
              placeholder="e.g., 1121 Basmati Rice"
            />
          </Field>

          <Field label="Message" required error={errors.message?.message} full>
            <textarea
              className="input mt-1 min-h-[120px]"
              {...register('message')}
              placeholder="Packaging, volume, timeline, destination…"
            />
          </Field>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button disabled={isSubmitting} className="btn btn-primary">
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
          <a className="btn btn-outline" href="mailto:naventraglobalexp@gmail.com">
            Or email directly
          </a>

          {isSubmitSuccessful && (
            <span className="text-sm font-medium text-emerald-700">Submitted successfully.</span>
          )}
        </div>
      </form>
    </div>
  )
}

function Field({
  label,
  required,
  error,
  children,
  full,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <div className={full ? 'md:col-span-2' : undefined}>
      <label className="label">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      {error && <p className="error mt-1">{error}</p>}
    </div>
  )
}
