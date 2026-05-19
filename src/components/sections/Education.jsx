import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

export default function Education({ data }) {
  return (
    <SectionWrapper id="education">
      <SectionHeading label="Where I Studied" title="Education" />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.education?.map(edu => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-[#0d1128] border border-slate-200 dark:border-white/5 rounded-2xl p-7 hover:border-[#7c3aed]/40 dark:hover:border-[#7c3aed]/30 hover:shadow-md dark:hover:shadow-none transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#00d4ff]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#9d5bf0] mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">{edu.degree}</h3>
              <p className="text-[#9d5bf0] font-medium text-sm mb-1">{edu.school}</p>
              <p className="text-slate-400 dark:text-gray-600 text-xs font-mono mb-3">{edu.period} · {edu.location}</p>
              {edu.note && (
                <span className="inline-block px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 mb-3">
                  {edu.note}
                </span>
              )}
              {edu.specializations?.length > 0 && (
                <ul className="space-y-1">
                  {edu.specializations.map(s => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-[#7c3aed] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        {data.certifications?.length > 0 && (
          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 dark:text-gray-500 mb-5">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.certifications.map(cert => (
                <div
                  key={cert.name}
                  className="flex items-start gap-4 bg-white dark:bg-[#0d1128] border border-slate-200 dark:border-white/5 rounded-xl p-5 hover:border-[#00d4ff]/30 hover:shadow-sm dark:hover:shadow-none transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-800 dark:text-white text-sm font-medium leading-snug">{cert.name}</p>
                    <p className="text-slate-400 dark:text-gray-500 text-xs mt-1">{cert.issuer}</p>
                    <span className={`inline-block mt-2 px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                      cert.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                    }`}>
                      {cert.status} {cert.year ? `· ${cert.year}` : ''}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recognition */}
        {data.achievements?.length > 0 && (
          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 dark:text-gray-500 mb-5">Recognition</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.achievements.map(a => (
                <div
                  key={a.title}
                  className="flex gap-4 bg-white dark:bg-[#0d1128] border border-slate-200 dark:border-white/5 rounded-xl p-5 hover:border-[#7c3aed]/30 hover:shadow-sm dark:hover:shadow-none transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#9d5bf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-800 dark:text-white text-sm font-medium leading-snug">{a.title}</p>
                    <p className="text-slate-400 dark:text-gray-500 text-xs mt-0.5 font-mono">{a.year}</p>
                    <p className="text-slate-500 dark:text-gray-500 text-xs mt-2 leading-relaxed">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
