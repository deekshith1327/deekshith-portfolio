# Deekshith P. — portfolio

An editable Vite + React + TypeScript portfolio. All personal content lives in `src/content`; components and layout never need changing to add a project or skill.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173`). Build a production version with `npm run build`.

## Edit your profile, image, and links

Open `src/content/profile.ts`.

- Put your portrait in `public/` (for example `public/deekshith.jpg`) and set `photo: '/deekshith.jpg'`.
- Add your actual Gmail, GitHub, LinkedIn, and resume URLs in `socials` before deployment.
- Leaving a value blank keeps the clear “add link” placeholder, so no contact detail is invented.

## Add a project

Copy the object in `src/content/_templates/project.template.ts` into `src/content/projects.ts`.

```ts
{ id: 'new-project', title: 'New project', summary: 'One factual sentence.', role: 'Student project', year: '2026', category: 'Robotics', tags: ['ESP32'], cover: '/new-project.webp', gallery: [], links: { live: '', github: '' }, caseStudy: ['Real details only.'] }
```

It automatically appears in the project grid, search palette, category filters, skill relationships, and case-study view.

## Add a skill or change sections

Copy the skill template in `src/content/_templates/skill.template.ts` into `src/content/skills.ts`. Use `relatedProjects` to link it with projects. Rename, reorder, or hide sections in `src/content/sections.ts`; adjust global design tokens in `src/content/theme.ts`.

## How to add a new project from the dashboard

1. Deploy this repository to **Netlify** from GitHub.
2. In Netlify, enable **Identity**, turn on **Git Gateway**, and invite only your own email address under Identity. This makes the dashboard private.
3. Open `https://your-site.netlify.app/admin/`, accept the invite email, and sign in.
4. Choose **Projects → New Projects**, fill in the project fields, upload a cover or gallery image, then save.
5. Use the **Workflow** area to create a draft, preview it, and publish when ready. Decap commits the content to GitHub, Netlify rebuilds the site, and the new project automatically receives its card, category filter, animated scene, and case-study overlay.

Images and resume files upload to `public/uploads`. The `/admin/` route is excluded from search indexing via `robots.txt` and a no-index header. Content is Zod-validated at build time.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
