import { z } from 'zod'

export const LinkSchema = z.string().url().or(z.literal(''))
export const ProjectSchema = z.object({ id:z.string(), title:z.string(), summary:z.string(), role:z.string(), year:z.string(), category:z.string(), tags:z.array(z.string()), cover:z.string(), gallery:z.array(z.string()).default([]), links:z.object({ live:LinkSchema, github:LinkSchema }), caseStudy:z.array(z.string()), featured:z.boolean().optional() })
export const SkillSchema = z.object({ name:z.string(), category:z.string(), level:z.enum(['Foundation','Learning','Growing']), icon:z.string(), relatedProjects:z.array(z.string()) })
export const ProfileSchema = z.object({ name:z.string(), initials:z.string(), role:z.string(), location:z.string(), intro:z.string(), bio:z.string(), philosophy:z.string(), photo:z.string(), socials:z.object({ email:z.string(), github:LinkSchema, linkedin:LinkSchema, resume:LinkSchema }) })
export type Project = z.infer<typeof ProjectSchema>
export type Skill = z.infer<typeof SkillSchema>
export type Profile = z.infer<typeof ProfileSchema>
