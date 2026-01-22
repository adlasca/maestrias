<template>
  <section id="introduccion" class="py-24 bg-gradient-to-br from-white via-blue-50/20 to-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Columna de Imagen -->
        <div class="order-1">
          <div class="rounded-2xl overflow-hidden shadow-2xl group mb-6">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
              alt="Laboratorio de hidráulica y sistemas hídricos"
              class="w-full h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <i class="fas fa-flask mr-2"></i>Laboratorio Especializado
            </div>
          </div>
        </div>

        <!-- Columna de Contenido -->
        <div class="order-2">
          <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
            <i class="fas fa-info-circle" />
            <span>Sobre el Programa</span>
          </div>

          <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Ingeniería Hidráulica para el
            <span class="text-cyan-600">Desarrollo Sostenible</span>
          </h2>

          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              La Maestría en Ingeniería Hidráulica forma especialistas capaces de diseñar, gestionar y optimizar
              sistemas hídricos con un enfoque sostenible y resiliente, contribuyendo al desarrollo nacional.
            </p>

            <p>
              Nuestro programa integra conocimientos avanzados en hidráulica, hidrología y gestión de recursos hídricos,
              preparándote para enfrentar los desafíos actuales y futuros del sector hídrico ecuatoriano.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="bg-cyan-50 p-4 rounded-xl border border-cyan-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <i class="fas fa-users text-white" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Perfil</div>
                  <div class="text-sm text-gray-600">Profesional</div>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i class="fas fa-clock text-white" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Duración</div>
                  <div class="text-sm text-gray-600">2 años</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component for Hydraulic Engineering Introduction Section
</script>