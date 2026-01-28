<script setup>
// 1. Datos de Requisitos (Checklist)
const requirements = [
  {
    category: 'Documentación Legal',
    icon: 'fa-folder-open',
    color: 'blue',
    items: [
      'Título de 3er Nivel (Ing. Civil/Ambiental/Afines) registrado en SENESCYT.',
      'Copia de cédula y papeleta de votación vigentes.',
      'Hoja de vida formato UCE actualizada.'
    ]
  },
  {
    category: 'Perfil Académico',
    icon: 'fa-graduation-cap',
    color: 'cyan',
    items: [
      'Certificado de notas de grado (Promedio ponderado).',
      'Suficiencia de idioma extranjero (Nivel A2 o superior).',
      'Carta de motivación técnica.'
    ]
  },
  {
    category: 'Requisitos Técnicos',
    icon: 'fa-laptop-code',
    color: 'teal',
    items: [
      'Computador apto para modelación (i7/Ryzen 7 recomendado).',
      'Conexión estable para clases híbridas.',
      'Disponibilidad para giras técnicas de campo.'
    ]
  }
]

// 2. Pasos del Proceso (Timeline)
const steps = [
  {
    id: '01',
    title: 'Postulación Digital',
    desc: 'Regístrate en la plataforma universitaria y carga tu documentación habilitante en formato PDF.',
    icon: 'fa-cloud-upload-alt',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: '02',
    title: 'Validación Técnica',
    desc: 'La coordinación revisa tu perfil para asegurar la compatibilidad con las líneas de investigación.',
    icon: 'fa-clipboard-check',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    id: '03',
    title: 'Entrevista',
    desc: 'Reunión con el comité académico para evaluar tus competencias y proyecto de titulación tentativo.',
    icon: 'fa-user-tie',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    id: '04',
    title: 'Matriculación',
    desc: 'Pago de aranceles y legalización de matrícula para iniciar tu formación de cuarto nivel.',
    icon: 'fa-file-signature',
    gradient: 'from-emerald-500 to-green-500'
  }
]
</script>

<template>
  <section id="admision" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          ADMISSION_PROTOCOL_2026
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Ruta de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Admisión</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Un proceso transparente diseñado para seleccionar a los mejores perfiles técnicos para la gestión del agua.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-24">
        <div v-for="(req, index) in requirements" :key="index" 
             class="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/5 p-1 hover:-translate-y-1 transition-all duration-300">
          
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
               :class="`from-${req.color}-500/50 to-slate-900`"></div>

          <div class="h-full bg-slate-950/80 rounded-xl p-8 relative overflow-hidden">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-lg border border-white/5 bg-slate-900"
                   :class="`text-${req.color}-400 group-hover:bg-${req.color}-500/10 transition-colors`">
                <i :class="['fas', req.icon]"></i>
              </div>
              <h3 class="text-lg font-bold text-white">{{ req.category }}</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="(item, i) in req.items" :key="i" class="flex items-start gap-3">
                <i class="fas fa-check-circle mt-1 text-xs" :class="`text-${req.color}-500`"></i>
                <span class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10">
          <div class="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 w-3/4"></div> </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="group text-center md:text-left relative">
            
            <div class="w-24 h-24 mx-auto md:mx-0 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <div class="absolute inset-0 opacity-20 bg-gradient-to-br transition-opacity group-hover:opacity-30" :class="step.gradient"></div>
              <div class="relative z-10 flex flex-col items-center">
                <span class="text-xs font-mono text-slate-500 font-bold mb-1">PASO</span>
                <span class="text-3xl font-black text-white">{{ step.id }}</span>
              </div>
            </div>

            <div class="relative pl-4 border-l-2 border-slate-800 md:border-l-0 md:pl-0">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {{ step.title }}
              </h3>
              <p class="text-sm text-slate-400 leading-relaxed">
                {{ step.desc }}
              </p>
            </div>

          </div>
        </div>
      </div>

      

    </div>
  </section>
</template>