<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import { useLang } from '../composables/useLang'
import lirmiLogo from '../assets/IMG/Lirmi/Logo.png'
import comentarios03 from '../assets/IMG/Lirmi/comentarios03.png'
import comentarios04 from '../assets/IMG/Lirmi/comentarios04.png'
import comentarios05 from '../assets/IMG/Lirmi/comentarios05.png'
import journeyMap from '../assets/IMG/Lirmi/Journey Map.png'
import mapaEmpatia from '../assets/IMG/Lirmi/Mapa Empatia.png'
import userPerson from '../assets/IMG/Lirmi/User Person.png'

const router = useRouter()
const { t } = useLang()

function goBack() {
  router.push('/#work')
}

// Modal lightbox
const modalSrc = ref<string | null>(null)
const modalAlt = ref('')

function openModal(src: string, alt: string) {
  modalSrc.value = src
  modalAlt.value = alt
}

function closeModal() {
  modalSrc.value = null
}

onMounted(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
  }
  document.addEventListener('keydown', onKey)
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
})

const techniques = computed(() => [
  { icon: '🎙️', title: t('lirmi-tech-0-title'), n: '5', desc: t('lirmi-tech-0-desc') },
  { icon: '🗺️', title: t('lirmi-tech-1-title'), n: '5', desc: t('lirmi-tech-1-desc') },
  { icon: '🔬', title: t('lirmi-tech-2-title'), n: '7–10', desc: t('lirmi-tech-2-desc') },
  { icon: '📋', title: t('lirmi-tech-3-title'), n: '20', desc: t('lirmi-tech-3-desc') },
])

const insights = computed(() => [
  {
    num: '01',
    accent: 'var(--color-coral)',
    title: t('lirmi-ins-0-title'),
    body: t('lirmi-ins-0-body'),
  },
  {
    num: '02',
    accent: 'var(--color-lav)',
    title: t('lirmi-ins-1-title'),
    body: t('lirmi-ins-1-body'),
  },
  {
    num: '03',
    accent: 'var(--color-sage)',
    title: t('lirmi-ins-2-title'),
    body: t('lirmi-ins-2-body'),
  },
  {
    num: '04',
    accent: 'var(--color-coral)',
    title: t('lirmi-ins-3-title'),
    body: t('lirmi-ins-3-body'),
  },
])

const learnings = computed(() => [
  { icon: '🧠', title: t('lirmi-learn-0-title'), body: t('lirmi-learn-0-body') },
  { icon: '💬', title: t('lirmi-learn-1-title'), body: t('lirmi-learn-1-body') },
  { icon: '🔍', title: t('lirmi-learn-2-title'), body: t('lirmi-learn-2-body') },
])
</script>

<template>
  <div class="case-page">
    <NavBar />

    <!-- ══════════════════════════════════════
         HERO
    ═══════════════════════════════════════ -->
    <header class="case-hero">
      <div class="case-hero__inner">
        <!-- Back + label -->
        <div class="case-hero__top">
          <button class="btn-back" @click="goBack">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M8.5 2L4 7l4.5 5"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ t('lirmi-back') }}
          </button>
          <div class="case-eyebrow">
            <span class="case-tag case-tag--sage">EdTech</span>
            <span class="case-tag case-tag--lav">UX Research</span>
            <span class="case-num">{{ t('lirmi-case-num') }}</span>
          </div>
        </div>

        <!-- Title + image -->
        <div class="case-hero__grid">
          <div class="case-hero__text">
            <h1 class="case-title">
              Lirmi<br />
              <em>Familia</em>
            </h1>
            <p class="case-subtitle">{{ t('lirmi-subtitle') }}</p>
            <p class="case-brief">{{ t('lirmi-brief') }}</p>
            <!-- Meta strip -->
            <div class="case-meta">
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-role') }}</span>
                <span class="case-meta__val">UX Research (único rol)</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-year') }}</span>
                <span class="case-meta__val">2024</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-platform') }}</span>
                <span class="case-meta__val">Mobile iOS / Android</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-tools') }}</span>
                <span class="case-meta__val">Figma · Maze · Miro</span>
              </div>
            </div>
          </div>

          <!-- Composición: logo + comentarios de usuarios -->
          <div class="hero-composition" aria-label="Composición visual del caso">
            <div class="hero-comp__bg" aria-hidden="true"></div>

            <!-- Logo -->
            <div class="hero-comp__logo">
              <img :src="lirmiLogo" alt="Lirmi Familia" />
            </div>

            <!-- Burbujas de comentarios distribuidas -->
            <div class="hero-comp__bubbles">
              <img :src="comentarios03" class="bubble" alt="" aria-hidden="true" />
              <img :src="comentarios04" class="bubble" alt="" aria-hidden="true" />
              <img :src="comentarios05" class="bubble" alt="" aria-hidden="true" />
            </div>

            <!-- Título ilustrativo -->
            <div class="hero-comp__label">
              <p class="hero-comp__headline">{{ t('lirmi-hero-title') }}</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ══════════════════════════════════════
         STATS STRIP
    ═══════════════════════════════════════ -->
    <div class="stats-strip" data-reveal>
      <div class="stats-inner">
        <div class="stat">
          <span class="stat__num">+2.200</span>
          <span class="stat__label">{{ t('lirmi-stat-schools') }}</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">1.500.000</span>
          <span class="stat__label">{{ t('lirmi-stat-users') }}</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">#1</span>
          <span class="stat__label">{{ t('lirmi-stat-rank') }}</span>
        </div>
      </div>
    </div>

    <main class="case-main">
      <!-- ══════════════════════════════════════
           CONTEXTO
      ═══════════════════════════════════════ -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">01</span>
          <span>{{ t('lirmi-sec-1') }}</span>
        </div>
        <div class="context-grid">
          <div class="context-product">
            <h2 class="section-title">{{ t('lirmi-ctx-t1') }}</h2>
            <p v-html="t('lirmi-ctx-p1a')"></p>
            <p v-html="t('lirmi-ctx-p1b')"></p>
          </div>
          <div class="context-challenge">
            <h2 class="section-title">{{ t('lirmi-ctx-t2') }}</h2>
            <p>{{ t('lirmi-ctx-p2a') }}</p>
            <p v-html="t('lirmi-ctx-p2b')"></p>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           PROBLEMA
      ═══════════════════════════════════════ -->
      <section class="case-section problem-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">02</span>
          <span>{{ t('lirmi-sec-2') }}</span>
        </div>
        <blockquote class="problem-quote">{{ t('lirmi-problem-quote') }}</blockquote>
        <div class="problem-detail">
          <p>{{ t('lirmi-problem-intro') }}</p>
          <div class="problem-factors">
            <div class="factor">
              <span class="factor__icon">👥</span>
              <div>
                <strong>{{ t('lirmi-factor-1-title') }}</strong>
                <p>{{ t('lirmi-factor-1-body') }}</p>
              </div>
            </div>
            <div class="factor">
              <span class="factor__icon">🔇</span>
              <div>
                <strong>{{ t('lirmi-factor-2-title') }}</strong>
                <p>{{ t('lirmi-factor-2-body') }}</p>
              </div>
            </div>
            <div class="factor">
              <span class="factor__icon">📄</span>
              <div>
                <strong>{{ t('lirmi-factor-3-title') }}</strong>
                <p>{{ t('lirmi-factor-3-body') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           RESEARCH
      ═══════════════════════════════════════ -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">03</span>
          <span>{{ t('lirmi-sec-3') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('lirmi-research-t') }}<br />
          <em>{{ t('lirmi-research-em') }}</em>
        </h2>
        <p class="section-intro">{{ t('lirmi-research-intro') }}</p>

        <div class="techniques-grid">
          <div v-for="tech in techniques" :key="tech.title" class="technique-card">
            <div class="technique-icon">{{ tech.icon }}</div>
            <div class="technique-n">{{ tech.n }}</div>
            <h3 class="technique-title">{{ tech.title }}</h3>
            <p class="technique-desc">{{ tech.desc }}</p>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           HIPÓTESIS + PREGUNTAS
      ═══════════════════════════════════════ -->
      <section class="case-section hyp-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">04</span>
          <span>{{ t('lirmi-sec-4') }}</span>
        </div>
        <div class="hyp-grid">
          <div class="hyp-main">
            <span class="hyp-eyebrow">{{ t('lirmi-hyp-eyebrow1') }}</span>
            <blockquote class="hyp-quote">"{{ t('lirmi-hyp-quote') }}"</blockquote>
          </div>
          <div class="hyp-questions">
            <span class="hyp-eyebrow">{{ t('lirmi-hyp-eyebrow2') }}</span>
            <div class="question">
              <span class="question-num">P1</span>
              <p>{{ t('lirmi-q1') }}</p>
            </div>
            <div class="question">
              <span class="question-num">P2</span>
              <p>{{ t('lirmi-q2') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           TARGET USER
      ═══════════════════════════════════════ -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">05</span>
          <span>{{ t('lirmi-sec-5') }}</span>
        </div>
        <div class="target-grid">
          <div class="target-text">
            <h2 class="section-title">
              {{ t('lirmi-user-t') }}<br />
              <em>{{ t('lirmi-user-em') }}</em>
            </h2>
            <p v-html="t('lirmi-user-p1')"></p>
            <p>{{ t('lirmi-user-p2') }}</p>
          </div>
          <div class="target-attrs">
            <div class="attr">
              <span class="attr__icon">📱</span>
              <div>
                <strong>{{ t('lirmi-attr-1-title') }}</strong>
                <span>{{ t('lirmi-attr-1-body') }}</span>
              </div>
            </div>
            <div class="attr">
              <span class="attr__icon">🏫</span>
              <div>
                <strong>{{ t('lirmi-attr-2-title') }}</strong>
                <span>{{ t('lirmi-attr-2-body') }}</span>
              </div>
            </div>
            <div class="attr">
              <span class="attr__icon">⏱️</span>
              <div>
                <strong>{{ t('lirmi-attr-3-title') }}</strong>
                <span>{{ t('lirmi-attr-3-body') }}</span>
              </div>
            </div>
            <div class="attr">
              <span class="attr__icon">🤝</span>
              <div>
                <strong>{{ t('lirmi-attr-4-title') }}</strong>
                <span>{{ t('lirmi-attr-4-body') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           HALLAZGOS CLAVE
      ═══════════════════════════════════════ -->
      <section class="case-section insights-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">06</span>
          <span>{{ t('lirmi-sec-6') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('lirmi-findings-t') }}<br />
          <em>{{ t('lirmi-findings-em') }}</em>
        </h2>
        <div class="insights-grid">
          <div
            v-for="ins in insights"
            :key="ins.num"
            class="insight-card"
            :style="{ '--ins-accent': ins.accent }"
          >
            <span class="insight-num">{{ ins.num }}</span>
            <h3 class="insight-title">{{ ins.title }}</h3>
            <p class="insight-body">{{ ins.body }}</p>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           ARTEFACTOS UX
      ═══════════════════════════════════════ -->
      <section class="case-section artifacts-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">07</span>
          <span>{{ t('lirmi-sec-7') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('lirmi-artifacts-t') }}<br />
          <em>{{ t('lirmi-artifacts-em') }}</em>
        </h2>
        <p class="section-intro">{{ t('lirmi-artifacts-intro') }}</p>

        <div class="artifacts-grid">
          <div class="artifact-card">
            <div class="artifact-card__header">
              <span class="artifact-tag">{{ t('lirmi-artifact-1-tag') }}</span>
              <p class="artifact-desc">{{ t('lirmi-artifact-1-desc') }}</p>
            </div>
            <div
              class="artifact-card__img-wrap artifact-card__img-wrap--clickable"
              @click="openModal(userPerson, 'User Persona – Lirmi Familia')"
            >
              <img :src="userPerson" alt="User Persona – Lirmi Familia" class="artifact-img" />
              <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
            </div>
          </div>

          <div class="artifact-card">
            <div class="artifact-card__header">
              <span class="artifact-tag">{{ t('lirmi-artifact-2-tag') }}</span>
              <p class="artifact-desc">{{ t('lirmi-artifact-2-desc') }}</p>
            </div>
            <div
              class="artifact-card__img-wrap artifact-card__img-wrap--clickable"
              @click="openModal(mapaEmpatia, 'Mapa de Empatía – Lirmi Familia')"
            >
              <img :src="mapaEmpatia" alt="Mapa de Empatía – Lirmi Familia" class="artifact-img" />
              <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
            </div>
          </div>

          <div class="artifact-card artifact-card--full">
            <div class="artifact-card__header">
              <span class="artifact-tag">{{ t('lirmi-artifact-3-tag') }}</span>
              <p class="artifact-desc">{{ t('lirmi-artifact-3-desc') }}</p>
            </div>
            <div
              class="artifact-card__img-wrap artifact-card__img-wrap--clickable"
              @click="openModal(journeyMap, 'Journey Map – Lirmi Familia')"
            >
              <img :src="journeyMap" alt="Journey Map – Lirmi Familia" class="artifact-img" />
              <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           APRENDIZAJES
      ═══════════════════════════════════════ -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">08</span>
          <span>{{ t('lirmi-sec-8') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('lirmi-learnings-t') }}<br />
          <em>{{ t('lirmi-learnings-em') }}</em>
        </h2>
        <div class="learnings-grid">
          <div v-for="l in learnings" :key="l.title" class="learning-card">
            <span class="learning-icon">{{ l.icon }}</span>
            <h3 class="learning-title">{{ l.title }}</h3>
            <p class="learning-body">{{ l.body }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- ══════════════════════════════════════
         FOOTER CTA
    ═══════════════════════════════════════ -->
    <footer class="case-footer" data-reveal>
      <div class="case-footer__inner">
        <p class="case-footer__label">{{ t('lirmi-next-label') }}</p>
        <h2 class="case-footer__title">
          {{ t('lirmi-next-title1') }}<br />
          <em>{{ t('lirmi-next-title2') }}</em>
        </h2>
        <p class="case-footer__sub">{{ t('lirmi-next-sub') }}</p>
        <div class="case-footer__btns">
          <button class="btn-back-home" @click="goBack">{{ t('lirmi-btn-back') }}</button>
          <button class="btn-next" @click="router.push('/case/cartola')">
            {{ t('lirmi-btn-view') }}
          </button>
        </div>
      </div>
    </footer>

    <!-- ══════════════════════════════════════
         MODAL LIGHTBOX
    ═══════════════════════════════════════ -->
    <Transition name="modal">
      <div
        v-if="modalSrc"
        class="modal-overlay"
        @click.self="closeModal"
        role="dialog"
        aria-modal="true"
      >
        <button class="modal-close" @click="closeModal" aria-label="Cerrar">✕</button>
        <img :src="modalSrc" :alt="modalAlt" class="modal-img" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ══════════════════════════════════════════
   BASE
══════════════════════════════════════════ */
.case-page {
  background: var(--color-bg);
  min-height: 100vh;
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
.case-hero {
  padding: calc(var(--nav-height) + clamp(40px, 6vw, 72px)) var(--section-padding-x)
    clamp(48px, 6vw, 80px);
  background: var(--color-bg);
  position: relative;
  overflow: hidden;
}

/* Sage glow top-left */
.case-hero::before {
  content: '';
  position: absolute;
  top: -80px;
  left: -80px;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(106, 148, 112, 0.1) 0%, transparent 65%);
  pointer-events: none;
}

.case-hero__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

/* ── Top bar ── */
.case-hero__top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-ink2);
  background: transparent;
  border: 1.5px solid var(--color-border2);
  border-radius: var(--radius-full);
  padding: 7px 14px;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.btn-back:hover {
  color: var(--color-sage);
  border-color: var(--color-sage);
}

.case-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.case-tag {
  font-family: var(--font-mono);
  font-size: 9.5px;
  font-weight: 500;
  border-radius: var(--radius-full);
  padding: 3px 10px;
  letter-spacing: 0.04em;
}

.case-tag--sage {
  background: var(--color-sage-light);
  color: var(--color-sage);
}

.case-tag--lav {
  background: var(--color-lav-light);
  color: var(--color-lav);
}

.case-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-ink3);
  letter-spacing: 0.08em;
  margin-left: auto;
}

/* ── Hero grid ── */
.case-hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}

@media (max-width: 768px) {
  .case-hero__grid {
    grid-template-columns: 1fr;
  }
}

.case-title {
  font-family: var(--font-serif);
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--color-ink);
  margin: 0 0 16px;
}

.case-title em {
  font-style: italic;
  color: var(--color-sage);
}

.case-subtitle {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink3);
  margin: 0 0 20px;
}

.case-brief {
  font-size: 15px;
  color: var(--color-ink2);
  line-height: 1.75;
  margin: 0 0 32px;
  max-width: 480px;
}

/* Meta strip */
.case-meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
  border-top: 1px solid var(--color-border);
  padding-top: 20px;
}

.case-meta__item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.case-meta__label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink3);
}

.case-meta__val {
  font-size: 13px;
  color: var(--color-ink2);
  font-weight: 400;
}

/* ── Hero image ── */
.case-hero__img-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  box-shadow: var(--shadow-lg);
}

.case-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.case-hero__img-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(106, 148, 112, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

/* ── Hero Composition ── */
.hero-composition {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: linear-gradient(150deg, #e8f0ea 0%, #d0e3d3 50%, #bdd6c0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px 16px;
  gap: 12px;
  box-shadow: var(--shadow-lg);
}

.dark .hero-composition {
  background: linear-gradient(150deg, #1c2d1e 0%, #182619 50%, #142014 100%);
}

.hero-comp__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 25% 15%, rgba(106, 148, 112, 0.35) 0%, transparent 55%);
  pointer-events: none;
}

.hero-comp__logo {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hero-comp__logo img {
  height: 26px;
  width: auto;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.12));
}

.hero-comp__bubbles {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  flex: 1;
  overflow: hidden;
}

.bubble {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.08);
  display: block;
  flex-shrink: 0;
}

.hero-comp__label {
  position: relative;
  z-index: 2;
  text-align: center;
  flex-shrink: 0;
}

.hero-comp__headline {
  font-family: var(--font-serif);
  font-size: clamp(13px, 1.6vw, 18px);
  font-style: italic;
  font-weight: 500;
  color: var(--color-sage);
  margin: 0;
  line-height: 1.2;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

/* ══════════════════════════════════════════
   STATS STRIP
══════════════════════════════════════════ */
.stats-strip {
  background: var(--color-bg2);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: clamp(28px, 4vw, 40px) var(--section-padding-x);
}

.stats-inner {
  max-width: var(--content-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 clamp(24px, 4vw, 60px);
}

.stat__num {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--color-sage);
}

.stat__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink3);
  text-align: center;
}

.stat-divider {
  width: 1px;
  height: 44px;
  background: var(--color-border2);
  flex-shrink: 0;
}

@media (max-width: 520px) {
  .stat-divider {
    display: none;
  }
  .stat {
    padding: 8px 20px;
  }
  .stats-inner {
    gap: 4px;
  }
}

/* ══════════════════════════════════════════
   MAIN CONTENT
══════════════════════════════════════════ */
.case-main {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--section-padding-x);
}

/* ── Section base ── */
.case-section {
  padding: clamp(56px, 8vw, 96px) 0;
  border-bottom: 1px solid var(--color-border);
}

.case-section:last-child {
  border-bottom: none;
}

.case-section__label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ink3);
  margin-bottom: 24px;
}

.sec-num {
  color: var(--color-sage);
  font-size: 9px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3.5vw, 36px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.18;
  color: var(--color-ink);
  margin: 0 0 20px;
}

.section-title em {
  font-style: italic;
  color: var(--color-sage);
}

.section-intro {
  font-size: 15px;
  color: var(--color-ink2);
  line-height: 1.75;
  max-width: 560px;
  margin: 0 0 40px;
}

/* ── Context grid ── */
.context-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
}

@media (max-width: 640px) {
  .context-grid {
    grid-template-columns: 1fr;
  }
}

.context-product p,
.context-challenge p {
  font-size: 14.5px;
  color: var(--color-ink2);
  line-height: 1.75;
  margin: 0 0 12px;
}

.context-product strong,
.context-challenge strong {
  color: var(--color-ink);
  font-weight: 500;
}

/* ── Problem section ── */
.problem-section {
  background: var(--color-bg2);
  margin: 0 calc(-1 * var(--section-padding-x));
  padding-left: var(--section-padding-x);
  padding-right: var(--section-padding-x);
  border-radius: 0;
}

.problem-quote {
  font-family: var(--font-serif);
  font-size: clamp(18px, 3vw, 28px);
  font-style: italic;
  color: var(--color-ink);
  line-height: 1.4;
  margin: 0 0 40px;
  padding-left: 20px;
  border-left: 3px solid var(--color-sage);
  max-width: 680px;
}

.problem-detail p {
  font-size: 14.5px;
  color: var(--color-ink2);
  line-height: 1.75;
  margin: 0 0 28px;
}

.problem-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.factor {
  display: flex;
  gap: 14px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 20px;
}

.factor__icon {
  font-size: 22px;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}

.factor strong {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
  margin-bottom: 6px;
}

.factor p {
  font-size: 13px;
  color: var(--color-ink2);
  line-height: 1.65;
  margin: 0;
}

/* ── Techniques grid ── */
.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}

.technique-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-sage);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.technique-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
}

.technique-icon {
  font-size: 22px;
  line-height: 1;
  margin-bottom: 12px;
}

.technique-n {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 500;
  font-style: italic;
  color: var(--color-sage);
  line-height: 1;
  margin-bottom: 4px;
}

.technique-title {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink2);
  margin: 0 0 16px;
}

.technique-desc {
  font-size: 13px;
  color: var(--color-ink2);
  line-height: 1.65;
  margin: 0;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

/* ── Hypothesis section ── */
.hyp-section {
  background: var(--color-ink);
  margin: 0 calc(-1 * var(--section-padding-x));
  padding-left: var(--section-padding-x);
  padding-right: var(--section-padding-x);
}

.dark .hyp-section {
  background: var(--color-bg2);
}

.hyp-section .case-section__label {
  color: rgba(245, 242, 238, 0.5);
}

.hyp-section .sec-num {
  color: var(--color-sage);
}

.hyp-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: clamp(40px, 6vw, 72px);
}

@media (max-width: 720px) {
  .hyp-grid {
    grid-template-columns: 1fr;
  }
}

.hyp-eyebrow {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 242, 238, 0.45);
  margin-bottom: 16px;
}

.dark .hyp-eyebrow {
  color: var(--color-ink3);
}

.hyp-quote {
  font-family: var(--font-serif);
  font-size: clamp(18px, 2.8vw, 26px);
  font-style: italic;
  color: #f5f2ee;
  line-height: 1.45;
  margin: 0;
  padding-left: 20px;
  border-left: 3px solid var(--color-sage);
}

.dark .hyp-quote {
  color: var(--color-ink);
}

.question {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.question-num {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  background: rgba(106, 148, 112, 0.25);
  color: var(--color-sage);
  border-radius: 6px;
  padding: 4px 8px;
  flex-shrink: 0;
  margin-top: 2px;
}

.question p {
  font-size: 13.5px;
  color: rgba(245, 242, 238, 0.75);
  line-height: 1.65;
  margin: 0;
}

.dark .question p {
  color: var(--color-ink2);
}

/* ── Target grid ── */
.target-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

@media (max-width: 640px) {
  .target-grid {
    grid-template-columns: 1fr;
  }
}

.target-text p {
  font-size: 14.5px;
  color: var(--color-ink2);
  line-height: 1.75;
  margin: 0 0 12px;
}

.target-text strong {
  color: var(--color-ink);
  font-weight: 500;
}

.target-attrs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.attr {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 14px 16px;
}

.attr__icon {
  font-size: 20px;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 1px;
}

.attr strong {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink);
  margin-bottom: 3px;
}

.attr span {
  font-size: 12.5px;
  color: var(--color-ink3);
  line-height: 1.5;
}

/* ── Insights ── */
.insights-section {
  background: var(--color-bg2);
  margin: 0 calc(-1 * var(--section-padding-x));
  padding-left: var(--section-padding-x);
  padding-right: var(--section-padding-x);
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

@media (max-width: 900px) {
  .insights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .insights-grid {
    grid-template-columns: 1fr;
  }
}

.insight-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 24px 20px;
  position: relative;
  overflow: hidden;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.insight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--ins-accent);
  border-radius: 3px 3px 0 0;
}

.insight-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
}

.insight-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-ink3);
  display: block;
  margin-bottom: 10px;
}

.insight-title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-ink);
  margin: 0 0 10px;
  line-height: 1.3;
}

.insight-body {
  font-size: 13px;
  color: var(--color-ink2);
  line-height: 1.68;
  margin: 0;
}

/* ── Solution placeholder ── */
.solution-placeholder {
  border: 1.5px dashed var(--color-border2);
  border-radius: var(--radius-lg);
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg2);
}

.solution-placeholder__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
}

.solution-placeholder__icon {
  font-size: 32px;
  opacity: 0.5;
}

.solution-placeholder__text {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--color-ink2);
  margin: 0;
  font-style: italic;
}

.solution-placeholder__sub {
  font-size: 13px;
  color: var(--color-ink3);
  margin: 0;
}

/* ── Artifacts ── */
.artifacts-section {
  background: var(--color-bg);
}

.artifacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 680px) {
  .artifacts-grid {
    grid-template-columns: 1fr;
  }
}

.artifact-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.artifact-card--full {
  grid-column: 1 / -1;
}

.artifact-card__header {
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--color-border);
}

.artifact-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-sage);
  background: color-mix(in srgb, var(--color-sage) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-sage) 25%, transparent);
  border-radius: 20px;
  padding: 3px 10px;
  margin-bottom: 10px;
}

.artifact-desc {
  font-size: 13px;
  color: var(--color-ink2);
  line-height: 1.6;
  margin: 0;
}

.artifact-card__img-wrap {
  overflow: hidden;
  flex: 1;
}

.artifact-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  min-height: 260px;
}

.artifact-card--full .artifact-img {
  min-height: 320px;
  object-position: center;
}

.artifact-card:hover .artifact-img {
  transform: scale(1.03);
}

/* ── Learnings ── */
.learnings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
}

.learning-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.learning-icon {
  font-size: 26px;
  line-height: 1;
}

.learning-title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-ink);
  margin: 0;
  line-height: 1.3;
}

.learning-body {
  font-size: 13.5px;
  color: var(--color-ink2);
  line-height: 1.68;
  margin: 0;
}

/* ══════════════════════════════════════════
   FOOTER CTA
══════════════════════════════════════════ */
.case-footer {
  background: var(--color-bg2);
  border-top: 1px solid var(--color-border);
  padding: clamp(56px, 8vw, 96px) var(--section-padding-x);
  text-align: center;
}

.case-footer__inner {
  max-width: 560px;
  margin: 0 auto;
}

.case-footer__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ink3);
  margin: 0 0 12px;
}

.case-footer__title {
  font-family: var(--font-serif);
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--color-ink);
  margin: 0 0 12px;
}

.case-footer__title em {
  font-style: italic;
  color: var(--color-lav);
}

.case-footer__sub {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-ink3);
  margin: 0 0 32px;
  letter-spacing: 0.04em;
}

.case-footer__btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-next {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-bg);
  background: var(--color-ink);
  border: none;
  padding: 11px 22px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.btn-next:hover {
  background: var(--color-sage);
}

.dark .btn-next {
  color: var(--color-bg);
  background: var(--color-ink);
}

.btn-next__wip {
  font-family: var(--font-mono);
  font-size: 9px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  padding: 2px 8px;
}

.btn-back-home {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-ink2);
  background: transparent;
  border: 1.5px solid var(--color-border2);
  border-radius: var(--radius-full);
  padding: 11px 20px;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.btn-back-home:hover {
  color: var(--color-sage);
  border-color: var(--color-sage);
}

/* ══════════════════════════════════════════
   ARTIFACT CLICKABLE + ZOOM HINT
══════════════════════════════════════════ */
.artifact-card__img-wrap--clickable {
  cursor: zoom-in;
  position: relative;
}

.artifact-zoom-hint {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.artifact-card__img-wrap--clickable:hover .artifact-zoom-hint {
  opacity: 1;
}

.dark .artifact-zoom-hint {
  background: rgba(30, 30, 28, 0.85);
}

/* ══════════════════════════════════════════
   MODAL LIGHTBOX
══════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(10, 10, 8, 0.88);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-img {
  max-width: 92vw;
  max-height: 88vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: fixed;
  top: 20px;
  right: 24px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease;
  z-index: 10000;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.22);
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.22s ease;
}

.modal-enter-active .modal-img,
.modal-leave-active .modal-img {
  transition: transform 0.22s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-img,
.modal-leave-to .modal-img {
  transform: scale(0.95);
}
</style>
