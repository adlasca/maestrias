<script setup>
const financingOptions = [
  {
    title: 'Pago al Contado',
    subtitle: 'Descuento Especial',
    description: 'Pago único con descuento del 10% sobre el valor total del programa.',
    icon: 'fa-money-bill-wave',
    color: 'from-green-500 to-emerald-500',
    benefits: ['Descuento 10%', 'Pago único', 'Simplificado'],
    amount: '$13,500',
    originalAmount: '$15,000'
  },
  {
    title: 'Plan de Pagos UCE',
    subtitle: 'Hasta 12 cuotas',
    description: 'Plan de pagos fraccionados autorizado por la Universidad Central del Ecuador.',
    icon: 'fa-university',
    color: 'from-blue-500 to-cyan-500',
    benefits: ['Hasta 12 cuotas', 'Sin intereses', 'Aprobación directa'],
    amount: '$1,250/mes',
    originalAmount: '$15,000'
  },
  {
    title: 'Tarjetas de Crédito',
    subtitle: 'Diferido sin intereses',
    description: 'Difiere tu inversión con todas las tarjetas de crédito bancarias.',
    icon: 'fa-credit-card',
    color: 'from-purple-500 to-pink-500',
    benefits: ['Sin intereses', 'Hasta 48 meses', 'Aprobación inmediata'],
    amount: 'Según banco',
    originalAmount: '$15,000'
  },
  {
    title: 'Crédito Educativo',
    subtitle: 'IECE/Bancos aliados',
    description: 'Préstamos estudiantiles con tasas preferenciales y plazos extendidos.',
    icon: 'fa-handshake',
    color: 'from-orange-500 to-red-500',
    benefits: ['Tasas preferenciales', 'Hasta 5 años', 'IECE garantizado'],
    amount: 'Variable',
    originalAmount: '$15,000'
  },
  {
    title: 'Convenios Empresariales',
    subtitle: 'Para empresas',
    description: 'Programas de capacitación corporativa con financiamiento empresarial.',
    icon: 'fa-building',
    color: 'from-indigo-500 to-blue-500',
    benefits: ['Financiamiento empresa', 'Grupos corporativos', 'Descuentos adicionales'],
    amount: 'A convenir',
    originalAmount: '$15,000'
  },
  {
    title: 'Becas de Excelencia',
    subtitle: 'Matrícula de honor',
    description: 'Becas parciales para estudiantes destacados con promedio superior.',
    icon: 'fa-graduation-cap',
    color: 'from-yellow-500 to-orange-500',
    benefits: ['Hasta 50% descuento', 'Por mérito académico', 'Renovable'],
    amount: 'Variable',
    originalAmount: '$15,000'
  }
]

const testimonials = [
  {
    name: 'María González',
    role: 'Ingeniera Civil',
    comment: 'El plan de pagos UCE me permitió invertir en mi futuro sin presiones económicas.',
    avatar: 'fa-user',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Arquitecto',
    comment: 'Gracias al crédito educativo pude acceder a esta maestría transformadora.',
    avatar: 'fa-user-tie',
    rating: 5
  }
]
</script>

<template>
  <section class="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-300 text-sm font-semibold mb-6">
          <i class="fas fa-money-bill-wave" />
          <span>Facilidades de Pago</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6">
          Invierte en tu <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">futuro</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Múltiples opciones de financiamiento para que puedas acceder a la mejor
          maestría BIM de Ecuador sin comprometer tu estabilidad económica.
        </p>
      </div>

      <!-- Investment Highlight -->
      <div class="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto mb-16">
        <div class="text-center">
          <div class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
            $15,000
          </div>
          <div class="text-xl text-gray-300 mb-6">Inversión Total del Programa</div>
          <div class="grid grid-cols-3 gap-6 text-center">
            <div>
              <div class="text-2xl font-bold text-green-400">3x</div>
              <div class="text-sm text-gray-400">Retorno de Inversión</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-400">1 año</div>
              <div class="text-sm text-gray-400">Duración del programa</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-400">95%</div>
              <div class="text-sm text-gray-400">Empleabilidad</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Financing Options Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        <div
          v-for="option in financingOptions"
          :key="option.title"
          class="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 group"
        >
          <!-- Header -->
          <div class="flex items-center gap-4 mb-4">
            <div :class="`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`">
              <i :class="`fas ${option.icon}`" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">{{ option.title }}</h3>
              <p class="text-sm text-gray-400">{{ option.subtitle }}</p>
            </div>
          </div>

          <!-- Amount -->
          <div class="mb-4">
            <div class="text-2xl font-black text-green-400 mb-1">{{ option.amount }}</div>
            <div class="text-sm text-gray-400 line-through">{{ option.originalAmount }}</div>
          </div>

          <!-- Description -->
          <p class="text-gray-300 text-sm mb-4">{{ option.description }}</p>

          <!-- Benefits -->
          <div class="space-y-2">
            <div
              v-for="benefit in option.benefits"
              :key="benefit"
              class="flex items-center gap-2"
            >
              <div class="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span class="text-xs text-gray-300">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-5xl mx-auto mb-16">
        <h3 class="text-2xl font-bold text-center mb-8">Testimonios de Financiamiento</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="text-center"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              <i :class="`fas ${testimonial.avatar}`" />
            </div>
            <div class="flex justify-center mb-4">
              <div
                v-for="star in testimonial.rating"
                :key="star"
                class="text-yellow-400"
              >
                <i class="fas fa-star" />
              </div>
            </div>
            <p class="text-gray-300 italic mb-4">"{{ testimonial.comment }}"</p>
            <div>
              <div class="font-bold text-white">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-400">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">¿Necesitas más información sobre financiamiento?</h3>
          <p class="text-green-100 mb-6 text-lg">
            Nuestro equipo de admisiones te ayudará a encontrar la mejor opción
            de financiamiento para tu situación particular.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors text-lg">
              <i class="fas fa-calculator mr-2" />
              Calcular mi plan de pagos
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-lg">
              <i class="fas fa-phone mr-2" />
              Hablar con un asesor
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
