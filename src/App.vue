<script setup>
import { ref } from 'vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import NotificationContainer from './components/NotificationContainer.vue'
import { useScrollToTop } from './composables/useScrollToTop'
import Footer from './components/Footer.vue'

// Environment variables
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '593999072657'
const whatsappMessage = encodeURIComponent(
  import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, deseo información sobre las Maestrías',
)

// Mobile menu state
const mobileMenuOpen = ref(false)

// Composables
const { showScrollTop, scrollToTop } = useScrollToTop()
</script>

<template>
  <div class="bg-gray-50 text-gray-700 font-sans" role="application" aria-label="Sitio web de Maestrías UCE">
    <ErrorBoundary>
      <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200" role="banner">
        <div class="container mx-auto px-4 py-3">
          <nav class="flex items-center justify-between" role="navigation" aria-label="Navegación principal">
            <div class="flex items-center gap-4">
              <router-link to="/" class="flex items-center gap-4">
                <img src="/logo-uce.png" alt="Universidad Central del Ecuador"
                  class="h-20 sm:h-22 w-auto object-contain" />
                <img src="/images/logo-fica.png" alt="Universidad Central del Ecuador"
                  class="h-20 sm:h-22 w-auto object-contain" />
                <div class="hidden sm:block h-10 w-px bg-gray-300 mx-2" aria-hidden="true" />
                <div class="hidden md:block">
                  <h1 class="text-2xl font-bold text-gray-900">Universidad Central del Ecuador</h1>
                  <p class="text-lg text-gray-600">Facultad de Ingeniería y Ciencias Aplicadas</p>
                </div>
              </router-link>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-6">
              <router-link to="/maestria/bim" class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                :class="{ 'text-blue-600': $route.name === 'BIM' || $route.name === 'MaestriaBIM' }">
                BIM
              </router-link>
              <router-link to="/maestria/hidraulica"
                class="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
                :class="{ 'text-cyan-600': $route.name === 'MaestriaHidraulica' }">
                Hidráulica
              </router-link>
              <router-link to="/maestria/geotecnica"
                class="text-gray-700 hover:text-green-600 font-medium transition-colors"
                :class="{ 'text-green-600': $route.name === 'MaestriaGeotecnica' }">
                Geotécnica
              </router-link>
              <router-link to="/"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ver Todas
              </router-link>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
              <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-blue-600 p-2"
                aria-label="Toggle mobile menu">
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </nav>

          <!-- Mobile Menu -->
          <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div class="flex flex-col gap-4">
              <router-link to="/" @click="mobileMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                :class="{ 'text-blue-600': $route.name === 'BIM' || $route.name === 'MaestriaBIM' }">
                Ingeniería BIM
              </router-link>
              <router-link to="/maestria/hidraulica" @click="mobileMenuOpen = false"
                class="text-gray-700 hover:text-cyan-600 font-medium transition-colors py-2"
                :class="{ 'text-cyan-600': $route.name === 'MaestriaHidraulica' }">
                Hidráulica
              </router-link>
              <router-link to="/maestria/geotecnica" @click="mobileMenuOpen = false"
                class="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                :class="{ 'text-green-600': $route.name === 'MaestriaGeotecnica' }">
                Geotécnica
              </router-link>
              <router-link to="/" @click="mobileMenuOpen = false"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Ver Todas
              </router-link>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main>
        <router-view />
      </main>

      <!-- Scroll to Top Button -->
      <button v-if="showScrollTop" @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        aria-label="Scroll to top">
        <i class="fas fa-arrow-up"></i>
      </button>

      <NotificationContainer />
      <Footer />

    </ErrorBoundary>

  </div>
</template>
