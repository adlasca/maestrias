<script setup>
const faculty = [
  {
    name: 'Ing. Luis Wladimir Morales',
    role: 'Coordinador Académico',
    specialty: 'Civil Engineering & BIM Management',
    description: 'Magíster en Estructuras. Especialista en gestión de proyectos de alto impacto y coordinación de equipos multidisciplinarios.',
    certifications: ['PMP®', 'Autodesk MCI', 'Lean Construction'],
    avatar: null, // Si es null, usa iniciales
    theme: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    icon: 'fa-user-tie'
  },
  {
    name: 'Dr. María Elena Sánchez',
    role: 'Investigación & Desarrollo',
    specialty: 'Computational Design',
    description: 'PhD en Arquitectura Digital. Experta en algoritmos generativos y optimización topológica para estructuras complejas.',
    certifications: ['PhD', 'Rhino Developer', 'Python for BIM'],
    avatar: null,
    theme: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    icon: 'fa-microchip'
  },
  {
    name: 'Ing. Carlos Rodríguez',
    role: 'Especialista MEP',
    specialty: 'Systems Engineering',
    description: 'Ingeniero Mecánico. Certificado en coordinación de instalaciones complejas (Clash Detection) y eficiencia energética.',
    certifications: ['MEPCP', 'Revit MEP', 'Green Building'],
    avatar: null,
    theme: 'emerald',
    gradient: 'from-emerald-500 to-green-500',
    icon: 'fa-fan'
  },
  {
    name: 'Dra. Ana Gabriela López',
    role: 'Sostenibilidad (6D)',
    specialty: 'Environmental Engineering',
    description: 'Doctora en Ingeniería Ambiental. Auditora líder en certificaciones internacionales de construcción sostenible.',
    certifications: ['LEED AP BD+C', 'BREEAM Assessor', 'EDGE Expert'],
    avatar: null,
    theme: 'teal',
    gradient: 'from-teal-400 to-cyan-500',
    icon: 'fa-leaf'
  },
  {
    name: 'Ing. Roberto Martínez',
    role: 'Planificación & Costos (4D/5D)',
    specialty: 'Construction Management',
    description: 'Experto en simulación constructiva temporal y control financiero de proyectos de gran escala mediante VDC.',
    certifications: ['Synchro PRO', 'Presto Expert', 'Navisworks'],
    avatar: null,
    theme: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    icon: 'fa-chart-line'
  },
  {
    name: 'Dr. Fernando García',
    role: 'Innovación Tecnológica',
    specialty: 'AI & Digital Twins',
    description: 'PhD en Ciencias de la Computación. Investigador en Inteligencia Artificial aplicada a la predicción de riesgos en obra.',
    certifications: ['AI Specialist', 'Data Scientist', 'Unity Dev'],
    avatar: null,
    theme: 'indigo',
    gradient: 'from-indigo-500 to-violet-500',
    icon: 'fa-vr-cardboard'
  }
]

// Utilidad para generar iniciales si no hay foto
const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}
</script>

<template>
  <section id="facultad" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          ACADEMIC SQUAD
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Mentores <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Certificados</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Aprende directamente de profesionales que lideran la transformación digital en la industria AECO.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        <div v-for="(member, index) in faculty" :key="index" 
             class="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/5 p-1 transition-all duration-300 hover:-translate-y-1">
          
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
               :class="member.gradient"></div>

          <div class="h-full bg-slate-950/80 rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden">
            
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity" :class="member.gradient"></div>

            <div class="flex items-start gap-4 mb-6">
              <div class="relative shrink-0">
                <div class="w-16 h-16 rounded-xl overflow-hidden border-2 shadow-lg shadow-black/50 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-slate-800"
                     :class="`border-${member.theme}-500/30 group-hover:border-${member.theme}-400`">
                  
                  <img v-if="member.avatar" :src="member.avatar" :alt="member.name" class="w-full h-full object-cover" />
                  
                  <div v-else class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br" :class="member.gradient">
                    {{ getInitials(member.name) }}
                  </div>
                </div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
                  <div class="w-2.5 h-2.5 rounded-full animate-pulse" :class="`bg-${member.theme}-500`"></div>
                </div>
              </div>

              <div>
                <h3 class="text-white font-bold text-lg leading-tight mb-1 group-hover:text-blue-200 transition-colors">
                  {{ member.name }}
                </h3>
                <p class="text-xs font-mono uppercase tracking-wider" :class="`text-${member.theme}-400`">
                  {{ member.role }}
                </p>
              </div>
            </div>

            <div class="mb-6 flex-grow">
              <div class="flex items-center gap-2 mb-3 opacity-60">
                <i :class="['fas text-xs', member.icon]"></i>
                <span class="text-xs font-semibold text-slate-300">{{ member.specialty }}</span>
              </div>
              <p class="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-3">
                {{ member.description }}
              </p>
            </div>

            <div class="mt-auto">
              <div class="flex flex-wrap gap-2">
                <span v-for="cert in member.certifications" :key="cert" 
                      class="px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 group-hover:border-slate-700 group-hover:text-slate-300 transition-colors">
                  {{ cert }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

     

    </div>
  </section>
</template>