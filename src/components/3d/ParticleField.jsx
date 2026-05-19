import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 1600, isDark = true }) {
  const mesh = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    const cyan   = new THREE.Color('#00d4ff')
    const purple = new THREE.Color('#7c3aed')
    const neutral = isDark ? new THREE.Color('#c8d4f0') : new THREE.Color('#6b82a8')

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 32
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18

      const t = Math.random()
      const c = t < 0.35 ? cyan : t < 0.65 ? purple : neutral
      col[i * 3]     = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [count, isDark])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.rotation.y = clock.getElapsedTime() * 0.035
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.018) * 0.07
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={isDark ? 0.05 : 0.04}
        vertexColors
        transparent
        opacity={isDark ? 0.75 : 0.45}
        sizeAttenuation
      />
    </points>
  )
}
