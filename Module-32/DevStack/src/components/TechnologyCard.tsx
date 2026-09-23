import type { Technology } from '../types'

interface TechnologyCardProps {
  technology: Technology
  isAdded: boolean
  onAdd: (technology: Technology) => void
}

function badgeClasses(badge: string) {
  const normalized = badge.toLowerCase()
  if (normalized.includes('popular') || normalized.includes('sql') || normalized.includes('essential') || normalized.includes('containers')) {
    return 'border-blue-100 bg-blue-50 text-blue-600'
  }
  if (normalized.includes('versatile') || normalized.includes('standard')) {
    return 'border-emerald-100 bg-emerald-50 text-emerald-600'
  }
  if (normalized.includes('fast') || normalized.includes('ubiquitous')) {
    return 'border-orange-100 bg-orange-50 text-orange-600'
  }
  if (normalized.includes('cache')) {
    return 'border-red-100 bg-red-50 text-red-600'
  }
  return 'border-cyan-100 bg-cyan-50 text-cyan-600'
}

export default function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <article className="card rounded-2xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,.03)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-soft">
      <div className="card-body p-5">
        <div className="flex items-start justify-between gap-3">
          <img className="h-11 w-11 object-contain" src={technology.icon} alt={`${technology.name} logo`} />
          <span className={`badge h-6 border px-2.5 text-[11px] font-semibold ${badgeClasses(technology.badge)}`}>
            {technology.badge}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-bold text-slate-900">{technology.name}</h3>
        <p className="mt-1 min-h-[72px] text-sm leading-6 text-slate-500">{technology.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] text-slate-500">
          <span className="badge badge-ghost h-6 border-slate-100 bg-slate-50 px-2 text-slate-600">{technology.category}</span>
          <span>{technology.difficulty}</span>
          <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700" aria-label={`Rating ${technology.rating} out of 5`}>
            <span className="text-amber-400" aria-hidden="true">★</span>
            {technology.rating}
          </span>
        </div>

        <div className="card-actions mt-5">
          <button
            type="button"
            className={`btn min-h-0 h-10 w-full text-sm font-semibold ${isAdded
                ? 'btn-disabled border-slate-100 bg-slate-100 text-slate-400'
                : 'border-slate-900 bg-slate-950 text-white hover:border-slate-800 hover:bg-slate-800'
              }`}
            disabled={isAdded}
            onClick={() => onAdd(technology)}
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </article>
  )
}
