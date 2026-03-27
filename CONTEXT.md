# CALO Portfolio — Contexto del proyecto

## Quién soy
Cindy López Oportus — Product Designer con +5 años de experiencia.
Raíces en desarrollo frontend (HTML, CSS, Angular).
Trabajo remoto desde Brasil.

## Identidad visual
- Logo: CALO (Cindy Arlette López Oportus)
- Fuentes: Lora (serif, títulos), DM Sans (cuerpo), DM Mono (labels/código)
- Colores: coral #E8503A, sage #6A9470, lav #8A7CB8, cream #FAF8F4
- Estilo: 85% minimalista, 15% colorful brutalism, glassmorphism sutil
- Dark mode: sí
- Idiomas: ES / PT / EN

## Proyectos
1. Lirmi Familia — EdTech, UX Research, plataforma escolar
2. Cartola de Inversión — Fintech, end-to-end, rediseño de documento financiero
3. Isla Nativa Travel — Travel eCommerce, en curso, Claude Code + Figma MCP

## Stack
- Vue 3 + TypeScript + Vite
- Tailwind CSS v3
- Vue Router

## Secciones del home
1. Navbar — CALO logo, About/Work links, ES/PT/EN switcher, dark mode, Contact dropdown
2. Hero — headline "Transformo problemas complejos en productos claros y escalables" + ilustración canvas Figma
3. Strip — marquee con skills
4. Hybrid — About (texto + skills) + Work (3 project cards)
5. Expertise — 3 cards: UX / UI / Dev
6. Footer — CTA + contacto

## Archivos de referencia
Los archivos HTML originales están en:
~/Documents/calo-portfolio/index.html
~/Documents/calo-portfolio/projects/lirmi-familia.html
~/Documents/calo-portfolio/projects/cartola-inversion.html
~/Documents/calo-portfolio/projects/isla-nativa.html

Úsalos como referencia de contenido, copy y estructura.
El objetivo es migrar todo a Vue 3 + Tailwind manteniendo el mismo diseño y mejorándolo.

## Componentes a crear
src/components/NavBar.vue
src/components/HeroSection.vue
src/components/StripSection.vue
src/components/AboutSection.vue
src/components/ProjectCard.vue
src/components/ProjectsSection.vue
src/components/ExpertiseSection.vue
src/components/FooterSection.vue
src/views/HomeView.vue
src/views/LirmiView.vue
src/views/CartolaView.vue
src/views/IslaNativaView.vue
src/data/projects.ts
src/i18n/translations.ts
