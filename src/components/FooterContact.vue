<script setup>
const contact = {
  email: 'lwmorales@uce.edu.ec',
  phone: '(593 2) 2551-270',
  address: 'Av. América y Universitaria, Quito - Facultad de Ingeniería',
  hours: 'Lunes a Viernes: 8:00 - 17:00'
}

const quickLinks = [
  { name: 'Descargar Brochure', url: '#', icon: 'fa-download' },
  { name: 'Proceso de Admisión', url: '#', icon: 'fa-clipboard-check' },
  { name: 'Calendario Académico', url: '#', icon: 'fa-calendar-alt' },
  { name: 'Preguntas Frecuentes', url: '#', icon: 'fa-question-circle' }
]

const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'fa-facebook-f', color: 'hover:text-blue-400' },
  { name: 'LinkedIn', url: '#', icon: 'fa-linkedin-in', color: 'hover:text-blue-600' },
  { name: 'Twitter', url: '#', icon: 'fa-twitter', color: 'hover:text-sky-400' },
  { name: 'Instagram', url: '#', icon: 'fa-instagram', color: 'hover:text-pink-400' }
]

const departments = [
  'Facultad de Ingeniería Civil',
  'Consejo de Posgrado',
  'Dirección de Investigación',
  'Centro de Innovación BIM'
]
</script>

<template>
  <footer class="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Main Footer Content -->
      <div class="py-16">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <!-- University Info -->
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold mb-4">Universidad Central del Ecuador</h3>
              <div class="space-y-2">
                <p
                  v-for="dept in departments"
                  :key="dept"
                  class="text-gray-300 text-sm"
                >
                  {{ dept }}
                </p>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold mb-3">Maestría BIM 2026</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Primera cohorte del programa pionero en Building Information Modeling
                en Ecuador y Latinoamérica.
              </p>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <h4 class="text-xl font-bold">Contacto Directo</h4>

            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-envelope text-blue-400" />
                </div>
                <div>
                  <div class="font-medium">Email</div>
                  <a
                    :href="'mailto:' + contact.email"
                    class="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {{ contact.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-phone text-green-400" />
                </div>
                <div>
                  <div class="font-medium">Teléfono</div>
                  <a
                    :href="'tel:' + contact.phone"
                    class="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {{ contact.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-purple-400" />
                </div>
                <div>
                  <div class="font-medium">Dirección</div>
                  <div class="text-gray-300 text-sm">{{ contact.address }}</div>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-clock text-orange-400" />
                </div>
                <div>
                  <div class="font-medium">Horario</div>
                  <div class="text-gray-300 text-sm">{{ contact.hours }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-6">
            <h4 class="text-xl font-bold">Enlaces Rápidos</h4>
            <div class="space-y-3">
              <a
                v-for="link in quickLinks"
                :key="link.name"
                :href="link.url"
                class="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <i :class="`fas ${link.icon} text-sm`" />
                </div>
                <span class="text-sm">{{ link.name }}</span>
              </a>
            </div>
          </div>

          <!-- Social & Newsletter -->
          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-bold mb-4">Síguenos</h4>
              <div class="flex gap-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  :class="`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 ${social.color}`"
                >
                  <i :class="`fab ${social.icon}`" />
                </a>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold mb-3">Newsletter</h4>
              <p class="text-gray-300 text-sm mb-4">
                Recibe actualizaciones sobre el programa y noticias BIM.
              </p>
              <div class="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  class="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400"
                >
                <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors">
                  <i class="fas fa-paper-plane" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-center md:text-left">
            <p class="text-gray-400 text-sm">
              © 2026 Universidad Central del Ecuador - Maestría en Ciencias e Ingeniería de la Construcción
            </p>
            <p class="text-gray-500 text-xs mt-1">
              Programa acreditado por el Consejo de Educación Superior del Ecuador
            </p>
          </div>

          <div class="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" class="hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" class="hover:text-white transition-colors">Accesibilidad</a>
          </div>
        </div>
      </div>

      <!-- Accreditation Badges -->
      <div class="border-t border-white/10 py-6">
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div class="flex items-center gap-2 text-gray-400 text-sm">
            <i class="fas fa-certificate text-yellow-400" />
            <span>Programa Acreditado</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400 text-sm">
            <i class="fas fa-globe text-blue-400" />
            <span>ISO 19650 Compliant</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400 text-sm">
            <i class="fas fa-users text-green-400" />
            <span>Red Internacional BIM</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
h4 {
  color: white;
  margin-bottom: 1rem;
}

a {
  color: #cbd5e0;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
}

a:hover {
  color: var(--uce-accent);
}

.copyright {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #2d3748;
  font-size: 0.8rem;
}
</style>
