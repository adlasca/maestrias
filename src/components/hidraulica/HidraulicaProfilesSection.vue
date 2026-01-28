<script setup>
const inputProfile = {
  title: 'Perfil de Ingreso',
  subtitle: 'Fundamentos Hídricos',
  theme: 'blue', 
  gradient: 'from-blue-600 to-cyan-500',
  icon: 'fa-water', // Representa el recurso base
  items: [
    { title: 'Formación de Base', desc: 'Título de 3er nivel en Ingeniería Civil, Ambiental o Recursos Hídricos.', icon: 'fa-graduation-cap' },
    { title: 'Conocimientos Previos', desc: 'Bases sólidas en mecánica de fluidos, hidrología y saneamiento.', icon: 'fa-brain' },
    { title: 'Experiencia (Deseable)', desc: 'Mínimo 1 año en proyectos sanitarios o gestión de cuencas.', icon: 'fa-briefcase' },
    { title: 'Competencia Técnica', desc: 'Lectura y comprensión de manuales técnicos en inglés.', icon: 'fa-language' },
  ]
}

const outputProfile = {
  title: 'Perfil de Egreso',
  subtitle: 'Liderazgo Hidráulico',
  theme: 'cyan', 
  gradient: 'from-cyan-500 to-teal-400',
  icon: 'fa-hand-holding-water', // Representa gestión y cuidado
  items: [
    { title: 'Especialista en Modelación', desc: 'Diseña y simula sistemas complejos usando software CFD y SIG.', icon: 'fa-laptop-code' },
    { title: 'Gerente de Proyectos', desc: 'Lidera la ejecución de infraestructura sanitaria y obras hidráulicas.', icon: 'fa-users-cog' },
    { title: 'Gestor de Recursos', desc: 'Planifica el uso sostenible del agua frente al cambio climático.', icon: 'fa-leaf' },
    { title: 'Investigador Aplicado', desc: 'Desarrolla soluciones innovadoras para problemas de abastecimiento.', icon: 'fa-flask' },
  ]
}
</script>

<template>
  <section id="perfil-aspirante" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          EVOLUCIÓN PROFESIONAL
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          De Profesional a <br class="hidden md:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">Especialista Hidráulico</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Eleva tu carrera dominando la gestión integral del agua, desde la captación hasta el tratamiento avanzado.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-start">
        
        <div class="group relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          
          <div class="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 h-full">
            <div class="flex items-center gap-5 mb-8 border-b border-white/5 pb-8">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-800 border border-blue-500/30 text-blue-400 shadow-lg shadow-blue-900/20">
                <i :class="['fas text-3xl', inputProfile.icon]"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">{{ inputProfile.title }}</h3>
                <p class="text-blue-500 font-mono text-sm uppercase tracking-wide">{{ inputProfile.subtitle }}</p>
              </div>
            </div>

            <ul class="space-y-4">
              <li v-for="(item, idx) in inputProfile.items" :key="idx" 
                  class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-transparent hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 group/item">
                <div class="mt-1 w-8 h-8 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 group-hover/item:scale-110 transition-transform">
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
           <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div class="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 h-full">
            <div class="flex items-center gap-5 mb-8 border-b border-white/5 pb-8">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-800 border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-900/20">
                <i :class="['fas text-3xl', outputProfile.icon]"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">{{ outputProfile.title }}</h3>
                <p class="text-cyan-400 font-mono text-sm uppercase tracking-wide">{{ outputProfile.subtitle }}</p>
              </div>
            </div>

            <ul class="space-y-4">
              <li v-for="(item, idx) in outputProfile.items" :key="idx" 
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