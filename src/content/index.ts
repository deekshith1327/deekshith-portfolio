import { ProfileSchema, ProjectSchema, SkillSchema } from '../types'
import { profile as defaultProfile } from './profile'; import { projects as defaultProjects } from './projects'; import { skills as defaultSkills } from './skills'
import { education as defaultEducation, achievements as defaultAchievements } from './education'
import { cmsAchievements, cmsEducation, cmsProfile, cmsProjects, cmsSkills } from './cms-data'
export const profile = ProfileSchema.parse({ ...defaultProfile, ...cmsProfile, socials: { ...defaultProfile.socials, ...cmsProfile?.socials } })
export const projects = (cmsProjects.length ? cmsProjects : defaultProjects).map((item) => ProjectSchema.parse(item))
export const skills = (cmsSkills.length ? cmsSkills : defaultSkills).map((item) => SkillSchema.parse({ ...item, relatedProjects: item.relatedProjects || [] }))
export const education = cmsEducation.length ? cmsEducation : [{ title: defaultEducation.degree, date: defaultEducation.years, description: defaultEducation.school }]
export const achievements = cmsAchievements.length ? cmsAchievements.map((item) => ({ year: item.date, title: item.title, text: item.description })) : defaultAchievements
export { sections } from './sections'
export { themeTokens } from './theme'
// Clear developer-time validation errors when content objects are malformed.
