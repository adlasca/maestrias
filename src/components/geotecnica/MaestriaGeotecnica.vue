<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section Geotécnica -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80"
          alt="Ingeniería Civil en los Andes"
          class="w-full h-full object-cover object-center brightness-90 contrast-105" />
        <div class="absolute inset-0 bg-gradient-to-r from-green-900/50 via-teal-800/40 to-emerald-900/40" />
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="max-w-6xl mx-auto">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 hover:bg-white/20 transition-all">
            <i class="fas fa-mountain text-green-400" />
            <span>Posgrado de Cuarto Nivel</span>
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span class="text-xs opacity-80">Cohorte 2026</span>
          </div>

          <!-- Título principal -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span class="block text-white mb-2">Maestría en</span>
            <span
              class="block bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Ingeniería Civil
            </span>
          </h1>

          <!-- Subtítulo -->
          <div
            class="inline-block bg-black/40 backdrop-blur-sm px-6 py-4 rounded-2xl mb-8 border border-white/25 shadow-2xl">
            <p class="text-5xl md:text-5xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Mención en Ingeniería Geotécnica y <span class="text-emerald-300 font-semibold">Gestión Integral de Riesgos</span>
            </p>
          </div>

          <!-- Lema -->
          <div class="max-w-3xl mx-auto mb-10">
            <div class="relative px-4 py-3 bg-black/40 backdrop-blur-sm rounded-xl">
              <i class="fas fa-quote-left absolute left-0 top-0 text-2xl text-white/30 ml-2 mt-1" />
              <i class="fas fa-quote-right absolute right-0 bottom-0 text-2xl text-white/30 mr-2 mb-1" />

              <p class="text-xl md:text-2xl italic font-light leading-relaxed text-white drop-shadow">
                Formamos a los <strong class="font-semibold text-green-300">especialistas que diseñan la
                  resiliencia</strong>
                del territorio, integrando tecnología avanzada con gestión estratégica de riesgos.
              </p>
            </div>
          </div>

          <!-- Estadísticas -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-green-300 mb-1 drop-shadow">30</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Créditos</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-emerald-300 mb-1 drop-shadow">2</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Semestres</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-amber-300 mb-1 drop-shadow">1440</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Horas</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-lg font-bold text-teal-300 mb-1 drop-shadow">Híbrida</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Modalidad</div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <a href="#dimensiones-geotecnica"
              class="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-cubes mr-1"></i>Programa
            </a>
            <a href="#perfil-aspirante"
              class="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-user-graduate mr-1"></i>Perfil
            </a>
            <a href="#plan-estudios"
              class="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600  rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-book mr-1"></i>Currículo
            </a>
            <a href="#facultad"
              class="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-chalkboard-teacher mr-1"></i>Docentes
            </a>
            <a href="#admision"
              class="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-clipboard-check mr-1"></i>Admisión
            </a>
            <a href="#financiamiento"
              class="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600  rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-dollar-sign mr-1"></i>Financiamiento
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Dimensiones Geotécnica -->
    <GeotecnicaDimensions />

    <!-- Profiles Section -->
    <GeotecnicaProfilesSection />

    <!-- Plan de Estudios -->
    <GeotecnicaCurriculum />

    <!-- Faculty Section -->
    <GeotecnicaFacultySection />

    <!-- Admission Contact -->
    <GeotecnicaAdmissionContact />

    <!-- Financing Section -->
    <GeotecnicaFinancingSection />

    
  </div>
</template>

<script setup>
import GeotecnicaDimensions from './GeotecnicaDimensions.vue'
import GeotecnicaProfilesSection from './GeotecnicaProfilesSection.vue'
import GeotecnicaCurriculum from './GeotecnicaCurriculum.vue'
import GeotecnicaFacultySection from './GeotecnicaFacultySection.vue'
import GeotecnicaAdmissionContact from './GeotecnicaAdmissionContact.vue'
import GeotecnicaFinancingSection from './GeotecnicaFinancingSection.vue'
</script>