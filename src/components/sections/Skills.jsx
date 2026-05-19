import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import SkillsOrb from '../3d/SkillsOrb'

const CATEGORY_COLORS = {
  'Languages':     'border-[#00d4ff]/30 text-[#00d4ff]',
  'Backend':       'border-[#7c3aed]/30 text-[#7c3aed] dark:text-[#9d5bf0]',
  'Frontend':      'border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
  'Cloud':         'border-amber-500/30 text-amber-600 dark:text-amber-400',
  'DevOps & Infra':'border-sky-500/30 text-sky-600 dark:text-sky-400',
  'Databases':     'border-rose-500/30 text-rose-600 dark:text-rose-400',
  'Messaging':     'border-sky-500/30 text-sky-600 dark:text-sky-400',
  'Identity & Security': 'border-orange-500/30 text-orange-600 dark:text-orange-400',
  'AI & Dev Tools':'border-pink-500/30 text-pink-600 dark:text-pink-400',
  'Testing':       'border-lime-500/30 text-lime-600 dark:text-lime-400',
}

export default function Skills({ data }) {
  return (
    <SectionWrapper id="skills" className="bg-slate-100/60 dark:bg-[#0d1128]/40">
      <SectionHeading label="What I Know" title="Technical Skills" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Skill tags */}
        <div className="space-y-5">
          {data.skills?.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-gray-500 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-full border bg-transparent font-mono hover:scale-105 transition-transform cursor-default ${CATEGORY_COLORS[category] ?? 'border-slate-300 dark:border-gray-700 text-slate-500 dark:text-gray-400'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3D Orb */}
        <div className="hidden lg:block h-[480px] rounded-2xl overflow-hidden bg-slate-200/40 dark:bg-[#0a0a1a]/60 border border-slate-200 dark:border-white/5">
          <Canvas camera={{ position: [0, 0, 5.5], fov: 55 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]}   color="#00d4ff" intensity={1.5} />
            <pointLight position={[-5, -5, -5]} color="#7c3aed" intensity={1} />
            <Suspense fallback={null}>
              <SkillsOrb />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
          <p className="text-center text-xs text-slate-400 dark:text-gray-600 -mt-6 mb-2">Drag to explore</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
