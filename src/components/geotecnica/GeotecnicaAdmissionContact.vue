<template>
  <section id="admision" class="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <!-- Encabezado mejorado -->
      <div class="text-center mb-20">
        <span class="inline-block px-5 py-2 bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
          <i class="fas fa-road mr-2"></i>Camino a tu Especialización
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Proceso de Admisión <span class="text-green-700">2026</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Sigue estos pasos sencillos para formar parte de la primera cohorte de especialistas
          en geotecnia y gestión de riesgos del Ecuador.
        </p>
      </div>

      <!-- Timeline horizontal mejorado -->
      <div class="relative">
        <!-- Línea conectadora -->
        <div class="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full z-0"></div>

        <!-- Pasos -->
        <div class="grid md:grid-cols-5 gap-8 relative z-10">
          <!-- Paso 1 -->
          <div class="group">
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 text-center mb-4">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Perfil de Ingreso</h4>
              <p class="text-gray-700 text-base leading-relaxed">
                Verifica que cumples con el perfil académico y la experiencia profesional requerida.
              </p>
            </div>
            <div class="text-center">
              <span class="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                <i class="fas fa-clock mr-1"></i>Revisión inicial
              </span>
            </div>
          </div>

          <!-- Paso 2 -->
          <div class="group">
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center mb-4">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Información y Consultas</h4>
              <p class="text-gray-700 text-base leading-relaxed">
                Solicita información detallada y resuelve tus dudas con nuestra coordinación académica.
              </p>
            </div>
            <div class="text-center">
              <span class="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                <i class="fas fa-question-circle mr-1"></i>Asesoría
              </span>
            </div>
          </div>

          <!-- Paso 3 -->
          <div class="group">
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-yellow-100 hover:border-yellow-300 text-center mb-4">
              <div class="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Documentación</h4>
              <p class="text-gray-700 text-base leading-relaxed">
                Entrega tu título, hoja de vida, portafolio y documentación académica completa.
              </p>
            </div>
            <div class="text-center">
              <span class="inline-block bg-yellow-50 text-yellow-700 px-3 py-1 rounded-lg text-sm font-medium">
                <i class="fas fa-folder-open mr-1"></i>Requisitos
              </span>
            </div>
          </div>

          <!-- Paso 4 -->
          <div class="group">
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 text-center mb-4">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Entrevista Académica</h4>
              <p class="text-gray-700 text-base leading-relaxed">
                Participa en una entrevista personalizada con el comité académico del programa.
              </p>
            </div>
            <div class="text-center">
              <span class="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium">
                <i class="fas fa-user-check mr-1"></i>Evaluación
              </span>
            </div>
          </div>

          <!-- Paso 5 -->
          <div class="group">
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-red-100 hover:border-red-300 text-center mb-4">
              <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                5
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Inscripción Formal</h4>
              <p class="text-gray-700 text-base leading-relaxed">
                Formaliza tu inscripción y comienza tu formación de cuarto nivel en la UCE.
              </p>
            </div>
            <div class="text-center">
              <span class="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-lg text-sm font-medium">
                <i class="fas fa-graduation-cap mr-1"></i>¡Bienvenido!
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Información adicional y contacto -->
      <div class="mt-20 grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <i class="fas fa-file-check text-green-600 text-xl"></i>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">Requisitos de Admisión</h4>
            </div>
          </div>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 text-sm mr-2"></i>
              <span>Título de tercer nivel registrado</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 text-sm mr-2"></i>
              <span>Hoja de vida actualizada</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 text-sm mr-2"></i>
              <span>Certificado de notas</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 text-sm mr-2"></i>
              <span>Certificados de experiencia</span>
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <i class="fas fa-headset text-purple-600 text-xl"></i>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">Soporte y Ayuda</h4>
            </div>
          </div>
          <p class="text-gray-700 mb-4">
            ¿Necesitas asistencia con tu proceso de admisión?
          </p>
          <a href="#contacto" class="inline-flex items-center text-green-600 font-semibold hover:text-green-800 text-lg">
            <i class="fas fa-phone-alt mr-2"></i>
            <span>Contáctanos ahora</span>
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      <!-- CTA final -->
      <div class="mt-16 text-center">
        <div class="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-10 shadow-2xl">
          <div class="text-white text-left">
            <h3 class="text-2xl font-bold mb-3">¡No pierdas esta oportunidad!</h3>
            <p class="text-green-200 text-lg">
              Cupos limitados para la primera cohorte 2026. Postula hoy y asegura tu lugar.
            </p>
          </div>
          <a href="#contacto"
             class="inline-flex items-center gap-3 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
            <i class="fas fa-file-signature"></i>
            <span>Iniciar Postulación</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>