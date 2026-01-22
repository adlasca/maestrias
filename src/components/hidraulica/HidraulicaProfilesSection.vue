<template>
  <section id="perfil-aspirante" class="py-24 bg-gradient-to-b from-white to-blue-50/50">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Columna de Contenido -->
        <div class="order-2 lg:order-1">
          <!-- Encabezado con acento -->
          <div class="mb-10">
            <span class="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-800 text-sm font-bold rounded-full uppercase tracking-wider mb-5">
              Perfil del Aspirante
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Buscas especializarte en
              <span class="text-cyan-700">ingeniería hidráulica?</span>
            </h2>
            <p class="text-gray-700 text-lg leading-relaxed">
              Esta maestría está diseñada para profesionales que desean dominar el
              <strong class="font-semibold text-cyan-700">diseño, modelación y gestión</strong>
              de sistemas hídricos con enfoque en sostenibilidad y resiliencia.
            </p>
          </div>

          <!-- Requisitos en grid mejorado -->
          <div class="grid sm:grid-cols-2 gap-6">
            <!-- Requisito 1 -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-start mb-3">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-user-graduate text-white text-lg"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-2">Formación Académica</h4>
                  <p class="text-gray-600 text-base leading-relaxed">
                    Título en <strong>Ingeniería Civil, Ambiental, Recursos Hídricos</strong> o carreras afines.
                  </p>
                </div>
              </div>
            </div>

            <!-- Requisito 2 -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-start mb-3">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-briefcase text-white text-lg"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-2">Experiencia</h4>
                  <p class="text-gray-600 text-base leading-relaxed">
                    Interés en <strong>proyectos hídricos, saneamiento o gestión ambiental</strong>.
                  </p>
                </div>
              </div>
            </div>

            <!-- Requisito 3 -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 sm:col-span-2">
              <div class="flex items-start mb-3">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-brain text-white text-lg"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-2">Conocimientos Previos</h4>
                  <p class="text-gray-600 text-base leading-relaxed">
                    Bases en <strong>hidráulica, hidrología, mecánica de fluidos o medio ambiente</strong>.
                    Interés en modelación computacional y gestión sostenible de recursos hídricos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna de Imagen -->
        <div class="order-1 lg:order-2 relative">
          <!-- Marco decorativo -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-cyan-100/50 rounded-full -z-10"></div>
          <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-100/50 rounded-full -z-10"></div>

          <!-- Imagen principal -->
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/MaestriaUce/images/PantaHi.jpeg"
              alt="Ingenieros trabajando en proyectos hidráulicos"
              class="w-full h-[520px] object-cover object-center"
              loading="lazy"
            >
            <!-- Overlay sutil -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          <!-- Badge superpuesto -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border-t-4 border-cyan-600">
            <div class="flex items-center">
              <div class="flex-shrink-0 mr-4">
                <div class="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <i class="fas fa-chart-line text-cyan-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-base mb-1">Alta Demanda</h4>
                <p class="text-gray-600 text-xs">
                  Especialistas en agua requeridos en todo el sector
                </p>
              </div>
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