<script setup>
import { ref, computed } from 'vue'

const activeIndex = ref(0)
const dimensions = [
  {
    id: '3D',
    title: 'Modelo Paramétrico 3D',
    subtitle: 'Base Digital Inteligente',
    desc: 'Geometría inteligente, información espacial y propiedades físicas avanzadas para modelado preciso.',
    icon: 'fa-cube',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Modelado Arquitectónico', 'Estructuras Complejas', 'Instalaciones MEP', 'Colisiones Automáticas'],
    impact: '85% reducción en errores de diseño'
  },
  {
    id: '4D',
    title: 'Gestión del Tiempo 4D',
    subtitle: 'Planificación Temporal',
    desc: 'Simulación de construcción en tiempo real, logística de obra y optimización de cronogramas.',
    icon: 'fa-clock',
    color: 'text-green-500',
    bg: 'bg-green-50',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Simulación 4D', 'Secuenciación de Tareas', 'Logística de Obra', 'Control de Avances'],
    impact: '30% mejora en plazos de entrega'
  },
  {
    id: '5D',
    title: 'Control de Costos 5D',
    subtitle: 'Gestión Económica Inteligente',
    desc: 'Presupuestos dinámicos, estimaciones precisas y análisis de flujo de caja en tiempo real.',
    icon: 'fa-coins',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    gradient: 'from-yellow-500 to-orange-500',
    features: ['Presupuestos Dinámicos', 'Estimaciones 5D', 'Flujo de Caja', 'Control de Costos'],
    impact: '25% reducción en sobrecostos'
  },
  {
    id: '6D',
    title: 'Sostenibilidad 6D',
    subtitle: 'Construcción Verde',
    desc: 'Análisis energético, reducción de huella de carbono y certificaciones ambientales avanzadas.',
    icon: 'fa-leaf',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    gradient: 'from-emerald-500 to-green-500',
    features: ['Análisis Energético', 'Huella de Carbono', 'Certificaciones LEED', 'Eficiencia Ambiental'],
    impact: '40% mejora en eficiencia energética'
  },
  {
    id: '7D',
    title: 'Facility Management 7D',
    subtitle: 'Ciclo de Vida Completo',
    desc: 'Gestión integral de activos, mantenimiento predictivo y optimización operacional.',
    icon: 'fa-building',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    gradient: 'from-purple-500 to-indigo-500',
    features: ['Mantenimiento Predictivo', 'Gestión de Activos', 'Operación Inteligente', 'Ciclo de Vida'],
    impact: '50% reducción en costos operativos'
  },
]

const activeDimension = computed(() => dimensions[activeIndex.value])

const setActiveDimension = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-32 h-32 border border-blue-300 rounded-full" />
      <div class="absolute top-40 right-20 w-24 h-24 border border-purple-300 rounded-full" />
      <div class="absolute bottom-20 left-1/4 w-40 h-40 border border-cyan-300 rounded-full" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
          <i class="fas fa-layer-group" />
          <span>Tecnología BIM Avanzada</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Las <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">7 Dimensiones</span> BIM
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Domina cada dimensión del Building Information Modeling para convertirte en un líder
          en la transformación digital de la construcción.
        </p>
      </div>

      <!-- Interactive Dimension Selector -->
      <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        <!-- Dimension List -->
        <div class="lg:col-span-1 space-y-4">
          <div
            v-for="(dimension, index) in dimensions"
            :key="dimension.id"
            @click="setActiveDimension(index)"
            :class="[
              'p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2',
              activeIndex === index
                ? 'border-blue-500 bg-white shadow-xl scale-105'
                : 'border-gray-200 bg-white/50 hover:border-gray-300 hover:shadow-md'
            ]"
          >
            <div class="flex items-center gap-4">
              <div :class="[
                'w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold',
                `bg-gradient-to-br ${dimension.gradient}`
              ]">
                <i :class="`fas ${dimension.icon}`" />
              </div>
              <div>
                <div class="text-2xl font-black text-gray-900">{{ dimension.id }}</div>
                <div class="text-sm font-semibold text-gray-600">{{ dimension.title }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Active Dimension Details -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div class="flex items-start gap-6 mb-6">
              <div :class="[
                'w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg',
                `bg-gradient-to-br ${activeDimension.gradient}`
              ]">
                <i :class="`fas ${activeDimension.icon}`" />
              </div>
              <div class="flex-1">
                <h3 class="text-3xl font-black text-gray-900 mb-2">{{ activeDimension.title }}</h3>
                <p class="text-lg text-blue-600 font-semibold mb-4">{{ activeDimension.subtitle }}</p>
                <p class="text-gray-600 text-lg leading-relaxed">{{ activeDimension.desc }}</p>
              </div>
            </div>

            <!-- Features Grid -->
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div v-for="feature in activeDimension.features" :key="feature" class="flex items-center gap-3">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <i class="fas fa-check text-green-600 text-xs" />
                </div>
                <span class="text-gray-700 font-medium">{{ feature }}</span>
              </div>
            </div>

            <!-- Impact Metric -->
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <i class="fas fa-chart-line text-white text-xl" />
                </div>
                <div>
                  <div class="text-2xl font-black text-green-700">{{ activeDimension.impact }}</div>
                  <div class="text-sm text-green-600 font-semibold">Mejora demostrada en proyectos BIM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="inline-flex items-center gap-4 py-4 px-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <i class="fas fa-lightbulb text-yellow-500 text-2xl" />
          <span class="text-gray-700 font-semibold">
            Cada dimensión BIM representa una oportunidad de innovación y eficiencia
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
