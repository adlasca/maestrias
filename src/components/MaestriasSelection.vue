<script setup>
const programs = [
  {
    title: 'Ingeniería BIM',
    subtitle: 'Gestión Estratégica de Proyectos',
    desc: 'Domina las 7 dimensiones del Building Information Modeling y lidera la transformación digital de la construcción.',
    path: '/maestria/bim',
    icon: 'fa-cubes',
    color: 'blue',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Ingeniería Hidráulica',
    subtitle: 'Sistemas y Gestión Sostenible',
    desc: 'Especialízate en la modelación avanzada, diseño de obras hidráulicas y la gestión integral del ciclo del agua.',
    path: '/maestria/hidraulica',
    icon: 'fa-water',
    color: 'cyan',
    gradient: 'from-cyan-600 to-blue-500'
  },
  {
    title: 'Ingeniería Geotécnica',
    subtitle: 'Mecánica de Suelos y Riesgos',
    desc: 'Experto en cimentaciones complejas, estabilidad de taludes y mitigación de amenazas naturales.',
    path: '/maestria/geotecnica',
    icon: 'fa-mountain',
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-500'
  }
]

const features = [
  { title: 'Docencia de Élite', desc: 'Profesores con amplia trayectoria académica y profesional.', icon: 'fa-chalkboard-teacher', color: 'text-yellow-400' },
  { title: 'Tecnología Avanzada', desc: 'Acceso a software especializado y laboratorios modernos.', icon: 'fa-microchip', color: 'text-cyan-400' },
  { title: 'Networking', desc: 'Conecta con líderes del sector y amplía tu red profesional.', icon: 'fa-network-wired', color: 'text-purple-400' }
]
</script>

<template>
  <section class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          POSTGRADUATE PROGRAMS
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Nuestra Oferta <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Académica</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Programas de cuarto nivel diseñados para responder a los desafíos técnicos y tecnológicos de la ingeniería moderna.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        <div v-for="(program, index) in programs" :key="index" 
             class="group relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20">
          
          <div class="h-48 p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity group-hover:opacity-100" :class="program.gradient"></div>
            <i :class="['fas absolute -bottom-4 -right-4 text-9xl text-white/10 transform rotate-12 group-hover:scale-110 transition-transform duration-500', program.icon]"></i>
            
            <div class="relative z-10">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-white text-xl shadow-lg">
                <i :class="['fas', program.icon]"></i>
              </div>
              <h3 class="text-2xl font-black text-white leading-tight mb-1">{{ program.title }}</h3>
              <p class="text-white/80 text-sm font-medium">{{ program.subtitle }}</p>
            </div>
          </div>

          <div class="p-8">
            <p class="text-slate-400 text-sm leading-relaxed mb-6 h-20">
              {{ program.desc }}
            </p>
            
            <div class="flex items-center justify-between pt-6 border-t border-slate-800">
              <span class="text-xs font-mono text-slate-500 uppercase tracking-wider">2 PERÍODOS</span>
              
              <router-link :to="program.path" 
                 class="group/btn flex items-center gap-2 text-sm font-bold transition-colors"
                 :class="`text-${program.color}-400 hover:text-${program.color}-300`">
                Ver Programa
                <i class="fas fa-arrow-right transform group-hover/btn:translate-x-1 transition-transform"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-slate-900/80 border border-white/5 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto backdrop-blur-sm">
        <div class="text-center mb-10">
          <h3 class="text-2xl font-bold text-white">¿Por qué elegir la UCE?</h3>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(feat, i) in features" :key="i" class="text-center group">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-slate-700 transition-colors shadow-lg">
              <i :class="['fas text-2xl', feat.icon, feat.color]"></i>
            </div>
            <h4 class="text-white font-bold mb-2">{{ feat.title }}</h4>
            <p class="text-slate-400 text-sm">{{ feat.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>