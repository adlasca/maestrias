<script setup>
const investment = {
  inscription: 80,
  enrollment: 400,
  tuition: 4000
}



const admissionSteps = [
  {
    step: 1,
    title: 'Solicitud de Información',
    description: 'Contacta al coordinador para recibir el formulario de admisión',
    icon: 'fa-envelope',
    completed: true
  },
  {
    step: 2,
    title: 'Documentos Requeridos',
    description: 'Prepara y entrega tu documentación académica y profesional',
    icon: 'fa-file-alt',
    completed: false
  },
  {
    step: 3,
    title: 'Entrevista Personal',
    description: 'Evaluación de tu perfil y motivación para el programa',
    icon: 'fa-user-friends',
    completed: false
  },
  {
    step: 4,
    title: 'Matrícula Oficial',
    description: 'Formalización de tu inscripción en la cohorte 2026',
    icon: 'fa-graduation-cap',
    completed: false
  }
]

const requirements = [
  'Título de tercer nivel en Ingeniería Civil, Arquitectura o carreras afines',
  'Conocimientos básicos de software CAD/BIM (deseable)',
  'Carta de motivación y referencias profesionales'
]
</script>

<template>
  <section id="admision" class="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <i class="fas fa-user-plus" />
            <span>Proceso de Admisión</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Únete a la <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cohorte
              2026</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Inicia tu transformación profesional con el programa más innovador
            en Building Information Modeling de Ecuador.
          </p>
        </div>

        <!-- Admission Steps -->
        <div class="lg:col-span-2 ">
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
              <h3 class="text-2xl font-bold mb-2 flex items-center gap-2">
                <i class="fas fa-road" />
                Proceso de Admisión
              </h3>
              <p class="text-purple-100 text-sm">4 pasos simples para formar parte del programa</p>
            </div>

            <div class="p-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div v-for="step in admissionSteps" :key="step.step" :class="`p-4 rounded-2xl border-2 transition-all duration-300 ${step.completed
                  ? 'bg-green-50'
                  : 'bg-gray-50 border-gray-200 hover:border-blue-200'
                  }`">
                  <div class="flex items-center gap-3 mb-3">
                    <div
                      :class="`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${step.completed ? 'bg-green-500' : 'bg-blue-500'}`">
                      {{ step.step }}
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-gray-900 text-sm">{{ step.title }}</h4>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm">{{ step.description }}</p>
                </div>
              </div>

              <!-- Requirements -->
              <div class="mt-8">
                <h4 class="text-lg font-bold text-gray-900 mb-4">Requisitos de Admisión</h4>
                <div class="space-y-3">
                  <div v-for="requirement in requirements" :key="requirement" class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span class="text-gray-600 text-sm">{{ requirement }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
