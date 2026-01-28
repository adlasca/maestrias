<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)
const isPaused = ref(false)
let timer = null

const dimensions = [
  {
    id: '01',
    label: 'Hidráulica',
    title: 'Hidráulica Fluvial y Obras',
    subtitle: 'Control y Regulación',
    desc: 'Análisis avanzado del flujo en ríos y canales. Diseño de obras de regulación, control de inundaciones y protección de márgenes mediante modelación 1D y 2D.',
    icon: 'fa-water', // Representa flujo/río
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    gradient: 'from-blue-600 to-cyan-500',
    shadow: 'shadow-blue-500/20',
    features: ['Modelación de Ríos 1D/2D', 'Tránsito de Avenidas', 'Obras de Regulación (Presas)', 'Sedimentología Fluvial'],
    impact: 'Control de Inundaciones',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '02',
    label: 'Sanitaria',
    title: 'Sistemas Hidrosanitarios',
    subtitle: 'Agua Potable y Drenaje',
    desc: 'Diagnóstico y optimización de redes de agua potable y alcantarillado. Gestión de pérdidas, control de presiones y diseño de sistemas de drenaje urbano sostenible (SUDS).',
    icon: 'fa-faucet', // Representa abastecimiento
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-500',
    gradient: 'from-cyan-600 to-teal-500',
    shadow: 'shadow-cyan-500/20',
    features: ['Redes de Distribución', 'Control de Fugas (ANC)', 'Drenaje Sostenible (SUDS)', 'Modelación (SWMM/EPANET)'],
    impact: 'Eficiencia del Servicio',
    image: '/images/Hidroelect.jpeg'
  },
  {
    id: '03',
    label: 'Tratamiento',
    title: 'Calidad y Tratamiento',
    subtitle: 'Potabilización y Depuración',
    desc: 'Diseño y operación de plantas de tratamiento (PTAP y PTAR). Enfoque en economía circular, reúso de aguas residuales y gestión eficiente de lodos.',
    icon: 'fa-flask', // Representa calidad/química
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-500',
    gradient: 'from-teal-600 to-emerald-500',
    shadow: 'shadow-teal-500/20',
    features: ['Diseño de PTAP / PTAR', 'Economía Circular', 'Reúso de Agua', 'Gestión de Lodos'],
    impact: 'Salud Pública',
    image: '/images/PantaHi.jpeg'
  },
  {
    id: '04',
    label: 'Gestión',
    title: 'Gestión Sostenible',
    subtitle: 'Cuencas y Acuíferos',
    desc: 'Gestión Integrada de Recursos Hídricos (GIRH) a nivel de cuenca. Manejo de aguas subterráneas, gobernanza del agua y adaptación al cambio climático.',
    icon: 'fa-hand-holding-water', // Representa cuidado/gestión
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-500',
    gradient: 'from-emerald-600 to-green-500',
    shadow: 'shadow-emerald-500/20',
    features: ['GIRH y Gobernanza', 'Hidrogeología (Acuíferos)', 'Adaptación Climática', 'Balances Hídricos'],
    impact: 'Sostenibilidad Hídrica',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '05',
    label: 'Innovación',
    title: 'Agua Digital 4.0',
    subtitle: 'Tecnología Emergente',
    desc: 'Transformación digital del sector agua. Implementación de IoT, sensores inteligentes, SCADA y Gemelos Digitales para el monitoreo en tiempo real.',
    icon: 'fa-wifi', // Representa IoT/Conectividad
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-500',
    gradient: 'from-indigo-600 to-violet-600',
    shadow: 'shadow-indigo-500/20',
    features: ['Internet of Things (IoT)', 'Gemelos Digitales', 'Sistemas SCADA', 'Big Data Hídrico'],
    impact: 'Modernización Tecnológica',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
]

const activeDimension = computed(() => dimensions[activeIndex.value])

// Lógica de rotación automática
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
  startRotation() // Reiniciar timer al interactuar
}

onMounted(() => startRotation())
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="dimensiones-hidraulica" class="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
    
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
          <i class="fas fa-layer-group"></i> Ingeniería Especializada
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Maestría en <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Recursos Hídricos</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Desde la mecánica de fluidos fundamental hasta la gestión estratégica de cuencas: un enfoque integral para el futuro del agua.
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        
        <div class="flex overflow-x-auto pb-6 gap-4 mb-8 no-scrollbar md:justify-center snap-x">
          <button 
            v-for="(dim, index) in dimensions" 
            :key="dim.id"
            @click="selectDimension(index)"
            class="snap-start flex-shrink-0 relative group px-6 py-4 rounded-2xl transition-all duration-300 border-2 min-w-[160px] md:min-w-[auto]"
            :class="[
              activeIndex === index 
                ? `bg-white dark:bg-slate-800 ${dim.border} shadow-lg scale-105` 
                : 'bg-white/50 dark:bg-slate-800/40 border-transparent hover:bg-white hover:border-slate-200'
            ]"
          >
            <div class="flex flex-col items-center gap-2">
              <i class="fas text-2xl mb-1 transition-colors duration-300" 
                 :class="[`${dim.icon}`, activeIndex === index ? dim.color : 'text-slate-400 group-hover:text-slate-500']"></i>
              <span class="font-bold text-sm" :class="activeIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-500'">
                {{ dim.id }}
              </span>
            </div>
            <div v-if="activeIndex === index" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 rounded-t-full bg-gradient-to-r" :class="dim.gradient"></div>
          </button>
        </div>

        <transition mode="out-in" enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
          
          <div :key="activeIndex" class="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 grid lg:grid-cols-12 min-h-[550px]">
            
            <div class="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
              <i :class="`fas ${activeDimension.icon}`" class="absolute -bottom-10 -right-10 text-[14rem] opacity-[0.03] pointer-events-none transform -rotate-12"></i>

              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-6">
                  <span class="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-slate-100 dark:bg-slate-700 text-slate-500">
                    {{ activeDimension.subtitle }}
                  </span>
                </div>

                <h3 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                  {{ activeDimension.title }}
                </h3>
                
                <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {{ activeDimension.desc }}
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div v-for="feature in activeDimension.features" :key="feature" 
                       class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 transition-colors">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0" :class="`bg-${activeDimension.id === 'Hidráulica' ? 'blue' : 'emerald'}-100`">
                       <i class="fas fa-check text-xs" :class="activeDimension.color"></i>
                    </div>
                    <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">{{ feature }}</span>
                  </div>
                </div>

                <button class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
                        :class="`bg-gradient-to-r ${activeDimension.gradient} ${activeDimension.shadow}`">
                  Ver Detalles Técnicos
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            <div class="lg:col-span-5 relative h-80 lg:h-auto overflow-hidden group">
              <div class="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              
              <img 
                :src="activeDimension.image" 
                :alt="activeDimension.title" 
                class="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
              
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-slate-900/80 to-transparent">
                <div class="bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border-l-4 transform transition-all duration-500 translate-y-2 group-hover:translate-y-0" :class="activeDimension.border">
                  <div class="flex justify-between items-end">
                    <div>
                      <p class="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Impacto Proyectado</p>
                      <p class="text-2xl font-black text-slate-800">{{ activeDimension.impact }}</p>
                    </div>
                    <div class="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100">
                      <i class="fas fa-chart-pie" :class="activeDimension.color"></i>
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

/* Animations for background blobs */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>