import { Link } from 'react-router-dom'

type Props = {
  view: 'grid' | 'list'
  product: {
    name: string
    shortDesc: string
    categoryLabel: string
    categorySlug: string
    slug: string
    heroImage: string
    highlights?: string[]
    tags?: string[]
  }
}

export default function ProductCard({ view, product }: Props) {
  const href = `/products/${product.categorySlug}/${product.slug}`

  return (
    <div className={`card overflow-hidden ${view === 'list' ? 'flex gap-4 p-4' : ''}`}>
      {/* image */}
      <div className={view === 'list' ? 'w-44 shrink-0' : ''}>
        <div
          className={`relative overflow-hidden rounded-xl bg-slate-100 ${
            view === 'list' ? 'h-28' : 'h-44'
          }`}
        >
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
      </div>

      {/* content */}
      <div className={view === 'list' ? 'flex-1' : 'p-4'}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-cyan-800">{product.categoryLabel}</p>
            <h3 className="mt-1 text-base font-semibold text-slate-900">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-600 line-clamp-2">{product.shortDesc}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {(product.highlights ?? []).slice(0, 2).map((h) => (
            <span key={h} className="badge">
              {h}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Link to={href} className="btn btn-primary">
            View Details
          </Link>
          <span className="text-xs text-slate-500">Export-ready</span>
        </div>
      </div>
    </div>
  )
}
