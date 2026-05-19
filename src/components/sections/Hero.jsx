import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { gsap } from 'gsap'
import ParticleField from '../3d/ParticleField'
import FloatingCube from '../3d/FloatingCube'

export default function Hero({ data, isDark }) {
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const summaryRef = useRef(null)
  const ctaRef     = useRef(null)
  const scrollRef  = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.fromTo(headingRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' })
      .fromTo(subRef.current,     { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' }, '-=0.55')
      .fromTo(summaryRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7,  ease: 'power2.out' }, '-=0.45')
      .fromTo(ctaRef.current,     { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6,  ease: 'power2.out' }, '-=0.35')
      .fromTo(scrollRef.current,  { opacity: 0 },        { opacity: 1, duration: 0.6 }, '+=0.2')
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-page">

      {/* 3D canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
          <ambientLight intensity={isDark ? 0.3 : 0.7} />
          <pointLight position={[10, 10, 10]}  intensity={isDark ? 1.0 : 0.6} color="#00d4ff" />
          <pointLight position={[-10, -5, -5]} intensity={isDark ? 0.7 : 0.4} color="#7c3aed" />
          <ParticleField count={1600} isDark={isDark} />
          <FloatingCube position={[4.5, 0.5, -2]}  color="#00d4ff" speed={0.8} distort={0.3} isDark={isDark} />
          <FloatingCube position={[-4.2, -1, -3]}   color="#7c3aed" speed={0.6} distort={0.45} isDark={isDark} />
        </Canvas>
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0,212,255,0.09) 0%, transparent 65%), radial-gradient(ellipse 55% 50% at 85% 45%, rgba(124,58,237,0.08) 0%, transparent 65%)'
            : 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-32">
        <p className="text-[#00d4ff] font-mono text-xs tracking-[0.25em] uppercase mb-5">
          Hi, I'm
        </p>

        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-t1 leading-[1.05] mb-5 break-words"
          style={{ opacity: 0 }}
        >
          {data.name?.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
            {data.name?.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        <div ref={subRef} style={{ opacity: 0 }} className="mb-7">
          <p className="text-xl md:text-2xl text-t2 font-light mb-2 tracking-tight">{data.title}</p>
          <p className="text-[#00d4ff] font-mono text-sm">{data.location}</p>
        </div>

        <p ref={summaryRef} className="text-t3 text-base md:text-lg leading-relaxed max-w-2xl" style={{ opacity: 0 }}>
          {data.summary}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4" style={{ opacity: 0 }}>
          <a
            href="#experience"
            className="px-7 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4ff]/20 text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{ borderColor: 'var(--border-h)' }}
            className="px-7 py-3 border text-t2 rounded-xl hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5 transition-all text-sm"
          >
            Get In Touch
          </a>
          <a
            href={data.linkedin}
            target="_blank" rel="noopener noreferrer"
            style={{ borderColor: 'var(--border-h)' }}
            className="px-7 py-3 border text-t3 rounded-xl hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0, animation: 'bounce 2.4s ease-in-out infinite' }}
      >
        <span className="text-t3 text-[10px] tracking-[0.28em] uppercase font-mono">Scroll</span>
        <svg className="w-4 h-4 text-t3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
