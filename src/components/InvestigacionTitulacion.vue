<script setup>
const researchLines = [
  {
    title: 'Transformación Digital y Automatización',
    description: 'Desarrollo de scripts, programación visual (Dynamo/Grasshopper) y automatización de procesos constructivos.',
    icon: 'fa-code',
    color: 'from-blue-500 to-cyan-500',
    examples: ['Automatización BIM', 'Scripts personalizados', 'Integración API']
  },
  {
    title: 'Sostenibilidad y Economía Circular',
    description: 'Análisis de ciclo de vida, eficiencia energética y reducción de huella de carbono en edificaciones.',
    icon: 'fa-leaf',
    color: 'from-green-500 to-emerald-500',
    examples: ['Análisis LCA', 'Certificaciones verdes', 'Materiales sostenibles']
  },
  {
    title: 'Gestión de Riesgos e Incertidumbre',
    description: 'Modelado probabilístico y gestión financiera de proyectos complejos en entornos BIM.',
    icon: 'fa-chart-line',
    color: 'from-orange-500 to-red-500',
    examples: ['Modelos probabilísticos', 'Análisis de riesgo', 'Gestión financiera']
  },
  {
    title: 'Inteligencia Artificial en Construcción',
    description: 'Aplicación de machine learning para optimización de diseños, predicción de costos y mantenimiento predictivo.',
    icon: 'fa-robot',
    color: 'from-purple-500 to-pink-500',
    examples: ['ML en diseño', 'Predicción de costos', 'Mantenimiento predictivo']
  },
  {
    title: 'Realidad Virtual y Gemelos Digitales',
    description: 'Desarrollo de entornos inmersivos para planificación, construcción y operación de facilities.',
    icon: 'fa-vr-cardboard',
    color: 'from-indigo-500 to-blue-500',
    examples: ['VR construction', 'Digital twins', 'Simulación inmersiva']
  },
  {
    title: 'Colaboración Multidisciplinar',
    description: 'Metodologías para integración efectiva de equipos y stakeholders en entornos BIM colaborativos.',
    icon: 'fa-users',
    color: 'from-teal-500 to-cyan-500',
    examples: ['ISO 19650', 'CDE management', 'Stakeholder engagement']
  }
]

const graduationOptions = [
  {
    type: 'Proyecto de Titulación',
    description: 'Desarrollo de un proyecto práctico con componentes de investigación aplicada o desarrollo tecnológico.',
    requirements: [
      'Aplicación práctica en empresa real',
      'Componente innovador o de investigación',
      'Resultados medibles y evaluables',
      'Presentación y defensa pública'
    ],
    duration: '6 meses',
    icon: 'fa-project-diagram',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    type: 'Artículos Científicos',
    description: 'Publicación de artículos de alto nivel indexados en bases regionales (Latindex) o mundiales (Scopus).',
    requirements: [
      'Mínimo 2 artículos publicados',
      'Indexación en revistas reconocidas',
      'Contribución original al conocimiento',
      'Proceso de revisión por pares'
    ],
    duration: '6-8 meses',
    icon: 'fa-file-alt',
    color: 'from-purple-600 to-pink-600'
  }
]

const timeline = [
  { phase: 'Selección de Tema', duration: 'Semana 1-2', description: 'Definir línea de investigación y alcance' },
  { phase: 'Revisión de Literatura', duration: 'Semana 3-6', description: 'Estado del arte y marco teórico' },
  { phase: 'Desarrollo Metodológico', duration: 'Semana 7-12', description: 'Diseño de metodología y herramientas' },
  { phase: 'Ejecución y Análisis', duration: 'Semana 13-20', description: 'Implementación y análisis de resultados' },
  { phase: 'Redacción y Defensa', duration: 'Semana 21-24', description: 'Elaboración del documento final y defensa' }
]
</script>

<template>
  <section class="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
          <i class="fas fa-microscope" />
          <span>Investigación y Titulación</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Investigación <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Aplicada</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">
          El programa fomenta la investigación aplicada para resolver problemas reales del sector
          construcción en Ecuador, combinando rigor académico con impacto práctico.
        </p>
      </div>

      <!-- Research Lines -->
      <div class="mb-20">
        <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Líneas de Investigación</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div
            v-for="line in researchLines"
            :key="line.title"
            class="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <div class="flex items-center gap-4 mb-4">
              <div :class="`w-12 h-12 bg-gradient-to-br ${line.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`">
                <i :class="`fas ${line.icon}`" />
              </div>
              <h4 class="font-bold text-gray-900 text-lg">{{ line.title }}</h4>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ line.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="example in line.examples"
                :key="example"
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {{ example }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Graduation Options -->
      <div class="grid lg:grid-cols-2 gap-12 mb-20">
        <div
          v-for="option in graduationOptions"
          :key="option.type"
          class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
        >
          <div class="flex items-center gap-4 mb-6">
            <div :class="`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center text-white text-2xl`">
              <i :class="`fas ${option.icon}`" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">{{ option.type }}</h3>
              <span class="text-sm text-gray-500 font-medium">{{ option.duration }}</span>
            </div>
          </div>

          <p class="text-gray-600 mb-6">{{ option.description }}</p>

          <div class="space-y-3">
            <h4 class="font-bold text-gray-900 mb-3">Requisitos:</h4>
            <div
              v-for="requirement in option.requirements"
              :key="requirement"
              class="flex items-start gap-3"
            >
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <span class="text-gray-600 text-sm">{{ requirement }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-xl max-w-6xl mx-auto">
        <h3 class="text-3xl font-bold text-center text-gray-900 mb-8">Cronograma de Titulación</h3>
        <div class="grid md:grid-cols-5 gap-6">
          <div
            v-for="(phase, index) in timeline"
            :key="phase.phase"
            class="text-center group"
          >
            <div class="relative">
              <!-- Connector Line -->
              <div
                v-if="index < timeline.length - 1"
                class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 transform -translate-y-1/2"
                style="width: calc(100vw / 5 - 2rem); max-width: 200px;"
              />

              <!-- Phase Circle -->
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                {{ index + 1 }}
              </div>
            </div>

            <h4 class="font-bold text-gray-900 mb-2">{{ phase.phase }}</h4>
            <div class="text-sm text-blue-600 font-semibold mb-2">{{ phase.duration }}</div>
            <p class="text-gray-600 text-sm">{{ phase.description }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">¿Listo para contribuir al conocimiento BIM?</h3>
          <p class="text-blue-100 mb-6 text-lg">
            Tu tesis o proyecto de titulación no solo te graduará, sino que podrá transformar
            la industria de la construcción en Ecuador y Latinoamérica.
          </p>
          <button class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg">
            <i class="fas fa-lightbulb mr-2" />
            Explorar líneas de investigación
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
