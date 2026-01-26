<script setup>
const semesters = [
  {
    id: 1,
    title: 'Primer Periodo',
    subtitle: 'Fundamentos BIM Avanzados',
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    courses: [
      {
        name: 'Metodología de la Investigación Aplicada a BIM',
        icon: 'fa-search',
        credits: 2.5,
        description: 'Enfoque científico para investigación en entornos BIM',
      },
      {
        name: 'Modelación Arquitectónica Avanzada con BIM 3D',
        icon: 'fa-building',
        credits: 2.5,
        description: 'Técnicas avanzadas de modelado paramétrico arquitectónico',
      },
      {
        name: 'Modelación Estructural Avanzada con BIM 3D',
        icon: 'fa-cogs',
        credits: 2.5,
        description: 'Diseño y modelado de sistemas estructurales complejos',
      },
      {
        name: 'Modelación de Instalaciones Avanzadas con BIM 3D',
        icon: 'fa-wrench',
        credits: 2.5,
        description: 'Sistemas eléctricos, mecánicos y plomería en BIM',
      },
      {
        name: 'Gestión Estratégica de Proyectos de Construcción',
        icon: 'fa-tasks',
        credits: 2.5,
        description: 'Metodologías ágiles y tradicionales en gestión de proyectos',
      },
      {
        name: 'Innovación Tecnológica en la Construcción',
        icon: 'fa-robot',
        credits: 2.5,
        description: 'Tecnologías emergentes aplicadas a la construcción',
      },
    ],
  },
  {
    id: 2,
    title: 'Segundo Periodo',
    subtitle: 'Especialización y Titulación',
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    courses: [
      {
        name: 'Planificación y Control de Obra con BIM 4D',
        icon: 'fa-calendar-alt',
        credits: 2.5,
        description: 'Simulación temporal y logística de construcción',
      },
      {
        name: 'Gestión Económica-Financiero y Control de Costos con BIM 5D',
        icon: 'fa-dollar-sign',
        credits: 2.5,
        description: 'Control presupuestario y análisis financiero en BIM',
      },
      {
        name: 'Análisis Financiero y Gestión Integral de Riesgos',
        icon: 'fa-chart-line',
        credits: 1.25,
        description: 'Evaluación financiera y mitigación de riesgos',
      },
      {
        name: 'Sostenibilidad, Resiliencia y Certificaciones Ambientales (6D)',
        icon: 'fa-leaf',
        credits: 1.25,
        description: 'Análisis ambiental y certificaciones verdes',
      },
      {
        name: 'Coordinación Colaborativa y Gestión de Proyectos BIM Multidisciplinares',
        icon: 'fa-users',
        credits: 2.5,
        description: 'Trabajo en equipo y gestión de stakeholders',
      },
      {
        name: 'Titulación',
        icon: 'fa-graduation-cap',
        credits: 5,
        description: 'Proyecto de investigación aplicado o tesis profesional',
      },
    ],
  },
]
</script>

<template>
  <section id="plan-estudios"
    class="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-semibold mb-6">
          <i class="fas fa-layer-group" />
          <span>Plan de Estudios 2026</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6">
          Malla
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Curricular</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Un currículo integral diseñado para transformar profesionales en expertos BIM, combinando
          teoría avanzada con práctica intensiva.
        </p>
      </div>

      <!-- Semester Grid -->
      <div class="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div v-for="semester in semesters" :key="semester.id"
          :class="`rounded-3xl border ${semester.borderColor} overflow-hidden flex flex-col h-full`">
          <!-- Semester Header -->
          <div :class="`bg-gradient-to-r ${semester.color} p-8 text-white`">
            <div class="flex items-center justify-between mb-4">
              <div class="text-6xl font-black opacity-40">{{ semester.id }}</div>
              <div class="text-right">
                <div class="text-2xl font-bold">{{ semester.courses.length }}</div>
                <div class="text-sm opacity-80">Materias</div>
              </div>
            </div>
            <h3 class="text-3xl font-black mb-2">{{ semester.title }}</h3>
            <p class="text-lg opacity-90">{{ semester.subtitle }}</p>
          </div>

          <!-- Courses List -->
          <div :class="`${semester.bgColor} p-8 flex-1 flex flex-col`">
            <div class="space-y-4">
              <div v-for="course in semester.courses" :key="course.name"
                class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <i :class="`fas ${course.icon}`" />
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between mb-2">
                      <h4 class="font-bold text-gray-900 text-lg">{{ course.name }}</h4>
                      <span class="px-3 py-1 text-center bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                        {{ course.credits }} créditos
                      </span>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ course.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Semester Summary -->
            <div class="mt-auto pt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-black text-gray-900">
                    {{semester.courses.reduce((sum, course) => sum + course.credits, 0)}}
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


    </div>
  </section>
</template>
