import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav className="text-sm text-slate-400" aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center gap-2">
      {items.map((item, idx) => (
        <li key={item.label} className="flex items-center gap-2">
          {item.to ? (
            <Link to={item.to} className="hover:text-gold-300">
              {item.label}
            </Link>
          ) : (
            <span className="text-sand">{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="text-slate-600">/</span>}
        </li>
      ))}
    </ol>
  </nav>
)
