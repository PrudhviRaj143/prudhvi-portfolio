import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export default function FloatingCube({ position = [0,0,0], color = '#00d4ff', speed = 1, distort = 0.4, isDark = true }) {
  const mesh = useRef()

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.rotation.x = t * speed * 0.28
    mesh.current.rotation.y = t * speed * 0.45
    mesh.current.position.y = position[1] + Math.sin(t * speed * 0.55) * 0.35
  })

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[1, 2]} />
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={1.8}
        roughness={isDark ? 0.05 : 0.55}
        metalness={isDark ? 0.85 : 0.0}
        transparent
        opacity={isDark ? 0.88 : 0.14}
        envMapIntensity={isDark ? 1.2 : 0.2}
      />
    </mesh>
  )
}
