// Setup file for Vitest
import { beforeAll } from 'vitest'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {},
    }
  },
})

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: () => {},
})

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
})

// Mock localStorage
const localStorageMock = {
  getItem: () => null,
  setItem: () => null,
  removeItem: () => null,
  clear: () => null,
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})
