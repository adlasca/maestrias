<template>
  <div class="error-boundary">
    <slot v-if="!hasError" />
    <div
v-else class="error-fallback">
      <div class="error-content">
        <div class="error-icon">
          <svg
viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        </div>
        <h2 class="error-title">¡Ups! Algo salió mal</h2>
        <p class="error-message">
          {{ errorMessage || 'Ha ocurrido un error inesperado. Por favor, recarga la página.' }}
        </p>
        <div class="error-actions">
          <button class="retry-button"
@click="retry" aria-label="Reintentar cargar la página">
            <svg
viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
            Reintentar
          </button>
          <button class="report-button"
@click="reportError" aria-label="Reportar el error">
            Reportar Error
          </button>
        </div>
        <details v-if="showDetails"
class="error-details">
          <summary>Detalles técnicos</summary>
          <pre class="error-stack">{{ error?.stack }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

interface Props {
  fallback?: string
  showDetails?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fallback: '',
  showDetails: false,
})

const hasError = ref(false)
const error = ref<Error | null>(null)
const errorMessage = ref('')

const retry = () => {
  hasError.value = false
  error.value = null
  errorMessage.value = ''
  window.location.reload()
}

const reportError = () => {
  // Aquí podrías integrar con un servicio de reporte de errores
  console.error('Error reportado:', error.value)
  alert('Error reportado. Gracias por ayudarnos a mejorar.')
}

onErrorCaptured((err, instance, info) => {
  hasError.value = true
  error.value = err as Error
  errorMessage.value = props.fallback || err?.message || 'Error desconocido'

  // Log del error para debugging
  console.error('Error Boundary capturó un error:', {
    error: err,
    component: instance,
    info,
  })

  // Aquí podrías enviar el error a un servicio de monitoreo
  // sendErrorToMonitoring(err, { component: instance?.$?.type?.name, info })

  return false // Previene que el error se propague
})
</script>

<style scoped>
.error-boundary {
  width: 100%;
  min-height: 200px;
}

.error-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  margin: 2rem 0;
}

.error-content {
  text-align: center;
  color: white;
  max-width: 500px;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.error-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.error-message {
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.retry-button,
.report-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-button {
  background: #10b981;
  color: white;
}

.retry-button:hover {
  background: #059669;
  transform: translateY(-2px);
}

.report-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.report-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.error-details {
  margin-top: 2rem;
  text-align: left;
}

.error-details summary {
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1rem;
}

.error-stack {
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
