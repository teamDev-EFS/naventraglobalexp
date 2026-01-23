import { Link, Navigate, useParams } from 'react-router-dom'
import { findProduct, productsByCategory } from '../data/products'
import { Breadcrumbs } from '../components/Breadcrumbs'
import ProductCard from '../components/products/ProductCard'
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
    <div className="container-xl pb-16 space-y-10">
      <div className="space-y-3">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Products', to: '/products' },
            { label: product.categoryName, to: `/products/${product.categorySlug}` },
            { label: product.name },
          ]}
        />
        <p className="text-sm font-semibold text-cyan-900">{product.categoryName}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{product.name}</h1>
        <p className="text-slate-600">{product.shortDesc}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="card overflow-hidden">
          <div className="aspect-[4/3] w-full">
            <img
              src={product.heroImage}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1600&auto=format&fit=crop'
              }}
            />
          </div>
          {product.gallery.length > 1 && (
            <div className="grid grid-cols-3 gap-2 p-4">
              {product.gallery.slice(1, 4).map((img) => (
                <div key={img} className="overflow-hidden rounded-xl border border-slate-200">
                  <img src={img} alt={product.name} className="h-24 w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card space-y-4 p-6">
          <p className="text-slate-700 leading-relaxed">{product.longDesc}</p>

          <div className="flex flex-wrap gap-2">
            {product.highlights.map((item) => (
              <span key={item} className="badge">
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
              className="btn btn-primary"
            >
              Request Quote
            </Link>
            <a className="btn btn-outline" href="/certificates/udyam-certificate.pdf" target="_blank" rel="noreferrer">
              Download Spec Sheet
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Related products</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard
              key={item.slug}
              view="grid"
              product={{
                name: item.name,
                shortDesc: item.shortDesc,
                categoryLabel: item.categoryName,
                categorySlug: item.categorySlug,
                slug: item.slug,
                heroImage: item.heroImage,
                highlights: item.highlights,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const InfoBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-4">
    <p className="text-sm font-semibold text-slate-900">{title}</p>
    <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-700">
      {items.map((item) => (
        <span key={item} className="badge">
          {item}
        </span>
      ))}
    </div>
  </div>
)

const SpecsTable = ({ specs }: { specs: { label: string; value: string }[] }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200">
    <table className="w-full text-sm">
      <tbody>
        {specs.map((spec) => (
          <tr key={spec.label} className="border-b border-slate-200 last:border-none">
            <td className="px-4 py-3 text-slate-600">{spec.label}</td>
            <td className="px-4 py-3 text-slate-900 font-semibold">{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default ProductDetail
