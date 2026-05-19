import { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

const CAT_STYLE = {
  'AI / ML':    { pill: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/25',     icon: '#00d4ff', iconBg: 'bg-[#00d4ff]/10 border-[#00d4ff]/20' },
  'ML':         { pill: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/25',     icon: '#00d4ff', iconBg: 'bg-[#00d4ff]/10 border-[#00d4ff]/20' },
  'Blockchain': { pill: 'bg-[#7c3aed]/10 text-[#9d5bf0] border-[#7c3aed]/25',    icon: '#9d5bf0', iconBg: 'bg-[#7c3aed]/10 border-[#7c3aed]/20' },
  'AR / Mobile':{ pill: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/25', icon: '#10b981', iconBg: 'bg-emerald-500/10 border-emerald-500/20' },
  'IoT':        { pill: 'bg-amber-500/10 text-amber-500 border-amber-500/25',       icon: '#f59e0b', iconBg: 'bg-amber-500/10 border-amber-500/20' },
}

const ICONS = {
  'AI / ML':    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  'ML':         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  'Blockchain': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />,
  'AR / Mobile':<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
  'IoT':        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />,
}

function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const s = CAT_STYLE[project.category] ?? CAT_STYLE['AI / ML']

  useEffect(() => {
    if (!cardRef.current) return
    VanillaTilt.init(cardRef.current, { max: 5, speed: 400, glare: true, 'max-glare': 0.06 })
    return () => cardRef.current?.vanillaTilt?.destroy()
  }, [])

  return (
    <div ref={cardRef}
      style={{ borderColor: 'var(--border)', transformStyle: 'preserve-3d' }}
      className="bg-card border rounded-2xl p-6 flex flex-col hover:shadow-lg transition-all duration-300 cursor-default"
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
          <svg className="w-5 h-5" fill="none" stroke={s.icon} viewBox="0 0 24 24">
            {ICONS[project.category] ?? ICONS['AI / ML']}
          </svg>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {project.highlight && (
            <span className={`px-2.5 py-0.5 text-[10px] font-mono rounded-full border ${s.pill}`}>{project.highlight}</span>
          )}
          <span className="text-[10px] font-mono text-t3">{project.period}</span>
        </div>
      </div>

      <h3 className="text-[15px] font-semibold text-t1 mb-2 leading-snug">{project.name}</h3>
      <p className="text-t3 text-xs leading-relaxed flex-1 mb-5">{project.description}</p>

      <div style={{ borderColor: 'var(--border)' }} className="flex flex-wrap gap-1.5 pt-4 border-t">
        {project.tech?.map(t => (
          <span key={t} style={{ borderColor: 'var(--border)' }} className="px-2 py-0.5 text-[10px] font-mono text-t3 rounded border">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects({ data }) {
  const [filter, setFilter] = useState('All')
  const usedCats = ['All', ...new Set(data.projects?.map(p => p.category === 'ML' ? 'AI / ML' : p.category))]
  const visible  = filter === 'All'
    ? data.projects
    : data.projects?.filter(p => p.category === filter || (filter === 'AI / ML' && p.category === 'ML'))

  return (
    <SectionWrapper id="projects" className="bg-page">
      <SectionHeading label="What I've Built" title="Projects" />

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {usedCats.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}
            style={filter !== cat ? { borderColor: 'var(--border)' } : {}}
            className={`px-4 py-1.5 text-xs font-mono rounded-full border transition-all duration-200 ${
              filter === cat
                ? 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30'
                : 'text-t3 hover:text-[#00d4ff] hover:border-[#00d4ff]/30'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible?.map(project => <ProjectCard key={project.name} project={project} />)}
      </div>
    </SectionWrapper>
  )
}
