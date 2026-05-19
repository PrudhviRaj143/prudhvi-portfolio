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
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar({ name, isDark, onToggleTheme }) {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
    )
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = name?.split(' ').map(w => w[0]).join('').slice(0, 2) ?? 'PR'

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0a0a1a]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-sm dark:shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm tracking-wider flex-shrink-0"
        >
          {initials}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-slate-500 dark:text-gray-400 hover:text-[#00d4ff] dark:hover:text-[#00d4ff] transition-colors duration-200 tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-[#00d4ff] dark:hover:text-[#00d4ff] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-200"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#00d4ff]/50 text-[#00d4ff] text-sm rounded-md hover:bg-[#00d4ff]/10 transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-[#00d4ff] border border-slate-200 dark:border-white/10 transition-all"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0d1128]/95 backdrop-blur border-t border-slate-200 dark:border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 dark:text-gray-300 hover:text-[#00d4ff] transition-colors text-base py-1"
            >
              {label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-4 py-2 border border-[#00d4ff]/50 text-[#00d4ff] text-sm rounded-md"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
