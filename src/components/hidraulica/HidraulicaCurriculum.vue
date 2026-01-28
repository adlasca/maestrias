<script setup>
const semesters = [
  {
    id: 1,
    label: '01',
    title: 'Fundamentos Hidráulicos',
    subtitle: 'Primer Periodo Académico',
    theme: 'blue',
    // Gradiente "Agua Profunda": Azules y Cian
    gradient: 'from-blue-600 via-cyan-600 to-sky-500',
    shadow: 'shadow-blue-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-cyan-400',
    courses: [
      { name: 'Metodología de la Investigación Aplicada', code: 'RES-HYD', icon: 'fa-search', credits: 2.5 },
      { name: 'Hidráulica Avanzada', code: 'HYD-ADV', icon: 'fa-water', credits: 2.5 },
      { name: 'Hidrología y Modelación Hidrológica', code: 'HDL-MOD', icon: 'fa-chart-area', credits: 2.5 },
      { name: 'Gestión Sostenible del Agua', code: 'WTR-SUS', icon: 'fa-leaf', credits: 2.5 },
      { name: 'Ingeniería Sanitaria y Ambiental', code: 'SAN-ENG', icon: 'fa-faucet', credits: 2.5 },
      { name: 'Diseño de Proyectos de Investigación', code: 'PRJ-DEV', icon: 'fa-flask', credits: 2.5 },
    ]
  },
  {
    id: 2,
    label: '02',
    title: 'Especialización y Gestión',
    subtitle: 'Segundo Periodo Académico',
    theme: 'teal',
    // Gradiente "Agua Limpia/Gestión": Cian, Turquesa y Esmeralda
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    shadow: 'shadow-teal-500/20',
    border: 'border-teal-500/30',
    iconColor: 'text-teal-400',
    courses: [
      { name: 'Diseño de Sistemas Hidrosanitarios', code: 'SYS-DSN', icon: 'fa-tools', credits: 2.5 },
      { name: 'Modelación de Sistemas Hidráulicos', code: 'CFD-SIM', icon: 'fa-laptop-code', credits: 2.5 },
      { name: 'Economía y Legislación Hídrica', code: 'ECO-LAW', icon: 'fa-gavel', credits: 1.25 },
      { name: 'Proyectos de Agua y Saneamiento', code: 'PRJ-EXE', icon: 'fa-tasks', credits: 2.5 },
      { name: 'Análisis y Gestión de Riesgos', code: 'RSK-HYD', icon: 'fa-exclamation-triangle', credits: 1.25 },
      { name: 'Trabajo de Titulación', code: 'THS-FNL', icon: 'fa-graduation-cap', credits: 5.0, isHighlight: true },
    ]
  }
]

// Utilidad para sumar créditos
const getTotalCredits = (courses) => courses.reduce((acc, curr) => acc + curr.credits, 0)
const totalProgramCredits = semesters.reduce((acc, sem) => acc + getTotalCredits(sem.courses), 0)
</script>

<template>
  <section id="plan-estudios" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03]" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 40px 40px;">
    </div>
    
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6">
          ACADEMIC ROADMAP 2026
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Malla <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Curricular</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Formación integral experta en el ciclo del agua, desde la mecánica de fluidos hasta la gestión de recursos hídricos.
        </p>
      </div>

      <div class="flex flex-col gap-12 max-w-7xl mx-auto">
        
        <div v-for="semester in semesters" :key="semester.id" 
             class="relative group rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500">
          
          <div class="h-1 w-full bg-gradient-to-r" :class="semester.gradient"></div>

          <div class="p-8 md:p-10">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/5 pb-8">
              <div class="flex items-center gap-6">
                <div class="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-white/5 shadow-inner">
                  <span class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br" :class="semester.gradient">
                    {{ semester.label }}
                  </span>
                </div>
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-white mb-1">{{ semester.title }}</h3>
                  <p class="text-slate-400 font-medium">{{ semester.subtitle }}</p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/5 text-right">
                  <div class="text-xs text-slate-500 uppercase font-bold tracking-wider">Materias</div>
                  <div class="text-xl font-bold text-white">{{ semester.courses.length }}</div>
                </div>
                <div class="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/5 text-right">
                  <div class="text-xs text-slate-500 uppercase font-bold tracking-wider">Créditos</div>
                  <div class="text-xl font-bold" :class="semester.iconColor">{{ getTotalCredits(semester.courses) }}</div>
                </div>
              </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="(course, idx) in semester.courses" :key="idx" 
                   class="group/card relative p-5 rounded-xl bg-slate-800/20 border border-white/5 hover:bg-slate-800/40 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                   :class="course.isHighlight ? `ring-1 ring-inset ${semester.border} bg-slate-800/60` : ''">
                
                <div class="flex items-start justify-between mb-3">
                  <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                    <i :class="['fas text-lg', course.icon, semester.iconColor]"></i>
                  </div>
                  <span class="text-[10px] font-mono text-slate-500 bg-slate-900/80 px-2 py-1 rounded border border-white/5">
                    {{ course.code }}
                  </span>
                </div>
                
                <h4 class="text-white font-semibold leading-tight mb-3 min-h-[48px] flex items-center">
                  {{ course.name }}
                </h4>
                
                <div class="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                  <span class="text-xs text-slate-500">Valor Curricular</span>
                  <div class="flex items-center gap-1.5">
                    <i class="fas fa-star text-[10px]" :class="semester.iconColor"></i>
                    <span class="text-sm font-bold text-slate-300">{{ course.credits }} <span class="text-[10px] text-slate-500">CR</span></span>
                  </div>
                </div>

                <div class="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover/card:opacity-5 transition-opacity duration-300 pointer-events-none" :class="semester.gradient"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <div class="mt-16 text-center">
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 shadow-xl">
          <i class="fas fa-info-circle text-slate-500"></i>
          <span class="text-slate-400 text-sm">Total del programa: <span class="text-white font-bold">{{ totalProgramCredits }} Créditos Académicos</span> · Modalidad Híbrida</span>
        </div>
      </div>

    </div>
  </section>
</template>