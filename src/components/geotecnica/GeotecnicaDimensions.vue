<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)
const isPaused = ref(false)
let timer = null

const dimensions = [
  {
    id: '01',
    label: 'Mecánica',
    title: 'Mecánica de Suelos y Rocas',
    subtitle: 'Comportamiento del Terreno',
    desc: 'Análisis profundo del comportamiento tensión-deformación de geomateriales. Interpretación de ensayos avanzados (triaxiales, corte directo) y criterios de rotura (Mohr-Coulomb, Hoek-Brown).',
    icon: 'fa-layer-group', // Representa estratigrafía
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-500',
    gradient: 'from-amber-600 to-orange-500',
    shadow: 'shadow-amber-500/20',
    features: ['Teorías de Elasticidad y Plasticidad', 'Estados Tensionales', 'Caracterización de Macizos Rocosos (RMR, Q, GSI)', 'Suelos Especiales'],
    impact: 'Base Fundamental',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '02',
    label: 'Sísmica',
    title: 'Geotecnia Sísmica',
    subtitle: 'Dinámica de Suelos',
    desc: 'Evaluación de la respuesta del terreno ante eventos sísmicos. Análisis de propagación de ondas, efectos de sitio, licuación de suelos y microzonificación sísmica.',
    icon: 'fa-house-damage', // Representa impacto sísmico
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-500',
    gradient: 'from-red-600 to-rose-600',
    shadow: 'shadow-red-500/20',
    features: ['Respuesta de Sitio 1D', 'Análisis de Licuación', 'Amplificación Sísmica', 'Parámetros Dinámicos'],
    impact: 'Resiliencia Sísmica',
    image: 'https://images.unsplash.com/photo-1584068595561-39a044677798?q=80&w=800&auto=format&fit=crop' // Terremoto/Grieta conceptual
  },
  {
    id: '03',
    label: 'Modelación',
    title: 'Modelación Numérica',
    subtitle: 'Simulación Computacional',
    desc: 'Uso de software especializado (PLAXIS, GeoStudio) para simular el comportamiento de obras complejas mediante Elementos Finitos (FEM) y Diferencias Finitas.',
    icon: 'fa-laptop-code',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    gradient: 'from-blue-600 to-indigo-600',
    shadow: 'shadow-blue-500/20',
    features: ['Modelos Constitutivos', 'Análisis 2D y 3D', 'Interacción Suelo-Estructura', 'Calibración de Modelos'],
    impact: 'Precisión de Diseño',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' // Tech/Data
  },
  {
    id: '04',
    label: 'Diseño',
    title: 'Ingeniería de Obras',
    subtitle: 'Infraestructura Civil',
    desc: 'Diseño avanzado de cimentaciones (superficiales y profundas), estabilidad de taludes, excavaciones subterráneas y estructuras de contención bajo normativa vigente.',
    icon: 'fa-hard-hat',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-500',
    gradient: 'from-emerald-600 to-teal-500',
    shadow: 'shadow-emerald-500/20',
    features: ['Cimentaciones Profundas', 'Túneles y Galerías', 'Estabilización de Taludes', 'Muros de Contención'],
    impact: 'Seguridad Estructural',
    image: 'https://images.unsplash.com/photo-1590642916589-592b4586b6a2?q=80&w=800&auto=format&fit=crop' // Construcción pesada
  },
  {
    id: '05',
    label: 'Riesgos',
    title: 'Gestión de Riesgos',
    subtitle: 'Amenaza y Vulnerabilidad',
    desc: 'Identificación y mitigación de amenazas geotécnicas (deslizamientos, hundimientos). Planificación territorial basada en mapas de susceptibilidad y riesgo.',
    icon: 'fa-shield-virus', // Representa protección/riesgo
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-500',
    gradient: 'from-purple-600 to-violet-600',
    shadow: 'shadow-purple-500/20',
    features: ['Mapas de Amenaza', 'Vulnerabilidad Física', 'Mitigación de Desastres', 'Ordenamiento Territorial'],
    impact: 'Protección Civil',
    image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop' // Montaña/Deslizamiento conceptual
  },
]

const activeDimension = computed(() => dimensions[activeIndex.value])

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
  startRotation()
}

onMounted(() => startRotation())
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="dimensiones-geotecnica" class="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
    
    <div class="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
         style="background-image: radial-gradient(#64748b 1px, transparent 1px); background-size: 32px 32px;">
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-4">
          <i class="fas fa-layer-group"></i> Áreas de Dominio
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Los 5 ejes de la <br class="hidden md:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Ingeniería Geotécnica</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Un enfoque integral que abarca desde la mecánica fundamental hasta la innovación tecnológica.
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        
        <div class="flex overflow-x-auto pb-4 gap-3 mb-8 no-scrollbar md:justify-center">
          <button 
            v-for="(dim, index) in dimensions" 
            :key="dim.id"
            @click="selectDimension(index)"
            class="flex-shrink-0 relative group px-5 py-3 rounded-xl transition-all duration-300 border-2 min-w-[140px]"
            :class="[
              activeIndex === index 
                ? `bg-white dark:bg-slate-800 ${dim.border} shadow-lg scale-105` 
                : 'bg-white/40 dark:bg-slate-800/40 border-transparent hover:border-slate-300 hover:bg-white'
            ]"
          >
            <div class="flex flex-col items-start">
              <span class="font-black text-2xl mb-1" :class="activeIndex === index ? dim.color : 'text-slate-400'">
                {{ dim.id }}
              </span>
              <span class="font-bold text-sm whitespace-nowrap" :class="activeIndex === index ? 'text-slate-800 dark:text-white' : 'text-slate-500'">
                {{ dim.label }}
              </span>
            </div>
            <div v-if="activeIndex === index" class="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r" :class="dim.gradient"></div>
          </button>
        </div>

        <transition mode="out-in" enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          
          <div :key="activeIndex" class="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 grid lg:grid-cols-2 min-h-[500px]">
            
            <div class="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1 relative overflow-hidden">
               <span class="absolute -top-6 -right-6 text-[10rem] font-black opacity-5 select-none pointer-events-none" :class="activeDimension.color">
                {{ activeDimension.id }}
              </span>

              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md" :class="`bg-gradient-to-br ${activeDimension.gradient}`">
                    <i :class="`fas ${activeDimension.icon}`"></i>
                  </div>
                  <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest">{{ activeDimension.subtitle }}</h3>
                </div>

                <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                  {{ activeDimension.title }}
                </h2>
                
                <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {{ activeDimension.desc }}
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                  <div v-for="feature in activeDimension.features" :key="feature" class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full" :class="`bg-gradient-to-r ${activeDimension.gradient}`"></div>
                    <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ feature }}</span>
                  </div>
                </div>

                <button class="w-fit px-8 py-3 rounded-xl text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group" 
                        :class="`bg-gradient-to-r ${activeDimension.gradient} ${activeDimension.shadow}`">
                  Explorar Área
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
                  <div class="flex items-center gap-4">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-700">
                      <i class="fas fa-chart-line text-xl" :class="activeDimension.color"></i>
                    </div>
                    <div>
                      <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Impacto Clave</p>
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