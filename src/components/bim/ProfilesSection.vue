<script setup>
const inputProfile = {
  title: 'Perfil de Ingreso',
  subtitle: 'Requisitos de Base',
  theme: 'cyan', // Tema visual
  gradient: 'from-cyan-500 to-blue-600',
  icon: 'fa-user-graduate',
  items: [
    { title: 'Formación Académica', desc: 'Título de 3er nivel en Ingeniería Civil, Arquitectura o ramas afines.', icon: 'fa-certificate' },
    { title: 'Conocimientos Previos', desc: 'Fundamentos de construcción y manejo básico de software CAD/BIM.', icon: 'fa-layer-group' },
    { title: 'Experiencia (Deseable)', desc: 'Mínimo 1 año de experiencia en proyectos de ingeniería o arquitectura.', icon: 'fa-briefcase' },
    { title: 'Competencia Lingüística', desc: 'Lectura técnica en inglés (Nivel medio/técnico).', icon: 'fa-language' },
  ]
}

const outputProfile = {
  title: 'Perfil de Egreso',
  subtitle: 'Tu Nuevo Nivel Profesional',
  theme: 'purple', // Tema visual
  gradient: 'from-fuchsia-500 to-purple-600',
  icon: 'fa-user-astronaut',
  items: [
    { title: 'BIM Manager / Coordinator', desc: 'Lidera la implementación y gestión de flujos de trabajo BIM.', icon: 'fa-chess-king' },
    { title: 'Gestor de Activos Digitales', desc: 'Domina el ciclo de vida completo (7D) del proyecto constructivo.', icon: 'fa-database' },
    { title: 'Analista de Datos', desc: 'Toma decisiones basadas en Business Intelligence y Big Data.', icon: 'fa-chart-network' },
    { title: 'Innovador Tecnológico', desc: 'Implementa automatización, realidad virtual e IoT en obra.', icon: 'fa-microchip' },
  ]
}
</script>

<template>
  <section id="perfil-aspirante" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          EVOLUCIÓN PROFESIONAL
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          De Profesional a <br class="hidden md:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Experto BIM Global</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Un programa diseñado para cerrar la brecha entre la ingeniería tradicional y la construcción 4.0.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-start">
        
        <div class="group relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          
          <div class="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 h-full">
            <div class="flex items-center gap-5 mb-8 border-b border-white/5 pb-8">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-800 border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-900/20">
                <i :class="['fas text-3xl', inputProfile.icon]"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">{{ inputProfile.title }}</h3>
                <p class="text-cyan-400 font-mono text-sm uppercase tracking-wide">{{ inputProfile.subtitle }}</p>
              </div>
            </div>

            <ul class="space-y-4">
              <li v-for="(item, idx) in inputProfile.items" :key="idx" 
                  class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-transparent hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all duration-300 group/item">
                <div class="mt-1 w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 group-hover/item:scale-110 transition-transform">
                  <i :class="['fas text-sm', item.icon]"></i>
                </div>
                <div>
                  <h4 class="text-white font-semibold text-sm mb-1">{{ item.title }}</h4>
                  <p class="text-slate-400 text-sm leading-relaxed">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="hidden lg:flex flex-col items-center justify-center h-full pt-32 opacity-50">
           <i class="fas fa-chevron-right text-4xl text-slate-700 animate-pulse"></i>
        </div>

        <div class="group relative">
           <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div class="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 h-full">
            <div class="flex items-center gap-5 mb-8 border-b border-white/5 pb-8">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-800 border border-purple-500/30 text-purple-400 shadow-lg shadow-purple-900/20">
                <i :class="['fas text-3xl', outputProfile.icon]"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">{{ outputProfile.title }}</h3>
                <p class="text-purple-400 font-mono text-sm uppercase tracking-wide">{{ outputProfile.subtitle }}</p>
              </div>
            </div>

            <ul class="space-y-4">
              <li v-for="(item, idx) in outputProfile.items" :key="idx" 
                  class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-transparent hover:border-purple-500/30 hover:bg-slate-800/60 transition-all duration-300 group/item">
                <div class="mt-1 w-8 h-8 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 group-hover/item:scale-110 transition-transform">
                  <i :class="['fas text-sm', item.icon]"></i>
                </div>
                <div>
                  <h4 class="text-white font-semibold text-sm mb-1">{{ item.title }}</h4>
                  <p class="text-slate-400 text-sm leading-relaxed">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>


    </div>
  </section>
</template>

<style scoped>
/* Asegura que la rejilla del medio no rompa el layout */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr auto 1fr;
  }
}
</style>