<template>
  <section id="introduccion" class="py-24 bg-gradient-to-br from-white via-green-50/20 to-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Columna de Imagen -->
        <div class="order-1">
          <div class="rounded-2xl overflow-hidden shadow-2xl group mb-6">
            <img
              src="/MaestriaUce/images/portada.png"
              alt="Maestría en Ingeniería Civil - Formación especializada"
              class="w-full h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <i class="fas fa-gem mr-2"></i>Programa Exclusivo
            </div>
          </div>
        </div>

        <!-- Columna de Contenido -->
        <div class="order-2">
          <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-6">
            <i class="fas fa-info-circle" />
            <span>Sobre el Programa</span>
          </div>

          <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Ingeniería Geotécnica para el
            <span class="text-green-600">Desarrollo Sostenible</span>
          </h2>

          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              La Maestría en Ingeniería Civil con mención en Ingeniería Geotécnica y Gestión de Riesgos forma especialistas
              capaces de diseñar, gestionar y optimizar sistemas geotécnicos con un enfoque sostenible y resiliente.
            </p>

            <p>
              Nuestro programa integra conocimientos avanzados en mecánica de suelos, modelación numérica y gestión de riesgos,
              preparándote para enfrentar los desafíos actuales y futuros del sector geotécnico ecuatoriano.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-xl border border-green-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <i class="fas fa-users text-white" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Perfil</div>
                  <div class="text-sm text-gray-600">Profesional</div>
                </div>
              </div>
            </div>

            <div class="bg-teal-50 p-4 rounded-xl border border-teal-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
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
// Component for Geotechnical Engineering Introduction Section
</script>