<script setup>
const faculty = [
  {
    name: 'Ing. Edwin Tipán',
    role: 'Coordinador Académico',
    specialty: 'Hydraulic Engineering',
    description: 'Magíster en Recursos Hídricos. Especialista en gestión integrada de cuencas y optimización de sistemas de riego.',
    certifications: ['M.Sc.', 'SIG Expert', 'Water Management'],
    avatar: null, // Usa iniciales
    theme: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    icon: 'fa-user-tie'
  },
  {
    name: 'Dra. Patricia Sánchez',
    role: 'Modelación & Cambio Climático',
    specialty: 'Hydrological Modeling',
    description: 'PhD en Hidrología. Investigadora en los efectos del cambio climático sobre la disponibilidad hídrica en los Andes.',
    certifications: ['PhD', 'HEC-RAS Pro', 'Climate Analyst'],
    avatar: null,
    theme: 'cyan',
    gradient: 'from-cyan-500 to-teal-400',
    icon: 'fa-cloud-sun-rain'
  },
  {
    name: 'Ing. Carlos Vásquez',
    role: 'Diseño Hidrosanitario',
    specialty: 'Sanitary Systems',
    description: 'Experto en diseño de redes de agua potable y alcantarillado para grandes urbes. Certificado en software de modelación.',
    certifications: ['WaterCAD', 'SWMM Certified', 'EPANET'],
    avatar: null,
    theme: 'sky',
    gradient: 'from-sky-500 to-blue-600',
    icon: 'fa-faucet'
  },
  {
    name: 'Dra. María Rodríguez',
    role: 'Calidad del Agua',
    specialty: 'Water Treatment',
    description: 'Doctora en Ingeniería Ambiental. Especialista en procesos físico-químicos para potabilización y depuración de aguas.',
    certifications: ['PhD Env. Eng', 'Water Quality', 'Lab Lead'],
    avatar: null,
    theme: 'teal',
    gradient: 'from-teal-500 to-emerald-500',
    icon: 'fa-flask'
  },
  {
    name: 'Ing. Roberto Luna',
    role: 'Gestión de Riesgos',
    specialty: 'Flood Risk Analysis',
    description: 'Ingeniero Civil especialista en hidráulica fluvial y control de inundaciones. Experto en mapas de amenaza.',
    certifications: ['Flood Modeler', 'River Analysis', 'QGIS Pro'],
    avatar: null,
    theme: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    icon: 'fa-house-flood-water'
  },
  {
    name: 'Dr. Francisco Díaz',
    role: 'Innovación Hídrica',
    specialty: 'Smart Water & IoT',
    description: 'PhD en Ingeniería Civil. Pionero en la implementación de sensores IoT para el monitoreo telemétrico de caudales.',
    certifications: ['IoT Specialist', 'Big Data', 'Smart Grid'],
    avatar: null,
    theme: 'indigo',
    gradient: 'from-indigo-500 to-violet-500',
    icon: 'fa-wifi'
  }
]

// Utilidad para generar iniciales
const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}
</script>

<template>
  <section id="facultad" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          ACADEMIC SQUAD
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Mentores <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertos</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Aprende de investigadores y profesionales que lideran la gestión de recursos hídricos en el país.
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