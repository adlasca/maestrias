<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900">
      <div class="absolute inset-0 z-0">
        <video
          autoplay
          muted
          loop
          class="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
        >
          <source
            src="https://player.vimeo.com/external/370362851.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6d8c3b8e8b&profile_id=165"
            type="video/mp4"
          />
        </video>
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-cyan-900/90" />
        <div class="absolute inset-0 bg-black/40" />
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="max-w-6xl mx-auto">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 hover:bg-white/20 transition-all">
            <i class="fas fa-graduation-cap text-yellow-400" />
            <span>Posgrado de Cuarto Nivel</span>
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span class="text-xs opacity-80">Cohorte 2026</span>
          </div>

          <!-- Título principal -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span class="block text-white mb-2">Maestría en</span>
            <span class="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Ingeniería BIM
            </span>
          </h1>

          <!-- Subtítulo -->
          <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforma la construcción del futuro con tecnología BIM avanzada.
            <span class="text-cyan-300 font-semibold">Domina las 7 dimensiones</span> y lidera
            proyectos de infraestructura inteligente.
          </p>

          <!-- Título a otorgar -->
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12 max-w-4xl mx-auto border border-white/20">
            <div class="flex items-center justify-center gap-3 mb-3">
              <i class="fas fa-certificate text-yellow-400 text-2xl" />
              <span class="text-white font-semibold text-lg">Título a Otorgar</span>
            </div>
            <h3 class="text-white text-lg md:text-xl font-bold text-center leading-relaxed">
              Magíster en Ciencias e Ingeniería de la Construcción, con mención en Gestión Estratégica de Proyectos BIM
            </h3>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#contacto" class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <span class="relative z-10 flex items-center gap-2">
                Postular Ahora
                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <router-link to="/maestrias" class="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all">
              <i class="fas fa-arrow-left mr-2" />
              Ver Otras Maestrías
            </router-link>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <a href="#dimensiones-bim" class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all">
              <i class="fas fa-cubes mr-1"></i>Dimensiones BIM
            </a>
            <a href="#perfil-aspirante" class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all">
              <i class="fas fa-user-graduate mr-1"></i>Perfil
            </a>
            <a href="#plan-estudios" class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all">
              <i class="fas fa-book mr-1"></i>Currículo
            </a>
            <a href="#facultad" class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all">
              <i class="fas fa-chalkboard-teacher mr-1"></i>Docentes
            </a>
            <a href="#admision" class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all">
              <i class="fas fa-clipboard-check mr-1"></i>Admisión
            </a>
            <a href="#financiamiento" class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all">
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

    <!-- WhatsApp Button -->
    <a
      href="https://wa.me/593999072657?text=Hola,%20deseo%20información%20sobre%20la%20Maestría%20en%20Ingeniería%20BIM"
      target="_blank"
      class="fixed bottom-20 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <i class="fab fa-whatsapp text-2xl group-hover:animate-pulse" />
    </a>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import BimDimensions from '../BimDimensions.vue'
import ProfilesSection from '../ProfilesSection.vue'
import CurriculumGrid from '../CurriculumGrid.vue'
import FacultySection from '../FacultySection.vue'
import AdmissionContact from '../AdmissionContact.vue'
import FinancingSection from '../FinancingSection.vue'
import Footer from '../Footer.vue'
</script>

<style scoped>
@keyframes gradient-x {
  0%, 100% {
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