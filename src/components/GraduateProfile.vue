<script setup>
const competencies = [
  {
    title: 'BIM Manager Estratégico',
    description: 'Líder capaz de implementar BIM en organizaciones, gestionar equipos multidisciplinarios y optimizar procesos constructivos.',
    icon: 'fa-crown',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    skills: ['Gestión de Cambio', 'Liderazgo', 'Estrategia Digital']
  },
  {
    title: 'Experto Técnico BIM 3D-7D',
    description: 'Dominio completo del modelado paramétrico, simulación temporal, control de costos y gestión de facilities.',
    icon: 'fa-cubes',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    skills: ['Modelado 3D', '4D/5D Planning', '6D Sostenibilidad']
  },
  {
    title: 'Especialista en Colaboración',
    description: 'Facilitador de entornos colaborativos bajo ISO 19650, gestión de stakeholders y resolución de conflictos.',
    icon: 'fa-users-cog',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    skills: ['ISO 19650', 'CDE Management', 'Team Leadership']
  },
  {
    title: 'Innovador Tecnológico',
    description: 'Aplicación de IA, VR/AR, IoT y gemelos digitales en proyectos de construcción inteligente.',
    icon: 'fa-robot',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    skills: ['IA & ML', 'Digital Twins', 'VR/AR']
  },
  {
    title: 'Consultor BIM Senior',
    description: 'Asesor estratégico para transformación digital, auditorías BIM y desarrollo de estándares corporativos.',
    icon: 'fa-chart-line',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    skills: ['Consultoría', 'Auditorías', 'Estrategia']
  },
  {
    title: 'Director de Innovación',
    description: 'Impulsor de metodologías Lean Construction, gestión de riesgos y optimización de procesos productivos.',
    icon: 'fa-lightbulb',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    skills: ['Lean Construction', 'Risk Management', 'Process Optimization']
  }
]

const careerPaths = [
  {
    role: 'BIM Manager',
    company: 'Constructoras Internacionales',
    salary: '$4,000 - $7,000',
    demand: 'Muy Alta'
  },
  {
    role: 'Director BIM',
    company: 'Despachos de Arquitectura',
    salary: '$3,500 - $6,000',
    demand: 'Alta'
  },
  {
    role: 'Consultor BIM Senior',
    company: 'Firmas Consultoras',
    salary: '$5,000 - $8,000',
    demand: 'Muy Alta'
  },
  {
    role: 'Innovation Manager',
    company: 'Tech Companies',
    salary: '$4,500 - $7,500',
    demand: 'Alta'
  }
]
</script>

<template>
  <section class="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-semibold mb-6">
          <i class="fas fa-user-graduate" />
          <span>Perfil de Egreso</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6">
          ¿En qué te <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">convertirás</span>?
        </h2>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto">
          Al finalizar la maestría, serás un <strong class="text-white">BIM Manager estratégico</strong>
          con capacidad para transformar empresas constructoras y liderar la revolución digital
          en el sector AEC de Ecuador y Latinoamérica.
        </p>
      </div>

      <!-- Competencies Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        <div
          v-for="competency in competencies"
          :key="competency.title"
          :class="`rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 hover:-translate-y-2 group ${competency.bgColor} bg-white/5 backdrop-blur-lg`"
        >
          <!-- Header -->
          <div :class="`bg-gradient-to-r ${competency.color} p-6 text-white`">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl">
                <i :class="`fas ${competency.icon}`" />
              </div>
              <div>
                <h3 class="text-xl font-bold">{{ competency.title }}</h3>
                <div class="flex flex-wrap gap-1 mt-2">
                  <span
                    v-for="skill in competency.skills"
                    :key="skill"
                    class="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <p class="text-gray-300 text-sm leading-relaxed">{{ competency.description }}</p>
          </div>
        </div>
      </div>

      <!-- Career Paths -->
      <div class="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-6xl mx-auto mb-16">
        <h3 class="text-3xl font-bold text-center mb-8">Oportunidades Profesionales</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="path in careerPaths"
            :key="path.role"
            class="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div class="flex items-start justify-between mb-4">
              <div>
                <h4 class="text-xl font-bold text-white mb-1">{{ path.role }}</h4>
                <p class="text-gray-400 text-sm">{{ path.company }}</p>
              </div>
              <span
                :class="`px-3 py-1 rounded-full text-xs font-bold ${
                  path.demand === 'Muy Alta' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`"
              >
                {{ path.demand }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <div class="text-lg font-bold text-cyan-400">{{ path.salary }}</div>
                <div class="text-xs text-gray-400">Salario mensual USD</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-300">Demanda</div>
                <div class="text-lg font-bold text-green-400">{{ path.demand }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Impact Statement -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 items-center">
            <div class="text-center">
              <div class="text-5xl font-black mb-2">95%</div>
              <div class="text-cyan-100">Empleabilidad</div>
              <div class="text-sm text-cyan-200">en 6 meses</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-black mb-2">3x</div>
              <div class="text-cyan-100">Incremento Salarial</div>
              <div class="text-sm text-cyan-200">promedio</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-black mb-2">500+</div>
              <div class="text-cyan-100">Contactos Profesionales</div>
              <div class="text-sm text-cyan-200">en tu red</div>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-white/20">
            <p class="text-xl font-semibold mb-4">¡Conviértete en el líder BIM que Ecuador necesita!</p>
            <button class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg">
              <i class="fas fa-rocket mr-2" />
              Comenzar mi transformación
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
