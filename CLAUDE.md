# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint (zero warnings policy — fix all warnings before shipping)
```

There are no tests in this project.

## Architecture

Single-page portfolio built with **React 18 + Vite 5 + Tailwind CSS v4**. 

**Routing:** React Router v7 with two routes — `/` (Home) and `*` (NotFound). All portfolio content lives on the single Home route; navigation uses hash anchor links (`#hero`, `#about`, etc.). 

**Styling system — Tailwind v4 with CSS variables:**  
- All theme tokens are defined as HSL CSS variables in `:root` inside `src/index.css`, then exposed to Tailwind via `@theme { --color-*: hsl(var(--*)) }`.  
- Custom utilities (`cosmic-button`, `card-hover`, `gradient-border`, `text-glow`) are declared with `@utility` in `src/index.css`. **Tailwind v4 requires every `@utility` block to contain at least one real CSS property** — empty comment-only blocks cause a build error.  
- The design uses a retro editorial palette: warm cream background (`--background`), ink black foreground (`--foreground`), blue primary (`--primary`), and orange accent (`--accent`). Fonts are **EB Garamond** (serif body/headings) and **VT323** (monospace tags/labels), loaded from Google Fonts via `@import` at the top of `index.css`.  

**`@` path alias** resolves to `./src` (configured in `vite.config.js`). 

**Component layout:**  
- `src/pages/Home.jsx` — composes all section components in order; no theme toggle or star background.  
- `src/components/Navbar.jsx` — fixed, cream background, scroll-aware border, hash links + résumé download button.  
- Section components (`HeroSection`, `AboutSection`, `ExperienceSection`, `SkillsSection`, `ProjectsSection`, `ContactSection`, `Footer`) are self-contained and import no shared state.  
- `src/components/ui/` — Radix UI-based toast primitives; used via `src/hooks/use-toast.js`.  
- `src/lib/utils.js` — exports `cn()` (clsx + tailwind-merge).  

**HeroSection** currently contains an inline `RetroTerminal` component that runs a character-by-character typewriter animation via `useEffect` + `useRef` — no external library. 

**Content to update** (hardcoded in component files, not a CMS):  
- Personal info, bio, stats → `HeroSection.jsx`  
- Experience entries → `ExperienceSection.jsx` (`experiences` array)  
- Skills → `SkillsSection.jsx` (`skills` array)  
- Projects → `ProjectsSection.jsx` (`projects` array)  
- Contact details → `ContactSection.jsx`

---

## Resume sources

Use both of these PDFs as the source of truth for my current experience, skills, and projects:  
- `Ansh_Pachauri_resume_US.pdf` — for US roles.  
- `Ansh_Pachauri_resume_IND.pdf` — for India roles.  

When adding or updating portfolio content (hero text, experience bullets, project descriptions, skills), stay consistent with these resumes and highlight:  
- Roles, dates, and technologies as listed in the PDFs.  
- Measurable impact where available (performance improvements, user counts, reliability, etc.).  
- My focus areas: software engineering, full-stack web, cloud, data structures/algorithms.

If there is any mismatch between code comments and the PDFs, prefer the PDFs and update the site text accordingly. 

## Design goals

High-level product vision: a **retro computer interface with modern animations** that clearly sells me as a strong full‑stack / software engineer to recruiters in both the US and India. 

Key visual ideas:  
- A 3D beige retro computer + CRT + keyboard as the main hero “shell”.  
- Inside the CRT, a small “mini‑OS” window that shows context about the currently active section (About, Experience, Skills, Projects, Contact).  
- Palette: beige / cream, black, light orange, light brown, with subtle screen glow and scanlines.  
- Fonts: EB Garamond for headings/body, VT323 (or similar) for terminal-style labels and tags.  
- A large, retro-style cursor for the main interface.

User flow priorities for recruiters:  
- In the first screen, they should understand **who I am, what I do, and which technologies I use** in under 5 seconds.  
- In one or two more scrolls/clicks, they should see **2–4 flagship projects**, with clear tech stacks and impact.  
- Resume download and contact options should be obvious and fast.

## Implementation tasks for Claude Code

### 1. RetroComputerHero from `paste.txt`

We have an attached HTML/CSS snippet (`paste.txt`) that already defines a 3D beige computer, CRT, keyboard, and retro “FigOS” UI. 

Tasks:  
1. Create `src/components/RetroComputerHero.jsx` using the main structure from `paste.txt`:  
   - Base on the `<div class="main-container">...</div>` tree, including `.scene`, `.computer-unit`, `.crt`, `.crt-ui`, `.keyboard-assembly`, etc.  
   - Convert to JSX: use `className` instead of `class`, close tags properly, remove any inline scripts, and keep only the DOM structure needed for the visual.  

2. Replace the placeholder marketing text (Fig Mint, price, etc.) with portfolio content:  
   - Name + title (software engineer / full‑stack developer).  
   - One concise, recruiter-facing headline derived from the resumes (e.g., focus on building scalable web apps, cloud-backed systems, etc.).  
   - A 1–2 sentence summary of my experience/strengths based on the resumes.  
   - Two primary buttons:
     - “View Projects” → smooth-scroll to `#projects`.  
     - “Download Résumé” → open a dropdown or simple toggle for US vs India resumes.  

3. Ensure `RetroComputerHero` is responsive:  
   - Scales down on tablets/phones without horizontal scroll.  
   - If the 3D transform is too heavy on small screens, simplify or reduce perspective/angles for mobile breakpoints via media queries or Tailwind utilities. 

4. Integrate into `src/pages/Home.jsx`:  
   - Import and render `<RetroComputerHero />` near the top of the Home page, effectively replacing or wrapping the existing `HeroSection` content.  
   - Keep hash anchors working (`#hero`, etc.). If needed, `RetroComputerHero` can contain the `#hero` anchor.

### 2. Styling integration

The `paste.txt` file contains raw CSS and custom properties for the retro computer. 

Tasks:  
1. Extract the relevant CSS from `paste.txt` for: `.main-container`, `.scene`, `.computer-unit`, `.face`, `.crt`, `.crt::before`, `.crt-ui`, `.keyboard-assembly`, `.kb-base`, `.key`, typewriter animations, etc. 

2. Integrate styles into the existing styling system in one of these ways (pick one and be consistent):  
   - **Preferred (isolated):** Create `src/components/RetroComputerHero.css` and import it only in `RetroComputerHero.jsx`. This keeps the heavy 3D styles scoped.  
   - **Alternative (Tailwind):** Translate key parts into Tailwind v4 `@utility` classes in `src/index.css`, using the existing HSL variables (`--background`, `--foreground`, `--accent`, etc.). 

3. Align colors and fonts with our theme:  
   - Replace hardcoded beige/black hex codes with theme variables where possible, e.g., use `var(--background)` / `var(--foreground)` / `var(--accent)`.  
   - Use the existing font variables for serif and mono text.  

4. Respect Tailwind v4 constraints:  
   - Every new `@utility` block must contain at least one real CSS property. Do not leave empty blocks.

### 3. CRT mini‑OS and navigation

Inside the CRT, there is an OS-style panel with sidebar icons and a main window.

Tasks:  
1. Replace the FigOS / placeholder content with a small “mini‑OS” that reflects the current section:  
   - Add tabs or a sidebar menu for: About, Experience, Skills, Projects, Contact.  
   - Store the current selection in local React state (`activeSection`) inside `RetroComputerHero`.  

2. On click of a CRT tab:  
   - Update `activeSection`.  
   - Smooth-scroll the main page to the corresponding section (`#about`, `#experience`, `#skills`, `#projects`, `#contact`) using the existing hash pattern.  
   - Update the mini-window content to show a short text summary (1–3 lines) for that section, derived from my resume and section content.

3. Ensure that the CRT window text uses the monospace/terminal style (VT323), small font, and a subtle glow or scanline effect for legibility. 

### 4. Retro cursor and micro-interactions

Tasks:  
1. Add a large retro cursor image asset in `public/` (e.g., `public/cursor-big.png`). (You can create a simple big arrow or use a minimal SVG; keep it on-theme.) 

2. In `src/index.css`, apply the cursor to at least the main retro area:  
   - `body` or `.main-container` should use `cursor: url('/cursor-big.png'), auto;`.  
   - Ensure interactive elements (links/buttons) still show an appropriate pointer feel.

3. Enhance hover/focus states:  
   - On CRT or hero buttons: subtle scale or translation and a glow using existing custom utilities (`card-hover`, `gradient-border`, `text-glow`) where appropriate.  
   - On keyboard keys: keep or enhance the existing `typeKey` keyframe animations so some keys “type” periodically.  
   - On project cards in `ProjectsSection`: add hover styles that match the retro aesthetic (border color shift, slight lift, maybe a glow).

### 5. Content alignment with resumes

Use the US and India resumes as the canonical source for text:

Tasks:  
1. **Hero content:**  
   - Headline: briefly summarize my role and focus (e.g., full-stack / backend emphasis, cloud experience).  
   - Subheadline/paragraph: reference key technologies and domains from the resumes (e.g., React, Next.js, Go, Java, cloud providers, databases, etc.).

2. **ExperienceSection:**  
   - Ensure each experience entry has:
     - Correct title, company, dates.  
     - 2–4 bullet points emphasizing impact and technologies, aligned with the resumes.

3. **ProjectsSection:**  
   - Include the main projects listed on the resumes (names, stacks, and impact).  
   - For each, have:
     - Short description of the problem and solution.  
     - Tech stack tags.  
     - Any measurable outcomes (performance, users, reliability, etc.).

4. **SkillsSection:**  
   - Group skills into categories (Languages, Web/Backend, Databases, Cloud/DevOps, Tools) and ensure they match the resumes.  
   - Use terminal-style skill “chips” or text (e.g., `[ Java ] [ React ] [ PostgreSQL ]`) to fit the retro vibe.

5. **Resume downloads:**  
   - Add buttons/links for:
     - “Download US Résumé (PDF)” → `Ansh_Pachauri_resume_US.pdf`.  
     - “Download India Résumé (PDF)” → `Ansh_Pachauri_resume_IND.pdf`.  
   - These should be easy to find from the hero and/or navbar.

### 6. Performance and polish

Tasks:  
1. Keep bundle size reasonable:  
   - Avoid heavy external animation libraries unless necessary; prefer CSS transitions and keyframes (we already have several in the retro snippet).  

2. Maintain accessibility:  
   - Ensure text contrast is readable against the beige / dark backgrounds.  
   - Provide focus styles for keyboard navigation.  

3. Lint and build:  
   - `npm run lint` with zero warnings.  
   - `npm run build` should succeed with no Tailwind or CSS errors.

## How to use this file

When making structural or design changes, please:  
- Follow the architecture and design goals described above.  
- Use the attached resumes as the source of truth for content.  
- Keep the retro computer hero as the central visual, but do not sacrifice clarity or readability for aesthetics.
