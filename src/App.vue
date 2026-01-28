<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ErrorBoundary from './components/ErrorBoundary.vue'
import NotificationContainer from './components/NotificationContainer.vue'
import { useScrollToTop } from './composables/useScrollToTop'
import Footer from './components/Footer.vue'

// Composables
const route = useRoute()
const { showScrollTop, scrollToTop } = useScrollToTop()

// State
const mobileMenuOpen = ref(false)

// Configuración de WhatsApp
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '593999072657'
const whatsappMessage = encodeURIComponent(
  import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, deseo información sobre las Maestrías'
)
const whatsappUrl = computed(() => `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`)

// Configuración del Menú (Centralizada)
// Esto facilita agregar más maestrías en el futuro sin tocar el HTML
const menuItems = [
  { 
    label: 'BIM', 
    to: '/maestria/bim', 
    activeRoutes: ['BIM', 'MaestriaBIM'],
    color: 'text-blue-600', 
    hover: 'hover:text-blue-600' 
  },
  { 
    label: 'Hidráulica', 
    to: '/maestria/hidraulica', 
    activeRoutes: ['MaestriaHidraulica'],
    color: 'text-cyan-600', 
    hover: 'hover:text-cyan-600' 
  },
  { 
    label: 'Geotécnica', 
    to: '/maestria/geotecnica', 
    activeRoutes: ['MaestriaGeotecnica'],
    color: 'text-green-600', 
    hover: 'hover:text-green-600' 
  },
]

// Función para verificar ruta activa
const isActive = (item) => item.activeRoutes.includes(route.name)
</script>

<template>
  <div class="bg-slate-50 text-slate-700 font-sans min-h-screen flex flex-col" role="application">
    <ErrorBoundary>
      
      <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200 transition-all duration-300">
        <div class="container mx-auto px-4 py-3">
          <nav class="flex items-center justify-between" role="navigation">
            
            <router-link to="/" class="flex items-center gap-4 group" @click="mobileMenuOpen = false">
              <div class="flex items-center gap-3">
                <img src="/logo-uce.png" alt="Logo UCE" class="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
                <img src="/images/logo-fica.png" alt="Logo FICA" class="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
              </div>
              <div class="hidden sm:block h-12 w-px bg-slate-200 mx-2"></div>
              <div class="hidden lg:block leading-tight">
                <h1 class="text-xl font-bold text-slate-900 tracking-tight">Universidad Central</h1>
                <p class="text-sm text-slate-500 font-medium">Facultad de Ingeniería y Ciencias Aplicadas</p>
              </div>
            </router-link>

            <div class="hidden md:flex items-center gap-8">
              <router-link 
                v-for="item in menuItems" 
                :key="item.to"
                :to="item.to"
                class="font-semibold text-sm tracking-wide transition-all duration-200 border-b-2 border-transparent py-1"
                :class="[
                  isActive(item) ? `${item.color} border-current` : `text-slate-600 ${item.hover} hover:border-gray-200`
                ]"
              >
                {{ item.label }}
              </router-link>
              
              <router-link to="/" 
                class="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Ver Catálogo
              </router-link>
            </div>

            <button 
              @click="mobileMenuOpen = !mobileMenuOpen" 
              class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Menú principal"
            >
              <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars text-xl'"></i>
            </button>
          </nav>
        </div>

        <transition 
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col gap-2">
            <router-link 
              v-for="item in menuItems" 
              :key="item.to"
              :to="item.to"
              @click="mobileMenuOpen = false"
              class="px-4 py-3 rounded-xl font-semibold transition-colors flex items-center justify-between group"
              :class="isActive(item) ? 'bg-slate-50 ' + item.color : 'text-slate-600 hover:bg-slate-50'"
            >
              {{ item.label }}
              <i v-if="isActive(item)" class="fas fa-chevron-right text-xs"></i>
            </router-link>
            <div class="h-px bg-slate-100 my-2"></div>
            <router-link to="/" @click="mobileMenuOpen = false"
              class="w-full bg-blue-600 text-white py-3 rounded-xl text-center font-bold shadow-md active:scale-95 transition-transform">
              Ver Todas las Maestrías
            </router-link>
          </div>
        </transition>
      </header>

      <main class="flex-grow">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <div class="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
           class="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
           aria-label="Contactar por WhatsApp">
           <i class="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
           <span class="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             Contáctanos
           </span>
        </a>

        <transition name="fade">
          <button v-if="showScrollTop" @click="scrollToTop"
            class="bg-white text-slate-800 p-4 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            aria-label="Volver arriba">
            <i class="fas fa-arrow-up text-lg"></i>
          </button>
        </transition>
      </div>

      <NotificationContainer />
      <Footer />

    </ErrorBoundary>
  </div>
</template>

<style>
/* Animaciones Globales */

/* Transición de Página */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Transición genérica Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>