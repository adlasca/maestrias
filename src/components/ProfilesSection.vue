<template>
  <section id="perfil-aspirante" class="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-6">
          <i class="fas fa-users" />
          <span>Perfiles Académicos</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          De <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Profesional</span> a <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Experto BIM</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Transformamos profesionales calificados en líderes especializados en tecnología BIM,
          preparados para revolucionar la industria de la construcción.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <!-- Perfil de Ingreso -->
        <div class="group">
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white relative">
              <div class="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <i class="fas fa-sign-in-alt text-2xl" />
              </div>
              <h3 class="text-3xl font-black mb-2">Perfil de Ingreso</h3>
              <p class="text-blue-100 text-lg">Requisitos de admisión</p>
            </div>

            <!-- Content -->
            <div class="p-8">
              <div class="space-y-6">
                <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-graduation-cap text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Título Profesional</h4>
                    <p class="text-gray-600 text-sm">Ingeniería Civil, Arquitectura, o carreras afines con título de tercer nivel.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                  <div class="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-brain text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Conocimientos Básicos</h4>
                    <p class="text-gray-600 text-sm">Familiaridad con software de diseño CAD y conceptos básicos de construcción.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                  <div class="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-briefcase text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Experiencia Profesional</h4>
                    <p class="text-gray-600 text-sm">Mínimo 1 año de experiencia laboral (deseable, no excluyente).</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <div class="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-language text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Idioma</h4>
                    <p class="text-gray-600 text-sm">Dominio del inglés técnico (lectura y comprensión).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Perfil de Egreso -->
        <div class="group">
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <!-- Header -->
            <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white relative">
              <div class="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <i class="fas fa-rocket text-2xl" />
              </div>
              <h3 class="text-3xl font-black mb-2">Perfil de Egreso</h3>
              <p class="text-purple-100 text-lg">Competencias adquiridas</p>
            </div>

            <!-- Content -->
            <div class="p-8">
              <div class="space-y-6">
                <div class="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                  <div class="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-cogs text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Experto BIM</h4>
                    <p class="text-gray-600 text-sm">Dominio completo de las 7 dimensiones BIM y herramientas especializadas.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <div class="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-users-cog text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Líder de Proyectos</h4>
                    <p class="text-gray-600 text-sm">Capacidad para gestionar equipos multidisciplinarios en entornos BIM.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-cyan-50 rounded-2xl border border-cyan-100">
                  <div class="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-chart-line text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Analista Estratégico</h4>
                    <p class="text-gray-600 text-sm">Habilidades para análisis de datos y toma de decisiones estratégicas.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-pink-50 rounded-2xl border border-pink-100">
                  <div class="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-globe text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Innovador Digital</h4>
                    <p class="text-gray-600 text-sm">Conocimientos en tecnologías emergentes: IA, IoT, Realidad Virtual.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Development Path -->
      <div class="mt-20 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Trayectoria de Desarrollo Profesional</h3>
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <span class="text-gray-700 font-medium">Ingeniero Básico</span>
          </div>
          <div class="hidden md:block w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
          <i class="fas fa-arrow-right text-purple-500 hidden md:block" />
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <span class="text-gray-700 font-medium">Especialista BIM</span>
          </div>
          <div class="hidden md:block w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
          <i class="fas fa-arrow-right text-pink-500 hidden md:block" />
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
            <span class="text-gray-700 font-medium">Líder Digital</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
