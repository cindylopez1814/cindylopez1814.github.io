<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useDarkMode } from '../composables/useDarkMode'
import { useLang } from '../composables/useLang'

const { isDark, toggle: toggleDark } = useDarkMode()
const { lang, setLang, t } = useLang()
const router = useRouter()

function goHome() {
  router.push('/')
}

function goSection(hash: string) {
  router.push({ path: '/', hash })
}

const contactOpen = ref(false)
const navCwRef = ref<HTMLElement | null>(null)

function toggleContact() {
  contactOpen.value = !contactOpen.value
}

function handleOutsideClick(e: MouseEvent) {
  if (navCwRef.value && !navCwRef.value.contains(e.target as Node)) {
    contactOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<template>
  <!-- ══════════════════════════════════
       NAVBAR
  ══════════════════════════════════ -->
  <nav
    class="fixed top-0 left-0 right-0 z-[300] h-[60px] flex items-center justify-between px-5 border-b border-line backdrop-blur-2xl [-webkit-backdrop-filter:blur(24px)] transition-colors duration-300"
    :style="{ background: 'var(--nav-bg)' }"
  >
    <div class="w-full max-w-[1160px] mx-auto flex items-center justify-between px-5">
      <!-- Placeholder to balance the right side -->
      <!-- ── Logo ── -->
      <div class="group relative">
        <span
          @click="goHome"
          class="font-serif font-semibold text-[19px] tracking-[0.18em] uppercase text-ink cursor-pointer select-none"
        >
          CALO
        </span>

        <!-- Tooltip -->
        <div
          class="absolute top-[calc(100%+9px)] left-0 z-10 pointer-events-none bg-ink text-page font-mono text-[10px] tracking-[0.05em] px-[11px] py-[6px] rounded-lg whitespace-nowrap opacity-0 -translate-y-1 transition-all duration-[180ms] group-hover:opacity-100 group-hover:translate-y-0"
        >
          <!-- Caret -->
          <span
            class="absolute -top-1 left-3 w-2 h-1 bg-ink block"
            style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%)"
          ></span>
          {{ t('logo-tip') }}
        </div>
      </div>

      <!-- ── Right side ── -->
      <div class="flex m-4" style="width: 100%">
        <!-- Nav links (visible ≥ 560 px) -->
        <div class="gap-1 inline-flex items-center justify-center" style="width: 100%">
          <button
            @click="goSection('#work')"
            class="hidden min-[560px]:block text-sm text-ink2 px-[13px] py-[7px] rounded-full transition-all duration-[180ms] hover:text-ink hover:bg-line"
          >
            {{ t('nav-work') }}
          </button>
        </div>

        <div class="flex items-center mx-6" style="justify-content: center">
          <!-- Language switcher -->
          <div
            class="flex items-center gap-0.5 bg-page2 border border-line-strong rounded-[22px] p-[3px] mr-1.5"
            role="group"
            aria-label="Language"
          >
            <button
              v-for="l in ['es', 'pt', 'en'] as const"
              :key="l"
              @click="setLang(l)"
              :class="[
                'font-mono text-[10px] font-medium px-[9px] py-[5px] rounded-[18px]',
                'tracking-[0.04em] transition-all duration-[180ms]',
                lang === l ? 'bg-ink text-page' : 'text-ink3 hover:text-ink hover:bg-line',
              ]"
            >
              {{ l.toUpperCase() }}
            </button>
          </div>

          <!-- Dark mode toggle -->
          <button
            @click="toggleDark"
            class="w-9 h-9 rounded-full flex items-center justify-center bg-page2 border border-line-strong text-ink2 text-base mr-1 transition-all duration-200 hover:bg-line-strong hover:rotate-[20deg]"
            aria-label="Toggle dark mode"
          >
            <span v-if="isDark" aria-hidden="true">☀️</span>
            <span v-else aria-hidden="true">🌙</span>
          </button>
        </div>

        <!-- Contact button + dropdown -->
        <div class="relative" ref="navCwRef">
          <button
            @click.stop="toggleContact"
            :aria-expanded="contactOpen"
            class="flex items-center gap-[7px] text-[13px] font-medium text-page bg-ink px-4 py-2 rounded-[22px] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_5px_20px_rgba(24,22,15,.3)] active:translate-y-0 active:shadow-none"
          >
            <span
              class="w-[7px] h-[7px] bg-green-400 rounded-full flex-shrink-0 animate-pulse-green"
            ></span>
            {{ t('nav-contact') }}
          </button>

          <!-- Dropdown -->
          <Transition
            enter-active-class="transition-all duration-[220ms] ease-out"
            enter-from-class="opacity-0 -translate-y-2 scale-[0.97]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-[150ms] ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 -translate-y-2 scale-[0.97]"
          >
            <div
              v-if="contactOpen"
              class="absolute top-[calc(100%+10px)] right-0 min-w-[244px] bg-surface border border-line-strong rounded-[20px] p-2.5 shadow-[var(--shadow-lg)] origin-top-right"
            >
              <!-- Available badge -->
              <div
                class="flex items-center gap-1.5 text-[11.5px] font-medium text-sage bg-sage-light px-[11px] py-[7px] rounded-[10px] mb-2"
              >
                <span
                  class="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0 animate-pulse-green"
                ></span>
                {{ t('avail') }}
              </div>

              <div class="h-px bg-line mx-1 my-1.5"></div>

              <!-- Email -->
              <a href="mailto:cindy.lopezoportus@gmail.com" class="menu-item">
                <div
                  class="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-base flex-shrink-0"
                  style="background: #fef0e7"
                >
                  ✉️
                </div>
                <div>
                  <div class="text-sm font-medium text-ink">Email</div>
                  <div class="text-[11px] text-ink3 mt-px">cindy.lopezoportus@gmail.com</div>
                </div>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://linkedin.com/in/cindy-l%C3%B3pez-oportus"
                target="_blank"
                rel="noopener"
                class="menu-item"
              >
                <div
                  class="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-base flex-shrink-0"
                  style="background: #e5f0f5"
                >
                  🔗
                </div>
                <div>
                  <div class="text-sm font-medium text-ink">LinkedIn</div>
                  <div class="text-[11px] text-ink3 mt-px">{{ t('li-sub') }}</div>
                </div>
              </a>

              <div class="h-px bg-line mx-1 my-1.5"></div>

              <!-- Download CV -->
              <a href="/CV-CindyLopez-2026.pdf" download class="menu-item">
                <div
                  class="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-base flex-shrink-0"
                  style="background: #ebf3ec"
                >
                  📄
                </div>
                <div>
                  <div class="text-sm font-medium text-ink">{{ t('cv-label') }}</div>
                  <div class="text-[11px] text-ink3 mt-px">PDF · 2026</div>
                </div>
              </a>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </nav>
</template>
