import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Core() {
  const mesh = useRef<Mesh>(null)
  useFrame((state) => { if (mesh.current) { mesh.current.rotation.x = state.pointer.y * 0.32; mesh.current.rotation.y += 0.004 + state.pointer.x * 0.004 } })
  return <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.2}><mesh ref={mesh} scale={1.45}><icosahedronGeometry args={[1, 5]} /><MeshDistortMaterial color="#78b7ff" roughness={0.08} metalness={0.75} distort={0.25} speed={1.4} transparent opacity={0.82} /></mesh></Float>
}
export default function HeroScene() { return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.2], fov: 45 }} aria-label="Interactive floating circuit-inspired glass form"><ambientLight intensity={1.4} /><pointLight position={[3, 2, 3]} intensity={4} color="#7dd3fc" /><pointLight position={[-3, -2, 2]} intensity={2} color="#a78bfa" /><Core /><Sparkles count={38} scale={5} size={2} speed={0.25} color="#e9f2ff" /></Canvas> }
