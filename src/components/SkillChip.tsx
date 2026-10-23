import type { Skill } from '../types'

export function SkillChip({ skill, onFocus }: { skill: Skill; onFocus?: (skill: Skill | null) => void }) {
  return <button className="skill-orbit" onMouseEnter={() => onFocus?.(skill)} onMouseLeave={() => onFocus?.(null)}>
    <i>{skill.icon}</i><span>{skill.name}</span><small>{skill.level}</small>
  </button>
}
