<template>
  <section id="contacto" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto bg-gradient-to-r from-green-900 to-green-800 rounded-2xl shadow-2xl overflow-hidden">
        <div class="grid md:grid-cols-2">
          <!-- Inversión -->
          <div class="p-10 text-white">
            <h3 class="text-2xl font-bold mb-8">Inversión y Costos</h3>
            <div class="space-y-6">
              <div class="flex justify-between items-center pb-3 border-b border-green-700">
                <div>
                  <p class="font-semibold">Matrícula</p>
                </div>
                <div>
                  <span class="text-2xl font-bold">$400</span>
                </div>
              </div>
              <div class="flex justify-between items-center pb-3 border-b border-green-700">
                <div>
                  <p class="font-semibold">Inscripción</p>
                </div>
                <div>
                  <span class="text-2xl font-bold">$80</span>
                </div>
              </div>
              <div class="flex justify-between items-center pt-3">
                <div>
                  <p class="font-semibold text-lg">Arancel Total</p>
                </div>
                <div>
                  <span class="text-3xl font-bold text-yellow-400">$4,000</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-green-300 mt-6">
              *Valores referenciales, sujetos a normativa vigente.
            </p>
          </div>

          <!-- Contacto -->
          <div class="p-10 bg-white">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">¡Inscríbete Hoy!</h3>
            <p class="text-gray-600 mb-8">Sé parte de la primera cohorte.</p>

            <div class="space-y-6 mb-8">
              <div class="flex items-center">
                <i class="fas fa-user-tie text-green-600 w-6"></i>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Coordinación:</p>
                  <p class="text-gray-700">Msc. Luis Wladimir Morales Gubio</p>
                </div>
              </div>

              <div class="flex items-center">
                <i class="fas fa-envelope text-green-600 w-6"></i>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Email:</p>
                  <p class="text-gray-700">posgrado@fica.uce.edu.ec</p>
                </div>
              </div>

              <div class="flex items-center">
                <i class="fas fa-phone text-green-600 w-6"></i>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Teléfono:</p>
                  <p class="text-gray-700">(02) 396-2800 ext. 123</p>
                </div>
              </div>

              <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-green-600 w-6"></i>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Dirección:</p>
                  <p class="text-gray-700">Av. 12 de Octubre y Wilson</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <a href="mailto:posgrado@fica.uce.edu.ec"
                 class="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300">
                <i class="fas fa-envelope"></i>
                <span>Solicitar Información</span>
              </a>

              <a href="https://wa.me/593999072657?text=Hola,%20deseo%20información%20sobre%20la%20Maestría%20en%20Ingeniería%20Geotécnica"
                 target="_blank"
                 class="w-full inline-flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-green-600 transition-all duration-300">
                <i class="fab fa-whatsapp"></i>
                <span>Contactar por WhatsApp</span>
              </a>
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