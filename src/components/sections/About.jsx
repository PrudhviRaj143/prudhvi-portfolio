import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

const HIGHLIGHTS = [
  { value: '5+',   label: 'Years Experience' },
  { value: '3',    label: 'Companies' },
  { value: '10+',  label: 'Production Systems' },
  { value: '90%+', label: 'SLA Improvement' },
]

export default function About({ data }) {
  return (
    <SectionWrapper id="about">
      <SectionHeading label="Who I Am" title="About Me" />
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            {data.summary}
          </p>
          <p className="text-slate-500 dark:text-gray-500 leading-relaxed">
            Currently at <span className="text-[#00d4ff]">Credit Karma / Intuit</span> in San Jose — building IAM automation, event-driven pipelines, and internal GenAI tooling. Previously shipped financial reconciliation systems at <span className="text-[#00d4ff]">Goldman Sachs</span> and led engineering at <span className="text-[#00d4ff]">Diadem Capital</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#0d1128] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 rounded-lg hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {data.email}
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#0d1128] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 rounded-lg hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white dark:bg-[#0d1128] border border-slate-200 dark:border-white/5 rounded-xl p-6 text-center hover:border-[#00d4ff]/30 transition-colors shadow-sm dark:shadow-none"
            >
              <span className="block text-4xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-1">
                {value}
              </span>
              <span className="text-slate-500 dark:text-gray-500 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
