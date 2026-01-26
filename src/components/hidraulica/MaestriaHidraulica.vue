<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section Hidráulica -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-900">
      <div class="absolute inset-0 z-0">
        <img src="/images/Hidroelect.jpeg" alt="Sistemas hidráulicos y gestión del agua"
          class="w-full h-full object-cover object-center brightness-90 contrast-105" />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-800/40 to-cyan-900/40" />
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl" />
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="max-w-6xl mx-auto">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 hover:bg-white/20 transition-all">
            <i class="fas fa-water text-cyan-400" />
            <span>Cuarto Nivel · Gestión Sostenible del Agua</span>
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span class="text-xs opacity-80">Cohorte 2026</span>
          </div>

          <!-- Título principal -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span class="block text-white mb-2">Maestría en</span>
            <span class="block bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Ingeniería Hidráulica
            </span>
          </h1>

          <!-- Subtítulo -->
          <div
            class="inline-block bg-black/40 backdrop-blur-sm px-6 py-4 rounded-2xl mb-8 border border-white/25 shadow-2xl">
            <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Sistemas Hidrosanitarios y <span class="text-emerald-300 font-semibold">Gestión Sostenible del Agua</span>
            </p>
          </div>

          <!-- Lema -->
          <div class="max-w-3xl mx-auto mb-10">
            <div class="relative px-4 py-3 bg-black/40 backdrop-blur-sm rounded-xl">
              <i class="fas fa-quote-left absolute left-0 top-0 text-2xl text-white/30 ml-2 mt-1" />
              <i class="fas fa-quote-right absolute right-0 bottom-0 text-2xl text-white/30 mr-2 mb-1" />

              <p class="text-lg sm:text-xl italic font-light leading-relaxed text-white drop-shadow">
                "Formamos especialistas que <strong class="font-semibold text-cyan-300">diseñan, gestionan y
                  optimizan</strong>
                sistemas hídricos con enfoque sostenible y resiliente para el desarrollo nacional."
              </p>
            </div>
          </div>

          <!-- Estadísticas -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-cyan-300 mb-1 drop-shadow">30</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Créditos</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-emerald-300 mb-1 drop-shadow">2</div>
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

          <!-- Áreas de Especialización -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 max-w-3xl mx-auto">
            <div class="bg-black/30 backdrop-blur-sm p-3 rounded-lg text-center">
              <div class="text-lg font-bold text-white mb-1"><i class="fas fa-tint mr-2" />Hidráulica</div>
              <div class="text-xs text-gray-300">Avanzada</div>
            </div>
            <div class="bg-black/30 backdrop-blur-sm p-3 rounded-lg text-center">
              <div class="text-lg font-bold text-white mb-1"><i class="fas fa-cloud-rain mr-2" />Hidrología</div>
              <div class="text-xs text-gray-300">Modelación</div>
            </div>
            <div class="bg-black/30 backdrop-blur-sm p-3 rounded-lg text-center">
              <div class="text-lg font-bold text-white mb-1"><i class="fas fa-recycle mr-2" />Sistemas</div>
              <div class="text-xs text-gray-300">Hidrosanitarios</div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <a href="#introduccion"
              class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-cubes mr-1"></i>Programa
            </a>
            <a href="#perfil-aspirante"
              class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-user-graduate mr-1"></i>Perfil
            </a>
            <a href="#plan-estudios"
              class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600  rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-book mr-1"></i>Currículo
            </a>
            <a href="#facultad"
              class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-chalkboard-teacher mr-1"></i>Docentes
            </a>
            <a href="#admision"
              class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600   rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-clipboard-check mr-1"></i>Admisión
            </a>
            <a href="#contacto"
              class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600  rounded-full text-white text-lg font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              <i class="fas fa-dollar-sign mr-1"></i>Financiamiento
            </a>
          </div>
        </div>
      </div>

      <!-- Elementos decorativos agua -->
      <div class="absolute top-20 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
        style="animation-delay: 0.5s;"></div>
    </section>

    <!-- Introducción Hidráulica -->
    <HidraulicaIntroduction />

    <!-- Profiles Section -->
    <HidraulicaProfilesSection />

    <!-- Plan de Estudios -->
    <HidraulicaCurriculum />

    <!-- Faculty Section -->
    <HidraulicaFacultySection />

    <!-- Admission Contact -->
    <HidraulicaAdmissionContact />

    <!-- Financing Section -->
    <HidraulicaFinancingSection />

    <!-- Contact Section -->
    <section id="contacto" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            ¿Listo para especializarte en <span class="text-cyan-600">Ingeniería Hidráulica?</span>
          </h2>
          <p class="text-xl text-gray-600 mb-12">
            Únete a nuestro programa de posgrado y contribuye al desarrollo sostenible del sector hídrico en Ecuador.
          </p>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100">
              <div class="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-envelope text-white text-2xl" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Información Académica</h3>
              <p class="text-gray-600 mb-4">posgrado@fica.uce.edu.ec</p>
              <p class="text-sm text-gray-500">Horario: Lunes a Viernes, 8:00 - 17:00</p>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-phone text-white text-2xl" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Admisión</h3>
              <p class="text-gray-600 mb-4">(02) 396-2800 ext. 123</p>
              <p class="text-sm text-gray-500">Proceso de admisión continuo</p>
            </div>
          </div>

          <a href="mailto:posgrado@fica.uce.edu.ec"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            <i class="fas fa-paper-plane" />
            Solicitar Información
          </a>
        </div>
      </div>
    </section>

    <!-- WhatsApp Button -->
    <a href="https://wa.me/593999072657?text=Hola,%20deseo%20información%20sobre%20la%20Maestría%20en%20Ingeniería%20Hidráulica"
      target="_blank"
      class="fixed bottom-20 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contactar por WhatsApp">
      <i class="fab fa-whatsapp text-2xl group-hover:animate-pulse" />
    </a>
  </div>
</template>

<script setup>
import HidraulicaIntroduction from './HidraulicaIntroduction.vue'
import HidraulicaProfilesSection from './HidraulicaProfilesSection.vue'
import HidraulicaCurriculum from './HidraulicaCurriculum.vue'
import HidraulicaFacultySection from './HidraulicaFacultySection.vue'
import HidraulicaAdmissionContact from './HidraulicaAdmissionContact.vue'
import HidraulicaFinancingSection from './HidraulicaFinancingSection.vue'
</script>