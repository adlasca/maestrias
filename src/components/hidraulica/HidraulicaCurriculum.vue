<template>
  <!-- Plan de Estudios -->
    <section id="plan-estudios" class="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <span class="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                    <i class="fas fa-graduation-cap mr-2"></i>Planificación Curricular
                </span>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">Malla Curricular Completa</h2>
                <div class="flex flex-wrap justify-center gap-4 text-lg">
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-clock mr-2"></i>2 Períodos Académicos
                    </span>
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-book mr-2"></i>30 Créditos
                    </span>
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-laptop-house mr-2"></i>Modalidad Híbrida
                    </span>
                    <span class="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                        <i class="fas fa-water mr-2"></i>Enfoque Sostenible
                    </span>
                </div>
            </div>

            <!-- Períodos -->
            <div class="grid lg:grid-cols-2 gap-10 mb-16">
                <!-- Período 1 -->
                <div class="bg-gradient-to-br from-blue-800/40 to-cyan-900/40 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
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
                            <p class="text-blue-200 text-lg">Primer Período · 15 Créditos</p>
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
                                    Hidráulica Avanzada
                                </h4>
                                <p class="text-blue-200 text-sm">Principios y aplicaciones avanzadas en ingeniería hidráulica</p>
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
                                    Hidrología y Modelación Hidrológica
                                </h4>
                                <p class="text-blue-200 text-sm">Análisis de cuencas y modelación de procesos hidrológicos</p>
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
                                    Gestión Sostenible del Agua
                                </h4>
                                <p class="text-blue-200 text-sm">Políticas, planificación y gestión integral de recursos hídricos</p>
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
                                    Ingeniería Sanitaria y Ambiental
                                </h4>
                                <p class="text-blue-200 text-sm">Sistemas de agua potable, alcantarillado y tratamiento</p>
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
                                    Metodología de la Investigación
                                </h4>
                                <p class="text-blue-200 text-sm">Diseño y desarrollo de proyectos de investigación en hidráulica</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Período 2 -->
                <div class="bg-gradient-to-br from-blue-800/40 to-cyan-900/40 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <div class="flex items-center mb-8">
                        <div class="relative">
                            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                                2
                            </div>
                            <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-xs text-white"></i>
                            </div>
                        </div>
                        <div class="ml-6">
                            <h3 class="text-2xl md:text-3xl font-bold mb-1">Diseño y Especialización</h3>
                            <p class="text-blue-200 text-lg">Segundo Período · 15 Créditos</p>
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
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                                    Diseño de Sistemas Hidrosanitarios
                                </h4>
                                <p class="text-blue-200 text-sm">Proyectos integrales de agua potable y saneamiento</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                                    Modelación de Sistemas Hidráulicos
                                </h4>
                                <p class="text-blue-200 text-sm">Simulación computacional avanzada con software especializado</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                                    Economía y Legislación Hídrica
                                </h4>
                                <p class="text-blue-200 text-sm">Aspectos económicos, legales e institucionales del agua</p>
                            </div>
                        </li>
                        <li class="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                            <div class="flex-shrink-0 mt-1 mr-4">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                                    Proyectos de Agua y Saneamiento
                                </h4>
                                <p class="text-blue-200 text-sm">Formulación, ejecución y evaluación de proyectos hídricos</p>
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
                                <p class="text-blue-200 text-sm">Proyecto de investigación aplicada en ingeniería hidráulica</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Software Especializado -->
            <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
                <h3 class="text-2xl font-bold mb-8 text-center">Software Especializado Incluido</h3>
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-water text-2xl text-blue-300"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Modelación Hidráulica</h4>
                        <p class="text-blue-200">HEC-HMS, HEC-RAS, EPANET</p>
                    </div>
                    <div class="text-center">
                        <div class="w-14 h-14 bg-green-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-map text-2xl text-green-300"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Sistemas SIG</h4>
                        <p class="text-blue-200">ArcGIS, QGIS, gvSIG</p>
                    </div>
                    <div class="text-center">
                        <div class="w-14 h-14 bg-cyan-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-calculator text-2xl text-cyan-300"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Análisis de Datos</h4>
                        <p class="text-blue-200">MATLAB, Python, R Studio</p>
                    </div>
                    <div class="text-center">
                        <div class="w-14 h-14 bg-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-project-diagram text-2xl text-purple-300"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Diseño Hidrosanitario</h4>
                        <p class="text-blue-200">WaterCAD, SewerCAD, Civil 3D</p>
                    </div>
                </div>
            </div>

            <!-- Instalaciones -->
            <div class="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 class="text-2xl font-bold mb-6">Instalaciones y Laboratorios</h3>
                        <ul class="space-y-4 text-blue-200">
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Laboratorio de Hidráulica y Mecánica de Fluidos</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Laboratorio de Calidad de Agua</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Aulas Virtuales y Plataformas Digitales</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Laboratorio de Computación con Software Especializado</span>
                            </li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <div class="inline-block p-6 bg-white/10 rounded-2xl">
                            <i class="fas fa-university text-5xl text-white mb-4"></i>
                            <h4 class="text-xl font-bold mb-2">Facultad de Ingeniería</h4>
                            <p class="text-blue-200">Equipamiento tecnológico de última generación</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component for Hydraulic Engineering Curriculum
</script>