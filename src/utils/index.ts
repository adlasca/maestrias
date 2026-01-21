/**
 * Utility functions for the application
 */

// Format utilities
export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency,
  }).format(amount)
}

export const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('es-EC', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(dateObj)
}

export const formatPhone = (phone: string): string => {
  // Format Ecuadorian phone numbers
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('593')) {
    return `+593 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`
  }
  return phone
}

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/
  return phoneRegex.test(phone)
}

export const isValidURL = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// DOM utilities
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textArea)
    return success
  }
}

export const scrollToElement = (elementId: string, offset = 0): void => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }
}

export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Array utilities
export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)]
}

export const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Object utilities
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = { ...obj }
  keys.forEach((key) => {
    delete result[key]
  })
  return result
}

// Async utilities
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const retry = async <T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  delay: number = 1000,
): Promise<T> => {
  try {
    return await fn()
  } catch (error) {
    if (attempts <= 1) {
      throw error
    }
    await sleep(delay)
    return retry(fn, attempts - 1, delay * 2)
  }
}

// Local storage utilities
export const safeLocalStorage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set: <T>(key: string, value: T): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  },

  remove: (key: string): boolean => {
    try {
      localStorage.removeItem(key)
      return true
    } catch {
      return false
    }
  },
}

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: number | null = null

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = window.setTimeout(() => func(...args), wait)
  }
}

// Throttle utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
