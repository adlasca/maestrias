import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isLoading = ref(false)
  const currentSection = ref('hero')
  const theme = ref('light')

  // Getters
  const isDarkMode = computed(() => theme.value === 'dark')
  const loadingMessage = computed(() => (isLoading.value ? 'Cargando...' : ''))

  // Actions
  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  const setCurrentSection = (section: string) => {
    currentSection.value = section
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    // State
    isLoading,
    currentSection,
    theme,

    // Getters
    isDarkMode,
    loadingMessage,

    // Actions
    setLoading,
    setCurrentSection,
    toggleTheme,
  }
})
