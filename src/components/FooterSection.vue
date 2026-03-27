<script setup lang="ts">
import { useLang } from '../composables/useLang'
import banchileSvg from '../assets/logos/Logo-Banchile.svg?raw'
import bancEstadoSvg from '../assets/logos/banco_estado logo.svg?raw'
import bciSvg from '../assets/logos/bci logo.svg?raw'

const { t } = useLang()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- ══════════════════════════════════════
           CON QUIENES HE TRABAJADO
      ═══════════════════════════════════════ -->
      <div class="clients-strip" data-reveal>
        <span class="clients-label">{{ t('clients-label') }}</span>
        <div class="logos-row">
          <div class="client-logo" v-html="banchileSvg" aria-label="Banchile"></div>
          <div class="logo-divider" aria-hidden="true"></div>
          <div class="client-logo" v-html="bancEstadoSvg" aria-label="BancoEstado"></div>
          <div class="logo-divider" aria-hidden="true"></div>
          <div class="client-logo" v-html="bciSvg" aria-label="BCI"></div>
        </div>
      </div>

      <!-- ══════════════════════════════════════
           FOOTER TOP — CTA + Nav + Contact
      ═══════════════════════════════════════ -->
      <div class="footer-top" data-reveal style="--reveal-delay: 0.12s">
        <!-- CTA -->
        <div class="footer-cta">
          <h2 class="footer-cta-title">
            <span>{{ t('footer-t1') }}</span
            ><br />
            <span>{{ t('footer-t2') }}</span
            ><em>{{ t('footer-t3') }}</em
            ><span>?</span>
          </h2>
          <p class="footer-cta-sub">{{ t('footer-sub') }}</p>
          <div class="footer-btns">
            <a href="mailto:cindy.lopezoportus@gmail.com" class="btn-primary">
              {{ t('btn-email') }}
            </a>
            <a
              href="https://linkedin.com/in/cindy-l%C3%B3pez-oportus"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <!-- Nav -->
        <div class="footer-nav-col">
          <div class="footer-nav-label">{{ t('nav-label') }}</div>
          <nav class="footer-nav-list">
            <a href="#about">{{ t('nav-about') }}</a>
            <a href="#work">{{ t('nav-work') }}</a>
            <a href="#expertise">{{ t('expertise-label') }}</a>
          </nav>
        </div>

        <!-- Contact -->
        <div class="footer-nav-col">
          <div class="footer-nav-label">{{ t('contact-label') }}</div>
          <div class="footer-nav-list">
            <a href="mailto:cindy.lopezoportus@gmail.com">cindy.lopezoportus@gmail.com</a>
            <a
              href="https://linkedin.com/in/cindy-l%C3%B3pez-oportus"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >
            <a href="/CV-CindyLopez-2026.pdf" download>{{ t('cv-label') }} →</a>
          </div>
        </div>
      </div>
      <!-- /footer-top -->

      <!-- ══════════════════════════════════════
           FOOTER BOTTOM
      ═══════════════════════════════════════ -->
      <div class="footer-bottom">
        <span class="footer-sig">{{ t('footer-sig') }}</span>
        <span class="footer-copy">© 2026 · CALO · Product Designer</span>
      </div>
    </div>
    <!-- /footer-inner -->
  </footer>
</template>

<style scoped>
/* ══════════════════════════════════════════
   FOOTER BASE
══════════════════════════════════════════ */
.site-footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: clamp(48px, 7vw, 72px) var(--section-padding-x, clamp(20px, 5vw, 80px)) 36px;
}

.footer-inner {
  max-width: var(--content-max, 1160px);
  margin: 0 auto;
}

/* ══════════════════════════════════════════
   CLIENTS STRIP
══════════════════════════════════════════ */
.clients-strip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--color-border);
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 0;
}

.logo-divider {
  width: 1px;
  height: 32px;
  background: var(--color-border);
  margin: 0 36px;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .logo-divider {
    margin: 0 20px;
  }
}

/* Logo homologation */
.client-logo {
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
}

.client-logo :deep(svg) {
  height: 28px;
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

/* ══════════════════════════════════════════
   FOOTER TOP — 3 columnas en desktop
══════════════════════════════════════════ */
.footer-top {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .footer-top {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 60px;
    align-items: start;
  }
}

/* ── CTA ── */
.footer-cta-title {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3.5vw, 38px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0 0 12px;
  color: var(--color-ink);
}

.footer-cta-title em {
  font-style: italic;
  color: var(--color-coral);
}

.footer-cta-sub {
  font-size: 14px;
  color: var(--color-ink2);
  font-weight: 300;
  margin: 0 0 20px;
  line-height: 1.6;
}

.footer-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-surface);
  background: var(--color-ink);
  padding: 11px 20px;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(24, 22, 15, 0.28);
}

.dark .btn-primary {
  color: var(--color-bg);
  background: var(--color-ink);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
  background: var(--color-surface);
  border: 1.5px solid var(--color-border2);
  padding: 11px 20px;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn-ghost:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

/* ── Nav columns ── */
.footer-nav-col {
  min-width: 130px;
}

.footer-nav-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-ink3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}

.footer-nav-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-nav-list a {
  font-size: 14px;
  color: var(--color-ink2);
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-nav-list a:hover {
  color: var(--color-ink);
}

/* ══════════════════════════════════════════
   FOOTER BOTTOM
══════════════════════════════════════════ */
.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

@media (min-width: 600px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-sig {
  font-family: var(--font-serif);
  font-size: 13.5px;
  font-style: italic;
  color: var(--color-ink3);
}

.footer-copy {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--color-ink3);
  letter-spacing: 0.03em;
}
</style>
