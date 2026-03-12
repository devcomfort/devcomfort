<h1 align="center">Hi 👋, I'm devcomfort</h1>
<h3 align="center">A passionate FullStack Developer and AI Researcher</h3>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=devcomfort&label=Profile%20views&color=0e75b6&style=flat" alt="devcomfort" /> </p>



Hello, I'm devcomfort. <br>
I've been programming since 2013, building expertise across frontend, backend, databases, infrastructure, and the broader development landscape. <br>
I'm currently pursuing a Master's degree in AI Convergence at GIST (Gwangju Institute of Science and Technology), where I'm actively engaged in AI research.

**Current Research Focus**: RAG (Retrieval-Augmented Generation), Multi-Agent Systems

I have experience with Tabular Learning through my undergraduate graduation research and Procedural Content Generation through the GIST CILab internship. Feel free to reach out regardless of the field—I'm always open to discussions.

Over the past 12 years of programming, I've continuously explored ways to innovate both UX and DX. <br>
As a result, I've recently developed and maintained open-source libraries and CLI tools including [@devcomfort/text-transcoder](https://github.com/devcomfort/devcomfort-text-transcoder), [blob-to-url](https://github.com/devcomfort/blob-to-url), and Ubuntu Disk Toolkit.

<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=devcomfort&column=5" alt="devcomfort" /></a> </p>

- 🔭 Currently working as Tech Lead at [(주)마시는친구들](https://litt.ly/teut) (August 2024 ~ Present)
- 🎓 **Master's Student in AI Convergence at GIST** (September 2025 ~ Present)
- 🔬 **Completed GIST CILab Internship** (January-February 2025) - Co-authored IPCGRL paper as 2nd author
- 🌱 Currently learning: **PyTorch, Graph Neural Networks, Reinforcement Learning**
- 👨‍💻 All projects available at [https://devcomfort.me/projects](https://devcomfort.me/projects)
- 📝 Blog posts: [https://blog.devcomfort.me](https://blog.devcomfort.me)
- 💬 Welcome questions about **career, development issues, and AI research**
- 📫 Contact: **im@devcomfort.me**, **devcomfort@t-eut.com**

## Recent Research Achievements

### 🏆 Key Research Experience
- **GIST CILab Internship** (Jan-Feb 2025): Participated in reinforcement learning-based game map generation research in the PCG team
- **IPCGRL Paper Co-author**: "Language-Instructed Reinforcement Learning for Procedural Level Generation" (IEEE CoG 2025 Accepted)
- **Graduation Research**: "Categorical Data Processing in the AI Era — Analysis of Effectiveness of Entity Embedding and Cat2Vec"

### 🔧 Technical Contributions

- **Discovered training data bias**
- **Optimized data normalization pipeline**: Reduced RAM usage from 502GB+ → 150GB, processing time from 2 hours → 1 hour

## 🌐 Personal Website — In Development

I'm currently building a **unified personal website** that combines a **tech blog** and a **portfolio** into a single experience at [devcomfort.me](https://devcomfort.me).

### Goals

- Merge the standalone blog ([blog.devcomfort.me](https://blog.devcomfort.me)) and portfolio ([devcomfort.me](https://devcomfort.me)) into one cohesive site
- Share technical articles, research notes, and project showcases in one place
- Ensure fast page loads, great SEO, and a clean reading experience

### Planned Tech Stack

| Category | Technology | Reason |
|---|---|---|
| Framework | [Astro](https://astro.build/) | Static-first, island architecture, great for content sites |
| Styling | [TailwindCSS](https://tailwindcss.com/) | Utility-first, already used in [devcomfort.me](https://github.com/devcomfort/devcomfort.me) |
| Content | [MDX](https://mdxjs.com/) / Markdown | Flexible content authoring with component embedding |
| Blog features | `@astrojs/mdx`, RSS (`@astrojs/rss`), Sitemap (`@astrojs/sitemap`) | Built-in Astro integrations |
| Package manager | [pnpm](https://pnpm.io/) | Disk-efficient, fast installs |

### Required Packages

All packages needed for the unified site, grouped by role. Install them with `pnpm`.

> ⚠️ **Security note**: `astro@4.16.10` (currently in `devcomfort.me`) exposes server source code when sourcemaps are enabled. `astro` versions ≤ 5.15.6 are also vulnerable to a **reflected XSS via the server islands feature** (patched in `5.15.8`). Use `^5.18.1` minimum.

#### Install command

```bash
# Core + integrations + tooling
pnpm add astro@^5.18.1 \
  @astrojs/mdx @astrojs/rss @astrojs/sitemap @astrojs/tailwind @astrojs/check \
  tailwindcss @tailwindcss/typography \
  sharp marked

# Dev dependencies
pnpm add -D typescript prettier prettier-plugin-tailwindcss
```

#### Package reference table

| Package | Role | Notes |
|---|---|---|
| `astro` | Framework core | Use `^5.18.1` (XSS vuln patched in 5.15.8) |
| `@astrojs/mdx` | MDX/Markdown content | Blog posts, research notes |
| `@astrojs/rss` | RSS feed (`/rss.xml`) | Subscriber-friendly content syndication |
| `@astrojs/sitemap` | `sitemap.xml` generation | SEO — submitted to Google/Bing |
| `@astrojs/tailwind` | TailwindCSS integration | Applies base styles via Astro plugin |
| `@astrojs/check` | TypeScript type-checking | `astro check` command in CI |
| `tailwindcss` | CSS utility framework | `^3.4` — utility-first styling |
| `@tailwindcss/typography` | Prose styles | Essential for blog post body text |
| `sharp` | Image optimization | Astro's built-in image service backend |
| `marked` | Markdown → HTML utility | Used in dynamic content rendering |
| `typescript` | Type system | Shared by Astro, config files |
| `prettier` | Code formatter | Consistent code style |
| `prettier-plugin-tailwindcss` | Tailwind class sorting | Auto-sort class names on save |

### Navigation Structure

The site navigation is configured in a single `src/data/site-config.ts` file (same pattern as [`devcomfort.me`](https://github.com/devcomfort/devcomfort.me/blob/main/src/data/site-config.ts)) and rendered by `Nav.astro` (header) and `Footer.astro`.

#### Header Navigation (primary)

| Label | URL | Content |
|---|---|---|
| Home | `/` | Hero intro, featured projects, recent posts |
| Blog | `/blog` | Technical articles, research notes, dev logs |
| Projects | `/projects` | Open-source libraries, portfolio work |
| Research | `/research` | AI research interests, papers, achievements |
| About | `/about` | Detailed bio, career history, skills |

#### Footer Navigation (secondary / utility)

| Label | URL | Content |
|---|---|---|
| Tags | `/tags` | Blog posts grouped by tag |
| Contact | `/contact` | Contact form / email |

#### Social Links

| Label | Target |
|---|---|
| GitHub | `https://github.com/devcomfort` |
| Email | `mailto:im@devcomfort.me` |
| RSS | `/rss.xml` |

#### Astro Site-Config Snippet

```ts
// src/data/site-config.ts
headerNavLinks: [
  { text: 'Home',     href: '/' },
  { text: 'Blog',     href: '/blog' },
  { text: 'Projects', href: '/projects' },
  { text: 'Research', href: '/research' },
  { text: 'About',    href: '/about' },
],
footerNavLinks: [
  { text: 'Tags',    href: '/tags' },
  { text: 'Contact', href: '/contact' },
],
socialLinks: [
  { text: 'GitHub', href: 'https://github.com/devcomfort' },
  { text: 'Email',  href: 'mailto:im@devcomfort.me' },
  { text: 'RSS',    href: '/rss.xml' },
],
```

> 💡 **Design rationale**: `/about` is promoted to the header (previously footer-only in `devcomfort.me`) because the unified site serves as both a blog and a portfolio — visitors should be able to learn about the author in one click. `/research` is a new top-level section reflecting the active AI research work at GIST.

### Personal Info Configuration

Contact details (email, phone, affiliation, etc.) are managed in a **single source of truth** file so they only ever need to be updated in one place:

```ts
// src/data/personal-info.ts
// ✏️  Edit this file to update your contact details across the entire site.

export const personalInfo = {
  name: 'devcomfort',
  email: {
    personal: 'im@devcomfort.me',
    work: 'devcomfort@t-eut.com',
  },
  // phone: '+82-10-XXXX-XXXX',   // uncomment when ready
  social: {
    github: 'https://github.com/devcomfort',
    rss: '/rss.xml',
  },
  affiliation: {
    university: 'GIST (Gwangju Institute of Science and Technology)',
    degree: "Master's in AI Convergence",
    company: '(주)마시는친구들',
    companyUrl: 'https://litt.ly/teut',
    role: 'Tech Lead',
  },
} as const;

export type PersonalInfo = typeof personalInfo;
```

#### Where it gets imported

| File | What it uses |
|---|---|
| `src/data/site-config.ts` | `email.personal` → social link, `social.github` → social link |
| `src/pages/contact.astro` | `email.*`, `phone` → displayed contact details |
| `src/pages/about.astro` | `affiliation.*` → career section |
| `src/components/Hero.astro` | `email.personal` → "Get in Touch" CTA href |

> 💡 **Why `as const`**: marks the object as deeply readonly, so TypeScript infers literal types (e.g. `'im@devcomfort.me'` instead of `string`). This catches typos when the value is used elsewhere.

---

### Reference Repositories

- **[devcomfort/devcomfort.me](https://github.com/devcomfort/devcomfort.me)** — Current portfolio site (Astro + TailwindCSS)
- **[devcomfort/blog.devcomfort.dev](https://github.com/devcomfort/blog.devcomfort.dev)** — Previous blog (Next.js + contentlayer)

### Development Setup (Quick Start)

**Option A — Extend the existing [devcomfort.me](https://github.com/devcomfort/devcomfort.me) repository** (recommended):

```bash
# Clone and install
git clone https://github.com/devcomfort/devcomfort.me
cd devcomfort.me
pnpm install

# Patch Astro to the security-fixed version; add @astrojs/check for type-checking and sharp for image optimization
pnpm add astro@^5.18.1 @astrojs/check sharp

# Add missing integrations
pnpm astro add mdx tailwind sitemap rss

# Start dev server
pnpm dev
```

**Option B — Scaffold a fresh Astro project**:

```bash
# Prerequisites: Node.js 18+, pnpm
npm install -g pnpm

# Scaffold
pnpm create astro@latest

# Add integrations
pnpm astro add mdx tailwind sitemap rss

# Add remaining packages
pnpm add @astrojs/check sharp marked
pnpm add -D @tailwindcss/typography

# Start dev server
pnpm dev
```

---

## Projects

### Open Source Libraries & Tools

- **[combinatorial-config](https://github.com/devcomfort/combinatorial-config)** - Python library for automatically generating all combinations of experiment configurations. Useful for systematic hyperparameter exploration with Hydra and other configuration management tools.

- **[file_type_detector](https://github.com/devcomfort/file_type_detector)** - Python library for detecting file types based on content analysis and file signatures.

- **[devcomfort-text-transcoder](https://github.com/devcomfort/devcomfort-text-transcoder)** - Lightweight and efficient library for text encoding conversion in Node.js and browser environments. Supports multiple encodings including UTF-8, EUC-KR, and EUC-JP.

- **[is-html-element](https://github.com/devcomfort/is-html-element)** - Utility library for HTML element type checking and validation.

- **[ubuntu-disk-toolkit](https://github.com/devcomfort/ubuntu-disk-toolkit)** - CLI toolkit for Ubuntu disk management and operations (under development).

### Private Projects

- **[chonkie-chunk-utils](https://github.com/devcomfort/chonkie-chunk-utils)** - Utility library for chunk processing and management (private repository).

## Tech Stack

### Programming Languages
`TypeScript` `JavaScript` `Python`

**Usage**: TypeScript/JavaScript for web frontend and backend development; Python for AI research, data analysis, and processing

### Programming Paradigms
`Object-Oriented` `Functional` `Reactive`

**Approach**: Extensible design using classes and interfaces; preference for functional programming (lodash, remeda); reactive programming for event streams and state management

### Frontend
`React` `Svelte/SvelteKit` `SolidJS` `TailwindCSS`

**Focus**: Web application development with emphasis on reactivity and performance

### Backend
`Node.js` `Express` `FastAPI` `Starlette`

**Usage**: API development and server-side applications

### Database & ORM
`PostgreSQL` `SQLite` `Prisma`

**Approach**: Type-safe database access and modeling primarily using Prisma; PostgreSQL schema design and migration management; SQLite for local development environments

### AI/ML
`PyTorch` `JAX` `Flax` `Polars` `Pandas` `NumPy` `Matplotlib` `Seaborn`

**Usage**: Model development and training (PyTorch); scalable ML systems (JAX, Flax); efficient data preprocessing and analysis (Polars, Pandas, NumPy); data visualization and experiment tracking (Matplotlib, Seaborn)

### Infrastructure/DevOps
`Docker` `GitHub Actions` `Vitest` `Pytest`

**Status**: Docker usage; CI/CD pipeline setup using GitHub Actions; test writing with Vitest and Pytest

### Desktop/Mobile
`Tauri`

**Status**: Interested in and learning Tauri for cross-platform development

## Research Interests

### Primary Focus
- **RAG (Retrieval-Augmented Generation)** - Research on enhancing LLM capabilities through effective information retrieval and context augmentation
- **Multi-Agent System** - Research on designing and implementing collaborative AI agent systems for complex problem-solving

### Previous Interests (Still Interested)
- **Representation Learning** - Research on exploring and validating efficient representation and transformation methods for various forms of data
  - **Tabular Learning** - Research on effective learning methodologies for tabular data
- **Graph Neural Networks (GNN)** - Effective modeling and learning of graph-structured data
- **Explainable AI (xAI)** - Research on ensuring explainability of AI models

## Awards & Achievements

- **GitHub Showcase Competition Excellence Award** (November 2024)
- **TOPCIT (Test of Practical Competency in IT)** - 557 points (Level 3 - Proficient) (May 2024)
