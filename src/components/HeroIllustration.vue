<script setup lang="ts">
import illustrationSvg from '../assets/illustration.svg?raw'
</script>

<template>
  <div class="illo-container">
    <!-- ── Screen glow (dark mode only — brilla desde la pantalla del laptop) ── -->
    <div class="screen-glow" aria-hidden="true"></div>

    <!-- ── SVG ilustración ── -->
    <div class="illo-svg-wrap" v-html="illustrationSvg" aria-hidden="true"></div>

    <!-- ════════════════════════════════════════
         ETIQUETAS FIGMA
         Layout después del swap:
         TOP-LEFT  → Badge "+5 años"   (antes cursor)
         TOP-RIGHT → Cursor "Cindy"    (antes badge)
         MID-LEFT  → Frame "UX Research"
         MID-RIGHT → Frame "Frontend aware" (cerca del cursor)
         BOT-RIGHT → Sticky "AI-assisted design"
    ═════════════════════════════════════════ -->

    <!-- 1. Badge "+5 años" — TOP LEFT (posición swapeada) -->
    <div class="figma-badge figma-badge--coral" aria-hidden="true">
      <span class="badge-icon">✦</span>
      <div class="badge-content">
        <span class="badge-label">Experiencia</span>
        <span class="badge-value">+5 años</span>
      </div>
    </div>

    <!-- 2. Cursor "Cindy" — TOP RIGHT (posición swapeada) -->
    <div class="figma-cursor figma-cursor--coral" aria-hidden="true">
      <svg class="cursor-icon" viewBox="0 0 12 16" width="10" fill="none">
        <path
          d="M0 0 L0 14 L4 10 L7 16 L9 15 L6 9 L10 9 Z"
          fill="#E8503A"
          stroke="white"
          stroke-width="0.8"
        />
      </svg>
      <span class="cursor-label">Cindy</span>
    </div>

    <!-- 3. Frame "UX Research" — MID LEFT -->
    <div class="figma-frame-label figma-frame-label--lav" aria-hidden="true">
      <span class="frame-icon">◈</span>
      <span class="frame-text">UX Research</span>
    </div>

    <!-- 4. Frame "Frontend aware" — MID RIGHT (mismo estilo que UX Research, cerca del cursor) -->
    <div class="figma-frame-label figma-frame-label--coral frontend-aware" aria-hidden="true">
      <span class="frame-icon frame-icon--coral">◈</span>
      <span class="frame-text">Frontend aware</span>
    </div>

    <!-- 5. Sticky "AI-assisted design" — BOT RIGHT -->
    <div class="figma-sticky" aria-hidden="true">
      <span class="sticky-text">AI-assisted</span>
      <span class="sticky-text sticky-text--accent">design</span>
      <span class="sticky-author">↗ on every project</span>
    </div>
  </div>
</template>

<style scoped>
/* ══════════════════════════════════════════════
   KEYFRAMES
══════════════════════════════════════════════ */

@keyframes illo-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes cursor-drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  30% {
    transform: translate(6px, -4px);
  }
  60% {
    transform: translate(12px, 2px);
  }
  80% {
    transform: translate(4px, 6px);
  }
}

@keyframes badge-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-6px) rotate(0.4deg);
  }
}

@keyframes sticky-float {
  0%,
  100% {
    transform: rotate(-2deg) translateY(0);
  }
  50% {
    transform: rotate(-1.5deg) translateY(-5px);
  }
}

/* ── Pestañeo del ojo 
@keyframes eye-blink {
  0%,
  75%,
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
  80%,
  87% {
    transform: scaleY(0.05);
    opacity: 0.5;
  }
} ── */

/* ── Sparkle cascade: pantalla → persona ── */
/* sparkle-1 y sparkle-2 están en la zona de la pantalla (arrancan primero) */
/* sparkle-3 está un poco más arriba                                         */
/* sparkle-4 está cerca de la cara (llega último)                            */
@keyframes sparkle-pulse {
  0% {
    opacity: 0.1;
    transform: scale(0.6) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: scale(1.35) rotate(15deg);
  }
  60% {
    opacity: 0.6;
    transform: scale(1) rotate(10deg);
  }
  100% {
    opacity: 0.1;
    transform: scale(0.7) rotate(0deg);
  }
}

/* ══════════════════════════════════════════════
   CONTENEDOR PRINCIPAL
══════════════════════════════════════════════ */
.illo-container {
  position: relative;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  animation: illo-float 6s ease-in-out infinite;
}

/* ── SVG base ── */
.illo-svg-wrap {
  display: block;
  width: 100%;
  position: relative;
  z-index: 2;
}

.illo-svg-wrap :deep(svg) {
  width: 100%;
  height: auto;
  display: block;
}

/* ══════════════════════════════════════════════
   PESTAÑEO — paths del ojo identificados por ID
══════════════════════════════════════════════ */
.illo-svg-wrap :deep(#eye-outline),
.illo-svg-wrap :deep(#eye-iris),
.illo-svg-wrap :deep(#eye-detail),
.illo-svg-wrap :deep(#eye-white) {
  transform-box: fill-box;
  transform-origin: 50% 0%;
  animation: eye-blink 5s ease-in-out infinite;
}

/* ══════════════════════════════════════════════
   SPARKLES — cascada desde la pantalla hacia la cara
══════════════════════════════════════════════ */
.illo-svg-wrap :deep(#sparkle-1),
.illo-svg-wrap :deep(#sparkle-2),
.illo-svg-wrap :deep(#sparkle-3),
.illo-svg-wrap :deep(#sparkle-4) {
  transform-box: fill-box;
  transform-origin: center;
}

/* Pantalla → cerca de pantalla → subiendo → cara */
.illo-svg-wrap :deep(#sparkle-1) {
  animation: sparkle-pulse 3.6s ease-in-out infinite 0s;
}
.illo-svg-wrap :deep(#sparkle-2) {
  animation: sparkle-pulse 3.6s ease-in-out infinite 0.5s;
}
.illo-svg-wrap :deep(#sparkle-3) {
  animation: sparkle-pulse 3.6s ease-in-out infinite 1s;
}
.illo-svg-wrap :deep(#sparkle-4) {
  animation: sparkle-pulse 3.6s ease-in-out infinite 1.5s;
}

/* ══════════════════════════════════════════════
   SCREEN GLOW — laptop emite luz en dark mode
══════════════════════════════════════════════ */
.screen-glow {
  position: absolute;
  /* Zona de la pantalla del laptop: aprox 30-70% ancho, 38-58% alto */
  top: 36%;
  left: 28%;
  width: 44%;
  height: 24%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  background: radial-gradient(
    ellipse at 50% 40%,
    rgba(138, 124, 184, 0.55) 0%,
    rgba(138, 124, 184, 0.22) 40%,
    rgba(106, 148, 112, 0.08) 65%,
    transparent 80%
  );
  filter: blur(14px);
  transition: opacity 0.6s ease;
}

/* Solo visible en dark mode */
.dark .screen-glow {
  opacity: 1;
}

/* ══════════════════════════════════════════════
   BADGE "+5 años" — TOP LEFT (swapped)
══════════════════════════════════════════════ */
.figma-badge {
  position: absolute;
  top: 5%;
  left: 10%;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(232, 80, 58, 0.2);
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: 0 4px 20px rgba(24, 22, 15, 0.1);
  animation: badge-float 7s ease-in-out infinite 0.3s;
  white-space: nowrap;
  z-index: 10;
}

.badge-icon {
  font-size: 14px;
  color: var(--color-coral);
}

.badge-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--color-ink3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.badge-value {
  display: block;
  font-family: var(--font-serif);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-ink);
}

/* ══════════════════════════════════════════════
   CURSOR "Cindy" — TOP RIGHT (swapped)
══════════════════════════════════════════════ */
.figma-cursor {
  position: absolute;
  top: 30%;
  right: 4%;
  display: flex;
  align-items: center;
  gap: 4px;
  animation: cursor-drift 8s ease-in-out infinite;
  z-index: 10;
}

.cursor-icon {
  flex-shrink: 0;
}

.cursor-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  color: white;
  background: #e8503a;
  padding: 2px 7px;
  border-radius: 0 4px 4px 4px;
  white-space: nowrap;
}

/* ══════════════════════════════════════════════
   FRAME LABELS — "UX Research" y "Frontend aware"
   Mismo estilo base compartido
══════════════════════════════════════════════ */
.figma-frame-label {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1.5px solid rgba(138, 124, 184, 0.35);
  border-radius: 8px;
  padding: 6px 11px;
  box-shadow: 0 2px 12px rgba(24, 22, 15, 0.08);
  z-index: 10;
  white-space: nowrap;
}

/* UX Research — MID LEFT (sin cambios) */
.figma-frame-label:not(.frontend-aware) {
  left: 2%;
  top: 45%;
  animation: badge-float 6s ease-in-out infinite 1s;
}

/* Frontend aware — MID RIGHT, cerca del cursor */
.figma-frame-label.frontend-aware {
  right: -12%;
  top: 5%;
  border-color: rgba(232, 80, 58, 0.25);
  animation: badge-float 6.5s ease-in-out infinite 1.4s;
}

.frame-icon {
  font-size: 13px;
  color: var(--color-lav);
}

.frame-icon--coral {
  color: var(--color-coral);
}

.frame-text {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 500;
  color: var(--color-ink);
}

/* ══════════════════════════════════════════════
   STICKY "AI-assisted design" — BOT RIGHT
══════════════════════════════════════════════ */
.figma-sticky {
  position: absolute;
  bottom: 12%;
  right: 2%;
  background: #fde98a;
  border-radius: 3px;
  padding: 10px 12px 18px;
  box-shadow: 2px 3px 12px rgba(24, 22, 15, 0.15);
  transform: rotate(-2deg);
  animation: sticky-float 8s ease-in-out infinite 0.8s;
  min-width: 108px;
  z-index: 10;
}

.sticky-text {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: #3a3020;
  line-height: 1.3;
}

.sticky-text--accent {
  font-style: italic;
  color: #5a4010;
}

.sticky-author {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  color: rgba(58, 48, 32, 0.55);
  margin-top: 5px;
}

/* ══════════════════════════════════════════════
   DARK MODE
══════════════════════════════════════════════ */
.dark .figma-badge,
.dark .figma-frame-label {
  background: rgba(34, 32, 24, 0.88);
  border-color: rgba(245, 242, 238, 0.12);
}

.dark .figma-frame-label.frontend-aware {
  border-color: rgba(232, 80, 58, 0.25);
}

.dark .badge-value,
.dark .frame-text {
  color: var(--color-ink);
}

.dark .badge-label {
  color: var(--color-ink3);
}

/* ══════════════════════════════════════════════
   REDUCED MOTION
══════════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .illo-container,
  .figma-badge,
  .figma-frame-label,
  .figma-sticky,
  .figma-cursor {
    animation: none;
  }

  .illo-svg-wrap :deep(#eye-outline),
  .illo-svg-wrap :deep(#eye-iris),
  .illo-svg-wrap :deep(#eye-detail),
  .illo-svg-wrap :deep(#eye-white),
  .illo-svg-wrap :deep(#sparkle-1),
  .illo-svg-wrap :deep(#sparkle-2),
  .illo-svg-wrap :deep(#sparkle-3),
  .illo-svg-wrap :deep(#sparkle-4) {
    animation: none;
  }
}

/* ══════════════════════════════════════════════
   MOBILE
══════════════════════════════════════════════ */
@media (max-width: 640px) {
  .illo-container {
    max-width: 300px;
  }
  .figma-badge {
    left: 4%;
    top: 3%;
  }
  .figma-cursor {
    right: 1%;
    top: 8%;
  }
  .figma-frame-label:not(.frontend-aware) {
    left: 0%;
  }
  .figma-frame-label.frontend-aware {
    right: -20%;
    top: 24%;
  }
  .figma-sticky {
    right: 0%;
    bottom: 8%;
  }
}
</style>
