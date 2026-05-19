export default function SectionHeading({ label, title }) {
  return (
    <div className="mb-14 text-center">
      <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#00d4ff] mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full" />
    </div>
  )
}
