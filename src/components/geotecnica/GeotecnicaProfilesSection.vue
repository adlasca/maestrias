<template>
  <section id="perfil-aspirante" class="py-24 bg-gradient-to-b from-white to-gray-50/50">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Columna de Contenido -->
        <div class="order-2 lg:order-1">
          <!-- Encabezado con acento -->
          <div class="mb-10">
            <span
              class="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-sm font-bold rounded-full uppercase tracking-wider mb-5">
              Perfil del Aspirante
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Eres el candidato ideal
              <span class="text-green-700">para esta maestría?</span>
            </h2>
            <p class="text-gray-700 text-lg leading-relaxed">
              Esta maestría está dirigida a profesionales que buscan especializarse en el
              <strong class="font-semibold text-green-700">análisis, diseño y gestión de riesgos geotécnicos</strong>,
              con una visión técnica, aplicada y orientada a la resiliencia territorial.
            </p>
          </div>

          <!-- Requisitos en grid mejorado -->
          <div class="grid sm:grid-cols-2 gap-6">
            <!-- Requisito 1 -->
            <div
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-start mb-3">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-user-graduate text-white text-lg"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-2">Formación Académica</h4>
                  <p class="text-gray-600 text-base leading-relaxed">
                    Título de tercer nivel en <strong>Ingeniería Civil, Geológica, Minas, Ambiental</strong> o carreras
                    afines.
                  </p>
                </div>
              </div>
            </div>

            <!-- Requisito 2 -->
            <div
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-start mb-3">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-briefcase text-white text-lg"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-2">Experiencia Profesional</h4>
                  <p class="text-gray-600 text-base leading-relaxed">
                    Mínimo <strong>1 año de experiencia</strong> en proyectos de infraestructura o interacción con el
                    terreno.
                  </p>
                </div>
              </div>
            </div>

            <!-- Requisito 3 -->
            <div
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 sm:col-span-2">
              <div class="flex items-start mb-3">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-brain text-white text-lg"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-2">Conocimientos Previos</h4>
                  <p class="text-gray-600 text-base leading-relaxed">
                    Bases en <strong>mecánica de suelos, geología aplicada y análisis estructural</strong>.
                    Interés en geotecnia sísmica, modelación numérica y gestión integral de riesgos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna de Imagen -->
        <div class="order-1 lg:order-2 relative">
          <!-- Marco decorativo -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-green-100/50 rounded-full -z-10"></div>
          <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-100/50 rounded-full -z-10"></div>

          <!-- Imagen principal -->
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/perfil.png" alt="Profesionales de ingeniería civil colaborando en análisis geotécnico"
              class="w-full h-[520px] object-cover object-center" loading="lazy">
            <!-- Overlay sutil -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          <!-- Badge superpuesto -->
          <div
            class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border-t-4 border-green-600">
            <div class="flex items-center">
              <div class="flex-shrink-0 mr-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <i class="fas fa-chart-line text-green-600 text-xl"></i>
                </div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-base mb-1">Alta Demanda Laboral</h4>
                <p class="text-gray-600 text-xs">
                  +90% de empleabilidad en el primer año tras graduación
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