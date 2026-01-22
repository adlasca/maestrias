<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Especialidades en <span class="text-green-600">Ingeniería Geotécnica</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Domina las áreas fundamentales de la geotécnica moderna con énfasis en estabilidad y sostenibilidad.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Mecánica de Suelos -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all group">
          <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-layer-group text-white text-2xl" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Mecánica de Suelos Avanzada</h3>
          <p class="text-gray-600 mb-6">
            Estudio del comportamiento mecánico de suelos y rocas, análisis de estabilidad y diseño geotécnico.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-green-500" />
              Propiedades de suelos
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-green-500" />
              Ensayos geotécnicos
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-green-500" />
              Análisis de estabilidad
            </li>
          </ul>
        </div>

        <!-- Modelación Numérica -->
        <div class="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl transition-all group">
          <div class="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-calculator text-white text-2xl" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Modelación Numérica</h3>
          <p class="text-gray-600 mb-6">
            Simulación computacional avanzada de problemas geotécnicos usando software especializado.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-teal-500" />
              PLAXIS y GeoStudio
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-teal-500" />
              Elementos finitos
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-teal-500" />
              Análisis dinámico
            </li>
          </ul>
        </div>

        <!-- Gestión de Riesgos -->
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all group">
          <div class="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-exclamation-triangle text-white text-2xl" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Gestión de Riesgos Geotécnicos</h3>
          <p class="text-gray-600 mb-6">
            Evaluación, mitigación y gestión integral de riesgos asociados a suelos y terrenos.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-emerald-500" />
              Riesgos sísmicos
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-emerald-500" />
              Inestabilidad de taludes
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-emerald-500" />
              Licuefacción
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component for Geotechnical Engineering Specialties
</script>