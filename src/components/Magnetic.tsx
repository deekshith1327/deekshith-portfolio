import { type ReactNode, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 280, damping: 18 })
  const y = useSpring(0, { stiffness: 280, damping: 18 })
  return <motion.div ref={ref} className={className} style={{ x, y }} onPointerMove={(event) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (bounds) {
      x.set((event.clientX - bounds.left - bounds.width / 2) * .16)
      y.set((event.clientY - bounds.top - bounds.height / 2) * .16)
    }
  }} onPointerLeave={() => { x.set(0); y.set(0) }}>{children}</motion.div>
}
