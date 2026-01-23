import ProductCard from './ProductCard'

type ProductItem = {
  name: string
  shortDesc: string
  categoryLabel: string
  categorySlug: string
  slug: string
  heroImage: string
  highlights?: string[]
  tags?: string[]
}

type Props = {
  products: ProductItem[]
  view: 'grid' | 'list'
}

export const ProductGrid = ({ products, view }: Props) => {
  if (view === 'list') {
    return (
      <div className="grid grid-cols-1 gap-4">
        {products.map((p) => (
          <ProductCard key={p.slug} view="list" product={p} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} view="grid" product={p} />
      ))}
    </div>
  )
}
