import { reactive, computed, watch } from 'vue'
import { useValidation, ValidationRule, ValidationResult } from './useValidation'

export interface FormField<T = any> {
  value: T
  rules: ValidationRule<T>[]
  touched: boolean
  dirty: boolean
}

export interface FormState {
  [key: string]: FormField
}

export function useForm<T extends FormState>(initialState: T) {
  const form = reactive<T>({ ...initialState })

  const fields = computed(() =>
    Object.keys(form).map((key) => ({
      key,
      field: form[key],
      validation: useValidation(
        computed(() => form[key].value),
        form[key].rules,
      ),
    })),
  )

  const isValid = computed(() => fields.value.every(({ validation }) => validation.isValid))

  const isDirty = computed(() => fields.value.some(({ field }) => field.dirty))

  const isTouched = computed(() => fields.value.some(({ field }) => field.touched))

  const errors = computed(() =>
    fields.value.reduce(
      (acc, { key, validation }) => {
        if (validation.hasErrors) {
          acc[key] = [...validation.errors.value]
        }
        return acc
      },
      {} as Record<string, readonly string[]>,
    ),
  )

  const validate = (): ValidationResult => {
    const results = fields.value.map(({ validation }) => validation.validate())
    const allErrors = results.flatMap((result) => result.errors)

    return {
      isValid: allErrors.length === 0,
      errors: allErrors,
    }
  }

  const validateField = (fieldName: keyof T): ValidationResult => {
    const field = fields.value.find((f) => f.key === fieldName)
    return field ? field.validation.validate() : { isValid: true, errors: [] }
  }

  const setFieldValue = <K extends keyof T>(fieldName: K, value: T[K]['value']) => {
    ;(form as any)[fieldName].value = value(form as any)[fieldName].dirty = true
  }

  const setFieldTouched = (fieldName: keyof T, touched = true) => {
    ;(form as any)[fieldName].touched = touched
  }

  const reset = () => {
    Object.keys(form).forEach((key) => {
      ;(form as any)[key].value = initialState[key].value
      ;(form as any)[key].touched = false
      ;(form as any)[key].dirty = false
    })
  }

  const getValues = () => {
    return Object.keys(form).reduce(
      (acc, key) => {
        acc[key] = form[key].value
        return acc
      },
      {} as Record<string, any>,
    )
  }

  // Auto-validate on field change
  watch(
    () => fields.value,
    () => {
      fields.value.forEach(({ field }) => {
        if (field.dirty) {
          field.touched = true
        }
      })
    },
    { deep: true },
  )

  return {
    form,
    fields,
    isValid,
    isDirty,
    isTouched,
    errors,
    validate,
    validateField,
    setFieldValue,
    setFieldTouched,
    reset,
    getValues,
  }
}
