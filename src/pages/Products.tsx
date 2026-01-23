import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard, ProductListItem } from '../components/ProductCard'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { products, productCategories } from '../data/products'
import type { ProductCategorySlug } from '../data/products'
import { useDebounce } from '../hooks/useDebounce'
import { usePageMeta } from '../hooks/usePageMeta'

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'az', label: 'A–Z' },
  { value: 'za', label: 'Z–A' },
  { value: 'category', label: 'Category' },
]

const getListParam = (params: URLSearchParams, key: string) =>
  (params.get(key)?.split(',').filter(Boolean) ?? []) as string[]

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value]

const LayoutToggle = ({
  layout,
  onChange,
}: {
  layout: 'grid' | 'list'
  onChange: (val: 'grid' | 'list') => void
}) => (
  <div className="flex items-center gap-2">
    <button
      onClick={() => onChange('grid')}
      className={`rounded-xl border px-3 py-2 text-sm transition ${
        layout === 'grid' ? 'border-gold-400/70 text-gold-200 bg-white/5' : 'border-white/10 text-slate-200'
      }`}
      aria-label="Grid view"
    >
      Grid
    </button>
    <button
      onClick={() => onChange('list')}
      className={`rounded-xl border px-3 py-2 text-sm transition ${
        layout === 'list' ? 'border-gold-400/70 text-gold-200 bg-white/5' : 'border-white/10 text-slate-200'
      }`}
      aria-label="List view"
    >
      List
    </button>
  </div>
)

const Products = () => {
  usePageMeta({
    title: 'Products | Naventra Global Exports',
    description:
      'Explore premium agro commodities from Naventra Global Exports — Basmati Rice, Turmeric, and Fox Nuts (Makhana) with export-ready specs and packaging.',
    url: 'https://www.naventraglobal.com/products',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const [isMobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const searchTerm = searchParams.get('search') ?? ''
  const sort = (searchParams.get('sort') ?? 'recommended') as string
  const layout = (searchParams.get('layout') ?? 'grid') as 'grid' | 'list'
  const selectedCategories = getListParam(searchParams, 'categories') as ProductCategorySlug[]
  const selectedVarieties = getListParam(searchParams, 'varieties')
  const selectedPackaging = getListParam(searchParams, 'packaging')
  const selectedAttributes = getListParam(searchParams, 'attributes')

  const debouncedSearch = useDebounce(searchTerm, 350)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 450)
    return () => clearTimeout(timer)
  }, [debouncedSearch, sort, layout, selectedCategories, selectedVarieties, selectedPackaging, selectedAttributes])

  const categoryOptions = productCategories
  const varietyOptions = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.varieties))).sort(),
    [],
  )
  const packagingOptions = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.packaging))).sort(),
    [],
  )
  const attributeOptions = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.attributes))).sort(),
    [],
  )

  const filtered = useMemo(() => {
    const keyword = debouncedSearch.toLowerCase()
    let list = products.filter((p) => {
      const matchesSearch =
        !keyword ||
        [p.name, p.categoryName, p.shortDesc, p.longDesc, ...p.keywords, ...p.tags]
          .join(' ')
          .toLowerCase()
          .includes(keyword)
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.categorySlug)
      const matchesVariety =
        selectedVarieties.length === 0 || p.varieties.some((v) => selectedVarieties.includes(v))
      const matchesPackaging =
        selectedPackaging.length === 0 || p.packaging.some((v) => selectedPackaging.includes(v))
      const matchesAttributes =
        selectedAttributes.length === 0 || p.attributes.some((v) => selectedAttributes.includes(v))
      return matchesSearch && matchesCategory && matchesVariety && matchesPackaging && matchesAttributes
    })

    switch (sort) {
      case 'az':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'za':
        list = [...list].sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'category':
        list = [...list].sort((a, b) => a.categoryName.localeCompare(b.categoryName))
        break
      default:
        break
    }

    return list
  }, [debouncedSearch, selectedCategories, selectedVarieties, selectedPackaging, selectedAttributes, sort])

  const updateParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams)
    if (value && value.length > 0) next.set(key, value)
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  const updateListParam = (key: string, values: string[]) => {
    const next = new URLSearchParams(searchParams)
    if (values.length > 0) next.set(key, values.join(','))
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  const resetFilters = () => setSearchParams(new URLSearchParams(), { replace: true })

  const selectedChips = [
    ...selectedCategories.map((c) => ({ label: productCategories.find((cat) => cat.slug === c)?.name ?? c, key: 'categories', value: c })),
    ...selectedVarieties.map((v) => ({ label: v, key: 'varieties', value: v })),
    ...selectedPackaging.map((v) => ({ label: v, key: 'packaging', value: v })),
    ...selectedAttributes.map((v) => ({ label: v, key: 'attributes', value: v })),
  ]

  return (
    <div className="container-grid pb-16">
      <div className="mb-8 space-y-4">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-300">Products</p>
          <h1 className="text-3xl font-semibold text-sand">Agro commodities ready for global markets</h1>
          <p className="text-slate-300">
            Search, filter, and compare premium basmati rice, turmeric, and fox nuts (makhana). Shareable filter links via URL params.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Search + filter persists to URL</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Grid & List layouts</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Mobile & desktop filter UX</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
        <div className="hidden lg:block">
          <FiltersPanel
            search={searchTerm}
            onSearch={(val) => updateParam('search', val)}
            sort={sort}
            onSort={(val) => updateParam('sort', val)}
            categoryOptions={categoryOptions}
            selectedCategories={selectedCategories}
            onToggleCategory={(val) => updateListParam('categories', toggleValue(selectedCategories, val))}
            varietyOptions={varietyOptions}
            selectedVarieties={selectedVarieties}
            onToggleVariety={(val) => updateListParam('varieties', toggleValue(selectedVarieties, val))}
            packagingOptions={packagingOptions}
            selectedPackaging={selectedPackaging}
            onTogglePackaging={(val) => updateListParam('packaging', toggleValue(selectedPackaging, val))}
            attributeOptions={attributeOptions}
            selectedAttributes={selectedAttributes}
            onToggleAttribute={(val) => updateListParam('attributes', toggleValue(selectedAttributes, val))}
            onClearAll={resetFilters}
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
              <span>Showing {filtered.length} of {products.length}</span>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-slate-400">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => updateParam('sort', e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sand focus-ring"
                  aria-label="Sort products"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <button
                className="lg:hidden rounded-xl border border-white/15 px-3 py-2 text-sm text-sand focus-ring"
                onClick={() => setMobileFiltersOpen(true)}
              >
                Filters
              </button>
            </div>
            <LayoutToggle layout={layout} onChange={(val) => updateParam('layout', val)} />
          </div>

          {selectedChips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {selectedChips.map((chip) => (
                <button
                  key={`${chip.key}-${chip.value}`}
                  onClick={() => {
                    const list = getListParam(searchParams, chip.key)
                    updateListParam(chip.key, list.filter((v) => v !== chip.value))
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sand focus-ring"
                >
                  {chip.label} ✕
                </button>
              ))}
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-gold-200 hover:text-gold-100 focus-ring"
              >
                Clear all
              </button>
            </div>
          )}

          <AnimatePresence>
            {loading ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="card-surface h-64 animate-pulse bg-white/5" />
                ))}
              </div>
            ) : filtered.length > 0 ? (
              layout === 'grid' ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filtered.map((product) => (
                    <ProductListItem key={product.slug} product={product} />
                  ))}
                </div>
              )
            ) : (
              <div className="card-surface flex flex-col items-start gap-3 p-6">
                <p className="text-lg font-semibold text-sand">No results</p>
                <p className="text-sm text-slate-300">Try adjusting filters or reset to see all products.</p>
                <button
                  onClick={resetFilters}
                  className="rounded-xl border border-white/15 px-4 py-2 text-sm text-sand hover:border-gold-400/70 focus-ring"
                >
                  Reset filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <MobileFilters
        open={isMobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        search={searchTerm}
        onSearch={(val) => updateParam('search', val)}
        sort={sort}
        onSort={(val) => updateParam('sort', val)}
        categoryOptions={categoryOptions}
        selectedCategories={selectedCategories}
        onToggleCategory={(val) => updateListParam('categories', toggleValue(selectedCategories, val))}
        varietyOptions={varietyOptions}
        selectedVarieties={selectedVarieties}
        onToggleVariety={(val) => updateListParam('varieties', toggleValue(selectedVarieties, val))}
        packagingOptions={packagingOptions}
        selectedPackaging={selectedPackaging}
        onTogglePackaging={(val) => updateListParam('packaging', toggleValue(selectedPackaging, val))}
        attributeOptions={attributeOptions}
        selectedAttributes={selectedAttributes}
        onToggleAttribute={(val) => updateListParam('attributes', toggleValue(selectedAttributes, val))}
        onClearAll={resetFilters}
      />
    </div>
  )
}

type FilterProps = {
  search: string
  onSearch: (val: string) => void
  sort: string
  onSort: (val: string) => void
  categoryOptions: typeof productCategories
  selectedCategories: ProductCategorySlug[]
  onToggleCategory: (val: ProductCategorySlug) => void
  varietyOptions: string[]
  selectedVarieties: string[]
  onToggleVariety: (val: string) => void
  packagingOptions: string[]
  selectedPackaging: string[]
  onTogglePackaging: (val: string) => void
  attributeOptions: string[]
  selectedAttributes: string[]
  onToggleAttribute: (val: string) => void
  onClearAll: () => void
}

const FiltersPanel = ({
  search,
  onSearch,
  sort,
  onSort,
  categoryOptions,
  selectedCategories,
  onToggleCategory,
  varietyOptions,
  selectedVarieties,
  onToggleVariety,
  packagingOptions,
  selectedPackaging,
  onTogglePackaging,
  attributeOptions,
  selectedAttributes,
  onToggleAttribute,
  onClearAll,
}: FilterProps) => (
  <div className="card-surface sticky top-28 space-y-5 p-5">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-sand">Filters</p>
      <button onClick={onClearAll} className="text-xs text-gold-200 hover:text-gold-100 focus-ring">
        Clear all
      </button>
    </div>
    <div className="space-y-3">
      <label className="text-xs text-slate-400">Search</label>
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sand focus-ring"
      />
    </div>
    <div className="space-y-3">
      <label className="text-xs text-slate-400">Sort</label>
      <select
        value={sort}
        onChange={(e) => onSort(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sand focus-ring"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
    <FilterGroup
      title="Category"
      options={categoryOptions.map((c) => ({ value: c.slug, label: c.name }))}
      selected={selectedCategories}
      onToggle={(v) => onToggleCategory(v as ProductCategorySlug)}
    />
    <FilterGroup title="Variety" options={toOptions(varietyOptions)} selected={selectedVarieties} onToggle={onToggleVariety} />
    <FilterGroup title="Packaging" options={toOptions(packagingOptions)} selected={selectedPackaging} onToggle={onTogglePackaging} />
    <FilterGroup title="Attributes" options={toOptions(attributeOptions)} selected={selectedAttributes} onToggle={onToggleAttribute} />
  </div>
)

const FilterGroup = ({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string
  options: { value: string; label: string }[]
  selected: string[]
  onToggle: (value: string) => void
}) => (
  <div className="space-y-2">
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{title}</p>
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2 text-sm text-sand">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-white/20 bg-white/5 text-gold-500 focus-ring"
            checked={selected.includes(opt.value)}
            onChange={() => onToggle(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  </div>
)

const toOptions = (list: string[]) => list.map((item) => ({ value: item, label: item }))

const MobileFilters = ({
  open,
  onClose,
  ...rest
}: { open: boolean; onClose: () => void } & FilterProps) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto bg-navy-800 p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-sand">Filters</p>
            <button onClick={onClose} className="rounded-full border border-white/10 px-3 py-1 text-sm text-sand focus-ring">
              Close
            </button>
          </div>
          <div className="mt-4 space-y-5">
            <FiltersPanel {...rest} />
            <button
              onClick={onClose}
              className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 px-4 py-3 text-sm font-semibold text-navy-800 shadow-lg shadow-black/20 focus-ring"
            >
              Show results
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

export default Products
