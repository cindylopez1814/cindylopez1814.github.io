<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLang } from '../composables/useLang'
import lirmiImg from '../assets/IMG/opt/lirmi.jpg'
import cartolaImg from '../assets/IMG/opt/cartola.jpg'
import islaNativaImg from '../assets/IMG/opt/isla-nativa.jpg'

const { t } = useLang()
const router = useRouter()

const skills = [
  { label: 'Figma', color: 'var(--color-coral)' },
  { label: 'FigJam', color: 'var(--color-coral)' },
  { label: 'Maze', color: 'var(--color-lav)' },
  { label: 'Useberry', color: 'var(--color-lav)' },
  { label: 'Claude AI', color: 'var(--color-sage)' },
  { label: 'ChatGPT', color: 'var(--color-sage)' },
  { label: 'HTML', color: 'var(--color-ink2)' },
  { label: 'CSS', color: 'var(--color-ink2)' },
  { label: 'Sass', color: 'var(--color-ink2)' },
  { label: 'Angular', color: 'var(--color-ink2)' },
  { label: 'Git', color: 'var(--color-ink3)' },
  { label: 'VS Code', color: 'var(--color-ink3)' },
  { label: 'Notion', color: 'var(--color-ink3)' },
]
</script>

<template>
  <!-- ══════════════════════════════════════
       HYBRID SECTION — About + Projects
  ═══════════════════════════════════════ -->
  <section class="hybrid-section" id="about">
    <div class="hybrid-inner">
      <!-- ── Columna izquierda: About ── -->
      <div class="about-col" data-reveal="from-left">
        <span class="sec-label">{{ t('about-label') }}</span>

        <h2 class="about-title">
          <span>{{ t('about-t1') }}</span
          ><br />
          <em>{{ t('about-t2') }}</em
          ><br />
          <span>{{ t('about-t3') }}</span>
        </h2>

        <div class="about-body">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="t('about-p1')"></p>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="t('about-p2')"></p>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="t('about-p3')"></p>
        </div>

        <!-- Empresas -->
        <div class="clients-block">
          <span class="clients-label">{{ t('skills-label') }}</span>
          <!-- Skills bar -->
          <div class="skills-bar-wrap">
            <div class="skills-bar" role="list" aria-label="Skills y herramientas">
              <span v-for="sk in skills" :key="sk.label" class="sk" role="listitem">
                <span class="sk-dot" :style="{ background: sk.color }"></span>
                {{ sk.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- CTA — CV button -->
        <a href="/CV-CindyLopez-2026.pdf" download class="btn-cv">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect
              x="2"
              y="1"
              width="10"
              height="12"
              rx="1.5"
              stroke="currentColor"
              stroke-width="1.3"
            />
            <line
              x1="4.5"
              y1="5"
              x2="9.5"
              y2="5"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <line
              x1="4.5"
              y1="7.5"
              x2="9.5"
              y2="7.5"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <line
              x1="4.5"
              y1="10"
              x2="7.5"
              y2="10"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
          {{ t('cv-label') }}
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M2 6h8M6 2l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>

      <!-- ── Columna derecha: Proyectos ── -->
      <div class="work-col" id="work" data-reveal="from-right" style="--reveal-delay: 0.12s">
        <span class="sec-label sec-label--right">{{ t('work-label') }}</span>

        <div class="proj-grid">
          <!-- Proyecto 1 — Lirmi Familia -->
          <article
            class="proj-card proj-card--link"
            @click="router.push('/case/lirmi')"
            role="button"
            tabindex="0"
            @keydown.enter="router.push('/case/lirmi')"
            aria-label="Ver caso Lirmi Familia"
          >
            <div class="proj-thumb">
              <span class="proj-badge">EdTech</span>
              <div class="proj-img-wrap">
                <img :src="lirmiImg" alt="Lirmi Familia preview" class="proj-img" />
              </div>
            </div>
            <div class="proj-body">
              <div class="proj-tags">
                <span class="proj-tag proj-tag--sage">EdTech</span>
                <span class="proj-tag proj-tag--lav">UX Research</span>
              </div>
              <h3 class="proj-title">{{ t('p1-title') }}</h3>
              <p class="proj-desc">{{ t('p1-desc') }}</p>
              <span class="proj-link">{{ t('proj-view') }}</span>
            </div>
          </article>

          <!-- Proyecto 2 — Cartola de Inversión -->
          <article class="proj-card">
            <div class="proj-thumb">
              <span class="proj-badge">Fintech</span>
              <div class="proj-img-wrap">
                <img :src="cartolaImg" alt="Cartola de Inversión preview" class="proj-img" />
              </div>
            </div>
            <div class="proj-body">
              <div class="proj-tags">
                <span class="proj-tag proj-tag--lav">Fintech</span>
                <span class="proj-tag proj-tag--coral">End-to-end</span>
              </div>
              <h3 class="proj-title">{{ t('p2-title') }}</h3>
              <p class="proj-desc">{{ t('p2-desc') }}</p>
              <span class="proj-link">{{ t('proj-view') }}</span>
            </div>
          </article>

          <!-- Proyecto 3 — Isla Nativa Travel -->
          <article class="proj-card">
            <div class="proj-thumb">
              <span class="proj-badge proj-badge--wip">🚧 {{ t('proj-wip') }}</span>
              <div class="proj-img-wrap">
                <img :src="islaNativaImg" alt="Isla Nativa Travel preview" class="proj-img" />
              </div>
            </div>
            <div class="proj-body">
              <div class="proj-tags">
                <span class="proj-tag proj-tag--sage">Travel</span>
                <span class="proj-tag proj-tag--coral">Claude Code</span>
                <span class="proj-tag proj-tag--lav">Figma MCP</span>
              </div>
              <h3 class="proj-title">{{ t('p3-title') }}</h3>
              <p class="proj-desc">{{ t('p3-desc') }}</p>
              <span class="proj-link proj-link--disabled">{{ t('proj-wip') }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
    <!-- /hybrid-inner -->
  </section>
</template>

<style scoped>
/* ══════════════════════════════════════════
   TOKENS LOCALES
══════════════════════════════════════════ */
.hybrid-section {
  --col-gap: clamp(40px, 6vw, 80px);
  --section-px: var(--section-padding-x, clamp(20px, 5vw, 80px));
}

/* ══════════════════════════════════════════
   SECTION LABEL
══════════════════════════════════════════ */
.sec-label {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink3);
  padding: 4px 0;
  position: relative;
}

.sec-label::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 1.5px;
  background: var(--color-coral);
  margin-right: 8px;
  vertical-align: middle;
  flex-shrink: 0;
}

.sec-label--right {
  /* no change on right col */
}

.sec-label--center {
  display: block;
  text-align: center;
}

.sec-label--center::before {
  display: none;
}

/* ══════════════════════════════════════════
   HYBRID LAYOUT — 2 columns
══════════════════════════════════════════ */
.hybrid-section {
  padding: clamp(72px, 10vw, 120px) var(--section-px);
}

.hybrid-inner {
  max-width: var(--content-max, 1160px);
  margin: 0 auto;
  display: grid;
  /* 40% columna about / 60% columna proyectos exactos */
  grid-template-columns: 2fr 2fr;
  gap: var(--col-gap);
  /* stretch: ambas columnas tienen el mismo alto (el del más alto) */
  align-items: stretch;
}

@media (max-width: 960px) {
  .hybrid-inner {
    grid-template-columns: 1fr;
    gap: 52px;
    align-items: start;
  }
}

/* ══════════════════════════════════════════
   ABOUT COLUMN
══════════════════════════════════════════ */
.about-col {
  display: flex;
  flex-direction: column;
  gap: 22px;
  /* sin sticky: la columna se estira al mismo alto que proyectos */
  min-width: 0; /* evita overflow en grid */
}

.work-col {
  min-width: 0;
}

.about-title {
  font-family: var(--font-serif);
  font-size: clamp(24px, 3.2vw, 36px);
  font-weight: 500;
  line-height: 1.25;
  color: var(--color-ink);
  margin: 0;
}

.about-title em {
  font-style: italic;
  color: var(--color-coral);
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-body p {
  font-size: 14.5px;
  font-weight: 300;
  color: var(--color-ink2);
  line-height: 1.76;
  margin: 0;
}

.about-body :deep(strong) {
  font-weight: 500;
  color: var(--color-ink);
}

/* ── Skills bar ── */
/* El wrapper corta el overflow al ancho de la columna */
.skills-bar-wrap {
  width: 100%;
  overflow: hidden; /* impide que la barra expanda la columna */
}

.skills-bar {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 6px;
  /* gradiente fade al final para indicar scroll */
  -webkit-mask-image: linear-gradient(to right, black 85%, transparent 100%);
  mask-image: linear-gradient(to right, black 85%, transparent 100%);
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.skills-bar::-webkit-scrollbar {
  display: none;
}

.sk {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--color-ink2);
  background: var(--color-bg2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 4px 10px;
  flex-shrink: 0;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.sk-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── CV button ── */
.btn-cv {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  align-self: flex-start;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-ink);
  background: transparent;
  border: 1.5px solid var(--color-border2);
  border-radius: var(--radius-full);
  padding: 9px 18px;
  text-decoration: none;
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast),
    background var(--transition-fast);
}

.btn-cv:hover {
  border-color: var(--color-coral);
  color: var(--color-coral);
  background: var(--color-coral-light);
}

/* ══════════════════════════════════════════
   WORK COLUMN — projects grid
══════════════════════════════════════════ */
.work-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}

.proj-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ── Project card ── */
.proj-card {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition:
    box-shadow var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-base);
}

.proj-card--link {
  cursor: pointer;
}

.proj-card:hover {
  box-shadow: 0 8px 32px rgba(24, 22, 15, 0.14);
  border-color: var(--color-border2);
  transform: translateY(-5px);
}

.dark .proj-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

@media (max-width: 520px) {
  .proj-card {
    grid-template-columns: 1fr;
  }
}

/* ── Thumbnail ── */
.proj-thumb {
  position: relative;
  min-height: 130px;
  overflow: hidden;
  background: var(--color-bg2);
  flex-shrink: 0;
}

.proj-img-wrap {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.proj-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  will-change: transform;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.proj-card:hover .proj-img {
  transform: scale(1.1);
}

/* Subtle dark gradient overlay at bottom for polish */
.proj-img-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.18) 100%);
  pointer-events: none;
  z-index: 1;
}

.proj-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  color: var(--color-ink2);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: var(--radius-full);
  padding: 2px 8px;
}

.dark .proj-badge {
  background: rgba(20, 18, 14, 0.72);
  border-color: rgba(255, 255, 255, 0.12);
  color: var(--color-ink3);
}

.proj-badge--wip {
  color: var(--color-ink3);
}

/* ── Card body ── */
.proj-body {
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.proj-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  border-radius: var(--radius-full);
  padding: 2px 8px;
}

.proj-tag--sage {
  background: var(--color-sage-light);
  color: var(--color-sage);
}
.proj-tag--lav {
  background: var(--color-lav-light);
  color: var(--color-lav);
}
.proj-tag--coral {
  background: var(--color-coral-light);
  color: var(--color-coral);
}

.proj-title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-ink);
  margin: 0;
  line-height: 1.3;
}

.proj-desc {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--color-ink3);
  line-height: 1.6;
  margin: 0;
}

.proj-link {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-coral);
  margin-top: 2px;
  transition: letter-spacing 0.15s ease;
}

.proj-card:hover .proj-link {
  letter-spacing: 0.02em;
}

.proj-link--disabled {
  color: var(--color-ink3);
  cursor: default;
}

/* ══════════════════════════════════════════
   CLIENTS — bloque dentro de la columna about
══════════════════════════════════════════ */
.clients-block {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 6px;
  border-top: 1px solid var(--color-border);
}

.clients-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink3);
}

.logos-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
}

.divider {
  width: 1px;
  height: 28px;
  background: var(--color-border);
  margin: 0 20px;
  flex-shrink: 0;
}

/* ── Logo homologation via CSS filter ── */
.client-logo {
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
}

.client-logo :deep(svg) {
  height: 26px;
  width: auto;
  display: block;
  filter: brightness(0) opacity(0.38);
  transition: filter 0.25s ease;
}

.dark .client-logo :deep(svg) {
  filter: brightness(0) invert(1) opacity(0.45);
}

.client-logo:hover :deep(svg) {
  filter: brightness(0) opacity(0.7);
}

.dark .client-logo:hover :deep(svg) {
  filter: brightness(0) invert(1) opacity(0.75);
}

@media (max-width: 480px) {
  .logos-row {
    gap: 16px;
  }
  .divider {
    display: none;
  }
}
</style>
