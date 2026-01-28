<script setup>
// Año dinámico para el copyright
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;">
    </div>

    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 pt-16 pb-8 relative z-10">
      <div class="grid md:grid-cols-12 gap-12 mb-16">
        
        <div class="md:col-span-5 space-y-6">
          <div class="flex items-center gap-4">
            <img src="/logo-uce.png" alt="Logo UCE" class="h-16 w-auto object-contain " />
            <div class="h-10 w-px bg-slate-800"></div>
            <img src="/images/logo-fica.png" alt="Logo FICA" class="h-14 w-auto object-contain " />
          </div>
          
          <div>
            <h3 class="text-xl font-bold text-white mb-2">Universidad Central del Ecuador</h3>
            <p class="text-sm text-slate-400 font-medium uppercase tracking-wide">Facultad de Ingeniería y Ciencias Aplicadas</p>
          </div>

          <p class="text-slate-400 leading-relaxed max-w-md">
            Liderando la formación de posgrado con excelencia académica, innovación tecnológica y compromiso con el desarrollo sostenible del país.
          </p>

          <div class="flex gap-4 pt-2">
            <a href="https://www.facebook.com/FingUce" target="_blank" rel="noopener" aria-label="Facebook"
               class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group">
              <i class="fab fa-facebook-f text-lg group-hover:scale-110 transition-transform"></i>
            </a>
            <a href="https://twitter.com/UCentralEcuador" target="_blank" rel="noopener" aria-label="Twitter"
               class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-400 transition-all duration-300 group">
              <i class="fab fa-twitter text-lg group-hover:scale-110 transition-transform"></i>
            </a>
            <a href="#" aria-label="Instagram"
               class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all duration-300 group">
              <i class="fab fa-instagram text-lg group-hover:scale-110 transition-transform"></i>
            </a>
            <a href="#" aria-label="LinkedIn"
               class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 group">
              <i class="fab fa-linkedin-in text-lg group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>

        <div class="md:col-span-3">
          <h4 class="text-white font-bold mb-6 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-500"></span> Oferta Académica
          </h4>
          <ul class="space-y-4">
            <li>
              <router-link to="/maestria/bim" class="group flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <i class="fas fa-chevron-right text-xs text-slate-600 group-hover:text-cyan-500 transition-colors"></i>
                Maestría en BIM
              </router-link>
            </li>
            <li>
              <router-link to="/maestria/hidraulica" class="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                <i class="fas fa-chevron-right text-xs text-slate-600 group-hover:text-blue-500 transition-colors"></i>
                Maestría en Hidráulica
              </router-link>
            </li>
            <li>
              <router-link to="/maestria/geotecnica" class="group flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors">
                <i class="fas fa-chevron-right text-xs text-slate-600 group-hover:text-emerald-500 transition-colors"></i>
                Maestría en Geotecnia
              </router-link>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <h4 class="text-white font-bold mb-6 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span> Información de Contacto
          </h4>
          
          <div class="space-y-5">
            <div class="flex gap-4">
              <div class="mt-1 w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-purple-400 shrink-0 border border-slate-800">
                <i class="fas fa-user-tie"></i>
              </div>
              <div>
                <p class="text-white font-semibold">Msc. Luis Wladimir Morales</p>
                <p class="text-sm text-slate-500">Coordinador - Director Académico</p>
              </div>
            </div>

            <a href="mailto:lwmorales@uce.edu.ec" class="flex gap-4 group">
              <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-400 shrink-0 border border-slate-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="flex flex-col justify-center">
                <span class="text-slate-400 group-hover:text-white transition-colors">lwmorales@uce.edu.ec</span>
              </div>
            </a>

            <a href="tel:+59322551270" class="flex gap-4 group">
              <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-green-400 shrink-0 border border-slate-800 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="flex flex-col justify-center">
                <span class="text-slate-400 group-hover:text-white transition-colors">(593 2) 2551-270</span>
              </div>
            </a>

            <div class="flex gap-4">
              <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-red-400 shrink-0 border border-slate-800">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p class="text-slate-400 text-sm">Ciudadela Universitaria. Av. América</p>
                <p class="text-slate-500 text-xs">Quito, Ecuador</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {{ currentYear }} Universidad Central del Ecuador.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Privacidad</a>
          <a href="#" class="hover:text-white transition-colors">Términos</a>
          <a href="#" class="hover:text-white transition-colors">Soporte</a>
        </div>
      </div>
    </div>
  </footer>
</template>