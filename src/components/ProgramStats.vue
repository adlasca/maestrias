<script setup>
const stats = [
  {
    label: 'Modalidad',
    value: 'Híbrida',
    description: 'Clases presenciales y virtuales',
    icon: 'fa-map-marker-alt',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    label: 'Duración',
    value: '1 Año',
    description: '2 períodos académicos intensivos',
    icon: 'fa-clock',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  },
  {
    label: 'Enfoque',
    value: 'BIM 3D-7D',
    description: 'Cobertura completa de dimensiones BIM',
    icon: 'fa-layer-group',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50'
  },
  {
    label: 'Título',
    value: 'Magíster',
    description: 'Grado académico oficial reconocido',
    icon: 'fa-graduation-cap',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  },
  {
    label: 'Carga Horaria',
    value: '480 horas',
    description: 'Distribución equilibrada teoría/práctica',
    icon: 'fa-calendar-check',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50'
  },
  {
    label: 'Idioma',
    value: 'Español',
    description: 'Material bilingüe disponible',
    icon: 'fa-language',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50'
  }
]

const highlights = [
  {
    title: '100% Práctico',
    description: 'Cada módulo incluye proyectos reales aplicados',
    icon: 'fa-tools',
    color: 'text-green-600'
  },
  {
    title: 'Certificaciones Incluidas',
    description: 'Autodesk, PMI y certificaciones BIM reconocidas',
    icon: 'fa-certificate',
    color: 'text-blue-600'
  },
  {
    title: 'Red Profesional',
    description: 'Acceso a network de +500 profesionales BIM',
    icon: 'fa-users',
    color: 'text-purple-600'
  }
]
</script>

<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
          <i class="fas fa-chart-bar" />
          <span>Detalles del Programa</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Programa <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Maestría BIM</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Una experiencia académica única diseñada para transformar tu carrera profesional
          en el mundo de la construcción digital.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        <div
          v-for="stat in stats"
          :key="stat.label"
          :class="`rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${stat.bgColor}`"
        >
          <div class="flex items-center gap-4 mb-4">
            <div :class="`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform`">
              <i :class="`fas ${stat.icon}`" />
            </div>
            <div class="flex-1">
              <div class="text-2xl font-black text-gray-900 mb-1">{{ stat.value }}</div>
              <div class="text-sm font-bold text-gray-700 uppercase tracking-wide">{{ stat.label }}</div>
            </div>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">{{ stat.description }}</p>
        </div>
      </div>

      <!-- Highlights Section -->
      <div class="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-xl max-w-5xl mx-auto">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">Características Destacadas</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="highlight in highlights"
            :key="highlight.title"
            class="text-center group"
          >
            <div :class="`w-20 h-20 ${highlight.color} rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform bg-gray-100`">
              <i :class="`fas ${highlight.icon}`" />
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">{{ highlight.title }}</h4>
            <p class="text-gray-600 text-sm leading-relaxed">{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <!-- Investment Section -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="text-left">
              <h3 class="text-3xl font-bold mb-4">Inversión en tu Futuro</h3>
              <p class="text-blue-100 mb-6">
                Una inversión que transforma carreras y abre puertas a oportunidades
                internacionales en el sector de la construcción digital.
              </p>
              <div class="flex items-center gap-4">
                <div class="text-center">
                  <div class="text-4xl font-black">$15,000</div>
                  <div class="text-sm opacity-80">Inversión Total</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-black">3x</div>
                  <div class="text-sm opacity-80">Retorno de Inversión</div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-rocket text-6xl" />
              </div>
              <p class="text-lg font-semibold">¡Impulsa tu carrera al siguiente nivel!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--uce-blue);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--uce-blue);
}

.label {
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
