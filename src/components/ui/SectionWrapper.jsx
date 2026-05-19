import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionWrapper({ id, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </section>
  )
}
