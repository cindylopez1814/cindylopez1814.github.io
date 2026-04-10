<script setup lang="ts">
import { onMounted, computed, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import { useLang } from '../composables/useLang'

// ── Hero before/after
import cartolaAntigua from '../assets/IMG/opt/cartola/antigua.jpg'
// ── Resultado final
import cartolaNueva from '../assets/IMG/opt/cartola/nueva-principal.jpg'
import hojaInterna from '../assets/IMG/opt/cartola/hoja-interna.jpg'
import terminos from '../assets/IMG/opt/cartola/terminos.jpg'
// ── Versiones
import v0 from '../assets/IMG/opt/cartola/v0.jpg'
import v1 from '../assets/IMG/opt/cartola/v1.jpg'
import v2 from '../assets/IMG/opt/cartola/v2.jpg'
import v3 from '../assets/IMG/opt/cartola/v3.jpg'
// ── Tests Tarea 1
import testT1V0 from '../assets/IMG/opt/cartola/test-t1-v0.jpg'
import testT1V1 from '../assets/IMG/opt/cartola/test-t1-v1.jpg'
import testT1V2 from '../assets/IMG/opt/cartola/test-t1-v2.jpg'
// ── Tests Tarea 3
import testT3V0 from '../assets/IMG/opt/cartola/test-t3-v0.jpg'
import testT3V1 from '../assets/IMG/opt/cartola/test-t3-v1.jpg'
import testT3V2 from '../assets/IMG/opt/cartola/test-t3-v2.jpg'
// ── Hand-off
import deliveryImg from '../assets/IMG/opt/cartola/delivery.jpg'

const router = useRouter()
const { t } = useLang()

function goBack() {
  router.push('/#work')
}

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
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    // Fallback: force-show any element the observer missed after 700ms
    setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible')
      })
    }, 700)
  })
})

const techniques = computed(() => [
  { icon: '🎙️', title: t('cartola-tech-0-title'), n: '5', desc: t('cartola-tech-0-desc') },
  { icon: '📋', title: t('cartola-tech-1-title'), n: '+20', desc: t('cartola-tech-1-desc') },
  { icon: '👥', title: t('cartola-tech-2-title'), n: '157', desc: t('cartola-tech-2-desc') },
  { icon: '⚡', title: t('cartola-tech-3-title'), n: 'A/B', desc: t('cartola-tech-3-desc') },
])

const insights = computed(() => [
  { num: '01', accent: '#8A7CB8', title: t('cartola-ins-0-title'), body: t('cartola-ins-0-body') },
  { num: '02', accent: '#8A7CB8', title: t('cartola-ins-1-title'), body: t('cartola-ins-1-body') },
  { num: '03', accent: '#8A7CB8', title: t('cartola-ins-2-title'), body: t('cartola-ins-2-body') },
  { num: '04', accent: '#8A7CB8', title: t('cartola-ins-3-title'), body: t('cartola-ins-3-body') },
])

const versions = [
  { label: 'V.1', tag: t('cartola-v0-label'), desc: t('cartola-v0-desc'), src: v0 },
  { label: 'V.2', tag: t('cartola-v1-label'), desc: t('cartola-v1-desc'), src: v1 },
  { label: 'V.3', tag: t('cartola-v2-label'), desc: t('cartola-v2-desc'), src: v2 },
  { label: 'V.4', tag: t('cartola-v3-label'), desc: t('cartola-v3-desc'), src: v3, isFinal: true },
]

const testGroups = [
  {
    task: t('cartola-test-t1-label'),
    objective: t('cartola-test-t1-obj'),
    summary: t('cartola-test-t1-summary'),
    items: [
      {
        ver: 'Original',
        rate: '57%',
        status: 'bad',
        src: testT1V0,
        note: t('cartola-test-t1-v0-note'),
      },
      {
        ver: 'V.1',
        rate: '100%',
        status: 'good',
        src: testT1V1,
        note: t('cartola-test-t1-v1-note'),
      },
      {
        ver: 'V.2',
        rate: '100%',
        status: 'good',
        src: testT1V2,
        note: t('cartola-test-t1-v2-note'),
      },
    ],
  },
  {
    task: t('cartola-test-t3-label'),
    objective: t('cartola-test-t3-obj'),
    summary: t('cartola-test-t3-summary'),
    items: [
      {
        ver: 'Original',
        rate: '71%',
        status: 'bad',
        src: testT3V0,
        note: t('cartola-test-t3-v0-note'),
      },
      {
        ver: 'V.1',
        rate: '100%',
        status: 'mid',
        src: testT3V1,
        note: t('cartola-test-t3-v1-note'),
      },
      {
        ver: 'V.2',
        rate: '100%',
        status: 'good',
        src: testT3V2,
        note: t('cartola-test-t3-v2-note'),
      },
    ],
  },
]

const learnings = computed(() => [
  { icon: '🧠', title: t('cartola-learn-0-title'), body: t('cartola-learn-0-body') },
  { icon: '🎯', title: t('cartola-learn-1-title'), body: t('cartola-learn-1-body') },
  { icon: '✍️', title: t('cartola-learn-2-title'), body: t('cartola-learn-2-body') },
  { icon: '🔥', title: t('cartola-learn-3-title'), body: t('cartola-learn-3-body') },
])

const quotes = [
  { text: '"No sé si estoy ganando o perdiendo plata."', source: 'Entrevista #1' },
  { text: '"¿Esto es lo que tengo o lo que gané este mes?"', source: 'Entrevista #3' },
  { text: '"Prefiero llamar al ejecutivo que leer esto."', source: 'Encuesta · 42%' },
  { text: '"Hay demasiados números, no sé cuál es el importante."', source: 'Test de tareas' },
  { text: '"La cartola me confunde más de lo que me ayuda."', source: 'Test A/B · 67%' },
]
</script>

<template>
  <div class="case-page">
    <NavBar />

    <!-- ══════════════════════════════════════
         HERO
    ═══════════════════════════════════════ -->
    <header class="case-hero">
      <div class="case-hero__inner">
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
            {{ t('cartola-back') }}
          </button>
          <div class="case-eyebrow">
            <span class="case-tag case-tag--navy">Fintech</span>
            <span class="case-tag case-tag--lav">UX Research</span>
            <span class="case-tag case-tag--lav">UI Design</span>
            <span class="case-num">{{ t('cartola-case-num') }}</span>
          </div>
        </div>

        <div class="case-hero__grid">
          <div class="case-hero__text">
            <h1 class="case-title">
              Cartola de<br />
              <em>Inversión</em>
            </h1>
            <p class="case-subtitle">{{ t('cartola-subtitle') }}</p>
            <p class="case-brief">{{ t('cartola-brief') }}</p>
            <div class="case-meta">
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('cartola-meta-role') }}</span>
                <span class="case-meta__val">Product Designer (único rol)</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('cartola-meta-year') }}</span>
                <span class="case-meta__val">2024</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('cartola-meta-platform') }}</span>
                <span class="case-meta__val">Documento físico &amp; digital</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('cartola-meta-tools') }}</span>
                <span class="case-meta__val">Figma · Maze · Useberry</span>
              </div>
            </div>
          </div>

          <!-- ── Hero composition: antes / después ── -->
          <div class="hero-composition" aria-label="Comparación antes y después de la cartola">
            <div class="hero-comp__bg" aria-hidden="true"></div>

            <!-- Documento ANTES -->
            <div class="hero-doc hero-doc--before">
              <span class="doc-badge doc-badge--before">Antes</span>
              <img :src="cartolaAntigua" alt="Cartola original Banchile" class="doc-img" />
            </div>

            <!-- Documento DESPUÉS -->
            <div class="hero-doc hero-doc--after">
              <span class="doc-badge doc-badge--after">Después</span>
              <img :src="cartolaNueva" alt="Cartola rediseñada Banchile" class="doc-img" />
            </div>

            <!-- Headline label -->
            <div class="hero-comp__label">
              <p class="hero-comp__headline">
                <span class="hero-comp__headline-top">De la confusión</span>
                <span class="hero-comp__headline-bot"><em>a la claridad financiera</em></span>
              </p>
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
          <span class="stat__num">5</span>
          <span class="stat__label">{{ t('cartola-stat-interviews') }}</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">+20</span>
          <span class="stat__label">{{ t('cartola-stat-surveys') }}</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">157</span>
          <span class="stat__label">{{ t('cartola-stat-users') }}</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">75%</span>
          <span class="stat__label">{{ t('cartola-stat-pref') }}</span>
        </div>
      </div>
    </div>

    <main class="case-main">
      <!-- 01 CONTEXTO -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">01</span>
          <span>{{ t('cartola-sec-1') }}</span>
        </div>
        <div class="context-grid">
          <div class="context-col">
            <h2 class="section-title--sm">{{ t('cartola-ctx-t1') }}</h2>
            <p v-html="t('cartola-ctx-p1a')"></p>
            <p v-html="t('cartola-ctx-p1b')"></p>
          </div>
          <div class="context-col">
            <h2 class="section-title--sm">{{ t('cartola-ctx-t2') }}</h2>
            <p>{{ t('cartola-ctx-p2a') }}</p>
            <p v-html="t('cartola-ctx-p2b')"></p>
          </div>
        </div>
      </section>

      <!-- 02 PROBLEMA -->
      <section class="case-section problem-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">02</span>
          <span>{{ t('cartola-sec-2') }}</span>
        </div>
        <blockquote class="problem-quote">{{ t('cartola-problem-quote') }}</blockquote>
        <div class="problem-detail">
          <p>{{ t('cartola-problem-intro') }}</p>
          <div class="problem-factors">
            <div class="factor">
              <span class="factor__icon">📊</span>
              <div>
                <strong>{{ t('cartola-factor-1-title') }}</strong>
                <p>{{ t('cartola-factor-1-body') }}</p>
              </div>
            </div>
            <div class="factor">
              <span class="factor__icon">🔍</span>
              <div>
                <strong>{{ t('cartola-factor-2-title') }}</strong>
                <p>{{ t('cartola-factor-2-body') }}</p>
              </div>
            </div>
            <div class="factor">
              <span class="factor__icon">📄</span>
              <div>
                <strong>{{ t('cartola-factor-3-title') }}</strong>
                <p>{{ t('cartola-factor-3-body') }}</p>
              </div>
            </div>
          </div>

          <!-- Citas reales de usuarios -->
          <div class="user-quotes-grid">
            <div v-for="(q, i) in quotes.slice(0, 4)" :key="i" class="user-quote-card">
              <p class="user-quote__text">{{ q.text }}</p>
              <span class="user-quote__source">{{ q.source }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 03 RESEARCH -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">03</span>
          <span>{{ t('cartola-sec-3') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('cartola-research-t') }}<br />
          <em>{{ t('cartola-research-em') }}</em>
        </h2>
        <p class="section-intro">{{ t('cartola-research-intro') }}</p>
        <div class="techniques-grid">
          <div v-for="tech in techniques" :key="tech.title" class="technique-card">
            <div class="technique-icon">{{ tech.icon }}</div>
            <div class="technique-n">{{ tech.n }}</div>
            <h3 class="technique-title">{{ tech.title }}</h3>
            <p class="technique-desc">{{ tech.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 04 HIPÓTESIS -->
      <section class="case-section hyp-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">04</span>
          <span>{{ t('cartola-sec-4') }}</span>
        </div>
        <div class="hyp-grid">
          <div class="hyp-main">
            <span class="hyp-eyebrow">{{ t('cartola-hyp-eyebrow1') }}</span>
            <blockquote class="hyp-quote">"{{ t('cartola-hyp-quote') }}"</blockquote>
          </div>
          <div class="hyp-questions">
            <span class="hyp-eyebrow">{{ t('cartola-hyp-eyebrow2') }}</span>
            <div class="question">
              <span class="question-num">P1</span>
              <p>{{ t('cartola-q1') }}</p>
            </div>
            <div class="question">
              <span class="question-num">P2</span>
              <p>{{ t('cartola-q2') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 05 HALLAZGOS -->
      <section class="case-section insights-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">05</span>
          <span>{{ t('cartola-sec-5') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('cartola-findings-t') }}<br />
          <em>{{ t('cartola-findings-em') }}</em>
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

      <!-- 06 PROCESO DE DISEÑO -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">06</span>
          <span>{{ t('cartola-sec-6') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('cartola-process-t') }}<br />
          <em>{{ t('cartola-process-em') }}</em>
        </h2>
        <p class="section-intro">{{ t('cartola-process-intro') }}</p>

        <!-- Versiones -->
        <div class="versions-grid">
          <div v-for="(ver, i) in versions" :key="ver.label" class="version-card">
            <div class="version-card__header">
              <span class="version-label">{{ ver.label }}</span>
              <span class="version-tag" :class="ver.isFinal ? 'version-tag--final' : ''">{{
                ver.tag
              }}</span>
            </div>
            <p class="version-desc">{{ ver.desc }}</p>
            <div
              class="version-img-wrap version-img-wrap--clickable"
              @click="openModal(ver.src, ver.tag)"
            >
              <img :src="ver.src" :alt="ver.tag" class="version-img" />
              <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 07 VALIDACIÓN — Mapas de calor -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">07</span>
          <span>{{ t('cartola-sec-7') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('cartola-test-t') }}<br />
          <em>{{ t('cartola-test-em') }}</em>
        </h2>
        <p class="section-intro">{{ t('cartola-test-intro') }}</p>

        <!-- Tabla de tiempos por tarea -->
        <div class="time-table-wrap">
          <div class="time-table-wrap__header">
            <h3 class="time-table__title">Tiempo promedio por tarea</h3>
            <span class="time-table__sub">Test de usabilidad · n=157 · valores en segundos</span>
          </div>

          <div class="time-table">
            <!-- Column headers -->
            <div class="time-table__head">
              <div class="th-task"></div>
              <div class="th-col th-col--base">
                <span class="th-ver">Original</span>
                <span class="th-name">Cartola antigua</span>
              </div>
              <div class="th-col th-col--v1">
                <span class="th-ver">V.1</span>
                <span class="th-name">Primera iteración</span>
              </div>
              <div class="th-col th-col--v2">
                <span class="th-ver">V.2</span>
                <span class="th-name">Segunda iteración</span>
              </div>
            </div>

            <!-- Row: Patrimonio -->
            <div class="time-table__row">
              <span class="time-task">Ver patrimonio total</span>
              <div class="time-cell time-cell--base">
                <span class="time-num">39"</span>
              </div>
              <div class="time-cell time-cell--good">
                <span class="time-num">23"</span>
                <span class="time-delta">↓41%</span>
              </div>
              <div class="time-cell time-cell--good">
                <span class="time-num">24"</span>
                <span class="time-delta">↓38%</span>
              </div>
            </div>

            <!-- Row: Ganancia -->
            <div class="time-table__row">
              <span class="time-task">Ver ganancia/pérdida</span>
              <div class="time-cell time-cell--base">
                <span class="time-num">42"</span>
              </div>
              <div class="time-cell time-cell--good">
                <span class="time-num">28"</span>
                <span class="time-delta">↓33%</span>
              </div>
              <div class="time-cell time-cell--good">
                <span class="time-num">27"</span>
                <span class="time-delta">↓36%</span>
              </div>
            </div>

            <!-- Row: Egresos -->
            <div class="time-table__row">
              <span class="time-task">Identificar egresos</span>
              <div class="time-cell time-cell--base">
                <span class="time-num">51"</span>
              </div>
              <div class="time-cell time-cell--good">
                <span class="time-num">16"</span>
                <span class="time-delta">↓69%</span>
              </div>
              <div class="time-cell time-cell--good">
                <span class="time-num">16"</span>
                <span class="time-delta">↓69%</span>
              </div>
            </div>
          </div>

          <!-- Preferencia A/B -->
          <div class="time-table__pref">
            <p class="pref-eyebrow">Preferencia declarada · test A/B</p>
            <div class="pref-bar">
              <span class="pref-label">Cartola original</span>
              <div class="pref-track">
                <div class="pref-fill pref-fill--old" style="width: 25%"></div>
              </div>
              <span class="pref-pct pref-pct--old">25%</span>
            </div>
            <div class="pref-bar">
              <span class="pref-label">Nueva versión</span>
              <div class="pref-track">
                <div class="pref-fill pref-fill--new" style="width: 75%"></div>
              </div>
              <span class="pref-pct pref-pct--new">75%</span>
            </div>
          </div>
        </div>

        <div v-for="group in testGroups" :key="group.task" class="test-group">
          <!-- Task header -->
          <div class="test-group__header">
            <div class="test-group__meta">
              <span class="test-task-label">{{ group.task }}</span>
              <p class="test-task-obj">{{ group.objective }}</p>
            </div>
            <div class="test-group__summary">
              <span class="test-summary-icon">💡</span>
              <p>{{ group.summary }}</p>
            </div>
          </div>

          <!-- Heatmap comparison -->
          <div class="test-cards-grid">
            <div v-for="item in group.items" :key="item.ver" class="test-card">
              <div class="test-card__meta">
                <span class="test-ver">{{ item.ver }}</span>
                <span class="test-rate" :class="`test-rate--${item.status}`"
                  >{{ item.rate }} éxito</span
                >
              </div>
              <div
                class="test-img-wrap"
                @click="openModal(item.src, group.task + ' – ' + item.ver)"
              >
                <img :src="item.src" :alt="group.task + ' – ' + item.ver" class="test-img" />
                <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
              </div>
              <p class="test-note">{{ item.note }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 08 RESULTADO FINAL -->
      <section class="case-section artifacts-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">08</span>
          <span>{{ t('cartola-sec-8') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('cartola-result-t') }}<br />
          <em>{{ t('cartola-result-em') }}</em>
        </h2>
        <p class="section-intro">{{ t('cartola-result-intro') }}</p>

        <div class="artifacts-grid">
          <!-- Hoja principal -->
          <div class="artifact-card">
            <div class="artifact-card__header">
              <span class="artifact-tag">{{ t('cartola-artifact-1-tag') }}</span>
              <p class="artifact-desc">{{ t('cartola-artifact-1-desc') }}</p>
            </div>
            <div
              class="artifact-card__img-wrap artifact-card__img-wrap--clickable"
              @click="openModal(cartolaNueva, t('cartola-artifact-1-tag'))"
            >
              <img :src="cartolaNueva" :alt="t('cartola-artifact-1-tag')" class="artifact-img" />
              <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
            </div>
          </div>

          <!-- Hoja interna -->
          <div class="artifact-card">
            <div class="artifact-card__header">
              <span class="artifact-tag">{{ t('cartola-artifact-2-tag') }}</span>
              <p class="artifact-desc">{{ t('cartola-artifact-2-desc') }}</p>
            </div>
            <div
              class="artifact-card__img-wrap artifact-card__img-wrap--clickable"
              @click="openModal(hojaInterna, t('cartola-artifact-2-tag'))"
            >
              <img :src="hojaInterna" :alt="t('cartola-artifact-2-tag')" class="artifact-img" />
              <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
            </div>
          </div>

          <!-- Términos y condiciones -->
          <div class="artifact-card">
            <div class="artifact-card__header">
              <span class="artifact-tag">{{ t('cartola-artifact-3-tag') }}</span>
              <p class="artifact-desc">{{ t('cartola-artifact-3-desc') }}</p>
            </div>
            <div
              class="artifact-card__img-wrap artifact-card__img-wrap--clickable"
              @click="openModal(terminos, t('cartola-artifact-3-tag'))"
            >
              <img :src="terminos" :alt="t('cartola-artifact-3-tag')" class="artifact-img" />
              <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 09 HAND-OFF -->
      <section class="case-section handoff-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">09</span>
          <span>Hand-off &amp; Entrega</span>
        </div>
        <h2 class="section-title">
          Diseño listo<br />
          <em>para producción</em>
        </h2>
        <p class="section-intro">
          Entrega completa en Figma con especificaciones, tokens, estados, redlines y anotaciones,
          lista para implementación directa por el equipo de desarrollo.
        </p>
        <div
          class="handoff-img-wrap handoff-img-wrap--clickable"
          @click="openModal(deliveryImg, 'Entregable Figma — Cartola de Inversión')"
        >
          <img
            :src="deliveryImg"
            alt="Entregable Figma — Cartola de Inversión"
            class="handoff-img"
          />
          <span class="artifact-zoom-hint" aria-hidden="true">🔍</span>
        </div>
      </section>

      <!-- 10 APRENDIZAJES -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">10</span>
          <span>{{ t('cartola-sec-9') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('cartola-learnings-t') }}<br />
          <em>{{ t('cartola-learnings-em') }}</em>
        </h2>

        <!-- Outcome strip -->
        <div class="outcome-block">
          <div class="outcome-stat">
            <span class="outcome-num">75%</span>
            <span class="outcome-label">{{ t('cartola-outcome-pref') }}</span>
          </div>
          <div class="outcome-stat">
            <span class="outcome-num">↓40%</span>
            <span class="outcome-label">{{ t('cartola-outcome-time') }}</span>
          </div>
          <div class="outcome-stat">
            <span class="outcome-num">100%</span>
            <span class="outcome-label">{{ t('cartola-outcome-prod') }}</span>
          </div>
          <div class="outcome-stat">
            <span class="outcome-num">↑</span>
            <span class="outcome-label">{{ t('cartola-outcome-trust') }}</span>
          </div>
        </div>

        <div class="learnings-grid">
          <div v-for="l in learnings" :key="l.title" class="learning-card">
            <span class="learning-icon">{{ l.icon }}</span>
            <h3 class="learning-title">{{ l.title }}</h3>
            <p class="learning-body">{{ l.body }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER CTA -->
    <footer class="case-footer" data-reveal>
      <div class="case-footer__inner">
        <p class="case-footer__label">{{ t('cartola-next-label') }}</p>
        <h2 class="case-footer__title">
          {{ t('cartola-next-title1') }}<br />
          <em>{{ t('cartola-next-title2') }}</em>
        </h2>
        <p class="case-footer__sub">{{ t('cartola-next-sub') }}</p>
        <div class="case-footer__btns">
          <button class="btn-back-home" @click="goBack">{{ t('cartola-btn-back') }}</button>
          <button class="btn-next" @click="router.push('/case/isla-nativa')">
            {{ t('cartola-btn-next') }}
          </button>
        </div>
      </div>
    </footer>

    <!-- MODAL -->
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
/* ══ TOKEN ACCENT ══════════════════════════════════════════ */
.case-page {
  background: var(--color-bg);
  min-height: 100vh;
  --accent: #8a7cb8;
  --accent-light: rgba(138, 124, 184, 0.12);
  --accent-mid: rgba(138, 124, 184, 0.25);
}

/* ══ HERO ══════════════════════════════════════════════════ */
.case-hero {
  padding: calc(var(--nav-height) + clamp(40px, 6vw, 72px)) var(--section-padding-x)
    clamp(48px, 6vw, 80px);
  background: var(--color-bg);
  position: relative;
  overflow: hidden;
}

.case-hero::before {
  content: '';
  position: absolute;
  top: -80px;
  left: -80px;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(138, 124, 184, 0.08) 0%, transparent 65%);
  pointer-events: none;
}

.case-hero__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

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
  color: var(--accent);
  border-color: var(--accent);
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

.case-tag--navy {
  background: rgba(30, 58, 95, 0.1);
  color: #1e3a5f;
}

.dark .case-tag--navy {
  background: rgba(100, 140, 200, 0.14);
  color: #8ab0d8;
}

.case-tag--lav {
  background: var(--accent-light);
  color: var(--accent);
}

.case-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-ink3);
  margin-left: auto;
}

.case-hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}

@media (max-width: 860px) {
  .case-hero__grid {
    grid-template-columns: 1fr;
  }

  .case-hero {
    padding-top: calc(var(--nav-height) + 5rem);
  }
}

.case-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5.5vw, 72px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  margin: 0 0 16px;
}

.case-title em {
  font-style: italic;
  color: var(--accent);
}

.case-subtitle {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink3);
  margin: 0 0 16px;
}

.case-brief {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-ink2);
  max-width: 500px;
  margin: 0 0 32px;
}

.case-meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  padding-top: 24px;
  border-top: 1px solid var(--color-line);
}

.case-meta__item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.case-meta__label {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink3);
}

.case-meta__val {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink);
}

/* ══ HERO COMPOSITION ══════════════════════════════════════ */
.hero-composition {
  position: relative;
  min-height: 460px;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.hero-comp__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #2c3e6e 0%, #3e2f78 100%);
  border-radius: var(--radius-lg);
}

/* ── Before / After documents ── */
.hero-doc {
  position: absolute;
  width: 58%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  z-index: 2;
}

.hero-doc--before {
  top: 28px;
  left: 14px;
  transform: rotate(-3.5deg);
  opacity: 0.7;
  z-index: 2;
}

.hero-doc--after {
  bottom: 36px;
  right: 14px;
  transform: rotate(2deg);
  z-index: 3;
}

.doc-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  align-self: flex-start;
}

.doc-badge--before {
  background: rgba(255, 255, 255, 0.88);
  color: #2c3e6e;
  border: none;
}

.dark .doc-badge--before {
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.85);
}

.doc-badge--after {
  background: #8a7cb8;
  color: #fff;
  border: none;
}

.dark .doc-badge--after {
  background: rgba(138, 124, 184, 0.5);
  color: #fff;
}

.doc-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.45),
    0 2px 8px rgba(0, 0, 0, 0.25);
}

/* ── Label ── */
.hero-comp__label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: clamp(48px, 8vw, 72px) clamp(20px, 3vw, 28px) clamp(20px, 2.5vw, 26px);
  background: linear-gradient(to top, rgba(12, 8, 40, 0.88) 0%, rgba(12, 8, 40, 0.5) 55%, transparent 100%);
  text-align: left;
  z-index: 4;
}

.hero-comp__headline {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hero-comp__headline-top {
  font-family: var(--font-mono);
  font-size: clamp(9px, 1vw, 11px);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  display: block;
  margin-bottom: 4px;
}

.hero-comp__headline-bot {
  font-family: var(--font-serif);
  font-size: clamp(18px, 2.4vw, 30px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.97);
  display: block;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.6);
}

.hero-comp__headline-bot em {
  font-style: italic;
}

/* ══ STATS STRIP ═══════════════════════════════════════════ */
.stats-strip {
  background: var(--color-ink);
  padding: clamp(28px, 4vw, 40px) var(--section-padding-x);
}

.dark .stats-strip {
  background: var(--color-bg2);
}

.stats-inner {
  max-width: var(--content-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
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
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--accent);
  line-height: 1;
}

.stat__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  max-width: 120px;
}

.dark .stat__label {
  color: var(--color-ink3);
}

.stat-divider {
  width: 1px;
  height: 44px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
}

.dark .stat-divider {
  background: var(--color-border2);
}

@media (max-width: 860px) and (min-width: 521px) {
  .stats-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .stat {
    padding: 20px 24px;
    border-bottom: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
  }
  .stat:nth-child(2n) {
    border-right: none;
  }
  .stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
  .stat-divider {
    display: none;
  }
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

/* ══ MAIN ══════════════════════════════════════════════════ */
.case-main {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: clamp(48px, 6vw, 80px) var(--section-padding-x);
  display: flex;
  flex-direction: column;
  gap: clamp(64px, 8vw, 112px);
}

.case-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.case-section__label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink3);
}

.sec-num {
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--color-ink);
  margin: 0;
}

.section-title em {
  font-style: italic;
  color: var(--accent);
}

.section-title--sm {
  font-family: var(--font-serif);
  font-size: clamp(18px, 2.4vw, 26px);
  font-weight: 400;
  color: var(--color-ink);
  margin: 0 0 8px;
}

.section-intro {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-ink2);
  max-width: 640px;
  margin: 0;
}

/* ── Context ── */
.context-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.context-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.context-col p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-ink2);
  margin: 0;
}

@media (max-width: 720px) {
  .context-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

/* ── Problem ── */
.problem-section {
  background: var(--color-surface);
  padding: clamp(32px, 4vw, 56px) clamp(24px, 4vw, 56px);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--accent);
}

.problem-quote {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3vw, 36px);
  font-style: italic;
  color: var(--color-ink);
  line-height: 1.3;
  margin: 0;
}

.problem-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.problem-detail > p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-ink2);
  margin: 0;
}

.problem-factors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 640px) {
  .problem-factors {
    grid-template-columns: 1fr;
  }
}

.factor {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.factor__icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.factor strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-ink);
  margin-bottom: 4px;
}

.factor p {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-ink2);
  margin: 0;
}

/* ── User quotes in problem section ── */
.user-quotes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 560px) {
  .user-quotes-grid {
    grid-template-columns: 1fr;
  }
}

.user-quote-card {
  background: rgba(138, 124, 184, 0.07);
  border: 1px solid rgba(138, 124, 184, 0.22);
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.user-quote__text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--color-ink);
  margin: 0;
}

.user-quote__source {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--accent);
  text-transform: uppercase;
}

/* ── Techniques ── */
.techniques-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 860px) {
  .techniques-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .techniques-grid {
    grid-template-columns: 1fr;
  }
}

.technique-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 24px 20px;
  border-left: 3px solid var(--accent);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.technique-icon {
  font-size: 22px;
}

.technique-n {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
}

.technique-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
  padding-top: 10px;
  border-top: 1px solid var(--color-line);
}

.technique-desc {
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-ink2);
  margin: 0;
}

/* ── Hypothesis ── */
.hyp-section {
  background: var(--color-ink);
  padding: clamp(40px, 5vw, 64px) clamp(28px, 4vw, 56px);
  border-radius: var(--radius-lg);
}

.dark .hyp-section {
  background: var(--color-bg2);
}

.hyp-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;
}

@media (max-width: 720px) {
  .hyp-grid {
    grid-template-columns: 1fr;
  }
}

.hyp-eyebrow {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  display: block;
  margin-bottom: 16px;
}

.dark .hyp-eyebrow {
  color: var(--color-ink3);
}

.hyp-quote {
  font-family: var(--font-serif);
  font-size: clamp(18px, 2.8vw, 28px);
  font-style: italic;
  color: #f5f2ee;
  line-height: 1.4;
  margin: 0;
}

.dark .hyp-quote {
  color: var(--color-ink);
}

.hyp-questions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.question {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.question-num {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 3px;
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
}

.question p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
}

.dark .question p {
  color: var(--color-ink2);
}

/* ── Insights ── */
.insights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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
  border-radius: var(--radius-lg);
  padding: 24px 20px;
  border-top: 3px solid var(--ins-accent);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.insight-num {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--ins-accent);
}

.insight-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
}

.insight-body {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-ink2);
  margin: 0;
}

/* ══ VERSIONES ═════════════════════════════════════════════ */
.versions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1000px) {
  .versions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .versions-grid {
    grid-template-columns: 1fr;
  }
}

.version-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 20px 16px;
}

.version-card__header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.version-label {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
}

.version-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: var(--radius-full);
  background: var(--color-bg);
  color: var(--color-ink2);
  border: 1px solid var(--color-line);
}

.version-tag--final {
  background: var(--accent-light);
  color: var(--accent);
  border-color: rgba(138, 124, 184, 0.3);
}

.version-desc {
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-ink2);
  margin: 0;
}

.version-img-wrap {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-bg);
}

.version-img-wrap--clickable {
  cursor: zoom-in;
}

.version-img-wrap--clickable:hover .artifact-zoom-hint {
  opacity: 1;
}

.version-img-wrap--clickable:hover .version-img {
  transform: scale(1.03);
}

.version-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
}

/* ══ VALIDATION TIME TABLE ════════════════════════════════ */
.time-table-wrap {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.time-table-wrap__header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.time-table__title {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;
  color: var(--color-ink);
  margin: 0;
}

.time-table__sub {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink3);
}

/* Table grid */
.time-table {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.time-table__head,
.time-table__row {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;
}

/* Header row */
.time-table__head {
  background: var(--color-bg);
  border-bottom: 2px solid var(--color-border);
}

.th-task {
  padding: 14px 20px;
  border-right: 1px solid var(--color-border);
}

.th-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 12px;
  border-right: 1px solid var(--color-border);
}

.th-col:last-child {
  border-right: none;
}

.th-ver {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.th-name {
  font-family: var(--font-mono);
  font-size: 8.5px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
}

.th-col--base .th-ver,
.th-col--base .th-name {
  color: var(--color-ink3);
}

.th-col--v1 .th-ver,
.th-col--v2 .th-ver {
  color: var(--accent);
}

.th-col--v1 .th-name,
.th-col--v2 .th-name {
  color: rgba(138, 124, 184, 0.7);
}

/* Data rows */
.time-table__row {
  border-bottom: 1px solid var(--color-border);
  align-items: stretch;
}

.time-table__row:last-child {
  border-bottom: none;
}

.time-task {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink);
  padding: 16px 20px;
  border-right: 1px solid var(--color-border);
  display: flex;
  align-items: center;
}

.time-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 14px 12px;
  border-right: 1px solid var(--color-border);
}

.time-cell:last-child {
  border-right: none;
}

.time-cell--base {
  background: var(--color-bg);
}

.time-cell--good {
  background: var(--accent-light);
}

.time-num {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
}

.time-cell--base .time-num {
  color: var(--color-ink3);
}

.time-cell--good .time-num {
  color: var(--accent);
}

.time-delta {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--accent);
  background: rgba(138, 124, 184, 0.15);
  padding: 1px 6px;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .time-table__head,
  .time-table__row {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }
  .time-task {
    padding: 12px 12px;
    font-size: 12px;
  }
  .time-num {
    font-size: 18px;
  }
}

/* Preference bar */
.time-table__pref {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pref-eyebrow {
  font-family: var(--font-mono);
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink3);
  margin: 0;
}

.pref-bar {
  display: flex;
  align-items: center;
  gap: 14px;
}

.pref-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--color-ink2);
  min-width: 110px;
}

.pref-track {
  flex: 1;
  height: 10px;
  background: var(--color-border);
  border-radius: 5px;
  overflow: hidden;
}

.pref-fill {
  height: 100%;
  border-radius: 5px;
  transition: width 0.6s ease;
}

.pref-fill--old {
  background: var(--color-ink3);
}

.pref-fill--new {
  background: var(--accent);
}

.pref-pct {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  min-width: 36px;
  text-align: right;
}

.pref-pct--old {
  color: var(--color-ink3);
}

.pref-pct--new {
  color: var(--accent);
}

/* ══ TEST SECTION ══════════════════════════════════════════ */
.test-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border-top: 3px solid var(--accent);
}

.test-group + .test-group {
  margin-top: 8px;
}

.test-group__header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

@media (max-width: 640px) {
  .test-group__header {
    grid-template-columns: 1fr;
  }
}

.test-task-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 6px;
}

.test-task-obj {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
}

.test-group__summary {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  background: var(--color-bg);
  border-radius: 10px;
  padding: 14px 16px;
}

.test-summary-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.test-group__summary p {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-ink2);
  margin: 0;
}

.test-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 720px) {
  .test-cards-grid {
    grid-template-columns: 1fr;
  }
}

.test-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.test-card__meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.test-ver {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
}

.test-rate {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: var(--radius-full);
}

.test-rate--bad {
  background: rgba(220, 80, 60, 0.1);
  color: #c0392b;
}

.test-rate--mid {
  background: rgba(230, 160, 40, 0.12);
  color: #c07a00;
}

.test-rate--good {
  background: rgba(40, 160, 100, 0.1);
  color: #1a7a50;
}

.test-img-wrap {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: zoom-in;
}

.test-img-wrap:hover .artifact-zoom-hint {
  opacity: 1;
}

.test-img-wrap:hover .test-img {
  transform: scale(1.03);
}

.test-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
}

.test-note {
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-ink2);
  margin: 0;
}

/* ══ ARTIFACTS — 3-col equal ═══════════════════════════════ */
.artifacts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 860px) {
  .artifacts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .artifacts-grid {
    grid-template-columns: 1fr;
  }
}

.artifact-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.artifact-card__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.artifact-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  width: fit-content;
  background: var(--accent-light);
  color: var(--accent);
}

.artifact-desc {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-ink2);
  margin: 0;
}

.artifact-card__img-wrap {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  flex: 1;
}

.artifact-card__img-wrap--clickable {
  cursor: zoom-in;
}

.artifact-card__img-wrap--clickable:hover .artifact-zoom-hint {
  opacity: 1;
}

.artifact-card__img-wrap--clickable:hover .artifact-img {
  transform: scale(1.03);
}

.artifact-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
}

.artifact-zoom-hint {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.2s;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.dark .artifact-zoom-hint {
  background: rgba(30, 30, 28, 0.85);
}

/* ══ HAND-OFF ══════════════════════════════════════════════ */
.handoff-img-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-surface);
  box-shadow: var(--shadow-lg);
  height: 500px;
  width: fit-content;
}

.handoff-img-wrap--clickable {
  cursor: zoom-in;
}

.handoff-img-wrap--clickable:hover .artifact-zoom-hint {
  opacity: 1;
}

.handoff-img-wrap--clickable:hover .handoff-img {
  transform: scale(1.015);
}

.handoff-img {
  width: auto;
  height: inherit;
  display: block;
  transition: transform 0.4s ease;
}

/* ══ APRENDIZAJES ══════════════════════════════════════════ */
.outcome-block {
  display: flex;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.outcome-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 20px;
  gap: 6px;
  border-right: 1px solid var(--color-line);
}

.outcome-stat:last-child {
  border-right: none;
}

.outcome-num {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
}

.outcome-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink3);
  text-align: center;
  max-width: 120px;
}

@media (max-width: 480px) {
  .outcome-block {
    flex-direction: column;
  }

  .outcome-stat {
    border-right: none;
    border-bottom: 1px solid var(--color-line);
  }
}

.learnings-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 720px) {
  .learnings-grid {
    grid-template-columns: 1fr;
  }
}

.learning-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.learning-icon {
  font-size: 24px;
}

.learning-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
}

.learning-body {
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-ink2);
  margin: 0;
}

/* ══ FOOTER CTA ════════════════════════════════════════════ */
.case-footer {
  background: var(--color-ink);
  padding: clamp(56px, 7vw, 96px) var(--section-padding-x);
  text-align: center;
  margin-top: clamp(40px, 5vw, 64px);
}

.dark .case-footer {
  background: var(--color-bg2);
}

.case-footer__inner {
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.case-footer__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 16px;
}

.case-footer__title {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: #f5f2ee;
  margin: 0 0 16px;
}

.dark .case-footer__title {
  color: var(--color-ink);
}

.case-footer__title em {
  font-style: italic;
  color: var(--accent);
}

.case-footer__sub {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(245, 242, 238, 0.55);
  margin: 0 0 32px;
}

.dark .case-footer__sub {
  color: var(--color-ink2);
}

.case-footer__btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}

.btn-back-home {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: rgba(245, 242, 238, 0.6);
  background: transparent;
  border: 1.5px solid rgba(245, 242, 238, 0.2);
  border-radius: var(--radius-full);
  padding: 10px 20px;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.dark .btn-back-home {
  color: var(--color-ink2);
  border-color: var(--color-border2);
}

.btn-back-home:hover {
  color: rgba(245, 242, 238, 0.9);
  border-color: rgba(245, 242, 238, 0.5);
}

.dark .btn-back-home:hover {
  color: var(--color-ink);
  border-color: var(--color-ink);
}

.btn-next {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-bg);
  background: var(--accent);
  border: none;
  border-radius: var(--radius-full);
  padding: 10px 22px;
  cursor: pointer;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.btn-next:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.dark .btn-next {
  color: var(--color-bg);
  background: var(--accent);
}

/* ══ MODAL ═════════════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(10, 10, 8, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(6px);
}

.modal-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: fixed;
  top: 20px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 18px;
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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
