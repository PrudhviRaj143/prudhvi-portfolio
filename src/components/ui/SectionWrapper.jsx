import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionWrapper({ id, className = '', innerClassName = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    gsap.fromTo(
      el,
      { opacity: 0, y: 36 },
      {
        opacity: 1, y: 0, duration: 0.75, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 84%', toggleActions: 'play none none none' },
      }
    )
  }, [])

  return (
    <section id={id} className={`w-full ${className}`}>
      <div ref={ref} className={`max-w-6xl mx-auto px-6 py-24 ${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
