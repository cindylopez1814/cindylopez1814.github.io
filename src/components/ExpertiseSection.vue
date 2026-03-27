<script setup lang="ts">
import { computed } from 'vue'
import { useLang } from '../composables/useLang'

const { t, lang } = useLang()

interface Card {
  id:       string
  num:      string
  icon:     string
  iconBg:   string
  accent:   string
  titleEmKey:   string   // primera línea — italic coral
  titleRestKey: string   // segunda línea — normal
  bodyKey:  string
  steps:    string[]
  tags:     string[]
}

const cards = computed<Card[]>(() => [
  {
    id:     'ux',
    num:    '01 — UX',
    icon:   '🔍',
    iconBg: 'rgba(138,124,184,0.12)',
    accent: 'var(--color-lav)',
    titleEmKey:   'exp-ux-title-em',
    titleRestKey: 'exp-ux-title-rest',
    bodyKey: 'exp-ux-body',
    steps: [t('exp-ux-s1'), t('exp-ux-s2'), t('exp-ux-s3'), t('exp-ux-s4')],
    tags: ['Research', 'Benchmark', 'Journey map', 'Usability Testing', 'Insights'],
  },
  {
    id:     'ui',
    num:    '02 — UI',
    icon:   '✦',
    iconBg: 'rgba(232,80,58,0.10)',
    accent: 'var(--color-coral)',
    titleEmKey:   'exp-ui-title-em',
    titleRestKey: 'exp-ui-title-rest',
    bodyKey: 'exp-ui-body',
    steps: [t('exp-ui-s1'), t('exp-ui-s2'), t('exp-ui-s3'), t('exp-ui-s4')],
    tags: ['Figma', 'Design tokens', 'Microcopy', 'Accesibilidad', 'Prototyping'],
  },
  {
    id:     'dev',
    num:    '03 — DEV',
    icon:   '⌨️',
    iconBg: 'rgba(106,148,112,0.12)',
    accent: 'var(--color-sage)',
    titleEmKey:   'exp-dev-title-em',
    titleRestKey: 'exp-dev-title-rest',
    bodyKey: 'exp-dev-body',
    steps: [t('exp-dev-s1'), t('exp-dev-s2'), t('exp-dev-s3'), t('exp-dev-s4')],
    tags: ['HTML/CSS', 'Frontend logic', 'Figma Dev Mode', 'Component thinking', 'AI-assisted workflow'],
  },
])

// Fuerza recompute al cambiar idioma
void lang
</script>

<template>
  <section class="expertise-section" id="expertise" aria-labelledby="expertise-heading">
    <div class="expertise-inner">

      <!-- ── Header ── -->
      <div class="expertise-header" data-reveal>
        <div class="expertise-header__text">
          <span class="sec-label-dk">{{ t('expertise-label') }}</span>
          <h2 id="expertise-heading" class="expertise-title">
            <span>{{ t('exp-t1') }}</span><br>
            <em>{{ t('exp-t2') }}</em>
            <span>{{ t('exp-t3') }}</span>
          </h2>
        </div>
        <p class="expertise-sub">{{ t('exp-sub') }}</p>
      </div>

      <!-- ── Cards grid ── -->
      <div class="exp-grid" data-reveal style="--reveal-delay: 0.18s">
        <article
          v-for="card in cards"
          :key="card.id"
          class="exp-card"
          :class="`exp-card--${card.id}`"
          :style="{ '--card-accent': card.accent }"
        >
          <!-- Número + Icono -->
          <div class="exp-num">{{ card.num }}</div>
          <div class="exp-icon" :style="{ background: card.iconBg }">
            {{ card.icon }}
          </div>

          <!-- Título: línea 1 italic coral + línea 2 normal -->
          <h3 class="exp-title">
            <em>{{ t(card.titleEmKey) }}</em><br>
            <span>{{ t(card.titleRestKey) }}</span>
          </h3>

          <!-- Cuerpo -->
          <p class="exp-body">{{ t(card.bodyKey) }}</p>

          <!-- Steps -->
          <ul class="exp-steps" aria-label="Proceso">
            <li v-for="step in card.steps" :key="step" class="exp-step">
              <svg class="step-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 2v8M2.5 6.5 6 10l3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="step-text">{{ step }}</span>
            </li>
          </ul>

          <!-- Tags -->
          <div class="exp-tags" aria-label="Herramientas">
            <span v-for="tag in card.tags" :key="tag" class="exp-tag">{{ tag }}</span>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ══════════════════════════════════════════
   SECTION WRAPPER
══════════════════════════════════════════ */
.expertise-section {
  background: var(--color-bg2);
  padding: clamp(72px, 10vw, 120px) var(--section-padding-x, clamp(20px, 5vw, 80px));
  position: relative;
  overflow: hidden;
  border-top:    1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

/* acento radial coral top-right (igual que referencia) */
.expertise-section::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(232,80,58,0.07) 0%, transparent 65%);
  pointer-events: none;
}

.expertise-inner {
  max-width: var(--content-max, 1160px);
  margin: 0 auto;
}

/* ══════════════════════════════════════════
   HEADER
══════════════════════════════════════════ */
.expertise-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;
}

.expertise-header__text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sec-label-dk {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--color-ink3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sec-label-dk::before {
  content: '03';
  font-size: 9px;
  color: var(--color-coral);
}

.expertise-title {
  font-family: var(--font-serif);
  font-size: clamp(24px, 4vw, 38px);
  font-weight: 500;
  color: var(--color-ink);
  letter-spacing: -0.03em;
  line-height: 1.12;
  margin: 0;
}

.expertise-title em {
  font-style: italic;
  color: var(--color-coral);
}

.expertise-sub {
  font-size: 14px;
  color: var(--color-ink2);
  max-width: 480px;
  line-height: 1.65;
  margin: 4px 0 0;
}

/* ══════════════════════════════════════════
   GRID — 1 → 2 → 3 columnas
══════════════════════════════════════════ */
.exp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: stretch;
}

@media (min-width: 640px) {
  .exp-grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 960px) {
  .exp-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ══════════════════════════════════════════
   CARD
══════════════════════════════════════════ */
.exp-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 18px rgba(24,22,15,0.07), inset 0 1px 0 rgba(255,255,255,0.8);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

/* barra de color en el top al hacer hover */
.exp-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background: var(--card-accent);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.exp-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border2);
}

.exp-card:hover::after {
  opacity: 1;
}

/* Dark mode cards */
.dark .exp-card {
  background: rgba(34, 28, 20, 0.55);
  border-color: rgba(255,255,255,0.07);
  box-shadow: 0 2px 18px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04);
}

/* ── Card elements ── */
.exp-num {
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--color-ink3);
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.exp-icon {
  width: 44px;
  height: 44px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 18px;
  flex-shrink: 0;
}

.exp-title {
  font-family: var(--font-serif);
  font-size: clamp(17px, 2vw, 20px);
  font-weight: 500;
  color: var(--color-ink);
  letter-spacing: -0.02em;
  line-height: 1.22;
  margin: 0 0 10px;
}

/* primera línea de cada título — italic coral */
.exp-title em {
  font-style: italic;
  color: var(--color-coral);
}

.exp-body {
  font-size: 13.5px;
  color: var(--color-ink2);
  line-height: 1.72;
  margin: 0 0 24px;
  /* 4 líneas fijas para uniformidad entre cards */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

/* ── Steps ── */
.exp-steps {
  list-style: none;
  margin: 0 0 28px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.exp-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  border-radius: 10px;
  /* glassmorphism marcado */
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 6px rgba(24, 22, 15, 0.06);
  cursor: default;
}

.dark .exp-step {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: none;
}

.step-arrow {
  color: var(--card-accent, var(--color-coral));
  flex-shrink: 0;
}

.step-text {
  font-size: 13px;
  color: var(--color-ink2);
  line-height: 1.4;
}

/* ── Tags ── */
.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 4px;
}

.exp-tag {
  font-family: var(--font-mono);
  font-size: 10.5px;
  padding: 3px 9px;
  border-radius: 6px;
  background: var(--color-bg2);
  color: var(--color-ink3);
  border: 1px solid var(--color-border);
}

/* ── Dark mode bg ── */
.dark .expertise-section {
  background: rgba(16, 14, 20, 0.9);
}

.dark .exp-step {
  background: rgba(255,255,255,0.04);
}

.dark .exp-step:hover {
  background: rgba(255,255,255,0.07);
}

.dark .exp-tag {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.1);
}
</style>
