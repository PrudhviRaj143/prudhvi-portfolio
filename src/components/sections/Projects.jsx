import { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

const CATEGORY_COLORS = {
  'AI / ML':    { text: 'text-[#00d4ff]', border: 'border-[#00d4ff]/20', bg: 'bg-[#00d4ff]/10', icon: '#00d4ff' },
  'ML':         { text: 'text-[#00d4ff]', border: 'border-[#00d4ff]/20', bg: 'bg-[#00d4ff]/10', icon: '#00d4ff' },
  'Blockchain': { text: 'text-[#9d5bf0]', border: 'border-[#7c3aed]/20', bg: 'bg-[#7c3aed]/10', icon: '#9d5bf0' },
  'AR / Mobile':{ text: 'text-emerald-500', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', icon: '#10b981' },
  'IoT':        { text: 'text-amber-500',   border: 'border-amber-500/20',   bg: 'bg-amber-500/10',   icon: '#f59e0b' },
}

const PROJECT_ICONS = {
  'AI / ML':    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  'ML':         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  'Blockchain': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />,
  'AR / Mobile':<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
  'IoT':        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />,
}

function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const style   = CATEGORY_COLORS[project.category] ?? CATEGORY_COLORS['AI / ML']

  useEffect(() => {
    if (!cardRef.current) return
    VanillaTilt.init(cardRef.current, { max: 6, speed: 400, glare: true, 'max-glare': 0.08 })
    return () => cardRef.current?.vanillaTilt?.destroy()
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-[#0d1128] border border-slate-200 dark:border-white/5 rounded-2xl p-6 flex flex-col hover:border-slate-300 dark:hover:border-white/10 hover:shadow-md dark:hover:shadow-none transition-all group cursor-default"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${style.bg} ${style.border}`}>
          <svg className="w-4 h-4" fill="none" stroke={style.icon} viewBox="0 0 24 24">
            {PROJECT_ICONS[project.category] ?? PROJECT_ICONS['AI / ML']}
          </svg>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {project.highlight && (
            <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${style.bg} ${style.text} ${style.border}`}>
              {project.highlight}
            </span>
          )}
          <span className="text-[10px] font-mono text-slate-400 dark:text-gray-600">{project.period}</span>
        </div>
      </div>

      <h3 className={`text-base font-semibold text-slate-900 dark:text-white mb-2 group-hover:${style.text} transition-colors`}>
        {project.name}
      </h3>

      <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/5">
        {project.tech?.map(t => (
          <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-slate-400 dark:text-gray-600 rounded border border-slate-200 dark:border-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

const ALL_CATS = ['All', 'AI / ML', 'Blockchain', 'AR / Mobile', 'IoT']

export default function Projects({ data }) {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? data.projects
    : data.projects?.filter(p => p.category === filter || (filter === 'AI / ML' && p.category === 'ML'))

  const usedCats = ['All', ...new Set(data.projects?.map(p => p.category === 'ML' ? 'AI / ML' : p.category))]

  return (
    <SectionWrapper id="projects" className="bg-slate-100/40 dark:bg-[#0d1128]/20">
      <SectionHeading label="What I've Built" title="Projects" />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {usedCats.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 text-xs font-mono rounded-full border transition-all duration-200 ${
              filter === cat
                ? 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30'
                : 'text-slate-400 dark:text-gray-500 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:text-slate-700 dark:hover:text-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible?.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
