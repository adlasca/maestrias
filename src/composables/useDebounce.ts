import { ref, watch, Ref, readonly } from 'vue'

export function useDebounce<T>(value: Ref<T>, delay: number = 300) {
  const debouncedValue = ref<T>(value.value)

  let timeoutId: number | null = null

  watch(value, (newValue) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = window.setTimeout(() => {
      debouncedValue.value = newValue
    }, delay)
  })

  return readonly(debouncedValue)
}

// Composable para funciones debounced
export function useDebounceFn<T extends (...args: any[]) => any>(fn: T, delay: number = 300): T {
  let timeoutId: number | null = null

  return ((...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }) as T
}
