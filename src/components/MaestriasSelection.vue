<template>
  <section class="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-6">
          <i class="fas fa-graduation-cap" />
          <span>Programas de Posgrado</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Maestrías de la <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">UCE</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre nuestros programas de posgrado especializados en ingeniería y tecnología avanzada.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Maestría BIM -->
        <div class="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div class="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
            <div class="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i class="fas fa-cube text-xl" />
            </div>
            <h3 class="text-2xl font-black mb-2">Ingeniería BIM</h3>
            <p class="text-blue-100">Gestión Estratégica de Proyectos BIM</p>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              Domina las 7 dimensiones del Building Information Modeling y lidera proyectos de infraestructura inteligente.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-blue-600">1 año de duración</span>
              <router-link
                to="/maestria/bim"
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver Programa
                <i class="fas fa-arrow-right" />
              </router-link>
            </div>
          </div>
        </div>

        <!-- Maestría Hidráulica -->
        <div class="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div class="relative h-48 bg-gradient-to-br from-cyan-600 to-blue-600 p-8 text-white">
            <div class="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i class="fas fa-water text-xl" />
            </div>
            <h3 class="text-2xl font-black mb-2">Ingeniería Hidráulica</h3>
            <p class="text-cyan-100">Recursos Hídricos y Gestión</p>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              Especialízate en el manejo integral de recursos hídricos, hidrología y sistemas de agua.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-cyan-600">2 años de duración</span>
              <router-link
                to="/maestria/hidraulica"
                class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Ver Programa
                <i class="fas fa-arrow-right" />
              </router-link>
            </div>
          </div>
        </div>

        <!-- Maestría Geotécnica -->
        <div class="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div class="relative h-48 bg-gradient-to-br from-green-600 to-teal-600 p-8 text-white">
            <div class="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i class="fas fa-mountain text-xl" />
            </div>
            <h3 class="text-2xl font-black mb-2">Ingeniería Geotécnica</h3>
            <p class="text-green-100">Geotecnia y Gestión de Riesgos</p>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              Domina los principios de la mecánica de suelos, cimentaciones y gestión de riesgos geotécnicos.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-green-600">2 años de duración</span>
              <router-link
                to="/maestria/geotecnica"
                class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Ver Programa
                <i class="fas fa-arrow-right" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Información adicional -->
      <div class="mt-20 text-center">
        <div class="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegir una Maestría en la UCE?</h3>
          <div class="grid md:grid-cols-3 gap-6 mt-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-users text-blue-600 text-2xl" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Docentes Expertos</h4>
              <p class="text-gray-600 text-sm">Profesionales con amplia experiencia académica e industrial</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-flask text-green-600 text-2xl" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Laboratorios Modernos</h4>
              <p class="text-gray-600 text-sm">Equipamiento de vanguardia para investigación aplicada</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-handshake text-purple-600 text-2xl" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Convenios Empresariales</h4>
              <p class="text-gray-600 text-sm">Alianzas estratégicas con empresas líderes del sector</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>