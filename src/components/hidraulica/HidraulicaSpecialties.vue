<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Especialidades en <span class="text-cyan-600">Ingeniería Hidráulica</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Domina las áreas fundamentales de la hidráulica moderna con enfoque en sostenibilidad y desarrollo nacional.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Hidrología -->
        <div class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all group">
          <div class="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-cloud-rain text-white text-2xl" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Hidrología Avanzada</h3>
          <p class="text-gray-600 mb-6">
            Estudio de los procesos hidrológicos, modelado matemático y predicción de caudales en cuencas hidrográficas.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-cyan-500" />
              Modelos hidrológicos
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-cyan-500" />
              Análisis de cuencas
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-cyan-500" />
              Predicción de inundaciones
            </li>
          </ul>
        </div>

        <!-- Hidráulica Urbana -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all group">
          <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-city text-white text-2xl" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Hidráulica Urbana</h3>
          <p class="text-gray-600 mb-6">
            Diseño y gestión de sistemas de agua potable, alcantarillado y drenaje urbano sostenible.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-blue-500" />
              Sistemas de agua potable
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-blue-500" />
              Drenaje pluvial
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-blue-500" />
              Gestión de aguas residuales
            </li>
          </ul>
        </div>

        <!-- Recursos Hídricos -->
        <div class="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl transition-all group">
          <div class="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-water text-white text-2xl" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Gestión de Recursos Hídricos</h3>
          <p class="text-gray-600 mb-6">
            Planificación integrada de cuencas, gestión sostenible y políticas de agua a nivel nacional.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-teal-500" />
              Planificación de cuencas
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-teal-500" />
              Gestión sostenible
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-teal-500" />
              Políticas públicas
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component for Hydraulic Engineering Specialties
</script>