import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const SKILLS = [
  'Java', 'Spring Boot', 'Python', 'React', 'TypeScript',
  'AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes',
  'PostgreSQL', 'MongoDB', 'Kafka', 'SQS', 'OAuth 2.0',
  'Node.js', 'FastAPI', 'MCP', 'GenAI', 'SailPoint',
]

function SkillLabel({ position, label, isDark }) {
  const [hovered, setHovered] = useState(false)
  const baseColor  = isDark ? '#64748b' : '#94a3b8'
  const hoverColor = '#00d4ff'

  return (
    <Text
      position={position}
      fontSize={0.19}
      color={hovered ? hoverColor : baseColor}
      anchorX="center"
      anchorY="middle"
      onPointerOver={e => { e.stopPropagation(); setHovered(true) }}
      onPointerOut={() => setHovered(false)}
    >
      {label}
    </Text>
  )
}

export default function SkillsOrb({ isDark = true }) {
  const group = useRef()

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = clock.getElapsedTime() * 0.16
    group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.14
  })

  const items = SKILLS.map((label, i) => {
    const phi   = Math.acos(-1 + (2 * i) / SKILLS.length)
    const theta = Math.sqrt(SKILLS.length * Math.PI) * phi
    const r     = 2.4
    return {
      label,
      position: [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ],
    }
  })

  return (
    <group ref={group}>
      <Sphere args={[1.55, 32, 32]}>
        <meshPhongMaterial
          color={isDark ? '#0c1229' : '#e0e7ff'}
          transparent
          opacity={isDark ? 0.55 : 0.35}
          wireframe
          emissive={isDark ? '#7c3aed' : '#818cf8'}
          emissiveIntensity={isDark ? 0.2 : 0.4}
        />
      </Sphere>
      {items.map(({ label, position }) => (
        <SkillLabel key={label} label={label} position={position} isDark={isDark} />
      ))}
    </group>
  )
}
