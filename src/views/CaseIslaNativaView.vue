<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import { useLang } from '../composables/useLang'

import uxArchImg from '../assets/IMG/opt/isla-nativa/ux-architecture.jpg'
import navModelImg from '../assets/IMG/opt/isla-nativa/navigation-model.jpg'
import dsPrincipiosImg from '../assets/IMG/opt/isla-nativa/ds-principios.jpg'
import dsColorImg from '../assets/IMG/opt/isla-nativa/ds-color.jpg'
import homeDesktopImg from '../assets/IMG/opt/isla-nativa/home-desktop.jpg'
import homeTabletImg from '../assets/IMG/opt/isla-nativa/home-tablet.jpg'
import homeMobileImg from '../assets/IMG/opt/isla-nativa/hero-mobile.jpg'
import homeMobileImgFull from '../assets/IMG/opt/isla-nativa/Home — Mobile.jpg'

const FIGMA =
  'https://www.figma.com/design/bgY7HadfATSzqTphrUQ4Pp/Isla-Nativa-Travel-%E2%80%93-AI-Product-Design'
const DEMO = 'https://isla-nativa.vercel.app/'

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
    setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible')
      })
    }, 700)
  })
})

const processSteps = [
  {
    n: '01',
    icon: '🔍',
    title: 'Discovery',
    facts: [
      'Problem landscape del turismo experiencial en Brasil',
      '2 user personas primarias con goals y frustraciones definidos',
      'Oportunidades de diseño identificadas por tipo de fricción',
    ],
  },
  {
    n: '02',
    icon: '🏗️',
    title: 'Product Architecture',
    facts: [
      '7 módulos de MVP: Discovery Engine, Catalog, Comparison, Booking, Pricing, Trust & Reviews y Profiles',
      '4 dominios de información: Discovery, Experience, Booking y Account',
      'Modelo de navegación de 5 ítems con jerarquía clara',
    ],
  },
  {
    n: '03',
    icon: '🗺️',
    title: 'User Flows',
    facts: [
      '4 flujos críticos: Discover & Book, Compare Experiences, Complete Booking y Manage Reservation',
      '101 nodos de flujo en total, con todos los puntos de decisión mapeados',
      'Transiciones entre pantallas y estados de error documentados',
    ],
  },
  {
    n: '04',
    icon: '🎨',
    title: 'Design System',
    facts: [
      '193 variables en 5 colecciones semánticas: Color, Components, Spacing, Radius y Typography',
      '25 component sets con 430 variantes documentadas',
      '16 estilos de texto con jerarquía de Display 48px a Caption 11px',
    ],
  },
  {
    n: '05',
    icon: '🖥️',
    title: 'UI Screens',
    facts: [
      'Home y Search Results diseñados en 3 breakpoints: 1920px, 768px y 390px',
      'Experience Detail y Booking Flow en progreso',
      'Todos los componentes del design system aplicados, sin valores hardcoded',
    ],
  },
]

const differentiators = [
  {
    n: '01',
    title: 'Velocidad documentable',
    body: 'El design system completo fue construido en días. Un equipo tradicional tardaría semanas. La diferencia está documentada y es medible.',
  },
  {
    n: '02',
    title: 'Zero assets externos',
    body: 'Sin templates ni kits de UI. Los 60 íconos son instancias de un component set nativo. Las imágenes son fills de Figma. Todo construido desde cero.',
  },
  {
    n: '03',
    title: 'Código de diseño real',
    body: 'El 44% de los nodos tienen variable binding activo. Cualquier cambio en el token se propaga a todo el producto: arquitectura lista para dark mode, theming y handoff.',
  },
  {
    n: '04',
    title: 'Consistencia a escala',
    body: 'Con 13.131 nodos en el archivo, la consistencia manual es inviable. La IA ejecutó auditorías y correcciones masivas en segundos.',
  },
  {
    n: '05',
    title: 'El diseñador como director',
    body: 'Cada decisión de arquitectura, jerarquía, semántica de tokens y flujo fue humana. La IA ejecutó; el criterio fue del diseñador.',
  },
]

const dsCollections = [
  { name: 'Color', vars: 98 },
  { name: 'Components', vars: 72 },
  { name: 'Spacing', vars: 14 },
  { name: 'Radius', vars: 5 },
  { name: 'Typography', vars: 4 },
]

const topComponents = [
  { name: 'Input', variants: 80 },
  { name: 'Button', variants: 61 },
  { name: 'Icons', variants: 60 },
  { name: 'Dropdown Item', variants: 30 },
  { name: 'Select', variants: 18 },
  { name: 'Experience Card', variants: 15 },
  { name: 'Search Result Card', variants: 15 },
  { name: 'Filter Chip', variants: 12 },
]

const statusModules = [
  { name: 'Discovery & Research', status: 'done' },
  { name: 'Product Architecture', status: 'done' },
  { name: 'User Flows — 4 flujos', status: 'done' },
  { name: 'Design System', status: 'done' },
  { name: 'UI Screens — Home', status: 'done' },
  { name: 'UI Screens — Search Results', status: 'done' },
  { name: 'UI Screens — Experience Detail', status: 'progress' },
  { name: 'Booking Flow', status: 'progress' },
  { name: 'Handoff & Dev Specs', status: 'progress' },
  { name: 'Prototypes interactivos', status: 'pending' },
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
            {{ t('lirmi-back') }}
          </button>
          <div class="case-eyebrow">
            <span class="case-tag case-tag--teal">Marketplace</span>
            <span class="case-tag case-tag--lav">AI-assisted</span>
            <span class="case-num">Caso 03 · 2026</span>
          </div>
        </div>

        <div class="case-hero__grid">
          <div class="case-hero__text">
            <h1 class="case-title">
              Isla Nativa<br />
              <em>Travel</em>
            </h1>
            <p class="case-subtitle">
              Marketplace de experiencias de viaje diseñado con IA de principio a fin.
            </p>
            <p class="case-brief">
              Un experimento real: construir un producto digital completo usando IA como único
              colaborador de ejecución. Sin templates, sin recursos externos, sin asistentes
              humanos.
            </p>
            <div class="case-meta">
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-role') }}</span>
                <span class="case-meta__val">Product Designer · end-to-end</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-year') }}</span>
                <span class="case-meta__val">2026 · En curso</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-platform') }}</span>
                <span class="case-meta__val">Web · Vue.js</span>
              </div>
              <div class="case-meta__item">
                <span class="case-meta__label">{{ t('lirmi-meta-tools') }}</span>
                <span class="case-meta__val">Figma MCP · Variables · Claude Code</span>
              </div>
            </div>
            <div class="case-hero__actions">
              <a :href="DEMO" target="_blank" rel="noopener" class="btn-demo">
                Ver demo en vivo ↗
              </a>
            </div>
          </div>

          <div class="hero-composition" aria-label="Pantalla Home de Isla Nativa Travel">
            <div class="hero-comp__bg" aria-hidden="true"></div>
            <div class="browser-mockup">
              <div class="browser-bar">
                <span class="browser-dot"></span>
                <span class="browser-dot"></span>
                <span class="browser-dot"></span>
                <span class="browser-url">islanativa.travel</span>
              </div>
              <div class="browser-screen">
                <img :src="homeDesktopImg" alt="Home Isla Nativa Travel" />
              </div>
            </div>
            <div class="hero-comp__label">
              <p class="hero-comp__headline">Construido con IA, dirigido por criterio humano</p>
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
          <span class="stat__num">13.131</span>
          <span class="stat__label">nodos en el archivo</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">44%</span>
          <span class="stat__label">nodos con variable binding</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">193</span>
          <span class="stat__label">variables en 5 colecciones</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <span class="stat__num">430</span>
          <span class="stat__label">variantes de componentes</span>
        </div>
      </div>
    </div>

    <main class="case-main">
      <!-- ══════════════════════════════════════
           01 EL PROBLEMA
      ═══════════════════════════════════════ -->
      <section class="case-section problem-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">01</span>
          <span>El Problema</span>
        </div>
        <blockquote class="problem-quote">
          El turismo experiencial en Brasil está fragmentado.
        </blockquote>
        <div class="problem-detail">
          <p>
            Los operadores locales dependen de canales informales: WhatsApp, redes sociales y boca a
            boca. Los viajeros enfrentan información dispersa, sin estándares de confianza ni forma
            de comparar opciones. La fricción en el proceso de decisión y compra es alta, y la
            experiencia digital prácticamente inexistente para la mayoría de los operadores.
          </p>
          <div class="problem-factors">
            <div class="factor">
              <span class="factor__icon">📵</span>
              <div>
                <strong>Operadores sin visibilidad digital</strong>
                <p>
                  Pequeños operadores sin plataforma propia. Su única presencia es un perfil en
                  redes y un número de WhatsApp. Cero infraestructura para escalar.
                </p>
              </div>
            </div>
            <div class="factor">
              <span class="factor__icon">🗺️</span>
              <div>
                <strong>Información dispersa y sin estándares</strong>
                <p>
                  No existe una forma de comparar opciones con criterios comunes. Precios ocultos,
                  reseñas no verificadas y descripciones inconsistentes generan desconfianza.
                </p>
              </div>
            </div>
            <div class="factor">
              <span class="factor__icon">💸</span>
              <div>
                <strong>Proceso de compra fragmentado</strong>
                <p>
                  El usuario navega entre múltiples plataformas para reservar transporte, tours y
                  actividades. No existe un ecosistema unificado con un solo flujo de pago.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a :href="FIGMA" target="_blank" rel="noopener" class="btn-figma">
          <svg width="14" height="14" viewBox="0 0 38 57" fill="none" aria-hidden="true">
            <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19H19v9.5Z" fill="currentColor" opacity=".6" />
            <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5H9.5Z" fill="currentColor" opacity=".6" />
            <path d="M19 38a9.5 9.5 0 1 1 9.5 9.5H19V38Z" fill="currentColor" opacity=".8" />
            <path
              d="M0 19a9.5 9.5 0 0 1 9.5-9.5H19V28.5H9.5A9.5 9.5 0 0 1 0 19Z"
              fill="currentColor"
              opacity=".4"
            />
            <path
              d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z"
              fill="currentColor"
            />
          </svg>
          Ver discovery completo en Figma
        </a>
      </section>

      <!-- ══════════════════════════════════════
           02 EL EXPERIMENTO
      ═══════════════════════════════════════ -->
      <section class="case-section experiment-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">02</span>
          <span>El Experimento</span>
        </div>
        <div class="exp-grid">
          <div class="exp-main">
            <span class="exp-eyebrow">El objetivo</span>
            <blockquote class="exp-quote">
              "Construir un producto digital completo usando IA como único colaborador de
              ejecución."
            </blockquote>
            <p class="exp-body">
              Sin templates, sin recursos externos. Cada frame, cada token, cada variante fue
              generado mediante prompts en tiempo real usando Claude Code con el MCP de Figma. El
              rol del designer no desapareció: se elevó a director de ejecución.
            </p>
          </div>
          <div class="exp-diffs">
            <span class="exp-eyebrow">Por qué importa</span>
            <div v-for="d in differentiators" :key="d.n" class="diff-item">
              <span class="diff-num">{{ d.n }}</span>
              <div>
                <strong>{{ d.title }}</strong>
                <p>{{ d.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           03 PROCESO
      ═══════════════════════════════════════ -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">03</span>
          <span>Proceso</span>
        </div>
        <h2 class="section-title">
          Metodología end-to-end,<br />
          <em>ejecutada con IA</em>
        </h2>
        <p class="section-intro">
          Cinco fases ejecutadas de principio a fin, cada una con entregables concretos y medibles.
          La IA operó como copiloto en cada etapa: investigación, arquitectura, flujos, sistema de
          diseño y pantallas.
        </p>

        <div class="process-list">
          <div v-for="step in processSteps" :key="step.n" class="process-card">
            <div class="process-card__num">{{ step.n }}</div>
            <div class="process-card__content">
              <span class="process-card__icon">{{ step.icon }}</span>
              <h3 class="process-card__title">{{ step.title }}</h3>
              <ul class="process-card__facts">
                <li v-for="f in step.facts" :key="f">{{ f }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Architecture artifacts -->
        <div class="arch-grid">
          <div>
            <p class="img-label">UX Architecture</p>
            <div
              class="img-block img-block--clickable"
              @click="openModal(uxArchImg, 'UX Architecture – Isla Nativa')"
            >
              <img :src="uxArchImg" alt="UX Architecture" />
              <span class="img-zoom" aria-hidden="true">🔍</span>
            </div>
          </div>
          <div>
            <p class="img-label">Navigation Model</p>
            <div
              class="img-block img-block--clickable"
              @click="openModal(navModelImg, 'Navigation Model – Isla Nativa')"
            >
              <img :src="navModelImg" alt="Navigation Model" />
              <span class="img-zoom" aria-hidden="true">🔍</span>
            </div>
          </div>
        </div>

        <!-- User Flows CTA -->
        <div class="figma-preview-cta">
          <div class="figma-preview-cta__text">
            <h3>User Flows · 101 nodos en 4 flujos</h3>
            <p>Discover &amp; Book · Compare Experiences · Complete Booking · Manage Reservation</p>
          </div>
          <a :href="FIGMA" target="_blank" rel="noopener" class="btn-figma btn-figma--lg">
            <svg width="14" height="14" viewBox="0 0 38 57" fill="none" aria-hidden="true">
              <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19H19v9.5Z" fill="currentColor" opacity=".6" />
              <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5H9.5Z" fill="currentColor" opacity=".6" />
              <path d="M19 38a9.5 9.5 0 1 1 9.5 9.5H19V38Z" fill="currentColor" opacity=".8" />
              <path
                d="M0 19a9.5 9.5 0 0 1 9.5-9.5H19V28.5H9.5A9.5 9.5 0 0 1 0 19Z"
                fill="currentColor"
                opacity=".4"
              />
              <path
                d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z"
                fill="currentColor"
              />
            </svg>
            Ver User Flows en Figma
          </a>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           04 DESIGN SYSTEM
      ═══════════════════════════════════════ -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">04</span>
          <span>Design System</span>
        </div>
        <h2 class="section-title">
          Un sistema construido<br />
          <em>para escalar</em>
        </h2>
        <p class="section-intro">
          193 variables, 25 component sets y 430 variantes. Construido sin valores hardcoded: cada
          elemento está vinculado a un token semántico que permite actualizar el sistema completo
          desde un solo punto.
        </p>

        <!-- Summary numbers -->
        <div class="ds-summary">
          <div class="ds-summary__item">
            <span class="ds-summary__num">25</span>
            <span class="ds-summary__label">Component sets</span>
          </div>
          <div class="ds-summary__item">
            <span class="ds-summary__num">430</span>
            <span class="ds-summary__label">Variantes</span>
          </div>
          <div class="ds-summary__item">
            <span class="ds-summary__num">16</span>
            <span class="ds-summary__label">Estilos de texto</span>
          </div>
          <div class="ds-summary__item">
            <span class="ds-summary__num">193</span>
            <span class="ds-summary__label">Variables</span>
          </div>
        </div>

        <!-- Collections -->
        <p class="img-label" style="margin-bottom: 12px">Variables por colección</p>
        <div class="ds-bars">
          <div v-for="c in dsCollections" :key="c.name" class="ds-bar-row">
            <span class="ds-bar-label">{{ c.name }}</span>
            <div class="ds-bar-track">
              <div class="ds-bar-fill" :style="{ width: (c.vars / 98) * 100 + '%' }"></div>
            </div>
            <span class="ds-bar-num">{{ c.vars }}</span>
          </div>
        </div>

        <!-- Top components -->
        <p class="img-label" style="margin-bottom: 12px">Top componentes por variantes</p>
        <div class="ds-comps">
          <div v-for="c in topComponents" :key="c.name" class="comp-chip">
            <span class="comp-chip__name">{{ c.name }}</span>
            <span class="comp-chip__num">{{ c.variants }}</span>
          </div>
        </div>

        <!-- DS images -->
        <div class="ds-grid">
          <div>
            <p class="img-label">Principios de Diseño</p>
            <div
              class="img-block img-block--clickable"
              @click="openModal(dsPrincipiosImg, 'Principios de Diseño – Isla Nativa')"
            >
              <img :src="dsPrincipiosImg" alt="Principios de Diseño" />
              <span class="img-zoom" aria-hidden="true">🔍</span>
            </div>
          </div>
          <div>
            <p class="img-label">Sistema de Color</p>
            <div
              class="img-block img-block--clickable"
              @click="openModal(dsColorImg, 'Sistema de Color – Isla Nativa')"
            >
              <img :src="dsColorImg" alt="Sistema de Color" />
              <span class="img-zoom" aria-hidden="true">🔍</span>
            </div>
          </div>
        </div>

        <a :href="FIGMA" target="_blank" rel="noopener" class="btn-figma">
          <svg width="14" height="14" viewBox="0 0 38 57" fill="none" aria-hidden="true">
            <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19H19v9.5Z" fill="currentColor" opacity=".6" />
            <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5H9.5Z" fill="currentColor" opacity=".6" />
            <path d="M19 38a9.5 9.5 0 1 1 9.5 9.5H19V38Z" fill="currentColor" opacity=".8" />
            <path
              d="M0 19a9.5 9.5 0 0 1 9.5-9.5H19V28.5H9.5A9.5 9.5 0 0 1 0 19Z"
              fill="currentColor"
              opacity=".4"
            />
            <path
              d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z"
              fill="currentColor"
            />
          </svg>
          Explorar Design System en Figma
        </a>
      </section>

      <!-- ══════════════════════════════════════
           05 PANTALLAS
      ═══════════════════════════════════════ -->
      <section class="case-section screens-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">05</span>
          <span>Pantallas</span>
        </div>
        <h2 class="section-title">
          Alta fidelidad<br />
          <em>en 3 breakpoints</em>
        </h2>
        <p class="section-intro">
          Cuatro pantallas diseñadas sobre el sistema construido por IA. Cada componente es una
          instancia del design system: ningún valor está hardcodeado en las pantallas.
        </p>

        <div class="screens-showcase">
          <div class="screen-block screen-block--desktop">
            <p class="img-label">Desktop — 1920px · 4.263px altura</p>
            <div
              class="img-block img-block--clickable img-block--screen"
              @click="openModal(homeDesktopImg, 'Home Desktop – Isla Nativa')"
            >
              <img :src="homeDesktopImg" alt="Home Desktop – Isla Nativa" />
              <span class="img-zoom" aria-hidden="true">🔍</span>
            </div>
          </div>
          <div class="screen-block screen-block--tablet">
            <p class="img-label">Tablet — 768px</p>
            <div
              class="img-block img-block--clickable img-block--screen"
              @click="openModal(homeTabletImg, 'Home Tablet – Isla Nativa')"
            >
              <img :src="homeTabletImg" alt="Home Tablet – Isla Nativa" />
              <span class="img-zoom" aria-hidden="true">🔍</span>
            </div>
          </div>
          <div class="screen-block screen-block--mobile">
            <p class="img-label">Mobile — 390px</p>
            <div
              class="img-block img-block--clickable img-block--mobile-full"
              @click="openModal(homeMobileImgFull, 'Home Mobile – Isla Nativa')"
            >
              <img :src="homeMobileImg" alt="Home Mobile – Isla Nativa" />
              <span class="img-zoom" aria-hidden="true">🔍</span>
            </div>
          </div>
        </div>

        <div class="figma-preview-cta">
          <div class="figma-preview-cta__text">
            <h3>Search Results · Desktop 1920px</h3>
            <p>Sidebar de filtros, grid de 6 cards y barra de búsqueda contextual.</p>
          </div>
          <a :href="FIGMA" target="_blank" rel="noopener" class="btn-figma btn-figma--lg">
            <svg width="14" height="14" viewBox="0 0 38 57" fill="none" aria-hidden="true">
              <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19H19v9.5Z" fill="currentColor" opacity=".6" />
              <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5H9.5Z" fill="currentColor" opacity=".6" />
              <path d="M19 38a9.5 9.5 0 1 1 9.5 9.5H19V38Z" fill="currentColor" opacity=".8" />
              <path
                d="M0 19a9.5 9.5 0 0 1 9.5-9.5H19V28.5H9.5A9.5 9.5 0 0 1 0 19Z"
                fill="currentColor"
                opacity=".4"
              />
              <path
                d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z"
                fill="currentColor"
              />
            </svg>
            Ver todas las pantallas en Figma
          </a>
        </div>
      </section>

      <!-- ══════════════════════════════════════
           06 ESTADO
      ═══════════════════════════════════════ -->
      <section class="case-section" data-reveal>
        <div class="case-section__label">
          <span class="sec-num">06</span>
          <span>Estado del Proyecto</span>
        </div>
        <h2 class="section-title">
          Progreso honesto,<br />
          <em>estado actual</em>
        </h2>
        <p class="section-intro">
          El proyecto está en desarrollo activo. El design system y las pantallas principales están
          completados; la implementación de los flujos de detalle y checkout continúa.
        </p>

        <div class="status-table">
          <div v-for="m in statusModules" :key="m.name" class="status-row">
            <span class="status-name">{{ m.name }}</span>
            <span :class="['status-badge', 'status-badge--' + m.status]">
              {{
                m.status === 'done'
                  ? 'Completado'
                  : m.status === 'progress'
                    ? 'En progreso'
                    : 'Pendiente'
              }}
            </span>
          </div>
        </div>

        <!-- Designer role highlight -->
        <div class="designer-role">
          <div class="designer-role__header">
            <span class="designer-role__tag">El rol del diseñador</span>
            <span class="designer-role__tagline">Director de ejecución, no operador</span>
          </div>
          <div class="designer-role__grid">
            <div class="designer-role__item">
              <span class="designer-role__icon">🧭</span>
              <div>
                <strong>Decisiones de arquitectura</strong>
                <p>
                  Qué páginas existen, cómo se nombran, qué jerarquía tienen. La IA propone; el
                  diseñador define.
                </p>
              </div>
            </div>
            <div class="designer-role__item">
              <span class="designer-role__icon">🔤</span>
              <div>
                <strong>Semántica de tokens</strong>
                <p>
                  Nombrar un color <em>color/feedback/warning</em> en vez de <em>orange-500</em> es
                  una decisión conceptual, no técnica.
                </p>
              </div>
            </div>
            <div class="designer-role__item">
              <span class="designer-role__icon">👁</span>
              <div>
                <strong>Coherencia visual</strong>
                <p>
                  Detectar cuándo algo no comunica lo correcto aunque técnicamente esté "bien". La
                  IA ejecuta; el ojo humano valida.
                </p>
              </div>
            </div>
            <div class="designer-role__item">
              <span class="designer-role__icon">🔄</span>
              <div>
                <strong>Dirección iterativa</strong>
                <p>
                  Cada prompt es una decisión de diseño. La calidad del output depende directamente
                  de la calidad del criterio humano.
                </p>
              </div>
            </div>
          </div>
          <blockquote class="learning-quote">
            "El rol del designer no desaparece, se eleva. Las decisiones sobre arquitectura de
            información, semántica de tokens y coherencia visual siguen siendo fundamentalmente
            humanas. La IA acelera la ejecución; el criterio sigue siendo mío."
          </blockquote>
        </div>
      </section>
    </main>

    <!-- ══════════════════════════════════════
         FOOTER CTA
    ═══════════════════════════════════════ -->
    <footer class="case-footer" data-reveal>
      <div class="case-footer__inner">
        <p class="case-footer__label">{{ t('isla-next-label') }}</p>
        <h2 class="case-footer__title">
          {{ t('isla-next-title1') }}<br />
          <em>{{ t('isla-next-title2') }}</em>
        </h2>
        <p class="case-footer__sub">{{ t('isla-next-sub') }}</p>
        <div class="case-footer__btns">
          <button class="btn-back-home" @click="goBack">{{ t('isla-btn-back') }}</button>
          <button class="btn-next" @click="router.push('/case/lirmi')">
            {{ t('isla-btn-next') }}
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
   TOKENS DEL CASO
══════════════════════════════════════════ */
.case-page {
  --accent: #e8714a;
  --accent-soft: rgba(232, 113, 74, 0.08);
  --accent-teal: #2d7d6f;
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

.case-hero::before {
  content: '';
  position: absolute;
  top: -80px;
  left: -80px;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(232, 113, 74, 0.08) 0%, transparent 65%);
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

.case-tag--coral {
  background: rgba(232, 113, 74, 0.12);
  color: var(--accent);
}

.case-tag--teal {
  background: rgba(45, 125, 111, 0.12);
  color: var(--accent-teal);
}

.case-tag--lav {
  background: var(--color-lav-light);
  color: var(--color-lav);
}

.case-tag--mcp {
  background: rgba(45, 125, 111, 0.12);
  color: var(--accent-teal);
  border: 1px solid rgba(45, 125, 111, 0.25);
}

.case-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-ink3);
  letter-spacing: 0.08em;
}

.case-hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
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
  font-size: clamp(15px, 1.6vw, 17px);
  font-weight: 500;
  color: var(--color-ink);
  margin: 0 0 12px;
  line-height: 1.45;
}

.case-brief {
  font-size: clamp(13px, 1.3vw, 15px);
  color: var(--color-ink2);
  line-height: 1.65;
  margin: 0 0 32px;
}

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
  gap: 2px;
}

.case-meta__label {
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-ink3);
}

.case-meta__val {
  font-size: 12px;
  color: var(--color-ink2);
  font-weight: 500;
}

.case-hero__actions {
  padding-top: 20px;
}

.btn-demo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  background: transparent;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.btn-demo:hover {
  background: var(--accent);
  color: var(--color-bg);
}

/* ── Browser mockup ── */
.hero-composition {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 360px;
}

.hero-comp__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #3d1e10 0%, #2a1508 60%, #1d1510 100%);
  border-radius: var(--radius-lg);
}

.browser-mockup {
  position: relative;
  z-index: 2;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2a2a2a;
  padding: 8px 12px;
}

.browser-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #555;
}

.browser-dot:first-child {
  background: #e06b5e;
}

.browser-dot:nth-child(2) {
  background: #e8a87c;
}

.browser-dot:nth-child(3) {
  background: #2d7d6f;
}

.browser-url {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #888;
  margin-left: 8px;
}

.browser-screen {
  max-height: 320px;
  overflow: hidden;
}

.browser-screen img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: top;
}

.hero-comp__label {
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 3;
}

.hero-comp__headline {
  font-family: var(--font-serif);
  font-size: clamp(11px, 1.2vw, 14px);
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}

/* ══════════════════════════════════════════
   STATS STRIP
══════════════════════════════════════════ */
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
  justify-content: center;
  gap: clamp(24px, 4vw, 56px);
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
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
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  max-width: 140px;
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

/* ══════════════════════════════════════════
   MAIN + SECTIONS
══════════════════════════════════════════ */
.case-main {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: clamp(48px, 6vw, 80px) var(--section-padding-x);
  display: flex;
  flex-direction: column;
  gap: clamp(64px, 8vw, 112px);
}

.case-section {
  padding: clamp(56px, 4vw, 96px) 0;
  border-bottom: 1px solid var(--color-border);
}

.case-section:last-child {
  border-bottom: none;
}

.case-section__label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-ink3);
}

.sec-num {
  color: var(--accent);
  font-size: 10px;
  font-weight: 700;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--color-ink);
  margin: 0 0 20px;
}

.section-title em {
  font-style: italic;
  color: var(--accent);
}

.section-intro {
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--color-ink2);
  line-height: 1.7;
  margin: 0 0 40px;
  max-width: 680px;
}

/* ══════════════════════════════════════════
   01 PROBLEMA
══════════════════════════════════════════ */
.problem-section {
  background: var(--color-surface);
  padding: clamp(56px, 8vw, 96px) clamp(24px, 4vw, 56px);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--accent);
}

.problem-quote {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3vw, 36px);
  font-style: italic;
  color: var(--color-ink);
  line-height: 1.3;
  margin: 0 0 28px;
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
  color: var(--color-ink2);
  line-height: 1.6;
  margin: 0;
}

/* ══════════════════════════════════════════
   02 EL EXPERIMENTO
══════════════════════════════════════════ */
.experiment-section {
  background: var(--color-ink);
  padding: clamp(56px, 8vw, 96px) clamp(28px, 4vw, 56px);
  border-radius: var(--radius-lg);
}

.dark .experiment-section {
  background: var(--color-bg2);
}

.experiment-section .case-section__label {
  color: rgba(255, 255, 255, 0.5);
}

.dark .experiment-section .case-section__label {
  color: var(--color-ink3);
}

.exp-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;
}

@media (max-width: 720px) {
  .exp-grid {
    grid-template-columns: 1fr;
  }
}

.exp-eyebrow {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
}

.dark .exp-eyebrow {
  color: var(--color-ink3);
}

.exp-quote {
  font-family: var(--font-serif);
  font-size: clamp(18px, 2.8vw, 28px);
  font-style: italic;
  color: #f5f2ee;
  line-height: 1.4;
  margin: 0 0 24px;
}

.dark .exp-quote {
  color: var(--color-ink);
}

.exp-body {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.dark .exp-body {
  color: var(--color-ink2);
}

.exp-diffs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.diff-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.diff-num {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
}

.diff-item strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #f5f2ee;
  margin-bottom: 3px;
}

.dark .diff-item strong {
  color: var(--color-ink);
}

.diff-item p {
  font-size: 12px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.dark .diff-item p {
  color: var(--color-ink2);
}

/* ══════════════════════════════════════════
   03 PROCESO
══════════════════════════════════════════ */
.process-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 40px;
}

.process-card {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 20px;
  align-items: start;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.process-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

@media (max-width: 560px) {
  .process-card {
    grid-template-columns: 1fr;
  }
}

.process-card__num {
  font-family: var(--font-serif);
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 400;
  font-style: italic;
  color: var(--accent);
  line-height: 1;
  opacity: 0.35;
}

.process-card__icon {
  font-size: 18px;
  display: block;
  margin-bottom: 6px;
}

.process-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0 0 10px;
}

.process-card__facts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.process-card__facts li {
  font-size: 13px;
  color: var(--color-ink2);
  line-height: 1.5;
  padding-left: 14px;
  position: relative;
}

.process-card__facts li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

/* ══════════════════════════════════════════
   04 DESIGN SYSTEM
══════════════════════════════════════════ */
.ds-summary {
  display: flex;
  gap: 12px;
  margin: 0 0 40px;
  flex-wrap: wrap;
}

.ds-summary__item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 16px 24px;
  min-width: 100px;
}

.ds-summary__num {
  font-family: var(--font-serif);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
}

.ds-summary__label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-ink3);
}

.ds-bars {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 40px;
  max-width: 480px;
}

.ds-bar-row {
  display: grid;
  grid-template-columns: 110px 1fr 32px;
  align-items: center;
  gap: 12px;
}

.ds-bar-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-ink2);
}

.ds-bar-track {
  height: 6px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.ds-bar-fill {
  height: 100%;
  background: var(--accent);
  border-radius: var(--radius-full);
  opacity: 0.65;
}

.ds-bar-num {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  text-align: right;
}

.ds-comps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 0 0 40px;
}

@media (max-width: 720px) {
  .ds-comps {
    grid-template-columns: repeat(2, 1fr);
  }
}

.comp-chip {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.comp-chip__name {
  font-size: 12px;
  color: var(--color-ink2);
  line-height: 1.3;
}

.comp-chip__num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
}

.ds-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

@media (max-width: 640px) {
  .ds-grid {
    grid-template-columns: 1fr;
  }
}

/* ══════════════════════════════════════════
   05 PANTALLAS
══════════════════════════════════════════ */
.screens-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr 160px;
  gap: 20px;
  align-items: start;
  margin-bottom: 32px;
}

@media (max-width: 860px) {
  .screens-showcase {
    grid-template-columns: 1fr 1fr;
  }
  .screen-block--mobile {
    grid-column: span 2;
    max-width: 240px;
    margin: 0 auto;
  }
}

@media (max-width: 560px) {
  .screens-showcase {
    grid-template-columns: 1fr;
  }
  .screen-block--mobile {
    grid-column: span 1;
    max-width: 200px;
    margin: 0 auto;
  }
}

/* ══════════════════════════════════════════
   06 ESTADO
══════════════════════════════════════════ */
.status-table {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: 0 0 40px;
}

.status-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
}

.status-row:last-child {
  border-bottom: none;
}

.status-row:nth-child(odd) {
  background: var(--color-bg);
}

.status-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink2);
}

.status-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.status-badge--done {
  background: rgba(45, 125, 111, 0.12);
  color: #2d7d6f;
}

.dark .status-badge--done {
  background: rgba(45, 125, 111, 0.2);
  color: #4aa896;
}

.status-badge--progress {
  background: rgba(232, 113, 74, 0.12);
  color: var(--accent);
}

.status-badge--pending {
  background: var(--color-surface);
  color: var(--color-ink3);
  border: 1px solid var(--color-border2);
}

/* ══════════════════════════════════════════
   ROL DEL DISEÑADOR
══════════════════════════════════════════ */
.designer-role {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: 0 0 0;
}

.designer-role__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-border);
  background: var(--accent-soft);
}

.designer-role__tag {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(232, 113, 74, 0.12);
  border: 1px solid rgba(232, 113, 74, 0.3);
  border-radius: var(--radius-full);
  padding: 3px 10px;
}

.designer-role__tagline {
  font-size: 12px;
  color: var(--color-ink2);
  font-style: italic;
}

.designer-role__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  padding: 0;
}

@media (max-width: 620px) {
  .designer-role__grid {
    grid-template-columns: 1fr;
  }
}

.designer-role__item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 20px 24px;
  border-bottom: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
}

.designer-role__item:nth-child(2n) {
  border-right: none;
}

.designer-role__item:nth-last-child(-n + 2) {
  border-bottom: none;
}

@media (max-width: 620px) {
  .designer-role__item {
    border-right: none;
  }
  .designer-role__item:last-child {
    border-bottom: none;
  }
  .designer-role__item:nth-last-child(-n + 2) {
    border-bottom: 1px solid var(--color-border);
  }
  .designer-role__item:last-child {
    border-bottom: none;
  }
}

.designer-role__icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}

.designer-role__item strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-ink);
  margin-bottom: 4px;
}

.designer-role__item p {
  font-size: 12px;
  color: var(--color-ink2);
  line-height: 1.6;
  margin: 0;
}

.designer-role__item em {
  font-style: italic;
  color: var(--accent-teal);
}

.learning-quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(14px, 1.5vw, 17px);
  color: var(--color-ink2);
  border-top: 1px solid var(--color-border);
  border-left: 4px solid var(--accent);
  padding: 20px 28px;
  margin: 0;
  background: var(--color-bg);
  line-height: 1.65;
}

/* ══════════════════════════════════════════
   IMÁGENES COMPARTIDAS
══════════════════════════════════════════ */
.arch-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

@media (max-width: 640px) {
  .arch-grid {
    grid-template-columns: 1fr;
  }
}

.img-label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-ink3);
  margin: 0 0 10px;
}

.img-block {
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  margin-bottom: 16px;
}

.img-block img {
  width: 100%;
  height: auto;
  display: block;
}

.img-block--clickable {
  position: relative;
  cursor: zoom-in;
}

.img-block--clickable:hover .img-zoom {
  opacity: 1;
}

.img-zoom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
}

.img-block--screen img {
  object-fit: cover;
  max-height: 480px;
  object-position: top;
}

.img-block--mobile-full {
  height: 480px;
}

.img-block--mobile-full img {
  width: 100%;
  height: auto;
  display: block;
  image-rendering: -webkit-optimize-contrast;
}

/* ══════════════════════════════════════════
   BOTÓN FIGMA
══════════════════════════════════════════ */
.btn-figma {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1.5px solid rgba(232, 113, 74, 0.3);
  border-radius: var(--radius-full);
  padding: 9px 18px;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.18s ease,
    border-color 0.18s ease;
  margin-top: 4px;
}

.btn-figma:hover {
  background: rgba(232, 113, 74, 0.15);
  border-color: var(--accent);
}

.btn-figma--lg {
  padding: 11px 22px;
  font-size: 12px;
}

.figma-preview-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: var(--accent-soft);
  border: 1px solid rgba(232, 113, 74, 0.2);
  border-radius: var(--radius-lg);
  padding: 24px 28px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.figma-preview-cta__text h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0 0 4px;
}

.figma-preview-cta__text p {
  font-size: 13px;
  color: var(--color-ink2);
  margin: 0;
}

/* ══════════════════════════════════════════
   FOOTER CTA
══════════════════════════════════════════ */
.case-footer {
  background: var(--color-ink);
  padding: clamp(56px, 8vw, 96px) var(--section-padding-x);
  text-align: center;
}

.dark .case-footer {
  background: var(--color-bg2);
}

.case-footer__inner {
  max-width: 560px;
  margin: 0 auto;
}

.case-footer__label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
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
  justify-content: center;
  flex-wrap: wrap;
}

.btn-back-home {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  padding: 11px 22px;
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    color 0.18s ease;
}

.btn-back-home:hover {
  border-color: rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.9);
}

.dark .btn-back-home {
  color: var(--color-ink2);
  border-color: var(--color-border2);
}

.dark .btn-back-home:hover {
  color: var(--color-ink);
  border-color: var(--color-ink);
}

.btn-next {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: var(--accent);
  border: none;
  border-radius: var(--radius-full);
  padding: 11px 22px;
  cursor: pointer;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.btn-next:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.dark .btn-next {
  color: var(--color-bg);
}

/* ══════════════════════════════════════════
   MODAL LIGHTBOX
══════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 8, 0.88);
  backdrop-filter: blur(6px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow: scroll;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 18px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-img {
  display: flex;
  position: absolute;
  top: 70px;
  object-fit: contain;
  border-radius: var(--radius-sm);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.22s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* ══════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════ */
@media (max-width: 900px) {
  .case-hero__grid {
    grid-template-columns: 1fr;
  }

  .hero-composition {
    min-height: auto;
  }
}

@media (max-width: 860px) {
  .ds-comps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .case-meta {
    grid-template-columns: 1fr;
  }

  .stat-divider {
    display: none;
  }

  .stats-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .ds-summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .figma-preview-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
