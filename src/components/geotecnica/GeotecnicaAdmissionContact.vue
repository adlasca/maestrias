<script setup>
// 1. Datos de Requisitos (Checklist)
const requirements = [
  {
    category: 'Documentación Legal',
    icon: 'fa-folder-open',
    color: 'emerald',
    items: [
      'Título de 3er Nivel (Civil/Geología/Minas) registrado en SENESCYT.',
      'Copia de cédula y papeleta de votación.',
      'Hoja de vida actualizada (Formato UCE).'
    ]
  },
  {
    category: 'Perfil Académico',
    icon: 'fa-graduation-cap',
    color: 'teal',
    items: [
      'Certificado de notas de grado.',
      'Suficiencia de idioma extranjero (A2).',
      'Carta de motivación técnica.'
    ]
  },
  {
    category: 'Infraestructura',
    icon: 'fa-laptop',
    color: 'cyan',
    items: [
      'Computador (i5/Ryzen 5 mínimo).',
      'Conexión estable a internet.',
      'Disponibilidad para giras de campo.'
    ]
  }
]

// 2. Pasos del Proceso (Timeline)
const steps = [
  {
    id: '01',
    title: 'Postulación',
    desc: 'Registro en plataforma y carga de documentos PDF habilitantes.',
    icon: 'fa-cloud-upload-alt',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: '02',
    title: 'Validación',
    desc: 'Revisión de perfil por la coordinación académica.',
    icon: 'fa-clipboard-check',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: '03',
    title: 'Entrevista',
    desc: 'Evaluación de competencias con el comité de admisión.',
    icon: 'fa-user-tie',
    gradient: 'from-cyan-500 to-sky-500'
  },
  {
    id: '04',
    title: 'Adjudicación',
    desc: 'Notificación oficial de aceptación al programa.',
    icon: 'fa-envelope-open-text',
    gradient: 'from-sky-500 to-blue-500'
  },
  {
    id: '05',
    title: 'Matrícula',
    desc: 'Pago de aranceles y legalización para inicio de clases.',
    icon: 'fa-file-signature',
    gradient: 'from-blue-500 to-indigo-500'
  }
]
</script>

<template>
  <section id="admision" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          ADMISSION_PROTOCOL_2026
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Proceso de <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Admisión</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Sigue nuestra ruta de ingreso diseñada para seleccionar a los mejores perfiles técnicos del país.
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

      <div class="relative max-w-7xl mx-auto mb-16">
        
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10">
          <div class="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 w-full opacity-30"></div>
        </div>

        <div class="grid md:grid-cols-5 gap-6">
          <div v-for="(step, index) in steps" :key="index" class="group text-center relative">
            
            <div class="w-24 h-24 mx-auto rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-2xl z-10">
              <div class="absolute inset-0 opacity-20 bg-gradient-to-br transition-opacity group-hover:opacity-40" :class="step.gradient"></div>
              <div class="relative z-10 flex flex-col items-center">
                <i :class="['fas text-2xl mb-1 text-white', step.icon]"></i>
                <span class="text-[10px] font-mono font-bold text-slate-400">PASO {{ step.id }}</span>
              </div>
            </div>

            <div class="relative px-2">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {{ step.title }}
              </h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                {{ step.desc }}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>