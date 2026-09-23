import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard'
import StackSidebar from './components/StackSidebar'
import Footer from './components/Footer'
import type { Technology } from './types'

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadTechnologies() {
      try {
        setLoading(true)
        setLoadError('')
        const response = await fetch('/data/technologies.json', { signal: controller.signal })
        if (!response.ok) throw new Error('Could not load technology data.')
        const data = (await response.json()) as Technology[]
        setTechnologies(data)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setLoadError(error instanceof Error ? error.message : 'Something went wrong while loading data.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void loadTechnologies()
    return () => controller.abort()
  }, [])

  const selectedIds = useMemo(
    () => new Set(selectedTechnologies.map((technology) => technology.id)),
    [selectedTechnologies],
  )

  function handleAddToStack(technology: Technology) {
    if (selectedIds.has(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }
    setSelectedTechnologies((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  function handleRemove(id: string) {
    const removed = selectedTechnologies.find((technology) => technology.id === id)
    setSelectedTechnologies((current) => current.filter((technology) => technology.id !== id))
    toast.info(`${removed?.name ?? 'Technology'} removed from your stack.`)
  }

  function handleRemoveAll() {
    if (selectedTechnologies.length === 0) {
      toast.info('Your stack is already empty.')
      return
    }
    setSelectedTechnologies([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <div data-theme="devstack" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="mx-auto mt-20 w-[calc(100%-40px)] max-w-content pb-20 lg:mt-28">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Explore the <span className="brand-soft-text">Technologies</span>
            </h2>
            <p className="mt-2 text-base text-slate-500">
              Choose the technologies you like and build your ideal development stack.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 xl:grid-cols-[minmax(0,904px)_280px]">
            <div className="min-w-0">
              {loading && (
                <div className="alert border border-slate-100 bg-white text-slate-600 shadow-sm" role="status">
                  <span className="loading loading-spinner loading-md text-secondary" />
                  <span className="loading loading-spinner text-success"></span>

                </div>
              )}

              {!loading && loadError && (
                <div className="alert alert-error" role="alert">
                  <span>{loadError}</span>
                </div>
              )}

              {!loading && !loadError && (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={selectedIds.has(technology.id)}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              )}
            </div>

            <StackSidebar
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>

        <section id="projects" className="h-px scroll-mt-24" aria-label="Projects" />
        <section id="about" className="h-px scroll-mt-24" aria-label="About" />
        <section id="contact" className="h-px scroll-mt-24" aria-label="Contact" />
      </main>
      <Footer />
    </div>
  )
}
