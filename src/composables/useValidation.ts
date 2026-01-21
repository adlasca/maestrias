import { ref, computed, readonly, Ref } from 'vue'

export interface ValidationRule<T = any> {
  validate: (value: T) => boolean
  message: string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function useValidation<T>(value: Ref<T>, rules: ValidationRule<T>[] = []) {
  const errors = ref<string[]>([])

  const validate = (): ValidationResult => {
    errors.value = []

    for (const rule of rules) {
      if (!rule.validate(value.value)) {
        errors.value.push(rule.message)
      }
    }

    return {
      isValid: errors.value.length === 0,
      errors: [...errors.value],
    }
  }

  const isValid = computed(() => errors.value.length === 0)

  const hasErrors = computed(() => errors.value.length > 0)

  const firstError = computed(() => errors.value[0] || '')

  return {
    errors: readonly(errors),
    isValid,
    hasErrors,
    firstError,
    validate,
  }
}

// Reglas de validación comunes
export const validationRules = {
  required: (message = 'Este campo es requerido'): ValidationRule => ({
    validate: (value: any) => {
      if (typeof value === 'string') return value.trim().length > 0
      if (Array.isArray(value)) return value.length > 0
      return value != null && value !== ''
    },
    message,
  }),

  minLength: (min: number, message?: string): ValidationRule<string> => ({
    validate: (value: string) => value.length >= min,
    message: message || `Debe tener al menos ${min} caracteres`,
  }),

  maxLength: (max: number, message?: string): ValidationRule<string> => ({
    validate: (value: string) => value.length <= max,
    message: message || `No puede tener más de ${max} caracteres`,
  }),

  email: (message = 'Email inválido'): ValidationRule<string> => ({
    validate: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    },
    message,
  }),

  phone: (message = 'Número de teléfono inválido'): ValidationRule<string> => ({
    validate: (value: string) => {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/
      return phoneRegex.test(value)
    },
    message,
  }),

  url: (message = 'URL inválida'): ValidationRule<string> => ({
    validate: (value: string) => {
      try {
        new URL(value)
        return true
      } catch {
        return false
      }
    },
    message,
  }),

  pattern: (regex: RegExp, message: string): ValidationRule<string> => ({
    validate: (value: string) => regex.test(value),
    message,
  }),
}
