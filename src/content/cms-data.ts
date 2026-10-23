import type { Profile, Project, Skill } from '../types'

type CmsProject = Partial<Project> & { caseStudy?: string | string[] }
type TimelineRecord = { title: string; date: string; description: string }

const projectFiles = import.meta.glob('../../content/projects/*.json', { eager: true, import: 'default' })
const skillFiles = import.meta.glob('../../content/skills/*.json', { eager: true, import: 'default' })
const educationFiles = import.meta.glob('../../content/education/*.json', { eager: true, import: 'default' })
const achievementFiles = import.meta.glob('../../content/achievements/*.json', { eager: true, import: 'default' })
const profileFiles = import.meta.glob('../../content/profile.json', { eager: true, import: 'default' })
const themeFiles = import.meta.glob('../../content/theme.json', { eager: true, import: 'default' })

const values = <T>(files: Record<string, unknown>) => Object.values(files) as T[]
const paragraphs = (value: string | string[] | undefined) => Array.isArray(value) ? value : (value || '').split(/\n\s*\n/).filter(Boolean)

export const cmsProjects = values<CmsProject>(projectFiles).map((project) => ({
  ...project,
  id: project.id || project.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'project',
  category: project.category || project.tags?.[0] || 'Projects',
  gallery: project.gallery || [],
  links: project.links || { live: '', github: '' },
  caseStudy: paragraphs(project.caseStudy),
  featured: project.featured || false,
})) as Project[]
export const cmsSkills = values<Skill | Skill[] | { skills: Skill[] }>(skillFiles).flatMap((entry) => Array.isArray(entry) ? entry : 'skills' in entry ? entry.skills : [entry])
export const cmsEducation = values<TimelineRecord>(educationFiles)
export const cmsAchievements = values<TimelineRecord>(achievementFiles)
export const cmsProfile = values<Partial<Profile>>(profileFiles)[0]
export const cmsTheme = values<Record<string, unknown>>(themeFiles)[0] || {}
