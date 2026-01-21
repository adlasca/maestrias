import { ref, onUnmounted, readonly } from 'vue'

export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {},
) {
  const target = ref<Element | null>(null)
  const isIntersecting = ref(false)
  const observer = ref<IntersectionObserver | null>(null)

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  }

  const observe = (element: Element) => {
    if (observer.value) {
      observer.value.disconnect()
    }

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isIntersecting.value = entry.isIntersecting
      })
      callback(entries, observer.value!)
    }, defaultOptions)

    observer.value.observe(element)
  }

  const unobserve = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
  }

  onUnmounted(() => {
    unobserve()
  })

  return {
    target,
    isIntersecting: readonly(isIntersecting),
    observe,
    unobserve,
  }
}

// Composable específico para lazy loading
export function useLazyLoad(options: IntersectionObserverInit = {}) {
  const isVisible = ref(false)
  const hasLoaded = ref(false)

  const { observe } = useIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasLoaded.value) {
        isVisible.value = true
        hasLoaded.value = true
      }
    })
  }, options)

  return {
    isVisible: readonly(isVisible),
    hasLoaded: readonly(hasLoaded),
    observe,
  }
}
