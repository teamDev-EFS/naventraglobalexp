import { Link, Navigate, useParams } from 'react-router-dom'
import { findProduct, productsByCategory } from '../data/products'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ProductCard } from '../components/ProductCard'
import { usePageMeta } from '../hooks/usePageMeta'

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>()
  const product = findProduct(categorySlug, productSlug)

  usePageMeta({
    title: product ? `${product.name} | Naventra Global Exports` : 'Product | Naventra Global Exports',
    description: product?.shortDesc ?? 'Premium agro commodities from Naventra Global Exports.',
    url: `https://www.naventraglobal.com/products/${categorySlug}/${productSlug}`,
  })

  if (!product) return <Navigate to="/products" replace />

  const related = productsByCategory(product.categorySlug).filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <div className="container-grid pb-16 space-y-10">
      <div className="space-y-4">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Products', to: '/products' },
            { label: product.categoryName, to: `/products/${product.categorySlug}` },
            { label: product.name },
          ]}
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">{product.categoryName}</p>
          <h1 className="text-3xl font-semibold text-sand">{product.name}</h1>
          <p className="text-slate-300">{product.shortDesc}</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="card-surface overflow-hidden">
          <img
            src={product.heroImage}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="card-surface space-y-4 p-6">
          <p className="text-slate-300">{product.longDesc}</p>
          <div className="flex flex-wrap gap-2 text-xs text-sand">
            {product.highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoBlock title="Varieties" items={product.varieties} />
            <InfoBlock title="Packaging options" items={product.packaging} />
          </div>
          <SpecsTable specs={product.specs} />
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 px-5 py-3 text-sm font-semibold text-navy-800 shadow-lg shadow-black/20 focus-ring"
            >
              Request Quote
            </Link>
            <a
              href="/certificates/udyam-certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-sand hover:border-gold-400/70 focus-ring"
            >
              Download Spec Sheet
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-sand">Related products</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

const InfoBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <p className="text-sm font-semibold text-gold-200">{title}</p>
    <div className="mt-2 flex flex-wrap gap-2 text-xs text-sand">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
          {item}
        </span>
      ))}
    </div>
  </div>
)

const SpecsTable = ({ specs }: { specs: { label: string; value: string }[] }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10">
    <table className="w-full text-sm">
      <tbody>
        {specs.map((spec) => (
          <tr key={spec.label} className="border-b border-white/5 bg-white/5 last:border-none">
            <td className="px-4 py-3 text-slate-300">{spec.label}</td>
            <td className="px-4 py-3 text-sand">{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default ProductDetail
