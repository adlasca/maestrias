import { watch, onMounted } from 'vue'
import { useLocalStorage } from './useLocalStorage'

export function useDarkMode() {
  const { value: isDark } = useLocalStorage('dark-mode', false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  const setDarkMode = (value: boolean) => {
    isDark.value = value
  }

  // Aplicar el tema al documento
  watch(
    isDark,
    (newValue) => {
      const html = document.documentElement
      if (newValue) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    },
    { immediate: true },
  )

  // Detectar preferencia del sistema
  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      // Solo aplicar si no hay preferencia guardada
      if (localStorage.getItem('dark-mode') === null) {
        setDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    // Aplicar preferencia del sistema si no hay guardada
    if (localStorage.getItem('dark-mode') === null) {
      setDarkMode(mediaQuery.matches)
    }

    return () => mediaQuery.removeEventListener('change', handleChange)
  })

  return {
    isDark,
    toggleDarkMode,
    setDarkMode,
  }
}
