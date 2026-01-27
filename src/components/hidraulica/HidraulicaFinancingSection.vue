<template>
  <!-- Financing Section -->
  <section id="financiamiento" class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 py-2 px-6 rounded-full mb-6">
          <i class="fas fa-hand-holding-usd text-cyan-600"></i>
          <span class="font-bold uppercase tracking-wide">Facilidades de Pago</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
          Invierte en tu <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">futuro</span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Múltiples opciones de financiamiento para que puedas acceder a la mejor maestría en 
          <span class="font-semibold text-cyan-600"> Ingeniería Hidráulica</span> de Ecuador 
          sin comprometer tu estabilidad económica.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="text-2xl font-bold text-cyan-600 mb-2">$80</div>
          <div class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Inscripción</div>
          <div class="text-xs text-gray-500 mt-2">Costo inicial</div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="text-2xl font-bold text-emerald-600 mb-2">3x</div>
          <div class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Retorno de Inversión</div>
          <div class="text-xs text-gray-500 mt-2">Promedio salarial</div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="text-2xl font-bold text-blue-600 mb-2">$400</div>
          <div class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Matrícula</div>
          <div class="text-xs text-gray-500 mt-2">Por período</div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="text-2xl font-bold text-amber-600 mb-2">2</div>
          <div class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Periodos</div>
          <div class="text-xs text-gray-500 mt-2">Duración del programa</div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="text-2xl font-bold text-purple-600 mb-2">$4,000</div>
          <div class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Inversión Total</div>
          <div class="text-xs text-gray-500 mt-2">Del programa completo</div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="text-2xl font-bold text-green-600 mb-2">95%</div>
          <div class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Empleabilidad</div>
          <div class="text-xs text-gray-500 mt-2">Tasa de graduados</div>
        </div>
      </div>

      <!-- Financing Options Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <!-- Pago al contado -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">Pago al contado</h3>
                <p class="text-emerald-100">Pago en efectivo</p>
              </div>
              <i class="fas fa-money-bill-wave text-white text-3xl opacity-90"></i>
            </div>
          </div>
          <div class="p-8">
            <div class="text-5xl font-black text-gray-900 mb-4">$4000</div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Pago único y seguro. Aceptado en ventanilla de la universidad.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-emerald-500"></i>
                <span>Pago único al momento de la matrícula</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-emerald-500"></i>
                <span>Aceptado en ventanilla de la universidad</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-emerald-500"></i>
                <span>Proceso simplificado</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Plan de Pagos UCE -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">Plan de Pagos UCE</h3>
                <p class="text-blue-100">Hasta 3 cuotas</p>
              </div>
              <i class="fas fa-calendar-alt text-white text-3xl opacity-90"></i>
            </div>
          </div>
          <div class="p-8">
            <div class="text-5xl font-black text-gray-900 mb-4">$1334<span class="text-lg text-gray-500">/mes</span></div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Plan de pagos fraccionados autorizado por la Universidad Central del Ecuador.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-blue-500"></i>
                <span>Hasta 3 cuotas sin intereses</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-blue-500"></i>
                <span>Aprobación directa</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-blue-500"></i>
                <span>Sin trámites bancarios</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Tarjetas de Crédito -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div class="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">Tarjetas de Crédito</h3>
                <p class="text-purple-100">Diferido según tu banco</p>
              </div>
              <i class="fas fa-credit-card text-white text-3xl opacity-90"></i>
            </div>
          </div>
          <div class="p-8">
            <div class="text-4xl font-black text-gray-900 mb-4">Según banco</div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Difiere tu inversión con todas las tarjetas de crédito bancarias.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-purple-500"></i>
                <span>Hasta 3 meses sin intereses</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-purple-500"></i>
                <span>Aprobación inmediata</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-purple-500"></i>
                <span>Todas las tarjetas bancarias</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Crédito Educativo -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div class="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">Crédito Educativo</h3>
                <p class="text-amber-100">Bancos aliados</p>
              </div>
              <i class="fas fa-university text-white text-3xl opacity-90"></i>
            </div>
          </div>
          <div class="p-8">
            <div class="text-4xl font-black text-gray-900 mb-4">Variable</div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Préstamos estudiantiles con tasas preferenciales y plazos extendidos.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-amber-500"></i>
                <span>Tasas preferenciales para docentes</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-amber-500"></i>
                <span>Hasta 36 meses</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-amber-500"></i>
                <span>Aprobación en 48 horas</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Convenios Empresariales -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div class="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">Convenios Empresariales</h3>
                <p class="text-cyan-100">Para empresas</p>
              </div>
              <i class="fas fa-building text-white text-3xl opacity-90"></i>
            </div>
          </div>
          <div class="p-8">
            <div class="text-4xl font-black text-gray-900 mb-4">A convenir</div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Programas de capacitación corporativa con financiamiento empresarial.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-cyan-500"></i>
                <span>Financiamiento por la empresa</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-cyan-500"></i>
                <span>Grupos corporativos</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-cyan-500"></i>
                <span>Descuentos adicionales</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Becas de Excelencia -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div class="bg-gradient-to-r from-red-500 to-red-600 p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">Becas de Excelencia</h3>
                <p class="text-red-100">Matrícula de honor</p>
              </div>
              <i class="fas fa-award text-white text-3xl opacity-90"></i>
            </div>
          </div>
          <div class="p-8">
            <div class="text-4xl font-black text-gray-900 mb-4">Variable</div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Becas parciales para estudiantes destacados con promedio superior.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-red-500"></i>
                <span>Hasta 50% de descuento</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-red-500"></i>
                <span>Por mérito académico</span>
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <i class="fas fa-check-circle text-red-500"></i>
                <span>Renovable por período</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contacto e Inscripción Section -->
      <div class="max-w-6xl mx-auto bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-2xl shadow-2xl overflow-hidden mb-16">
        <div class="grid md:grid-cols-2">
          <!-- Inversión -->
          <div class="p-10 text-white">
            <div class="flex items-center gap-3 mb-6">
              <i class="fas fa-calculator text-2xl text-cyan-300"></i>
              <h3 class="text-2xl font-bold">Inversión y Costos</h3>
            </div>
            
            <div class="space-y-6">
              <div class="flex justify-between items-center pb-4 border-b border-cyan-700/50">
                <div class="flex items-center gap-3">
                  <i class="fas fa-file-signature text-cyan-400"></i>
                  <div>
                    <p class="font-semibold text-cyan-100">Matrícula</p>
                    <p class="text-sm text-cyan-300">Por período académico</p>
                  </div>
                </div>
                <div>
                  <span class="text-2xl font-bold text-white">$400</span>
                </div>
              </div>
              
              <div class="flex justify-between items-center pb-4 border-b border-cyan-700/50">
                <div class="flex items-center gap-3">
                  <i class="fas fa-edit text-cyan-400"></i>
                  <div>
                    <p class="font-semibold text-cyan-100">Inscripción</p>
                    <p class="text-sm text-cyan-300">Costo único inicial</p>
                  </div>
                </div>
                <div>
                  <span class="text-2xl font-bold text-white">$80</span>
                </div>
              </div>
              
              <div class="flex justify-between items-center pt-6">
                <div class="flex items-center gap-3">
                  <i class="fas fa-trophy text-yellow-400"></i>
                  <div>
                    <p class="font-semibold text-lg text-cyan-50">Arancel Total</p>
                    <p class="text-sm text-cyan-300">Programa completo</p>
                  </div>
                </div>
                <div>
                  <span class="text-4xl font-bold text-yellow-400">$4,000</span>
                </div>
              </div>
            </div>
            
            <div class="mt-8 p-4 bg-cyan-800/50 rounded-xl">
              <p class="text-sm text-cyan-300">
                <i class="fas fa-info-circle mr-2"></i>
                *Valores referenciales, sujetos a normativa vigente. Incluye todos los materiales y acceso a plataforma virtual.
              </p>
            </div>
          </div>

          <!-- Contacto -->
          <div class="p-10 bg-gradient-to-br from-white to-gray-50">
            <div class="flex items-center gap-3 mb-6">
              <i class="fas fa-user-graduate text-2xl text-cyan-600"></i>
              <h3 class="text-2xl font-bold text-gray-900">¡Inscríbete Hoy!</h3>
            </div>
            <p class="text-gray-600 mb-8">Sé parte de la primera cohorte de especialistas en Ingeniería Hidráulica.</p>

            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <i class="fas fa-user-tie text-cyan-600"></i>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Coordinación Académica:</p>
                  <p class="text-gray-700">Ing. Edwin Tipán, M.Sc.</p>
                  <p class="text-sm text-gray-500">Director del Programa</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <i class="fas fa-envelope text-cyan-600"></i>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Email de contacto:</p>
                  <a href="mailto:posgrado@fica.uce.edu.ec" class="text-cyan-700 hover:text-cyan-800 transition-colors">
                    posgrado@fica.uce.edu.ec
                  </a>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <i class="fas fa-phone text-cyan-600"></i>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Teléfono:</p>
                  <a href="tel:+59323962800" class="text-gray-700 hover:text-cyan-700 transition-colors">
                    (02) 396-2800 ext. 123
                  </a>
                  <p class="text-sm text-gray-500">Lunes a Viernes, 8:00 - 17:00</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <i class="fas fa-map-marker-alt text-cyan-600"></i>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Dirección:</p>
                  <p class="text-gray-700">Facultad de Ingeniería Civil</p>
                  <p class="text-gray-700">Av. 12 de Octubre y Wilson, Quito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente no requiere lógica compleja por ahora
// Se puede agregar funcionalidad de interacción más adelante
</script>

<style scoped>
/* Efectos de hover personalizados */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(4px);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Animaciones suaves para íconos */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.group-hover\:animate-bounce {
  animation: bounce 0.5s ease-in-out;
}
</style>