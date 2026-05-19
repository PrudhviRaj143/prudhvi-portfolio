import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const SKILLS = [
  'Java', 'Spring Boot', 'Python', 'React', 'TypeScript',
  'AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes',
  'PostgreSQL', 'MongoDB', 'Kafka', 'SQS', 'OAuth 2.0',
  'GSAP', 'Node.js', 'FastAPI', 'MCP', 'GenAI',
]

function SkillLabel({ position, label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Text
      position={position}
      fontSize={0.18}
      color={hovered ? '#00d4ff' : '#9ca3af'}
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {label}
    </Text>
  )
}

export default function SkillsOrb() {
  const group = useRef()

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = clock.getElapsedTime() * 0.18
    group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.12) * 0.15
  })

  const items = SKILLS.map((label, i) => {
    const phi = Math.acos(-1 + (2 * i) / SKILLS.length)
    const theta = Math.sqrt(SKILLS.length * Math.PI) * phi
    const r = 2.4
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
      <Sphere args={[1.6, 32, 32]}>
        <meshPhongMaterial
          color="#0d1128"
          transparent
          opacity={0.5}
          wireframe
          emissive="#7c3aed"
          emissiveIntensity={0.15}
        />
      </Sphere>
      {items.map(({ label, position }) => (
        <SkillLabel key={label} label={label} position={position} />
      ))}
    </group>
  )
}
