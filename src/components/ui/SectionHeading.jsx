export default function SectionHeading({ label, title }) {
  return (
    <div className="mb-16 text-center">
      <span className="inline-block text-[11px] font-mono tracking-[0.3em] uppercase text-accent mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
        {title}
      </h2>
      <div className="mt-5 mx-auto w-12 h-0.5 bg-gradient-to-r from-accent to-violet rounded-full" />
    </div>
  )
}
