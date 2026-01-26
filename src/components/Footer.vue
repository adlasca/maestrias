<template>
  <footer class="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Logo y descripción -->
          <div class="md:col-span-1">
            <div class="flex items-center gap-4 mb-6">
              <img src="/logo-uce.png" alt="UCE Logo" class="w-18 h-18 object-contain" />
              <img src="/images/logo-fica.png" alt="FICA Logo" class="w-12 h-12 object-contain" />
              <div>
                <h3
                  class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Universidad Central del Ecuador
                </h3>
                <p class="text-sm text-gray-400">Facultad de Ingeniería y Ciencias Aplicadas</p>
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed mb-6">
              Formando profesionales líderes en ingeniería con innovación, excelencia académica
              y compromiso social para el desarrollo sostenible del Ecuador.
            </p>
            <div class="flex gap-4">
              <a href="https://www.facebook.com/FingUce"
                class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <i class="fab fa-facebook-f text-blue-400"></i>
              </a>
              <a href="https://twitter.com/UCentralEcuador"
                class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <i class="fab fa-twitter text-blue-400"></i>
              </a>
              <a href="#"
                class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <i class="fab fa-instagram text-pink-400"></i>
              </a>

            </div>
          </div>

          <!-- Enlaces rápidos -->
          <div class="md:col-span-1">
            <h4 class="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Maestrías
            </h4>
            <ul class="space-y-3">
              <li>
                <router-link to="/maestria-bim"
                  class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i class="fas fa-building text-blue-400"></i>
                  Maestría en BIM
                </router-link>
              </li>
              <li>
                <router-link to="/maestria-geotecnica"
                  class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i class="fas fa-mountain text-green-400"></i>
                  Maestría en Geotecnia
                </router-link>
              </li>
              <li>
                <router-link to="/maestria-hidraulica"
                  class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i class="fas fa-water text-cyan-400"></i>
                  Maestría en Hidráulica
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Información de contacto -->
          <div class="md:col-span-1">
            <h4
              class="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contacto
            </h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <i class="fas fa-user-tie text-purple-400 mt-1"></i>
                <div>
                  <p class="font-semibold text-white">Msc. Luis Wladimir Morales</p>
                  <p class="text-sm text-gray-400">Coordinador-Director Académico</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <i class="fas fa-envelope text-blue-400"></i>
                <a href="mailto:lwmorales@uce.edu.ec" class="text-gray-300 hover:text-white transition-colors">
                  lwmorales@uce.edu.ec
                </a>
              </div>
              <div class="flex items-center gap-3">
                <i class="fas fa-phone text-green-400"></i>
                <a href="tel:+59322551270" class="text-gray-300 hover:text-white transition-colors">
                  (593 2) 2551-270
                </a>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-map-marker-alt text-red-400 mt-1"></i>
                <div>
                  <p class="text-gray-300">Facultad de Ingeniería y Ciencias Aplicadas</p>
                  <p class="text-sm text-gray-400">Universidad Central del Ecuador</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Línea divisoria -->
        <div class="border-t border-gray-700 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-400 text-sm">
              © 2025 Universidad Central del Ecuador. Todos los derechos reservados.
            </p>
            <div class="flex gap-6 text-sm">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Términos de Uso</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Accesibilidad</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No se necesita lógica adicional por ahora
</script>