<script setup>
// 1. Datos de Requisitos (Checklist)
const requirements = [
  {
    category: 'Documentación Legal',
    icon: 'fa-folder-open',
    color: 'blue',
    items: [
      'Título de Tercer Nivel registrado en SENESCYT.',
      'Copia de cédula de identidad y papeleta de votación.',
      'Hoja de vida actualizada (Formato UCE).',
      'Certificado de suficiencia de idioma extranjero (A2 o superior).'
    ]
  },
  {
    category: 'Requisitos Académicos',
    icon: 'fa-graduation-cap',
    color: 'purple',
    items: [
      'Récord académico de grado (promedio mínimo sugerido).',
      'Carta de motivación dirigida al Coordinador del programa.',
      'Dos cartas de recomendación académica o profesional.',
      'Aprobación de la entrevista de admisión.'
    ]
  },
  {
    category: 'Requisitos Técnicos',
    icon: 'fa-laptop-code',
    color: 'emerald',
    items: [
      'Computador personal con procesador i5/Ryzen 5 o superior.',
      'Memoria RAM mínima de 16GB (32GB recomendado para BIM).',
      'Tarjeta gráfica dedicada (NVIDIA GTX 1660 o superior).',
      'Conexión a internet estable para sesiones síncronas.'
    ]
  }
]

// 2. Datos del Timeline (Proceso)
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
    gradient: 'from-teal-500 to-purple-500'
  },
  {
    id: '04',
    title: 'Matriculación',
    desc: 'Pago de aranceles y legalización de matrícula para iniciar tu formación de cuarto nivel.',
    icon: 'fa-file-signature',
    gradient: 'from-purple-500 to-emerald-500'
  }
]
</script>

<template>
  <section id="admision" class="py-24 bg-slate-900 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.02]" 
         style="background-image: linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px); background-size: 32px 32px;">
    </div>

    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-16">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono tracking-widest mb-6">
          ADMISSION_PROTOCOL_2026
        </span>
        <h2 class="text-3xl md:text-5xl font-black text-white mb-6">
          Requisitos y <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Proceso</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Asegúrate de contar con toda la documentación y sigue el algoritmo de ingreso paso a paso.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        <div v-for="(req, index) in requirements" :key="index" 
             class="group relative bg-slate-950/50 backdrop-blur-sm rounded-2xl border border-white/5 p-1 hover:-translate-y-1 transition-all duration-300">
          
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"
               :class="`from-${req.color}-500/50 to-slate-900`"></div>

          <div class="h-full bg-slate-950 rounded-xl p-8 overflow-hidden relative">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-lg border border-white/5"
                   :class="`bg-${req.color}-500/10 text-${req.color}-400`">
                <i :class="['fas', req.icon]"></i>
              </div>
              <h3 class="text-xl font-bold text-white">{{ req.category }}</h3>
            </div>

            <ul class="space-y-4">
              <li v-for="(item, i) in req.items" :key="i" class="flex items-start gap-3">
                <i class="fas fa-check-circle mt-1 text-sm" :class="`text-${req.color}-500`"></i>
                <span class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{{ item }}</span>
              </li>
            </ul>

            <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity blur-xl"
                 :class="`from-${req.color}-500 to-transparent`"></div>
          </div>
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto mb-16">
        
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10">
          <div class="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 w-full opacity-30"></div>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="group relative">
            
            <div class="w-24 h-24 mx-auto md:mx-0 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-2xl z-10">
              <div class="absolute inset-0 opacity-20 bg-gradient-to-br transition-opacity group-hover:opacity-40" :class="step.gradient"></div>
              <div class="relative z-10 flex flex-col items-center">
                <i :class="['fas text-2xl mb-1 text-white', step.icon]"></i>
                <span class="text-[10px] font-mono font-bold text-slate-400">PASO {{ step.id }}</span>
              </div>
            </div>

            <div class="text-center md:text-left md:pl-2 md:border-l-2 md:border-transparent md:group-hover:border-slate-700 transition-colors pl-4">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
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