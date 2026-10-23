import { ProfileSchema, ProjectSchema, SkillSchema } from '../types'
import { profile as defaultProfile } from './profile'; import { projects as defaultProjects } from './projects'; import { skills as defaultSkills } from './skills'
import { education as defaultEducation, achievements as defaultAchievements } from './education'
import { cmsAchievements, cmsEducation, cmsProfile, cmsProjects, cmsSkills, cmsTheme } from './cms-data'
export const profile = ProfileSchema.parse({ ...defaultProfile, ...cmsProfile, socials: { ...defaultProfile.socials, ...cmsProfile?.socials } })
export const projects = (cmsProjects.length ? cmsProjects : defaultProjects).map((item) => ProjectSchema.parse(item))
export const skills = (cmsSkills.length ? cmsSkills : defaultSkills).map((item) => SkillSchema.parse({ ...item, relatedProjects: item.relatedProjects || [] }))
export const education = cmsEducation.length ? cmsEducation : [{ title: defaultEducation.degree, date: defaultEducation.years, description: defaultEducation.school }]
export const achievements = cmsAchievements.length ? cmsAchievements.map((item) => ({ year: item.date, title: item.title, text: item.description })) : defaultAchievements
import { sections as defaultSections } from './sections'
import { themeTokens as defaultThemeTokens } from './theme'
const themeRecord = cmsTheme as { defaultVariant?: string; motion?: Partial<typeof defaultThemeTokens.motion>; colors?: Partial<typeof defaultThemeTokens.colors>; sections?: Array<{ id: string; label: string; visible: boolean }> }
export const sections = (themeRecord.sections?.length ? themeRecord.sections : defaultSections).map((item) => ({ ...item }))
export const themeTokens = { ...defaultThemeTokens, defaultVariant: (themeRecord.defaultVariant && defaultThemeTokens.variants.includes(themeRecord.defaultVariant as never) ? themeRecord.defaultVariant : defaultThemeTokens.defaultVariant), motion: { ...defaultThemeTokens.motion, ...(themeRecord.motion || {}) }, colors: { ...defaultThemeTokens.colors, ...(themeRecord.colors || {}) } }
// Clear developer-time validation errors when content objects are malformed.
