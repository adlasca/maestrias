<script setup>
const benefits = [
  {
    title: 'BIM 3D a 7D Completo',
    description: 'Desde modelado paramétrico hasta gestión de facilities, cubrimos todas las dimensiones BIM con enfoque práctico.',
    icon: 'fa-layer-group',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    title: 'Estándares Internacionales',
    description: 'Alineado con ISO 19650, metodologías Lean Construction y mejores prácticas globales del sector.',
    icon: 'fa-globe',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    title: 'Tecnologías Emergentes',
    description: 'IA, Machine Learning, Realidad Virtual y Robótica aplicadas a la construcción moderna.',
    icon: 'fa-robot',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    title: 'Red Profesional Global',
    description: 'Acceso a network de más de 500 profesionales BIM en Ecuador y Latinoamérica.',
    icon: 'fa-users',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600'
  },
  {
    title: 'Proyectos Reales',
    description: 'Cada módulo incluye casos de estudio y proyectos aplicados a obras en ejecución.',
    icon: 'fa-building',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600'
  },
  {
    title: 'Certificaciones Incluidas',
    description: 'Autodesk Certified, PMI y certificaciones BIM reconocidas internacionalmente.',
    icon: 'fa-certificate',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600'
  }
]

const stats = [
  { value: '95%', label: 'Empleabilidad', description: 'de egresados colocados en 6 meses' },
  { value: '3x', label: 'Salario Promedio', description: 'incremento salarial post-graduación' },
  { value: '500+', label: 'Red Profesional', description: 'contactos en el sector BIM' },
  { value: '100%', label: 'Proyectos Reales', description: 'enfoque práctico garantizado' }
]
</script>

<template>
  <section class="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/3 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Image Section -->
        <div class="order-1">
          <div class="relative">
            <div class="rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                alt="BIM Engineering Innovation"
                class="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-2xl shadow-lg">
                <div class="flex items-center gap-2">
                  <i class="fas fa-rocket text-blue-600" />
                  <span class="font-bold">Innovación 4.0</span>
                </div>
              </div>
            </div>

            <!-- Floating Stats -->
            <div class="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div class="text-center">
                <div class="text-2xl font-black text-blue-600">2026</div>
                <div class="text-xs text-gray-600 font-medium">Primer Cohort</div>
              </div>
            </div>

            <div class="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-4 shadow-xl">
              <div class="flex items-center gap-2">
                <i class="fas fa-star text-yellow-300" />
                <span class="font-bold text-sm">Programa Exclusivo</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="order-2">
          <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <i class="fas fa-lightbulb" />
            <span>¿Por qué elegirnos?</span>
          </div>

          <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            La evolución de la <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Construcción</span>
            <br>en Ecuador
          </h2>

          <p class="text-xl text-gray-600 leading-relaxed mb-8">
            Respondemos a la transformación digital urgente del sector AEC. Formamos
            <strong>expertos integrales</strong> capaces de gestionar el ciclo completo de proyectos
            mediante BIM y estándares internacionales.
          </p>

          <!-- Key Benefits -->
          <div class="space-y-4">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors group"
            >
              <div :class="`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`">
                <i :class="`fas ${benefit.icon}`" />
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900 mb-1">{{ benefit.title }}</h4>
                <p class="text-gray-600 text-sm leading-relaxed">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-xl">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">Resultados Comprobados</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center group"
          >
            <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 group-hover:scale-110 transition-transform">
              {{ stat.value }}
            </div>
            <div class="text-lg font-bold text-gray-900 mb-1">{{ stat.label }}</div>
            <div class="text-sm text-gray-600">{{ stat.description }}</div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">¿Listo para transformar tu carrera?</h3>
          <p class="text-blue-100 mb-6 text-lg">
            Únete a la primera cohorte de líderes BIM en Ecuador y Latinoamérica.
            El futuro de la construcción digital comienza aquí.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg">
              <i class="fas fa-graduation-cap mr-2" />
              Inscribirme Ahora
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-lg">
              <i class="fas fa-info-circle mr-2" />
              Más Información
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
