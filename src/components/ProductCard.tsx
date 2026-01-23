import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../data/products'

export const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    whileHover={{ translateY: -4 }}
    className="card-surface flex flex-col overflow-hidden"
    transition={{ duration: 0.2 }}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={product.heroImage}
        alt={product.name}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="flex items-center gap-2 text-xs text-gold-300">
        <span className="inline-flex rounded-full bg-gold-500/15 px-2 py-1 text-[11px] font-semibold text-gold-200">
          {product.categoryName}
        </span>
        {product.attributes.slice(0, 1).map((attr) => (
          <span key={attr} className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-slate-200">
            {attr}
          </span>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-sand">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-300 line-clamp-2">{product.shortDesc}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-slate-200">
        {product.highlights.slice(0, 3).map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
            {item}
          </span>
        ))}
      </div>
      <Link
        to={`/products/${product.categorySlug}/${product.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-100 focus-ring"
      >
        View Details
        <span aria-hidden>→</span>
      </Link>
    </div>
  </motion.div>
)

export const ProductListItem = ({ product }: { product: Product }) => (
  <motion.div
    whileHover={{ translateY: -3 }}
    className="card-surface grid gap-4 p-4 sm:grid-cols-[240px,1fr]"
    transition={{ duration: 0.2 }}
  >
    <div className="relative h-44 overflow-hidden rounded-xl">
      <img
        src={product.heroImage}
        alt={product.name}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2 text-xs text-gold-300">
        <span className="inline-flex rounded-full bg-gold-500/15 px-2 py-1 text-[11px] font-semibold text-gold-200">
          {product.categoryName}
        </span>
        {product.attributes.slice(0, 2).map((attr) => (
          <span key={attr} className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-slate-200">
            {attr}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold text-sand">{product.name}</h3>
      <p className="text-sm text-slate-300">{product.shortDesc}</p>
      <div className="flex flex-wrap gap-2 text-xs text-slate-200">
        {product.highlights.slice(0, 3).map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-3 pt-2">
        <Link
          to={`/products/${product.categorySlug}/${product.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-3 py-2 text-sm font-semibold text-gold-200 hover:border-gold-300 focus-ring"
        >
          View Details
        </Link>
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 px-4 py-2 text-sm font-semibold text-navy-800 shadow-md shadow-black/20 focus-ring"
        >
          Request Quote
        </Link>
      </div>
    </div>
  </motion.div>
)
