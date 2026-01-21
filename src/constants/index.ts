// Application Constants
export const APP_CONFIG = {
  name: 'Maestría en Ingeniería de la Construcción - BIM',
  shortName: 'Maestría BIM',
  description: 'Programa académico de posgrado en construcción con enfoque BIM',
  version: '1.0.0',
  author: 'Universidad Central del Ecuador',
} as const

// API Configuration
export const API_CONFIG = {
  baseURL: (import.meta as any).env?.VITE_API_BASE_URL || 'https://api.uce.edu.ec',
  timeout: 10000,
  retries: 3,
} as const

// Contact Information
export const CONTACT_INFO = {
  whatsapp: {
    number: (import.meta as any).env?.VITE_WHATSAPP_NUMBER || '593999072657',
    message:
      (import.meta as any).env?.VITE_WHATSAPP_MESSAGE ||
      'Hola, deseo información sobre la Maestría BIM',
  },
  email: 'posgrados@uce.edu.ec',
  phone: '+593 2 396-2800',
} as const

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/uce',
  instagram: 'https://instagram.com/uce',
  linkedin: 'https://linkedin.com/company/uce',
  youtube: 'https://youtube.com/uce',
} as const

// Program Information
export const PROGRAM_INFO = {
  title: 'MAESTRÍA EN INGENIERÍA DE LA CONSTRUCCIÓN',
  subtitle: 'MENCIÓN GESTIÓN ESTRATÉGICA BIM',
  duration: '1 Año',
  credits: 30,
  modality: 'Presencial',
  language: 'Español',
} as const

// Navigation Sections
export const NAV_SECTIONS = [
  { id: 'hero', label: 'Inicio', href: '#hero' },
  { id: 'bim', label: 'BIM', href: '#bim' },
  { id: 'perfil', label: 'Perfil', href: '#perfil' },
  { id: 'malla', label: 'Malla Curricular', href: '#malla' },
  { id: 'docentes', label: 'Docentes', href: '#docentes' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
  { id: 'financiamiento', label: 'Financiamiento', href: '#financiamiento' },
] as const

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 700,
} as const

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'theme',
  language: 'language',
  userPreferences: 'user-preferences',
} as const

// Validation Messages
export const VALIDATION_MESSAGES = {
  required: 'Este campo es obligatorio',
  email: 'Ingresa un email válido',
  minLength: (min: number) => `Debe tener al menos ${min} caracteres`,
  maxLength: (max: number) => `No puede tener más de ${max} caracteres`,
  phone: 'Ingresa un número de teléfono válido',
} as const

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Error de conexión. Verifica tu internet.',
  server: 'Error del servidor. Inténtalo más tarde.',
  validation: 'Revisa los datos ingresados.',
  unknown: 'Ha ocurrido un error inesperado.',
} as const

// Success Messages
export const SUCCESS_MESSAGES = {
  formSubmitted: 'Formulario enviado correctamente',
  messageSent: 'Mensaje enviado. Te contactaremos pronto.',
  subscription: 'Suscripción realizada con éxito.',
} as const
