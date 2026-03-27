import { ref, watch } from 'vue'

// Singleton state — shared across all components
const isDark = ref(false)

// Initialise from localStorage or system preference
const saved = typeof window !== 'undefined' ? localStorage.getItem('calo-theme') : null
const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
if (saved === 'dark' || (!saved && prefersDark)) {
  isDark.value = true
  document.documentElement.classList.add('dark')
}

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('calo-theme', val ? 'dark' : 'light')
})

export function useDarkMode() {
  const toggle = () => { isDark.value = !isDark.value }
  return { isDark, toggle }
}
