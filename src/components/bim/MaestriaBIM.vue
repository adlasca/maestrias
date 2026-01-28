<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900">
      <div class="absolute inset-0 z-0">
        <video autoplay muted loop class="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop">
          <source
            src="https://player.vimeo.com/external/370362851.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6d8c3b8e8b&profile_id=165"
            type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-sky-900/20 via-blue-800/40 to-purple-900/40" />

      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="max-w-6xl mx-auto">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 hover:bg-white/20 transition-all">
            <i class="fas fa-graduation-cap text-yellow-400" />
            <span>Posgrado de Cuarto Nivel</span>
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span class="text-xs opacity-80">Cohorte 2026</span>
          </div>

          <div class="relative z-10 container mx-auto px-4 text-center">
            <!-- Título principal -->
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
              <span class="block text-white mb-2">Maestría en</span>
              <span
                class="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Ciencias e Ingeniería de la Construcción
              </span>

            </h1>
            <!-- Título a otorgar -->
            <h2 class="text-white text-5xl md:text-5xl font-bold text-center leading-relaxed">
              <span class="block text-white bg-clip-text text-transparent animate-gradient-x">
                Mención en Gestión Estratégica de Proyectos BIM
              </span>
            </h2>

            <p class="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforma la construcción del futuro con tecnología BIM avanzada.
              <span class="text-cyan-300 font-semibold">Domina las 7 dimensiones</span> y lidera
              proyectos de infraestructura inteligente.
            </p>
          </div>


          <!-- Subtítulo -->



          <!-- Estadísticas -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-cyan-300 mb-1 drop-shadow">30</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Créditos</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-purple-300 mb-1 drop-shadow">2</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Períodos</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-amber-300 mb-1 drop-shadow">Híbrida</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Modalidad</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-lg font-bold text-blue-300 mb-1 drop-shadow">1440</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Horas</div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <a href="#dimensiones-bim"
              class="px-8 py-4 bg-gradient-to-r from-blue-500  to-purple-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-cubes mr-1"></i>BIM
            </a>
            <a href="#perfil-aspirante"
              class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-user-graduate mr-1"></i>Perfil
            </a>
            <a href="#plan-estudios"
              class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600  rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-book mr-1"></i>Currículo
            </a>
            <a href="#facultad"
              class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-chalkboard-teacher mr-1"></i>Docentes
            </a>
            <a href="#admision"
              class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-clipboard-check mr-1"></i>Admisión
            </a>
            <a href="#financiamiento"
              class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600  rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-dollar-sign mr-1"></i>Financiamiento
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- BIM Dimensions Section -->
    <BimDimensions />

    <!-- Profiles Section -->
    <ProfilesSection />

    <!-- Curriculum Grid -->
    <CurriculumGrid />

    <!-- Faculty Section -->
    <FacultySection />

    <!-- Admission Contact -->
    <AdmissionContact />

    <!-- Financing Section -->
    <FinancingSection />

    
  </div>
</template>

<script setup>
import BimDimensions from './BimDimensions.vue'
import ProfilesSection from './ProfilesSection.vue'
import CurriculumGrid from './CurriculumGrid.vue'
import FacultySection from './FacultySection.vue'
import AdmissionContact from './AdmissionContact.vue'
import FinancingSection from './FinancingSection.vue'
</script>

<style scoped>
@keyframes gradient-x {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}
</style>