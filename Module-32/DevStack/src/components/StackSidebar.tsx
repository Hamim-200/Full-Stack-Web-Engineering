import type { Technology } from '../types'

interface StackSidebarProps {
  selectedTechnologies: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function StackSidebar({ selectedTechnologies, onRemove, onRemoveAll }: StackSidebarProps) {
  const count = selectedTechnologies.length

  return (
    <aside className="card order-last rounded-2xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,.03)] xl:sticky xl:top-28" aria-label="Your selected technology stack">
      <div className="card-body p-5">
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900">Your Stack</h3>
          <p className="mt-1 text-xs text-slate-500">
            {count === 0 ? 'No technologies selected yet.' : `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`}
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {count === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-sm text-slate-400">
              Your stack is empty.
            </div>
          ) : (
            selectedTechnologies.map((technology) => (
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3" key={technology.id}>
                <img src={technology.icon} alt="" className="h-9 w-9 object-contain" />
                <div className="min-w-0 flex-1">
                  <strong className="block truncate text-sm font-semibold text-slate-800">{technology.name}</strong>
                  <span className="block text-xs text-slate-400">{technology.category}</span>
                </div>
                <button
                  type="button"
                  className="btn btn-circle btn-ghost btn-sm text-slate-400 hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                  onClick={() => onRemove(technology.id)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {count > 0 && (
          <button type="button" className="btn btn-outline mt-5 w-full border-slate-200 text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600" onClick={onRemoveAll}>
            Remove All
          </button>
        )}
      </div>
    </aside>
  )
}
