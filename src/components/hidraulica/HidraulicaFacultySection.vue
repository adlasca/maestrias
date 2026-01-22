<template>
  <section id="facultad" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-800 text-sm font-bold rounded-full uppercase tracking-wider mb-5">
          Claustro Académico
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Docentes de <span class="text-cyan-600">Excelencia</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Aprende de especialistas con amplia trayectoria en proyectos hídricos nacionales e internacionales
        </p>
      </div>

      <!-- Cards mejoradas -->
      <div class="grid md:grid-cols-3 gap-10">
        <!-- Card 1 - Tecnología -->
        <div class="group bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200">
          <div class="mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-microscope text-white text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h3>
          </div>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            Accede a <strong class="font-semibold text-cyan-700">software especializado en modelación hidráulica</strong>
            y domina herramientas como HEC-RAS, SWMM, EPANET y modeladores CFD avanzados.
          </p>
          <div class="pt-6 border-t border-gray-100">
            <h4 class="font-bold text-gray-900 text-lg mb-3">Software Incluido:</h4>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                HEC-RAS
              </span>
              <span class="inline-block bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                SWMM
              </span>
              <span class="inline-block bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                EPANET
              </span>
              <span class="inline-block bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                QGIS
              </span>
            </div>
          </div>
        </div>

        <!-- Card 2 - Docentes -->
        <div class="group bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200">
          <div class="mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-chalkboard-teacher text-white text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Claustro de Excelencia</h3>
          </div>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            Aprende de <strong class="font-semibold text-cyan-700">hidrólogos, ingenieros y doctores</strong> con experiencia
            en proyectos de infraestructura hídrica, gestión de recursos y consultoría especializada.
          </p>
          <div class="pt-6 border-t border-gray-100">
            <h4 class="font-bold text-gray-900 text-lg mb-3">Perfil Docente:</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2"></i>
                <span>Especialistas en hidrología aplicada</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2"></i>
                <span>Experiencia en proyectos reales</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2"></i>
                <span>Publicaciones en revistas indexadas</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2"></i>
                <span>Vinculación con el sector hídrico</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 3 - Internacionalización -->
        <div class="group bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200">
          <div class="mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-globe-americas text-white text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Internacionalización</h3>
          </div>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            Benefíciate de <strong class="font-semibold text-cyan-700">convenios internacionales</strong>
            y programas de movilidad académica, además de becas para investigación en centros especializados.
          </p>
          <div class="pt-6 border-t border-gray-100">
            <h4 class="font-bold text-gray-900 text-lg mb-3">Oportunidades:</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-center">
                <i class="fas fa-plane text-blue-500 mr-2"></i>
                <span>Intercambios con universidades europeas</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-graduation-cap text-blue-500 mr-2"></i>
                <span>Becas para investigación</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-handshake text-blue-500 mr-2"></i>
                <span>Convenios con organismos internacionales</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-book text-blue-500 mr-2"></i>
                <span>Publicaciones conjuntas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>