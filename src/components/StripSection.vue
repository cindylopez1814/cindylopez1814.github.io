<script setup lang="ts">
// Skills mostrados en el marquee — duplicados en el template para loop infinito
const skills: string[] = [
  'UX Research',
  'UI Design',
  'Design Systems',
  'Frontend-aware',
  'AI-assisted design',
  'Prompt design',
  'Prototyping',
  'User testing',
  'Design handoff',
  'HTML/CSS',
  'Mobile apps',
  'SaaS products',
  'Product strategy',
  'Interaction design',
]
</script>

<template>
  <!-- Decorativo: aria-hidden, no lleva info relevante para AT -->
  <div aria-hidden="true" class="strip-container relative overflow-hidden w-full py-[18px]">
    <!--
      Track: width max-content para que la animación mida el 50% correcto.
      Duplicado dos veces → cuando llega a -50% vuelve a 0 sin salto.
    -->
    <div class="strip-track flex items-center">
      <!-- Bloque 1 — original -->
      <div class="flex items-center flex-shrink-0">
        <template v-for="(skill, idx) in skills" :key="`a-${idx}`">
          <span class="strip-skill">{{ skill }}</span>
          <span class="strip-sep" aria-hidden="true">✦</span>
        </template>
      </div>

      <!-- Bloque 2 — clon exacto para loop seamless -->
      <div class="flex items-center flex-shrink-0" aria-hidden="true">
        <template v-for="(skill, idx) in skills" :key="`b-${idx}`">
          <span class="strip-skill">{{ skill }}</span>
          <span class="strip-sep" aria-hidden="true">✦</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Variables locales del componente ── */
:root {
  --strip-duration: 28s;
}

/* ── Contenedor ── */
.strip-container {
  background: var(--color-ink);
}

/* ── Track animado ── */
.strip-track {
  width: max-content;
  animation: strip-scroll var(--strip-duration, 28s) linear infinite;
  will-change: transform;
}

/* Pausa en hover sobre cualquier punto del strip */
.strip-container:hover .strip-track {
  animation-play-state: paused;
}

/* ── Skill label ── */
.strip-skill {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  padding: 0 18px;
  color: var(--color-bg);
  opacity: 0.78;
  letter-spacing: 0.03em;
}

/* ── Separador ✦ ── */
.strip-sep {
  font-size: 10px;
  color: var(--color-coral);
  flex-shrink: 0;
  line-height: 1;
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .strip-track {
    animation: none;
  }
}
</style>
