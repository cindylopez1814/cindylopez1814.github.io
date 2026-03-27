import { ref } from 'vue'
import { translations, type Lang } from '../i18n/translations'

// Singleton state — shared across all components
const lang = ref<Lang>('es')

export function useLang() {
  const setLang = (l: Lang) => { lang.value = l }
  const t = (key: string): string => translations[lang.value][key] ?? key
  return { lang, setLang, t }
}
