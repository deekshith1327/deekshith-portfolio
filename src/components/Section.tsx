import type { ReactNode } from 'react'

/** A consistent semantic wrapper for sections generated from content configuration. */
export function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`section-shell ${className}`}>{children}</section>
}
