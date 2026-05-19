import { useState, useRef, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const COMPANY_META = {
  'Credit Karma / Intuit': { color: '#00d4ff', short: 'CK / Intuit' },
  'Diadem Capital':        { color: '#7c3aed', short: 'Diadem' },
  'SJSU King Library':     { color: '#10b981', short: 'SJSU' },
  'Goldman Sachs':         { color: '#f59e0b', short: 'Goldman' },
}

export default function Experience({ data }) {
  const jobs = data.experience ?? []
  const [active, setActive] = useState(0)
  const panelRef = useRef(null)
  const activeJobRef = useRef(0)

  const animateIn = useCallback(() => {
    const panel = panelRef.current
    if (!panel) return
    const bullets = panel.querySelectorAll('.exp-bullet')
    gsap.fromTo(panel,   { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' })
    gsap.fromTo(bullets, { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.055, duration: 0.35, ease: 'power2.out', delay: 0.1 })
  }, [])

  const switchTo = useCallback((index) => {
    if (index === activeJobRef.current) return
    gsap.to(panelRef.current, {
      opacity: 0, x: -12, duration: 0.18, ease: 'power2.in',
      onComplete: () => { activeJobRef.current = index; setActive(index) },
    })
  }, [])

  useEffect(() => { animateIn() }, [active, animateIn])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); switchTo(Math.min(active + 1, jobs.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); switchTo(Math.max(active - 1, 0)) }
  }, [active, jobs.length, switchTo])

  const job   = jobs[active]
  const meta  = COMPANY_META[job?.company] ?? { color: '#00d4ff' }
  const color = meta.color

  return (
    <SectionWrapper id="experience">
      <SectionHeading label="Where I've Worked" title="Experience" />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-0 md:gap-8">

        {/* Tab rail */}
        <div
          role="tablist"
          aria-label="Companies"
          onKeyDown={handleKeyDown}
          className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-200 dark:border-white/8 flex-shrink-0 md:min-w-[200px]"
        >
          {jobs.map((j, i) => {
            const m = COMPANY_META[j.company] ?? { color: '#00d4ff' }
            const isActive = active === i
            return (
              <button
                key={j.company}
                role="tab"
                aria-selected={isActive}
                onClick={() => switchTo(i)}
                style={isActive ? { borderColor: m.color, color: m.color } : {}}
                className={[
                  'text-left px-5 py-4 text-sm transition-all duration-200 whitespace-nowrap md:whitespace-normal',
                  'border-b-2 md:border-b-0 md:border-l-2',
                  'focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 dark:focus-visible:ring-white/30',
                  isActive
                    ? 'bg-slate-100 dark:bg-white/[0.04]'
                    : 'border-transparent text-slate-400 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-200 hover:bg-slate-50 dark:hover:bg-white/[0.03] hover:border-slate-300 dark:hover:border-gray-600',
                ].join(' ')}
              >
                <span className="font-semibold block leading-snug">{j.company}</span>
                <span className="text-[11px] opacity-50 block mt-0.5 font-mono">{j.role}</span>
              </button>
            )
          })}
        </div>

        {/* Content panel */}
        <div ref={panelRef} role="tabpanel" className="flex-1 pt-6 md:pt-0 min-h-[380px]">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {job?.role}{' '}
              <span style={{ color }}>@ {job?.company}</span>
              {job?.current && (
                <span
                  className="ml-3 align-middle px-2 py-0.5 text-[10px] font-mono rounded-full border"
                  style={{ color, borderColor: `${color}40`, background: `${color}10` }}
                >
                  Current
                </span>
              )}
            </h3>
            <p className="mt-1 text-xs font-mono text-slate-400 dark:text-gray-500 tracking-wide">
              {job?.period} · {job?.location}
            </p>
            {job?.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {job.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-slate-400 dark:text-gray-600 rounded border border-slate-200 dark:border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <ul className="space-y-3.5">
            {job?.bullets?.map((bullet, i) => (
              <li key={i} className="exp-bullet flex gap-3 text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
