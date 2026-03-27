<script setup lang="ts">
import { useLang } from '../composables/useLang'
import HeroIllustration from './HeroIllustration.vue'

const { t } = useLang()

//function scrollToWork() {
//document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
//}
</script>

<template>
  <!-- ══════════════════════════════════
       HERO SECTION
  ══════════════════════════════════ -->
  <section
    class="relative min-h-[90svh] flex items-center bg-page overflow-hidden"
    aria-labelledby="hero-heading"
  >
    <!-- Subtle radial accents (inherited from body::after, just ensuring z stacking) -->
    <div
      class="w-full max-w-[1160px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-[60px] pt-20 md:pt-0 pb-14 md:pb-20 relative z-10"
    >
      <!-- ════════════════════════
           LEFT — Copy estratégico
      ════════════════════════ -->
      <div class="flex-1 flex flex-col text-center md:text-left min-w-0">
        <!-- Eyebrow -->
        <div
          class="anim-h-in inline-flex items-center justify-center md:justify-start gap-2 font-mono text-[11px] text-ink3 uppercase tracking-[0.12em] mb-[22px]"
          style="animation-delay: 0.1s"
        >
          <span class="hidden md:block w-5 h-px bg-ink3 flex-shrink-0"></span>
          {{ t('hero-eyebrow') }}
        </div>

        <!-- Headline — tipografía ES el diseño -->
        <h1
          id="hero-heading"
          class="anim-h-in font-serif font-medium leading-[1.05] tracking-[-0.03em] text-ink"
          style="font-size: clamp(42px, 6vw, 68px); animation-delay: 0.25s"
        >
          <span class="block">{{ t('hero-title-1') }}</span>
          <span class="block">{{ t('hero-title-2') }}</span>
          <em class="block text-coral">{{ t('hero-title-3') }}</em>
        </h1>

        <!-- Subheadline -->
        <p
          v-if="false"
          class="anim-h-in sub-text font-sans font-light text-ink2 leading-[1.72] max-w-[480px] mx-auto md:mx-0 mt-6"
          style="font-size: clamp(16px, 2vw, 18px); animation-delay: 0.4s"
          v-html="t('hero-sub')"
        ></p>

        <!-- Chips diferenciales -->
        <div
          v-if="false"
          class="anim-h-in flex flex-wrap gap-2 justify-center md:justify-start mt-7"
          style="animation-delay: 0.5s"
        >
          <span class="chip chip-coral">+5 {{ t('years') }}</span>
          <span v-if="false" class="chip chip-neutral">UX Research</span>
          <span v-if="false" class="chip chip-neutral">UI Design</span>
          <span class="chip chip-sage">Frontend aware</span>
          <span class="chip chip-lav">Design Systems</span>
        </div>

        <!-- CTAs ocultos por ahora
        <div
          class="anim-h-in flex flex-wrap gap-3 justify-center md:justify-start mt-9"
          style="animation-delay: 0.6s"
        >
          <button
            @click="scrollToWork"
            class="flex items-center gap-1.5 text-sm font-medium
                   bg-ink text-page px-6 py-3 rounded-full
                   transition-all duration-200
                   hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(24,22,15,.28)]
                   active:translate-y-0"
          >
            {{ t('btn-view-work') }}
          </button>
          <a
            href="#"
            class="flex items-center gap-1.5 text-sm font-medium
                   text-ink2 border border-line-strong px-6 py-3 rounded-full
                   transition-all duration-200
                   hover:text-ink hover:border-ink"
          >
            {{ t('cv-label') }}
          </a>
        </div>
        -->
      </div>

      <!-- ════════════════════════
           RIGHT — Ilustración con etiquetas Figma
      ════════════════════════ -->
      <div
        class="anim-h-in w-full max-w-[250px] mx-auto md:w-[300px] md:max-w-[320px] md:mx-0 md:flex-shrink-0"
        style="animation-delay: 0.18s"
      >
        <HeroIllustration />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Entrance animation ── */
@keyframes h-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-h-in {
  animation: h-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* ── Hero sub: strong styling ── */
.sub-text :deep(strong) {
  font-weight: 500;
  color: var(--color-ink);
}

/* ── Chips ── */
.chip {
  @apply font-mono text-[11px] font-medium px-[13px] py-[5px] rounded-full;
}

.chip-neutral {
  @apply bg-surface border border-line text-ink2;
}

.chip-coral {
  @apply bg-coral-light text-coral;
}

.chip-sage {
  @apply bg-sage-light text-sage;
}

.chip-lav {
  @apply bg-lav-light text-lav;
}
</style>
