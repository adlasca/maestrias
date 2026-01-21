<script setup>
const semesters = [
  {
    id: 1,
    title: 'Primer Semestre',
    subtitle: 'Fundamentos BIM Avanzados',
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    courses: [
      {
        name: 'Metodología de la Investigación Aplicada a BIM',
        icon: 'fa-search',
        credits: 3,
        description: 'Enfoque científico para investigación en entornos BIM'
      },
      {
        name: 'Modelación Arquitectónica Avanzada (BIM 3D)',
        icon: 'fa-building',
        credits: 4,
        description: 'Técnicas avanzadas de modelado paramétrico arquitectónico'
      },
      {
        name: 'Modelación Estructural Avanzada (BIM 3D)',
        icon: 'fa-cogs',
        credits: 4,
        description: 'Diseño y modelado de sistemas estructurales complejos'
      },
      {
        name: 'Modelación de Instalaciones MEP (BIM 3D)',
        icon: 'fa-wrench',
        credits: 3,
        description: 'Sistemas eléctricos, mecánicos y plomería en BIM'
      },
      {
        name: 'Gestión Estratégica de Proyectos',
        icon: 'fa-tasks',
        credits: 3,
        description: 'Metodologías ágiles y tradicionales en gestión de proyectos'
      },
      {
        name: 'Innovación: IA, Robótica y Realidad Virtual',
        icon: 'fa-robot',
        credits: 3,
        description: 'Tecnologías emergentes aplicadas a la construcción'
      }
    ]
  },
  {
    id: 2,
    title: 'Segundo Semestre',
    subtitle: 'Especialización y Titulación',
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    courses: [
      {
        name: 'Planificación y Control de Obra (BIM 4D)',
        icon: 'fa-calendar-alt',
        credits: 4,
        description: 'Simulación temporal y logística de construcción'
      },
      {
        name: 'Gestión Económica y Costos (BIM 5D)',
        icon: 'fa-dollar-sign',
        credits: 3,
        description: 'Control presupuestario y análisis financiero en BIM'
      },
      {
        name: 'Análisis Financiero y Gestión de Riesgos',
        icon: 'fa-chart-line',
        credits: 3,
        description: 'Evaluación financiera y mitigación de riesgos'
      },
      {
        name: 'Sostenibilidad y Certificaciones (6D)',
        icon: 'fa-leaf',
        credits: 3,
        description: 'Análisis ambiental y certificaciones verdes'
      },
      {
        name: 'Coordinación Colaborativa Multidisciplinar',
        icon: 'fa-users',
        credits: 3,
        description: 'Trabajo en equipo y gestión de stakeholders'
      },
      {
        name: 'Unidad de Titulación',
        icon: 'fa-graduation-cap',
        credits: 6,
        description: 'Proyecto de investigación aplicado o tesis profesional'
      }
    ]
  }
]
</script>

<template>
  <section class="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-semibold mb-6">
          <i class="fas fa-layer-group" />
          <span>Plan de Estudios 2026</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6">
          Malla <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Curricular</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Un currículo integral diseñado para transformar profesionales en expertos BIM,
          combinando teoría avanzada con práctica intensiva.
        </p>
      </div>

      <!-- Semester Grid -->
      <div class="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div
          v-for="semester in semesters"
          :key="semester.id"
          :class="`rounded-3xl border ${semester.borderColor} overflow-hidden`"
        >
          <!-- Semester Header -->
          <div :class="`bg-gradient-to-r ${semester.color} p-8 text-white`">
            <div class="flex items-center justify-between mb-4">
              <div class="text-6xl font-black opacity-20">{{ semester.id }}</div>
              <div class="text-right">
                <div class="text-2xl font-bold">{{ semester.courses.length }}</div>
                <div class="text-sm opacity-80">Materias</div>
              </div>
            </div>
            <h3 class="text-3xl font-black mb-2">{{ semester.title }}</h3>
            <p class="text-lg opacity-90">{{ semester.subtitle }}</p>
          </div>

          <!-- Courses List -->
          <div :class="`${semester.bgColor} p-8`">
            <div class="space-y-4">
              <div
                v-for="course in semester.courses"
                :key="course.name"
                class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <i :class="`fas ${course.icon}`" />
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between mb-2">
                      <h4 class="font-bold text-gray-900 text-lg">{{ course.name }}</h4>
                      <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                        {{ course.credits }} créditos
                      </span>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ course.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Semester Summary -->
            <div class="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-black text-gray-900">
                    {{ semester.courses.reduce((sum, course) => sum + course.credits, 0) }}
                  </div>
                  <div class="text-sm text-gray-600 font-medium">Créditos Totales</div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-gray-900">{{ semester.courses.length }}</div>
                  <div class="text-sm text-gray-600">Asignaturas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Program Summary -->
      <div class="mt-20 text-center">
        <div class="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-6">Resumen del Programa</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-4xl font-black text-cyan-400 mb-2">30</div>
              <div class="text-sm text-gray-300">Créditos Totales</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-black text-green-400 mb-2">12</div>
              <div class="text-sm text-gray-300">Asignaturas</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-black text-yellow-400 mb-2">1</div>
              <div class="text-sm text-gray-300">Año Académico</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-black text-purple-400 mb-2">100%</div>
              <div class="text-sm text-gray-300">Práctico</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
