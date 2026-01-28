<script setup>
import { computed } from 'vue'

const semesters = [
  {
    id: 1,
    label: '01',
    title: 'Fundamentos Avanzados',
    subtitle: 'Primer Periodo Académico',
    theme: 'blue', // Para uso dinámico de clases
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    shadow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
    courses: [
      { name: 'Metodología de la Investigación', code: 'MIA-101', icon: 'fa-microscope', credits: 2.5 },
      { name: 'Modelación Arquitectónica 3D', code: 'ARC-3D', icon: 'fa-cubes', credits: 2.5 },
      { name: 'Modelación Estructural 3D', code: 'STR-3D', icon: 'fa-gopuram', credits: 2.5 },
      { name: 'Instalaciones MEP 3D', code: 'MEP-3D', icon: 'fa-bolt', credits: 2.5 },
      { name: 'Gestión Estratégica de Proyectos', code: 'MNG-101', icon: 'fa-chess-knight', credits: 2.5 },
      { name: 'Innovación Tecnológica', code: 'INN-TEC', icon: 'fa-robot', credits: 2.5 },
    ]
  },
  {
    id: 2,
    label: '02',
    title: 'Especialización & Titulación',
    subtitle: 'Segundo Periodo Académico',
    theme: 'purple',
    gradient: 'from-violet-600 via-fuchsia-500 to-pink-500',
    shadow: 'shadow-fuchsia-500/20',
    border: 'border-fuchsia-500/30',
    iconColor: 'text-fuchsia-400',
    courses: [
      { name: 'Planificación y Control (4D)', code: 'BIM-4D', icon: 'fa-clock', credits: 2.5 },
      { name: 'Gestión de Costos (5D)', code: 'BIM-5D', icon: 'fa-chart-pie', credits: 2.5 },
      { name: 'Análisis Financiero y Riesgos', code: 'FIN-RSK', icon: 'fa-shield-alt', credits: 1.25 },
      { name: 'Sostenibilidad y LEED (6D)', code: 'BIM-6D', icon: 'fa-leaf', credits: 1.25 },
      { name: 'Coordinación Colaborativa', code: 'COL-LAB', icon: 'fa-users-cog', credits: 2.5 },
      { name: 'Trabajo de Titulación', code: 'TES-PRO', icon: 'fa-graduation-cap', credits: 5.0, isHighlight: true },
    ]
  }
]

// Utilidad para sumar créditos
const getTotalCredits = (courses) => courses.reduce((acc, curr) => acc + curr.credits, 0)
</script>

<template>
  <section id="plan-estudios" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03]" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 40px 40px;">
    </div>
    
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6">
          ACADEMIC ROADMAP 2026
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Malla <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Curricular</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Un programa intensivo diseñado para dominar el ciclo de vida completo de la edificación digital.
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
                  <span class="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
                    {{ course.code }}
                  </span>
                </div>
                
                <h4 class="text-white font-semibold leading-tight mb-3 min-h-[40px] flex items-center">
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
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800">
          <i class="fas fa-info-circle text-slate-500"></i>
          <span class="text-slate-400 text-sm">Total del programa: <span class="text-white font-bold">{{ getTotalCredits(semesters[0].courses) + getTotalCredits(semesters[1].courses) }} Créditos Académicos</span></span>
        </div>
      </div>

    </div>
  </section>
</template>