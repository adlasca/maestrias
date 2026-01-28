<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)
const isPaused = ref(false)
let timer = null

const dimensions = [
  {
    id: '3D',
    title: 'Modelo Paramétrico',
    subtitle: 'Base Digital Inteligente',
    desc: 'La fundación del BIM. Creación de gemelos digitales con geometría inteligente e información física para detección temprana de colisiones.',
    icon: 'fa-cube',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    gradient: 'from-blue-600 to-cyan-500',
    shadow: 'shadow-blue-500/20',
    features: ['Gemelos Digitales', 'Detección de Choques', 'Visualización Realista', 'Documentación Automática'],
    impact: '-85% Errores Diseño',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4D',
    title: 'Gestión del Tiempo',
    subtitle: 'Simulación Temporal',
    desc: 'Integra el factor tiempo al modelo. Permite visualizar la evolución de la obra, optimizar la logística y planificar fases constructivas.',
    icon: 'fa-clock',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-500',
    gradient: 'from-emerald-600 to-teal-500',
    shadow: 'shadow-emerald-500/20',
    features: ['Cronograma Visual', 'Logística Just-in-Time', 'Simulación de Fases', 'Control de Avance'],
    impact: '+30% Cumplimiento',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5D',
    title: 'Control de Costos',
    subtitle: 'Presupuesto Dinámico',
    desc: 'Vinculación de costos a elementos geométricos. Extracción de cantidades (QTO) en tiempo real y análisis de flujo de caja.',
    icon: 'fa-coins',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-500',
    gradient: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/20',
    features: ['Costos en Tiempo Real', 'Estimaciones Precisas', 'Control Presupuestal', 'Compras Eficientes'],
    impact: '-25% Sobrecostos',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6D',
    title: 'Sostenibilidad',
    subtitle: 'Análisis Energético',
    desc: 'Simulaciones de eficiencia energética, huella de carbono y análisis lumínico para certificaciones LEED/BREEAM desde el diseño.',
    icon: 'fa-leaf',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    border: 'border-lime-500',
    gradient: 'from-lime-500 to-green-600',
    shadow: 'shadow-lime-500/20',
    features: ['Análisis Térmico', 'Huella de Carbono', 'Ciclo de Vida (LCA)', 'Certificaciones Verdes'],
    impact: '+40% Eficiencia',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7D',
    title: 'Facility Management',
    subtitle: 'Operaciones y Mantenimiento',
    desc: 'El modelo "As-Built" digital para la gestión de activos. Manuales, garantías y planes de mantenimiento integrados en el edificio.',
    icon: 'fa-building',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-500',
    gradient: 'from-indigo-600 to-violet-600',
    shadow: 'shadow-indigo-500/20',
    features: ['Mantenimiento Predictivo', 'Gestión de Activos', 'Manuales Digitales', 'Internet of Things (IoT)'],
    impact: '-50% OpEx',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop'
  },
]

const activeDimension = computed(() => dimensions[activeIndex.value])

// Auto-play logic
const startRotation = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    if (!isPaused.value) {
      activeIndex.value = (activeIndex.value + 1) % dimensions.length
    }
  }, 6000)
}

const selectDimension = (index) => {
  activeIndex.value = index
  startRotation() // Reiniciar timer
}

onMounted(() => startRotation())
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="dimensiones-bim" class="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
    
    <div class="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
         style="background-image: radial-gradient(#64748b 1px, transparent 1px); background-size: 32px 32px;">
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-4">
          <i class="fas fa-project-diagram"></i> Metodología BIM
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Las 5 Dimensiones de la <br class="hidden md:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Transformación Digital</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Desde el modelado geométrico hasta la gestión de operaciones, domina el ciclo de vida completo del activo.
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        
        <div class="flex overflow-x-auto pb-4 gap-3 mb-8 no-scrollbar md:justify-center">
          <button 
            v-for="(dim, index) in dimensions" 
            :key="dim.id"
            @click="selectDimension(index)"
            class="flex-shrink-0 relative group px-6 py-3 rounded-xl transition-all duration-300 border-2"
            :class="[
              activeIndex === index 
                ? `bg-white dark:bg-slate-800 ${dim.border} shadow-lg scale-105` 
                : 'bg-white/40 dark:bg-slate-800/40 border-transparent hover:border-slate-300 hover:bg-white'
            ]"
          >
            <div class="flex items-center gap-3">
              <span class="font-black text-xl" :class="activeIndex === index ? dim.color : 'text-slate-400'">
                {{ dim.id }}
              </span>
              <span class="font-semibold text-sm whitespace-nowrap" :class="activeIndex === index ? 'text-slate-800 dark:text-white' : 'text-slate-500'">
                {{ dim.title }}
              </span>
            </div>
            <div v-if="activeIndex === index" class="absolute bottom-0 left-4 right-4 h-1 rounded-t-full bg-gradient-to-r" :class="dim.gradient"></div>
          </button>
        </div>

        <transition mode="out-in" enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          
          <div :key="activeIndex" class="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 grid lg:grid-cols-2 min-h-[500px]">
            
            <div class="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1 relative overflow-hidden">
               <span class="absolute -top-10 -right-10 text-[12rem] font-black opacity-5 select-none pointer-events-none" :class="activeDimension.color">
                {{ activeDimension.id }}
              </span>

              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md" :class="`bg-gradient-to-br ${activeDimension.gradient}`">
                    <i :class="`fas ${activeDimension.icon}`"></i>
                  </div>
                  <h3 class="text-xl font-bold text-slate-400 uppercase tracking-wide">{{ activeDimension.subtitle }}</h3>
                </div>

                <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                  {{ activeDimension.title }}
                </h2>
                
                <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {{ activeDimension.desc }}
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                  <div v-for="feature in activeDimension.features" :key="feature" class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1" :class="activeDimension.color"></i>
                    <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ feature }}</span>
                  </div>
                </div>

                <button class="w-fit px-8 py-3 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group" :class="`bg-gradient-to-r ${activeDimension.gradient} ${activeDimension.shadow}`">
                  Explorar Dimensión {{ activeDimension.id }}
                  <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>

            <div class="relative order-1 lg:order-2 h-64 lg:h-auto overflow-hidden group">
              <div class="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                :src="activeDimension.image" 
                :alt="activeDimension.title" 
                class="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
              
              <div class="absolute bottom-6 right-6 z-20">
                <div class="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border-l-4 transform transition-all hover:-translate-y-1" :class="activeDimension.border">
                  <div class="flex items-center gap-3">
                    <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-700">
                      <i class="fas fa-chart-line text-lg" :class="activeDimension.color"></i>
                    </div>
                    <div>
                      <p class="text-xs text-slate-500 font-bold uppercase">Impacto Real</p>
                      <p class="text-xl font-black text-slate-900">{{ activeDimension.impact }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </transition>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Utility to hide scrollbar but allow functionality */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>