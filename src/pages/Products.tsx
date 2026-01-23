import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ActiveFilterChips } from '../components/products/ActiveFilterChips'
import { FilterSidebar } from '../components/products/FilterSidebar'
import { FilterDrawer } from '../components/products/FilterDrawer'
import { ProductGrid } from '../components/products/ProductGrid'
import productsData from '../data/products'
import { useDebounce } from '../hooks/useDebounce'
import { usePageMeta } from '../hooks/usePageMeta'

const SORTS = ['recommended', 'az', 'za'] as const

const getAll = (params: URLSearchParams, key: string) => params.getAll(key)

export default function ProductsPage() {
  usePageMeta({
    title: 'Products | Naventra Global Exports',
    description:
      'Explore premium agro commodities — Basmati Rice, Turmeric, and Fox Nuts (Makhana) with export-ready specs and packaging.',
    url: 'https://www.naventraglobal.com/products',
  })

  const [params, setParams] = useSearchParams()
  const view = (params.get('view') as 'grid' | 'list') || 'grid'
  const sort = (params.get('sort') as (typeof SORTS)[number]) || 'recommended'
  const q = params.get('q') || ''
  const debouncedQ = useDebounce(q, 250)
  const category = getAll(params, 'cat')
  const variety = getAll(params, 'variety')
  const pack = getAll(params, 'pack')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categories = useMemo(() => {
    const map = new Map<string, string>()
    productsData.forEach((p: any) => map.set(p.categorySlug, p.categoryLabel))
    return [...map.entries()].map(([value, label]) => ({ value, label }))
  }, [])

  const varieties = useMemo(
    () => Array.from(new Set(productsData.flatMap((p: any) => p.varieties || []))).sort(),
    [],
  )
  const packaging = useMemo(
    () => Array.from(new Set(productsData.flatMap((p: any) => p.packaging || []))).sort(),
    [],
  )

  const filtered = useMemo(() => {
    let list = [...productsData]

    if (category.length) list = list.filter((p: any) => category.includes(p.categorySlug))
    if (variety.length) list = list.filter((p: any) => p.varieties?.some((v: string) => variety.includes(v)))
    if (pack.length) list = list.filter((p: any) => p.packaging?.some((v: string) => pack.includes(v)))

    const query = debouncedQ.trim().toLowerCase()
    if (query) {
      list = list.filter((p: any) => {
        const hay = `${p.name} ${p.shortDesc} ${(p.keywords ?? []).join(' ')} ${(p.tags ?? []).join(' ')}`
          .toLowerCase()
        return hay.includes(query)
      })
    }

    if (sort === 'az') list.sort((a: any, b: any) => a.name.localeCompare(b.name))
    if (sort === 'za') list.sort((a: any, b: any) => b.name.localeCompare(a.name))

    return list
  }, [category, debouncedQ, sort, pack, variety])

  const setParam = (key: string, value: string) => {
    const p = new URLSearchParams(params)
    p.set(key, value)
    setParams(p, { replace: true })
  }

  const toggleMulti = (key: string, slug: string) => {
    const p = new URLSearchParams(params)
    const set = new Set(p.getAll(key))
    set.has(slug) ? set.delete(slug) : set.add(slug)
    p.delete(key)
    set.forEach((x) => p.append(key, x))
    setParams(p, { replace: true })
  }

  const clearAll = () => {
    const p = new URLSearchParams()
    p.set('view', view)
    p.set('sort', 'recommended')
    setParams(p, { replace: true })
  }

  const quickFilter = (key: string) => toggleMulti('cat', key)
  const quickAttr = (token: string) => {
    const current = new Set(q.split(' ').filter(Boolean))
    if (current.has(token.toLowerCase())) {
      current.delete(token.toLowerCase())
    } else {
      current.add(token.toLowerCase())
    }
    const next = [...current].join(' ')
    const p = new URLSearchParams(params)
    if (next) p.set('q', next)
    else p.delete('q')
    setParams(p, { replace: true })
  }

  const activeCount = category.length + variety.length + pack.length

  const chips = [
    ...category.map((c) => ({
      label: categories.find((cat) => cat.value === c)?.label ?? c,
      onRemove: () => toggleMulti('cat', c),
    })),
    ...variety.map((v) => ({ label: v, onRemove: () => toggleMulti('variety', v) })),
    ...pack.map((v) => ({ label: v, onRemove: () => toggleMulti('pack', v) })),
  ]

  return (
    <div className="container-xl py-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold text-[rgb(var(--brand))]">
          <Link className="text-slate-700 hover:text-slate-900" to="/">
            Home
          </Link>{' '}
          <span className="text-slate-500">/</span> Products
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Agro commodities for global markets
        </h1>
        <p className="text-slate-700">
          Search and compare premium basmati rice, turmeric, and makhana. Shareable filters via URL.
        </p>
      </div>

      {/* Top controls */}
      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={q}
            onChange={(e) => setParam('q', e.target.value)}
            className="input w-full md:w-80"
            placeholder="Search products… (e.g., 1121, Sella, Alleppey)"
          />

          <select
            value={sort}
            onChange={(e) => setParam('sort', e.target.value)}
            className="input md:w-44"
          >
            <option value="recommended">Recommended</option>
            <option value="az">A–Z</option>
            <option value="za">Z–A</option>
          </select>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <span className="text-sm text-slate-600">
              Showing <b>{filtered.length}</b> of <b>{productsData.length}</b>
            </span>
            <div className="inline-flex overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-white">
              <button
                className={`px-3 py-2 text-sm font-semibold ${view === 'grid' ? 'bg-[rgb(var(--brand-soft))] text-[rgb(var(--brand))]' : ''}`}
                onClick={() => setParam('view', 'grid')}
              >
                Grid
              </button>
              <button
                className={`px-3 py-2 text-sm font-semibold ${view === 'list' ? 'bg-[rgb(var(--brand-soft))] text-[rgb(var(--brand))]' : ''}`}
                onClick={() => setParam('view', 'list')}
              >
                List
              </button>
            </div>
            <button onClick={() => setMobileFiltersOpen(true)} className="btn btn-outline md:hidden">
              Filters {activeCount > 0 ? `(${activeCount})` : ''}
            </button>
          </div>
        </div>
      </div>

      {/* Quick filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => {
          const active = category.includes(c.value)
          return (
            <button
              key={c.value}
              onClick={() => quickFilter(c.value)}
              className={`rounded-full border px-3 py-1 text-sm ${
                active
                  ? 'border-[rgb(var(--brand))] bg-[rgb(var(--brand-soft))] text-[rgb(var(--brand))]'
                  : 'border-[rgb(var(--border))] text-slate-700'
              }`}
            >
              {c.label}
            </button>
          )
        })}
        <button className="badge" onClick={() => quickAttr('export-ready')}>
          Export-ready
        </button>
        <button className="badge" onClick={() => quickAttr('premium')}>
          Premium
        </button>
      </div>

      {/* Active chips */}
      <div className="mt-3">
        <ActiveFilterChips chips={chips} onClear={clearAll} />
      </div>

      {/* Main layout */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[300px,1fr]">
        <FilterSidebar
          categories={categories}
          varieties={varieties}
          packaging={packaging}
          selectedCategories={category}
          selectedVarieties={variety}
          selectedPackaging={pack}
          onToggleCategory={(v) => toggleMulti('cat', v)}
          onToggleVariety={(v) => toggleMulti('variety', v)}
          onTogglePackaging={(v) => toggleMulti('pack', v)}
          onClearAll={clearAll}
          summaryCount={activeCount}
        />

        <section>
          {filtered.length === 0 ? (
            <div className="card p-8 text-center">
              <h3 className="text-lg font-semibold text-slate-900">No results</h3>
              <p className="mt-2 text-slate-600">Try removing filters or searching a different keyword.</p>
              <button onClick={clearAll} className="btn btn-primary mt-4">
                Reset
              </button>
            </div>
          ) : (
            <ProductGrid
              view={view}
              products={filtered.map((p: any) => ({
                name: p.name,
                shortDesc: p.shortDesc,
                categoryLabel: p.categoryLabel,
                categorySlug: p.categorySlug,
                slug: p.slug,
                heroImage: p.heroImage,
                highlights: p.highlights,
                tags: p.tags,
              }))}
            />
          )}
        </section>
      </div>

      <FilterDrawer
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        categories={categories}
        varieties={varieties}
        packaging={packaging}
        selectedCategories={category}
        selectedVarieties={variety}
        selectedPackaging={pack}
        onApply={(next) => {
          const p = new URLSearchParams(params)
          p.delete('cat')
          p.delete('variety')
          p.delete('pack')
          next.cat.forEach((v) => p.append('cat', v))
          next.variety.forEach((v) => p.append('variety', v))
          next.pack.forEach((v) => p.append('pack', v))
          setParams(p, { replace: true })
        }}
        onClearAll={clearAll}
        summaryCount={activeCount}
      />
    </div>
  )
}
