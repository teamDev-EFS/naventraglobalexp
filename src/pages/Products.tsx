import { useMemo, useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/products/ProductCard'
import productsData from '../data/products'
import { useDebounce } from '../hooks/useDebounce'
import { usePageMeta } from '../hooks/usePageMeta'

const SORTS = ['recommended', 'az', 'za'] as const

const getAll = (params: URLSearchParams, key: string) => params.getAll(key)

const toOptions = (list: string[]) => list.map((item) => ({ value: item, label: item }))

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(t)
  }, [debouncedQ, sort, view, category, variety, pack])

  const categories = useMemo(() => {
    const map = new Map<string, string>()
    productsData.forEach((p: any) => map.set(p.categorySlug, p.categoryLabel))
    return [...map.entries()].map(([slug, label]) => ({ slug, label }))
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

  const selectedChips = [
    ...category.map((c) => ({
      label: categories.find((cat) => cat.slug === c)?.label ?? c,
      key: 'cat',
      value: c,
    })),
    ...variety.map((v) => ({ label: v, key: 'variety', value: v })),
    ...pack.map((v) => ({ label: v, key: 'pack', value: v })),
  ]

  return (
    <div className="container-xl py-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold text-cyan-800">
          <Link className="text-slate-600 hover:text-slate-900" to="/">
            Home
          </Link>{' '}
          <span className="text-slate-400">/</span> Products
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Agro commodities for global markets
        </h1>
        <p className="text-slate-600">
          Search and compare premium basmati rice, turmeric, and makhana. Shareable filters via URL.
        </p>
      </div>

      {/* Controls */}
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

          <button onClick={() => setMobileFiltersOpen(true)} className="btn btn-outline md:hidden">
            Filters
          </button>

          <button onClick={clearAll} className="btn btn-outline">
            Clear all
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">
            Showing <b>{filtered.length}</b> of <b>{productsData.length}</b>
          </span>

          <div className="ml-2 inline-flex overflow-hidden rounded-xl border border-slate-300 bg-white">
            <button
              className={`px-3 py-2 text-sm font-semibold ${view === 'grid' ? 'bg-slate-100' : ''}`}
              onClick={() => setParam('view', 'grid')}
            >
              Grid
            </button>
            <button
              className={`px-3 py-2 text-sm font-semibold ${view === 'list' ? 'bg-slate-100' : ''}`}
              onClick={() => setParam('view', 'list')}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Filter chips */}
      {selectedChips.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {selectedChips.map((chip) => (
            <button
              key={`${chip.key}-${chip.value}`}
              onClick={() => toggleMulti(chip.key, chip.value)}
              className="badge"
            >
              {chip.label} ✕
            </button>
          ))}
          <button onClick={clearAll} className="text-sm font-semibold text-cyan-800">
            Clear all
          </button>
        </div>
      )}

      {/* Main layout */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
        {/* Sidebar filters (desktop) */}
        <aside className="card hidden h-fit p-4 md:block md:sticky md:top-24">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Filters</h3>
            <button className="text-xs text-cyan-800" onClick={clearAll}>
              Clear
            </button>
          </div>
          <p className="help mt-1">Select categories, varieties, and packaging.</p>

          <div className="mt-4 space-y-4">
            <FilterGroup
              title="Category"
              options={categories.map((c) => ({ value: c.slug, label: c.label }))}
              selected={category}
              onToggle={(v) => toggleMulti('cat', v)}
            />
            <FilterGroup
              title="Variety"
              options={toOptions(varieties)}
              selected={variety}
              onToggle={(v) => toggleMulti('variety', v)}
            />
            <FilterGroup
              title="Packaging"
              options={toOptions(packaging)}
              selected={pack}
              onToggle={(v) => toggleMulti('pack', v)}
            />
          </div>
        </aside>

        {/* Results */}
        <section>
          {loading ? (
            <div className={view === 'grid' ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3' : 'grid grid-cols-1 gap-4'}>
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="card h-48 animate-pulse bg-slate-100" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="card p-8 text-center">
              <h3 className="text-lg font-semibold text-slate-900">No results</h3>
              <p className="mt-2 text-slate-600">Try removing filters or searching a different keyword.</p>
              <button onClick={clearAll} className="btn btn-primary mt-4">
                Reset
              </button>
            </div>
          ) : (
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid grid-cols-1 gap-4'
              }
            >
              {filtered.map((p: any) => (
                <ProductCard
                  key={p.slug}
                  product={{
                    name: p.name,
                    shortDesc: p.shortDesc,
                    categoryLabel: p.categoryLabel,
                    categorySlug: p.categorySlug,
                    slug: p.slug,
                    heroImage: p.heroImage,
                    highlights: p.highlights,
                    tags: p.tags,
                  }}
                  view={view}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setMobileFiltersOpen(false)}
          aria-label="Close filters overlay"
        >
          <div
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Filters</h3>
              <button className="btn btn-outline" onClick={() => setMobileFiltersOpen(false)}>
                Close
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <FilterGroup
                title="Category"
                options={categories.map((c) => ({ value: c.slug, label: c.label }))}
                selected={category}
                onToggle={(v) => toggleMulti('cat', v)}
              />
              <FilterGroup
                title="Variety"
                options={toOptions(varieties)}
                selected={variety}
                onToggle={(v) => toggleMulti('variety', v)}
              />
              <FilterGroup
                title="Packaging"
                options={toOptions(packaging)}
                selected={pack}
                onToggle={(v) => toggleMulti('pack', v)}
              />
            </div>

            <button className="btn btn-primary mt-6 w-full" onClick={() => setMobileFiltersOpen(false)}>
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string
  options: { value: string; label: string }[]
  selected: string[]
  onToggle: (value: string) => void
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={() => onToggle(opt.value)}
              className="h-4 w-4 rounded border-slate-300 text-cyan-700"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  )
}
