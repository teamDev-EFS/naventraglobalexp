import { useMemo, useState } from 'react'

type Option = { value: string; label: string }

type Props = {
  categories: Option[]
  varieties: string[]
  packaging: string[]
  selectedCategories: string[]
  selectedVarieties: string[]
  selectedPackaging: string[]
  onToggleCategory: (value: string) => void
  onToggleVariety: (value: string) => void
  onTogglePackaging: (value: string) => void
  onClearAll: () => void
  summaryCount: number
}

export const FilterSidebar = ({
  categories,
  varieties,
  packaging,
  selectedCategories,
  selectedVarieties,
  selectedPackaging,
  onToggleCategory,
  onToggleVariety,
  onTogglePackaging,
  onClearAll,
  summaryCount,
}: Props) => {
  const [varietyQuery, setVarietyQuery] = useState('')
  const [showAllVariety, setShowAllVariety] = useState(false)

  const varietyOptions = useMemo(() => {
    const filtered = varieties.filter((v) => v.toLowerCase().includes(varietyQuery.toLowerCase()))
    if (showAllVariety) return filtered
    return filtered.slice(0, 8)
  }, [varieties, varietyQuery, showAllVariety])

  return (
    <aside className="hidden md:block md:sticky md:top-24">
      <div className="card p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">Filters</div>
          <button className="text-xs text-[rgb(var(--brand))]" onClick={onClearAll}>
            Clear
          </button>
        </div>
        <p className="text-xs text-[rgb(var(--muted))]">{summaryCount} filters applied</p>

        <details open className="space-y-3">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900">Category</summary>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = selectedCategories.includes(c.value)
              return (
                <button
                  key={c.value}
                  onClick={() => onToggleCategory(c.value)}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    active
                      ? 'border-[rgb(var(--brand))] bg-[rgb(var(--brand-soft))] text-[rgb(var(--brand))]'
                      : 'border-[rgb(var(--border))] text-slate-700 hover:border-[rgb(var(--brand))]'
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </details>

        <details className="space-y-3">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900">Variety</summary>
          <input
            value={varietyQuery}
            onChange={(e) => setVarietyQuery(e.target.value)}
            placeholder="Search varieties"
            className="input"
          />
          <div className="flex flex-wrap gap-2">
            {varietyOptions.map((v) => {
              const active = selectedVarieties.includes(v)
              return (
                <button
                  key={v}
                  onClick={() => onToggleVariety(v)}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    active
                      ? 'border-[rgb(var(--brand))] bg-[rgb(var(--brand-soft))] text-[rgb(var(--brand))]'
                      : 'border-[rgb(var(--border))] text-slate-700 hover:border-[rgb(var(--brand))]'
                  }`}
                >
                  {v}
                </button>
              )
            })}
          </div>
          {varieties.length > 8 && (
            <button
              className="text-sm font-semibold text-[rgb(var(--brand))]"
              onClick={() => setShowAllVariety((v) => !v)}
            >
              {showAllVariety ? 'Show less' : 'Show more'}
            </button>
          )}
        </details>

        <details className="space-y-3">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900">Packaging</summary>
          <div className="flex flex-wrap gap-2">
            {packaging.map((p) => {
              const active = selectedPackaging.includes(p)
              return (
                <button
                  key={p}
                  onClick={() => onTogglePackaging(p)}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    active
                      ? 'border-[rgb(var(--brand))] bg-[rgb(var(--brand-soft))] text-[rgb(var(--brand))]'
                      : 'border-[rgb(var(--border))] text-slate-700 hover:border-[rgb(var(--brand))]'
                  }`}
                >
                  {p}
                </button>
              )
            })}
          </div>
        </details>
      </div>
    </aside>
  )
}
