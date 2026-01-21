<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background con video/parallax -->
    <div class="absolute inset-0 z-0">
      <video
        autoplay
        muted
        loop
        class="w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
      >
        <source src="https://player.vimeo.com/external/370362851.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6d8c3b8e8b&profile_id=165" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-cyan-900/90" />
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <!-- Elementos decorativos -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />
    <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500" />

    <div class="relative z-10 container mx-auto px-4 text-center">
      <div class="max-w-6xl mx-auto">
        <!-- Badge mejorado -->
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 hover:bg-white/20 transition-all">
          <i class="fas fa-graduation-cap text-yellow-400" />
          <span>Posgrado de Cuarto Nivel</span>
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span class="text-xs opacity-80">Cohorte 2026</span>
        </div>

        <!-- Título principal mejorado -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
          <span class="block text-white mb-2">Maestría en</span>
          <span class="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Ingeniería BIM
          </span>
        </h1>

        <!-- Subtítulo mejorado -->
        <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Transforma la construcción del futuro con tecnología BIM avanzada.
          <span class="text-cyan-300 font-semibold">Domina las 7 dimensiones</span> y lidera proyectos de infraestructura inteligente.
        </p>

        <!-- CTA mejorado -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#contacto"
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            <span class="relative z-10 flex items-center gap-2">
              <i class="fas fa-rocket" />
              Postular Ahora
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <button
            @click="scrollToContent"
            class="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all"
          >
            <i class="fas fa-play mr-2" />
            Ver Programa
          </button>
        </div>

        <!-- Estadísticas mejoradas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
            <div class="text-4xl font-black text-cyan-300 mb-2 group-hover:scale-110 transition-transform">30</div>
            <div class="text-sm font-bold text-gray-200 uppercase tracking-wider">Créditos</div>
            <div class="text-xs text-gray-400 mt-1">Académicos</div>
          </div>

          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
            <div class="text-4xl font-black text-green-300 mb-2 group-hover:scale-110 transition-transform">1</div>
            <div class="text-sm font-bold text-gray-200 uppercase tracking-wider">Año</div>
            <div class="text-xs text-gray-400 mt-1">Duración</div>
          </div>

          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
            <div class="text-4xl font-black text-yellow-300 mb-2 group-hover:scale-110 transition-transform">7D</div>
            <div class="text-sm font-bold text-gray-200 uppercase tracking-wider">BIM</div>
            <div class="text-xs text-gray-400 mt-1">Dimensiones</div>
          </div>

          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
            <div class="text-4xl font-black text-purple-300 mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div class="text-sm font-bold text-gray-200 uppercase tracking-wider">Online</div>
            <div class="text-xs text-gray-400 mt-1">Modalidad</div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick } from 'vue'

const scrollToContent = () => {
  nextTick(() => {
    const nextSection = document.querySelector('section:nth-of-type(2)')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  })
}
</script>

<style>
@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}
</style>

<style>
@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}
</style>
