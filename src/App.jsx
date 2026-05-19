import { Suspense } from 'react'
import { usePortfolioData } from './hooks/usePortfolioData'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

function Footer({ name }) {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 py-8 text-center">
      <p className="text-slate-400 dark:text-gray-600 text-sm font-mono">
        Built by {name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default function App() {
  const data = usePortfolioData()
  const { isDark, toggle } = useTheme()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-slate-50 dark:bg-[#0a0a1a] min-h-screen text-slate-700 dark:text-gray-300 transition-colors duration-300">
        <Navbar name={data.name} isDark={isDark} onToggleTheme={toggle} />
        <Suspense fallback={null}>
          <Hero data={data} isDark={isDark} />
        </Suspense>
        <About data={data} />
        <Skills data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Education data={data} />
        <Contact data={data} />
        <Footer name={data.name} />
      </div>
    </div>
  )
}
