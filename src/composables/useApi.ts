import { ref, computed, readonly } from 'vue'
import { useAppStore } from '@/stores/app'

interface ApiResponse<T> {
  data: T | null
  error: string | null
  loading: boolean
}

export function useApi<T>() {
  const appStore = useAppStore()
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const isLoading = computed(() => loading.value || appStore.isLoading)

  const execute = async (url: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      data.value = result

      return {
        data: result,
        error: null,
        loading: false,
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      error.value = errorMessage

      return {
        data: null,
        error: errorMessage,
        loading: false,
      }
    } finally {
      loading.value = false
    }
  }

  const get = (url: string) => execute(url)
  const post = (url: string, body: any) =>
    execute(url, { method: 'POST', body: JSON.stringify(body) })
  const put = (url: string, body: any) =>
    execute(url, { method: 'PUT', body: JSON.stringify(body) })
  const del = (url: string) => execute(url, { method: 'DELETE' })

  return {
    data: readonly(data),
    error: readonly(error),
    loading: isLoading,
    execute,
    get,
    post,
    put,
    delete: del,
  }
}
