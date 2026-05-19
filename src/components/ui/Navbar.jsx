import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const RESUME_URL = `${import.meta.env.BASE_URL}PrudhviRaj_Medikonduri_Resume_SDE.pdf`

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

function SunIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth="2" />
      <path strokeLinecap="round" strokeWidth="2"
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  )
}

export default function Navbar({ name, isDark, onToggleTheme }) {
  const navRef   = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -64, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 }
    )
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = name?.split(' ').map(w => w[0]).join('').slice(0, 2) ?? 'PR'

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f5f7ff]/90 dark:bg-[#050816]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/[0.06] shadow-sm dark:shadow-none'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[66px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-violet flex items-center justify-center text-white font-bold text-sm tracking-wider flex-shrink-0 shadow-lg shadow-accent/20"
        >
          {initials}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-lg flex items-center justify-center
              text-slate-500 dark:text-slate-400
              hover:text-accent dark:hover:text-accent
              bg-black/[0.03] dark:bg-white/[0.04]
              hover:bg-accent/10 dark:hover:bg-accent/10
              border border-black/[0.07] dark:border-white/[0.07]
              transition-all duration-200"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm font-medium border border-accent/40 text-accent rounded-lg
              hover:bg-accent/10 hover:border-accent/60 transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent border border-black/[0.07] dark:border-white/[0.07] bg-black/[0.03] dark:bg-white/[0.04] transition-all"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f7ff]/96 dark:bg-[#0c1229]/96 backdrop-blur-xl border-t border-black/5 dark:border-white/[0.06] px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors text-base py-0.5"
            >
              {label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-center px-4 py-2.5 border border-accent/40 text-accent text-sm font-medium rounded-lg hover:bg-accent/10 transition-all"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
