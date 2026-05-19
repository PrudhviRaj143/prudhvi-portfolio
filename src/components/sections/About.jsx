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
    <SectionWrapper id="about" className="bg-[#eef1ff] dark:bg-[#080c1e]">
      <SectionHeading label="Who I Am" title="About Me" />
      <div className="grid md:grid-cols-2 gap-14 items-center">

        <div>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-5">
            {data.summary}
          </p>
          <p className="text-slate-500 dark:text-slate-500 leading-relaxed text-[15px]">
            Currently at{' '}
            <span className="text-accent font-medium">Credit Karma / Intuit</span>{' '}
            in San Jose — building IAM automation, event-driven pipelines, and internal GenAI tooling. Previously shipped financial reconciliation systems at{' '}
            <span className="text-accent font-medium">Goldman Sachs</span>{' '}
            and led engineering at{' '}
            <span className="text-accent font-medium">Diadem Capital</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5
                bg-white dark:bg-[#0c1229]
                border border-slate-200 dark:border-white/[0.07]
                text-slate-600 dark:text-slate-300
                hover:border-accent/40 hover:text-accent
                rounded-xl transition-all text-sm shadow-sm dark:shadow-none"
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
              className="inline-flex items-center gap-2 px-5 py-2.5
                bg-white dark:bg-[#0c1229]
                border border-slate-200 dark:border-white/[0.07]
                text-slate-600 dark:text-slate-300
                hover:border-accent/40 hover:text-accent
                rounded-xl transition-all text-sm shadow-sm dark:shadow-none"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white dark:bg-[#0c1229]
                border border-slate-200 dark:border-white/[0.07]
                rounded-2xl p-7 text-center
                hover:border-accent/30 dark:hover:border-accent/20
                hover:shadow-md dark:hover:shadow-none
                transition-all group"
            >
              <span className="block text-4xl font-black bg-gradient-to-br from-accent to-violet bg-clip-text text-transparent mb-1.5">
                {value}
              </span>
              <span className="text-slate-500 dark:text-slate-500 text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
