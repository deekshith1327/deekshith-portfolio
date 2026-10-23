import { motion } from 'framer-motion'

export function TimelineItem({ year, title, text, index }: { year: string; title: string; text: string; index: number }) {
  return <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }} className="timeline-item">
    <div className="dot" /><p className="timeline-year">{year}</p><h3>{title}</h3><p>{text}</p>
  </motion.article>
}
