type Chip = {
  label: string
  onRemove: () => void
}

type Props = {
  chips: Chip[]
  onClear: () => void
}

export const ActiveFilterChips = ({ chips, onClear }: Props) => {
  if (chips.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <button
          key={chip.label}
          onClick={chip.onRemove}
          className="badge hover:border-[rgb(var(--brand))] hover:text-[rgb(var(--brand))]"
        >
          {chip.label} ✕
        </button>
      ))}
      <button onClick={onClear} className="text-sm font-semibold text-[rgb(var(--brand))]">
        Clear all
      </button>
    </div>
  )
}
