<script setup>
// Datos de Inversión
const investmentDetails = {
  registration: 80,
  tuition: 400,
  program: 4000,
  total: 4000
}

// Opciones de Financiamiento
const financingOptions = [
  {
    title: 'Pago de Contado',
    subtitle: 'Transferencia / Efectivo',
    desc: 'La opción más ágil. Realiza un único pago al inicio y asegura tu cupo inmediatamente.',
    icon: 'fa-money-bill-wave',
    theme: 'emerald',
    gradient: 'from-emerald-500 to-green-400',
    features: ['Proceso simplificado', 'Sin trámites adicionales', 'Validación inmediata']
  },
  {
    title: 'Plan UCE',
    subtitle: 'Financiamiento Directo',
    desc: 'Facilidad institucional. Paga el 50% al inicio y el 50% restante a mitad del periodo académico.',
    icon: 'fa-university',
    theme: 'blue',
    gradient: 'from-blue-500 to-cyan-400',
    features: ['Sin intereses', '2 Cuotas por periodo', 'Gestión interna']
  },
  {
    title: 'Tarjeta de Crédito',
    subtitle: 'Diferido Bancario',
    desc: 'Difiere tu inversión a 3, 6, 9 o 12 meses según las condiciones de tu banco emisor.',
    icon: 'fa-credit-card',
    theme: 'purple',
    gradient: 'from-purple-500 to-fuchsia-400',
    features: ['Aceptamos todas las tarjetas', 'Pago online seguro', 'Aprobación inmediata']
  },
  {
    title: 'Crédito Educativo',
    subtitle: 'Instituciones Financieras',
    desc: 'Convenios con bancos locales para préstamos estudiantiles con tasas de interés preferenciales.',
    icon: 'fa-hand-holding-usd',
    theme: 'amber',
    gradient: 'from-amber-500 to-orange-400',
    features: ['Plazos extendidos', 'Periodos de gracia', 'Tasas especiales']
  },
  {
    title: 'Convenio Corporativo',
    subtitle: 'Empresas Aliadas',
    desc: 'Si tu empresa financia tu maestría, gestionamos la facturación directa corporativa.',
    icon: 'fa-building',
    theme: 'indigo',
    gradient: 'from-indigo-500 to-blue-500',
    features: ['Facturación a empresa', 'Descuentos por grupos', 'Gestión personalizada']
  },
  {
    title: 'Becas de Excelencia',
    subtitle: 'Mérito Académico',
    desc: 'Descuentos parciales aplicables a estudiantes con promedios sobresalientes (Cupos limitados).',
    icon: 'fa-award',
    theme: 'rose',
    gradient: 'from-rose-500 to-pink-500',
    features: ['Hasta 25% descuento', 'Evaluación de méritos', 'Renovable']
  },
]

// Coordinador
const coordinator = {
  name: 'Ing. Luis Wladimir Morales Gubio Msc.',
  role: 'Coordinador del Programa',
  email: 'lwmorales@uce.edu.ec',
  phone: '0999072657',
  schedule: 'Lun - Vie: 08:00 - 17:00'
}
</script>

<template>
  <section id="financiamiento" class="py-24 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="text-center mb-16">
        <span class="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
          INVESTMENT_PLAN_2026
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Inversión y <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">Financiamiento</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Un esquema de costos transparente diseñado para facilitar tu especialización en ingeniería hidráulica.
        </p>
      </div>

      <div class="max-w-5xl mx-auto mb-20">
        <div class="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <i class="fas fa-file-invoice-dollar text-cyan-400"></i> Desglose de Inversión
              </h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <span class="text-slate-300">Inscripción</span>
                  <span class="text-white font-mono font-bold">${{ investmentDetails.registration }}</span>
                </div>
                <div class="flex justify-between items-center p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <span class="text-slate-300">Matrícula</span>
                  <span class="text-white font-mono font-bold">${{ investmentDetails.tuition }}</span>
                </div>
                <div class="flex justify-between items-center p-4 rounded-xl bg-slate-800/50 border border-white/5 relative overflow-hidden group">
                  <div class="absolute inset-0 bg-cyan-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span class="text-cyan-100 font-medium relative z-10">Colegiatura del Programa</span>
                  <span class="text-cyan-300 font-mono font-bold text-lg relative z-10">${{ investmentDetails.program.toLocaleString() }}</span>
                </div>
              </div>
              <p class="mt-4 text-xs text-slate-500 text-center md:text-left">
                * La inscripción y matrícula se incluyen en el total.
              </p>
            </div>

            <div class="text-center md:text-right">
              <p class="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Inversión Total Aproximada</p>
              <div class="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6">
                <span class="text-3xl align-top text-slate-500">$</span>{{ investmentDetails.total.toLocaleString() }}
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-end">
                <div class="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold flex items-center justify-center gap-2">
                  <i class="fas fa-chart-line"></i> Alto Retorno
                </div>
                <div class="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold flex items-center justify-center gap-2">
                  <i class="fas fa-check-circle"></i> Costo Competitivo
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
        <div v-for="(option, idx) in financingOptions" :key="idx" 
             class="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-1 hover:-translate-y-1 transition-all duration-300">
          
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"
               :class="option.gradient"></div>

          <div class="h-full bg-slate-950/90 rounded-xl p-6 md:p-8 relative overflow-hidden">
            
            <div class="w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-lg border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300"
                 :class="`bg-${option.theme}-500/10 text-${option.theme}-400`">
              <i :class="['fas', option.icon]"></i>
            </div>

            <h3 class="text-xl font-bold text-white mb-1">{{ option.title }}</h3>
            <p class="text-xs font-mono uppercase tracking-wide mb-4" :class="`text-${option.theme}-500`">{{ option.subtitle }}</p>
            
            <p class="text-slate-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
              {{ option.desc }}
            </p>

            <ul class="space-y-2">
              <li v-for="(feat, i) in option.features" :key="i" class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full" :class="`bg-${option.theme}-500`"></div>
                <span class="text-xs text-slate-300">{{ feat }}</span>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-white/10 overflow-hidden">
        <div class="grid md:grid-cols-2">
          
          <div class="p-8 md:p-12 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-white mb-6">¿Necesitas Asesoría Financiera?</h3>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">
                <i class="fas fa-user-shield text-2xl"></i>
              </div>
              <div>
                <p class="text-white font-bold">{{ coordinator.name }}</p>
                <p class="text-slate-400 text-sm">{{ coordinator.role }}</p>
              </div>
            </div>
            <div class="space-y-3 text-slate-400 text-sm">
              <div class="flex items-center gap-3">
                <i class="fas fa-envelope text-slate-600"></i> {{ coordinator.email }}
              </div>
              <div class="flex items-center gap-3">
                <i class="fas fa-phone text-slate-600"></i> {{ coordinator.phone }}
              </div>
              <div class="flex items-center gap-3">
                <i class="fas fa-clock text-slate-600"></i> {{ coordinator.schedule }}
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-cyan-900/50 to-green-900/50 p-8 md:p-12 flex flex-col justify-center items-center text-center relative">
            <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            <h4 class="text-white font-bold text-xl mb-2 relative z-10">Gestiona tu pago hoy</h4>
            <p class="text-cyan-200 text-sm mb-8 relative z-10">Contacta directamente a tesorería o a la coordinación.</p>
            
            <div class="flex flex-col w-full gap-3 relative z-10">
              <a href="https://wa.me/593999072657" target="_blank" 
                 class="w-full py-3 px-6 rounded-xl bg-white text-green-900 font-bold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2">
                <i class="fab fa-whatsapp"></i> Chat Directo
              </a>
              <a :href="`mailto:${coordinator.email}`" 
                 class="w-full py-3 px-6 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <i class="fas fa-envelope"></i> Enviar Correo
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>