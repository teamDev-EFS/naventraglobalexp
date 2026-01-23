import { useEffect, useMemo, useState } from 'react'

type Option = { value: string; label: string }

type Props = {
  open: boolean
  onClose: () => void
  categories: Option[]
  varieties: string[]
  packaging: string[]
  selectedCategories: string[]
  selectedVarieties: string[]
  selectedPackaging: string[]
  onApply: (next: { cat: string[]; variety: string[]; pack: string[] }) => void
  onClearAll: () => void
  summaryCount: number
}

export const FilterDrawer = ({
  open,
  onClose,
  categories,
  varieties,
  packaging,
  selectedCategories,
  selectedVarieties,
  selectedPackaging,
  onApply,
  onClearAll,
  summaryCount,
}: Props) => {
  const [localCat, setLocalCat] = useState<string[]>(selectedCategories)
  const [localVariety, setLocalVariety] = useState<string[]>(selectedVarieties)
  const [localPack, setLocalPack] = useState<string[]>(selectedPackaging)
  const [varietyQuery, setVarietyQuery] = useState('')
  const [showAllVariety, setShowAllVariety] = useState(false)

  useEffect(() => {
    if (open) {
      setLocalCat(selectedCategories)
      setLocalVariety(selectedVarieties)
      setLocalPack(selectedPackaging)
    }
  }, [open, selectedCategories, selectedVarieties, selectedPackaging])

  const varietyOptions = useMemo(() => {
    const filtered = varieties.filter((v) => v.toLowerCase().includes(varietyQuery.toLowerCase()))
    if (showAllVariety) return filtered
    return filtered.slice(0, 8)
  }, [varieties, varietyQuery, showAllVariety])

  const toggle = (list: string[], value: string, setter: (next: string[]) => void) => {
    const set = new Set(list)
    set.has(value) ? set.delete(value) : set.add(value)
    setter([...set])
  }

  const handleApply = () => {
    onApply({ cat: localCat, variety: localVariety, pack: localPack })
    onClose()
  }

  const handleClear = () => {
    setLocalCat([])
    setLocalVariety([])
    setLocalPack([])
    onClearAll()
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={onClose} aria-label="Close filters overlay">
      <div
        className="absolute bottom-0 left-0 right-0 max-h-[80%] overflow-y-auto rounded-t-3xl bg-white p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Filters</p>
            <p className="text-xs text-[rgb(var(--muted))]">{summaryCount} filters applied</p>
          </div>
          <button className="text-sm text-[rgb(var(--brand))]" onClick={handleClear}>
            Clear all
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = localCat.includes(c.value)
                return (
                  <button
                    key={c.value}
                    onClick={() => toggle(localCat, c.value, setLocalCat)}
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
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Variety</p>
            <input
              value={varietyQuery}
              onChange={(e) => setVarietyQuery(e.target.value)}
              placeholder="Search varieties"
              className="input"
            />
            <div className="flex flex-wrap gap-2">
              {varietyOptions.map((v) => {
                const active = localVariety.includes(v)
                return (
                  <button
                    key={v}
                    onClick={() => toggle(localVariety, v, setLocalVariety)}
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
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900">Packaging</p>
            <div className="flex flex-wrap gap-2">
              {packaging.map((p) => {
                const active = localPack.includes(p)
                return (
                  <button
                    key={p}
                    onClick={() => toggle(localPack, p, setLocalPack)}
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
          </div>
        </div>

        <div className="sticky bottom-0 left-0 right-0 mt-4 flex gap-3 bg-white pb-2">
          <button className="btn btn-outline flex-1" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary flex-1" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
