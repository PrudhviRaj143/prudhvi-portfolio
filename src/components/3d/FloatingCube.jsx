import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export default function FloatingCube({ position = [0, 0, 0], color = '#00d4ff', speed = 1, distort = 0.4, isDark = true }) {
  const mesh = useRef()

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.rotation.x = t * speed * 0.3
    mesh.current.rotation.y = t * speed * 0.5
    mesh.current.position.y = position[1] + Math.sin(t * speed * 0.6) * 0.3
  })

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[1, 2]} />
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={2}
        roughness={isDark ? 0.1 : 0.4}
        metalness={isDark ? 0.8 : 0.1}
        transparent
        opacity={isDark ? 0.85 : 0.18}
      />
    </mesh>
  )
}
