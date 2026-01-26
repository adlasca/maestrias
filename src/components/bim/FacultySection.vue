<script setup>
const faculty = [
  {
    name: 'Ing. Luis Wladimir Morales',
    role: 'Coordinador Académico',
    specialty: 'Ingeniería Civil & Gestión BIM',
    description: 'Magíster en Estructuras y Ciencias de los Materiales. Especialista en gestión de proyectos de alto impacto con más de 15 años de experiencia.',
    certifications: ['PMP', 'BIM Manager', 'Lean Construction'],
    avatar: '/images/faculty/professor-1.svg',
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    name: 'Dr. María Elena Sánchez',
    role: 'Profesora Visitante',
    specialty: 'Arquitectura Digital & BIM',
    description: 'PhD en Arquitectura Digital. Experta en modelado paramétrico y diseño computacional con publicaciones en revistas internacionales.',
    certifications: ['PhD Arquitectura', 'Revit Expert', 'Rhino Certified'],
    avatar: '/images/faculty/professor-2.svg',
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    name: 'Ing. Carlos Rodríguez',
    role: 'Especialista en MEP',
    specialty: 'Sistemas MEP & BIM 3D',
    description: 'Ingeniero Mecánico con especialización en sistemas de instalaciones. Certificado en modelado MEP avanzado.',
    certifications: ['MEP Specialist', 'Autodesk MEP', 'BIM Coordinator'],
    avatar: '/images/faculty/professor-3.svg',
    color: 'from-green-600 to-teal-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    name: 'Dra. Ana Gabriela López',
    role: 'Profesora de Sostenibilidad',
    specialty: 'BIM 6D & Certificaciones Verdes',
    description: 'Doctora en Ingeniería Ambiental. Especialista en análisis de sostenibilidad y certificaciones LEED, BREEAM.',
    certifications: ['LEED AP', 'BREEAM Expert', 'Sustainability BIM'],
    avatar: '/images/faculty/professor-1.svg',
    color: 'from-emerald-600 to-green-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  },
  {
    name: 'Ing. Roberto Martínez',
    role: 'Especialista en 4D/5D',
    specialty: 'Planificación & Costos BIM',
    description: 'Ingeniero Civil con MBA. Experto en simulación temporal y control presupuestario de proyectos complejos.',
    certifications: ['PMP', 'BIM 4D/5D', 'Cost Management'],
    avatar: '/images/faculty/professor-2.svg',
    color: 'from-orange-600 to-red-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600'
  },
  {
    name: 'Dr. Fernando García',
    role: 'Profesor de Innovación',
    specialty: 'IA, VR & Tecnologías Emergentes',
    description: 'PhD en Informática. Investigador en aplicaciones de IA y realidad virtual en la industria de la construcción.',
    certifications: ['AI Specialist', 'VR Developer', 'Innovation Lead'],
    avatar: '/images/faculty/professor-3.svg',
    color: 'from-indigo-600 to-purple-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600'
  }
]

const stats = [
  { label: 'Profesores Titulares', value: '6', icon: 'fa-chalkboard-teacher' },
  { label: 'Certificaciones Internacionales', value: '25+', icon: 'fa-certificate' },
  { label: 'Años de Experiencia', value: '80+', icon: 'fa-clock' },
  { label: 'Publicaciones', value: '45+', icon: 'fa-book' }
]
</script>

<template>
  <section id="facultad" class="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
          <i class="fas fa-users" />
          <span>Cuerpo Docente</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Expertos <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Certificados</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Nuestro equipo docente combina experiencia académica de vanguardia con práctica profesional
          en proyectos BIM de escala internacional.
        </p>
      </div>

      <!-- Faculty Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        <div v-for="member in faculty" :key="member.name"
          class="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
          <!-- Header with Avatar -->
          <div :class="`bg-gradient-to-r ${member.color} p-8 text-white relative overflow-hidden`">
            <div class="absolute inset-0 bg-black/10" />
            <div class="relative z-10 flex items-center gap-6">
              <div
                class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden">
                <img :src="member.avatar" :alt="`Avatar de ${member.name}`" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
                <p class="text-sm opacity-90">{{ member.role }}</p>
                <p class="text-sm font-medium opacity-80">{{ member.specialty }}</p>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ member.description }}</p>

            <!-- Certifications -->
            <div class="mb-4">
              <h4 class="text-sm font-bold text-gray-900 mb-2">Certificaciones:</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="cert in member.certifications" :key="cert"
                  class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  <img src="/images/check-icon.svg" alt="Check" class="w-3 h-3" />
                  {{ cert }}
                </span>
              </div>
            </div>

            <!-- Contact Hint -->
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <i class="fas fa-envelope" />
              <span>Disponible para consultas</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-xl max-w-5xl mx-auto">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">Nuestro Impacto Académico</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
              <i :class="`fas ${stat.icon}`" />
            </div>
            <div class="text-3xl font-black text-gray-900 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>
