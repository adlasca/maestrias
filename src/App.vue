<script setup>
import HeroSection from './components/HeroSection.vue'
import BimDimensions from './components/BimDimensions.vue' /* NUEVO */
import ProfilesSection from './components/ProfilesSection.vue' /* NUEVO */
import CurriculumGrid from './components/CurriculumGrid.vue'
import FacultySection from './components/FacultySection.vue' /* NUEVO */
import AdmissionContact from './components/AdmissionContact.vue'
import FinancingSection from './components/FinancingSection.vue' /* NUEVO */
import ErrorBoundary from './components/ErrorBoundary.vue'
import NotificationContainer from './components/NotificationContainer.vue'
import { useScrollToTop } from './composables/useScrollToTop'
import { useDarkMode } from './composables/useDarkMode'

// Environment variables
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '593999072657'
const whatsappMessage = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, deseo información sobre la Maestría BIM')

// Composables
const { showScrollTop, scrollToTop } = useScrollToTop()
const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <div class="bg-gray-50 text-gray-700 font-sans dark:bg-gray-900 dark:text-gray-200" role="application"
    aria-label="Sitio web de Maestría BIM">
    <ErrorBoundary>
      <header
        class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 dark:bg-gray-800/95 dark:border-gray-700 transition-all duration-300"
        role="banner">
        <div class="container mx-auto px-4 py-3">
          <nav class="flex items-center justify-between" role="navigation" aria-label="Navegación principal">
            <div class="flex items-center gap-4">
              <img src="/logo-uce.png" alt="Universidad Central del Ecuador" class="h-10 sm:h-12 w-auto object-contain">

              <div class="hidden sm:block h-10 w-px bg-gray-300 dark:bg-gray-600 mx-2" aria-hidden="true" />

              <img src="https://cdn-icons-png.flaticon.com/512/2040/2040504.png" alt="Facultad de Ingeniería"
                class="h-8 sm:h-10 w-auto object-contain opacity-80">

              <div class="pl-2 border-l border-gray-200 dark:border-gray-600 ml-2 hidden lg:block">
                <h1 class="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase leading-tight">
                  Posgrados
                </h1>
                <h2 class="text-[10px] font-semibold text-gray-600 dark:text-gray-400 uppercase">
                  Ingeniería Civil
                </h2>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'" @click="toggleDarkMode">
                <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd" />
                </svg>
                <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>

              <a href="#contacto"
                class="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Ir a la sección de contacto para postular">
                <i class="fas fa-file-signature mr-2" aria-hidden="true" /> POSTULAR
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main role="main">
        <HeroSection />
        <BimDimensions />
        <ProfilesSection />
        <CurriculumGrid id="malla" />
        <FacultySection id="docentes" />
        <AdmissionContact id="contacto" />
        <FinancingSection id="financiamiento" />
      </main>

      <footer class="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800" role="contentinfo">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div class="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
              <img src="/logo-uce.png" class="h-16 grayscale hover:grayscale-0 transition-all"
                alt="Universidad Central del Ecuador">
              <div class="text-left">
                <h3 class="font-bold text-lg">
                  Universidad Central del Ecuador
                </h3>
                <p class="text-xs text-gray-400">
                  Facultad de Ingeniería y Ciencias Aplicadas
                </p>
              </div>
            </div>
            <nav aria-label="Redes sociales">
              <div class="flex gap-4">
                <a href="#" aria-label="Facebook de la Universidad Central del Ecuador"
                  class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <i class="fab fa-facebook-f" aria-hidden="true" />
                </a>
                <a href="#" aria-label="Instagram de la Universidad Central del Ecuador"
                  class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300">
                  <i class="fab fa-instagram" aria-hidden="true" />
                </a>
                <a href="#" aria-label="LinkedIn de la Universidad Central del Ecuador"
                  class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <i class="fab fa-linkedin-in" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>

          <div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Maestría en Ciencias e Ingeniería de la Construcción. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a :href="`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`" target="_blank" rel="noopener noreferrer"
        class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-110 hover:bg-green-600 transition-all duration-300 flex items-center justify-center w-16 h-16 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Contactar por WhatsApp para información sobre la maestría">
        <i class="fab fa-whatsapp text-3xl" aria-hidden="true" />
      </a>

      <!-- Scroll to top button -->
      <button v-if="showScrollTop"
        class="fixed bottom-24 right-6 z-40 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 flex items-center justify-center w-12 h-12 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Volver arriba" @click="scrollToTop">
        <i class="fas fa-arrow-up" aria-hidden="true" />
      </button>

      <!-- Global Notifications -->
      <NotificationContainer />
    </ErrorBoundary>
  </div>
</template>