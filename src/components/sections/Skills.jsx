import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import SkillsOrb from '../3d/SkillsOrb'

const CATEGORY_COLORS = {
  'Languages':          'border-accent/25 text-accent bg-accent/5',
  'Backend':            'border-violet/25 text-violet-lt bg-violet/5',
  'Frontend':           'border-emerald-500/25 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5',
  'Cloud':              'border-amber-500/25 text-amber-600 dark:text-amber-400 bg-amber-500/5',
  'DevOps & Infra':     'border-sky-500/25 text-sky-600 dark:text-sky-400 bg-sky-500/5',
  'Databases':          'border-rose-500/25 text-rose-600 dark:text-rose-400 bg-rose-500/5',
  'Messaging':          'border-sky-500/25 text-sky-600 dark:text-sky-400 bg-sky-500/5',
  'Identity & Security':'border-orange-500/25 text-orange-600 dark:text-orange-400 bg-orange-500/5',
  'AI & Dev Tools':     'border-pink-500/25 text-pink-600 dark:text-pink-400 bg-pink-500/5',
  'Testing':            'border-lime-500/25 text-lime-600 dark:text-lime-400 bg-lime-500/5',
}

export default function Skills({ data, isDark }) {
  return (
    <SectionWrapper id="skills" className="bg-[#f5f7ff] dark:bg-[#050816]">
      <SectionHeading label="What I Know" title="Technical Skills" />

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Skill tag categories */}
        <div className="space-y-6">
          {data.skills?.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-[11px] font-mono tracking-[0.22em] uppercase text-slate-400 dark:text-slate-600 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs rounded-full border font-mono
                      hover:scale-105 transition-transform cursor-default
                      ${CATEGORY_COLORS[category] ?? 'border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 bg-transparent'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3D Orb */}
        <div className="hidden lg:block h-[500px] rounded-2xl overflow-hidden
          bg-[#eef1ff] dark:bg-[#0c1229]/60
          border border-slate-200 dark:border-white/[0.06]">
          <Canvas camera={{ position: [0, 0, 5.5], fov: 55 }}>
            <ambientLight intensity={isDark ? 0.4 : 0.7} />
            <pointLight position={[5, 5, 5]}   color="#00d4ff" intensity={isDark ? 1.5 : 0.8} />
            <pointLight position={[-5, -5, -5]} color="#7c3aed" intensity={isDark ? 1.0 : 0.6} />
            <Suspense fallback={null}>
              <SkillsOrb isDark={isDark} />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
          </Canvas>
          <p className="text-center text-[11px] text-slate-400 dark:text-slate-600 -mt-6 mb-2 font-mono tracking-widest">
            drag to explore
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
