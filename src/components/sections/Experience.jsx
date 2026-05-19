import { useState, useRef, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

const COMPANY_META = {
  'Credit Karma / Intuit': { color: '#00d4ff' },
  'Diadem Capital':        { color: '#7c3aed' },
  'SJSU King Library':     { color: '#10b981' },
  'Goldman Sachs':         { color: '#f59e0b' },
}

export default function Experience({ data }) {
  const jobs = data.experience ?? []
  const [active, setActive] = useState(0)
  const panelRef    = useRef(null)
  const activeJobRef = useRef(0)

  const animateIn = useCallback(() => {
    const panel   = panelRef.current
    if (!panel) return
    const bullets = panel.querySelectorAll('.exp-bullet')
    gsap.fromTo(panel,   { opacity: 0, x: 18 }, { opacity: 1, x: 0, duration: 0.32, ease: 'power2.out' })
    gsap.fromTo(bullets, { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.3, ease: 'power2.out', delay: 0.08 })
  }, [])

  const switchTo = useCallback((index) => {
    if (index === activeJobRef.current) return
    gsap.to(panelRef.current, {
      opacity: 0, x: -14, duration: 0.16, ease: 'power2.in',
      onComplete: () => { activeJobRef.current = index; setActive(index) },
    })
  }, [])

  useEffect(() => { animateIn() }, [active, animateIn])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); switchTo(Math.min(active + 1, jobs.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); switchTo(Math.max(active - 1, 0)) }
  }, [active, jobs.length, switchTo])

  const job  = jobs[active]
  const meta = COMPANY_META[job?.company] ?? { color: '#00d4ff' }

  return (
    <SectionWrapper id="experience" className="bg-alt">
      <SectionHeading label="Where I've Worked" title="Experience" />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-0 md:gap-10">

        <div
          role="tablist"
          aria-label="Companies"
          onKeyDown={handleKeyDown}
          style={{ borderColor: 'var(--border)' }}
          className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l flex-shrink-0 md:min-w-[210px]"
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
                style={isActive ? { borderColor: m.color, color: m.color } : { borderColor: 'transparent' }}
                className={[
                  'text-left px-5 py-4 text-sm transition-all duration-200 whitespace-nowrap md:whitespace-normal',
                  'border-b-2 md:border-b-0 md:border-l-2 focus:outline-none',
                  isActive ? 'bg-card' : 'text-t3 hover:text-t1 hover:bg-card/50',
                ].join(' ')}
              >
                <span className="font-semibold block leading-snug text-[13px]">{j.company}</span>
                <span className="text-[11px] opacity-50 block mt-0.5 font-mono">{j.role?.split(' ').slice(0,3).join(' ')}</span>
              </button>
            )
          })}
        </div>

        <div ref={panelRef} role="tabpanel" className="flex-1 pt-7 md:pt-0 min-h-[400px]">
          <div className="mb-7">
            <h3 className="text-xl font-bold text-t1 leading-snug">
              {job?.role}{' '}
              <span style={{ color: meta.color }}>@ {job?.company}</span>
              {job?.current && (
                <span className="ml-3 align-middle px-2 py-0.5 text-[10px] font-mono rounded-full border"
                  style={{ color: meta.color, borderColor: `${meta.color}40`, background: `${meta.color}10` }}>
                  Current
                </span>
              )}
            </h3>
            <p className="mt-1.5 text-xs font-mono text-t3 tracking-wide">{job?.period} · {job?.location}</p>
            {job?.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {job.tags.map(t => (
                  <span key={t} style={{ borderColor: 'var(--border)' }}
                    className="px-2 py-0.5 text-[10px] font-mono text-t3 rounded border bg-card">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <ul className="space-y-4">
            {job?.bullets?.map((bullet, i) => (
              <li key={i} className="exp-bullet flex gap-3 text-[14px] text-t2 leading-relaxed">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: meta.color }} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
