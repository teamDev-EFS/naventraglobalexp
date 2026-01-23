import { useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { productsByCategory, productCategories } from '../data/products'
import { Breadcrumbs } from '../components/Breadcrumbs'
import ProductCard from '../components/products/ProductCard'

const ProductCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const category = productCategories.find((c) => c.slug === categorySlug)
  const list = useMemo(() => productsByCategory(category?.slug), [category])

  usePageMeta({
    title: `${category?.name ?? 'Products'} | Naventra Global Exports`,
    description:
      'Browse export-ready agro commodities from Naventra Global Exports across rice, turmeric, and makhana portfolios.',
    url: `https://www.naventraglobal.com/products/${categorySlug}`,
  })

  if (!category) {
    return <Navigate to="/products" replace />
  }

  return (
    <div className="container-xl pb-16 space-y-8">
      <div className="space-y-4">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Products', to: '/products' },
            { label: category.name },
          ]}
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">Category</p>
          <h1 className="text-3xl font-semibold text-slate-900">{category.name}</h1>
          <p className="text-slate-600">{category.description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((product) => (
          <ProductCard
            key={product.slug}
            view="grid"
            product={{
              name: product.name,
              shortDesc: product.shortDesc,
              categoryLabel: product.categoryName,
              categorySlug: product.categorySlug,
              slug: product.slug,
              heroImage: product.heroImage,
              highlights: product.highlights,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCategory
