<template>
  <section id="plan-estudios" class="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div class="container mx-auto px-4">
            <!-- Encabezado mejorado -->
            <div class="text-center mb-16">
                <span class="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                    <i class="fas fa-graduation-cap mr-2"></i>Estructura Académica
                </span>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">Malla Curricular Completa</h2>
                <div class="flex flex-wrap justify-center gap-4 text-lg">
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-clock mr-2"></i>1440 Horas
                    </span>
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-book mr-2"></i>30 Créditos
                    </span>
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-laptop-house mr-2"></i>Modalidad Híbrida
                    </span>
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-calendar-alt mr-2"></i>2 Períodos Académicos
                    </span>
                </div>
            </div>

            <!-- Semestres en grid mejorado -->
            <div class="grid lg:grid-cols-2 gap-10 mb-16">
                <!-- Semestre 1 - Mejorado -->
                <div class="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <div class="flex items-center mb-8">
                        <div class="relative">
                            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                                1
                            </div>
                            <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                                <i class="fas fa-play text-xs text-white"></i>
                            </div>
                        </div>
                        <div class="ml-6">
                            <h3 class="text-2xl md:text-3xl font-bold mb-1">Fundamentos Avanzados</h3>
                            <p class="text-blue-200 text-lg">Semestre 1 · 15 Créditos</p>
                        </div>
                    </div>

                    <ul class="space-y-4">
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                                    Metodología de la Investigación Aplicada
                                </h4>
                                <p class="text-blue-200 text-sm">Diseño de proyectos de investigación en geotecnia</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                                    Mecánica de Suelos Avanzada y Rocas
                                </h4>
                                <p class="text-blue-200 text-sm">Comportamiento mecánico de materiales geotécnicos</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                                    Investigaciones Geotécnicas y Geofísica
                                </h4>
                                <p class="text-blue-200 text-sm">Técnicas de campo y laboratorio avanzadas</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                                    Geoestadística y Confiabilidad
                                </h4>
                                <p class="text-blue-200 text-sm">Análisis probabilístico en geotecnia</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                                    Modelos Constitutivos y Numéricos
                                </h4>
                                <p class="text-blue-200 text-sm">Simulación computacional avanzada</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                                    Dinámica de Suelos y Sismos
                                </h4>
                                <p class="text-blue-200 text-sm">Comportamiento sísmico de suelos y estructuras</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Semestre 2 - Mejorado -->
                <div class="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <div class="flex items-center mb-8">
                        <div class="relative">
                            <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                                2
                            </div>
                            <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-xs text-white"></i>
                            </div>
                        </div>
                        <div class="ml-6">
                            <h3 class="text-2xl md:text-3xl font-bold mb-1">Diseño y Especialización</h3>
                            <p class="text-blue-200 text-lg">Semestre 2 · 15 Créditos</p>
                        </div>
                    </div>

                    <ul class="space-y-4">
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                                    Estabilidad de Taludes
                                </h4>
                                <p class="text-blue-200 text-sm">Análisis y diseño de taludes naturales y artificiales</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                                    Diseño de Cimentaciones
                                </h4>
                                <p class="text-blue-200 text-sm">Superficial y profunda para diferentes tipos de suelo</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                                    Excavaciones y Obras Subterráneas
                                </h4>
                                <p class="text-blue-200 text-sm">Túneles, sótanos y estructuras enterradas</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                                    Gestión Integral de Riesgos
                                </h4>
                                <p class="text-blue-200 text-sm">Metodologías para evaluación y mitigación</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-star text-yellow-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-yellow-300 transition-colors">
                                    Optativa Especializada
                                </h4>
                                <p class="text-blue-200 text-sm">
                                    <span class="font-medium">Ruta A:</span> Riesgo Sísmico · 
                                    <span class="font-medium">Ruta B:</span> Geotecnia Minera · 
                                    <span class="font-medium">Ruta C:</span> Infraestructura Resiliente
                                </p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-graduation-cap text-blue-300"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                                    Trabajo de Titulación
                                </h4>
                                <p class="text-blue-200 text-sm">Proyecto de investigación aplicada o desarrollo profesional</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Distribución de horas - Mejorado -->
            <div class="mb-16">
                <div class="text-center mb-10">
                    <h3 class="text-2xl md:text-3xl font-bold mb-4">Distribución del Programa</h3>
                    <p class="text-blue-200 text-lg max-w-2xl mx-auto">
                        Equilibrio entre teoría y práctica para una formación integral
                    </p>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="bg-gradient-to-br from-green-600/20 to-green-700/20 backdrop-blur-sm rounded-xl p-6 text-center border border-green-500/20">
                        <div class="text-3xl md:text-4xl font-bold text-green-400 mb-3">29%</div>
                        <div class="text-lg font-semibold mb-2">Componente Práctico</div>
                        <p class="text-green-200 text-sm">Laboratorios, simulaciones y proyectos reales</p>
                    </div>
                    <div class="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-500/20">
                        <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-3">25%</div>
                        <div class="text-lg font-semibold mb-2">Trabajo Autónomo</div>
                        <p class="text-blue-200 text-sm">Investigación, estudio y desarrollo individual</p>
                    </div>
                    <div class="bg-gradient-to-br from-purple-600/20 to-purple-700/20 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-500/20">
                        <div class="text-3xl md:text-4xl font-bold text-purple-400 mb-3">17%</div>
                        <div class="text-lg font-semibold mb-2">Trabajo de Titulación</div>
                        <p class="text-purple-200 text-sm">Proyecto final de especialización</p>
                    </div>
                    <div class="bg-gradient-to-br from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-xl p-6 text-center border border-amber-500/20">
                        <div class="text-3xl md:text-4xl font-bold text-amber-400 mb-3">9%</div>
                        <div class="text-lg font-semibold mb-2">Seguimiento Docente</div>
                        <p class="text-amber-200 text-sm">Tutorías y acompañamiento personalizado</p>
                    </div>
                </div>
                
                <!-- Nota sobre total -->
                <div class="mt-8 text-center">
                    <p class="text-blue-300 text-sm">
                        * La suma corresponde al 80% del programa. El 20% restante corresponde a actividades complementarias y evaluación.
                    </p>
                </div>
            </div>

            <!-- Información adicional -->
            <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-calendar-alt text-2xl text-blue-300"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Duración del Programa</h4>
                        <p class="text-blue-200">2 semestres académicos (12 meses)</p>
                    </div>
                    <div class="text-center">
                        <div class="w-14 h-14 bg-green-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-clock text-2xl text-green-300"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Horarios Flexibles</h4>
                        <p class="text-blue-200">Lunes a viernes **:** - **:** · Modalidad híbrida</p>
                    </div>
                    <div class="text-center">
                        <div class="w-14 h-14 bg-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-laptop-code text-2xl text-purple-300"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Software Especializado</h4>
                        <p class="text-blue-200">PLAXIS, GeoStudio, SAP2000, QGIS incluidos</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component for Geotechnical Engineering Curriculum
</script>