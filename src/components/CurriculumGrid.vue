<script setup>
const p1 = [
    "Metodología de la Investigación Aplicada a BIM",
    "Modelación Arquitectónica Avanzada (BIM 3D)",
    "Modelación Estructural Avanzada (BIM 3D)",
    "Modelación de Instalaciones MEP (BIM 3D)",
    "Gestión Estratégica de Proyectos",
    "Innovación: IA, Robótica y Realidad Virtual"
]

const p2 = [
    "Planificación y Control de Obra (BIM 4D)",
    "Gestión Económica y Costos (BIM 5D)",
    "Análisis Financiero y Gestión de Riesgos",
    "Sostenibilidad y Certificaciones (6D)",
    "Coordinación Colaborativa Multidisciplinar",
    "Unidad de Titulación"
]
</script>

<template>
    <section class="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
            class="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20">
        </div>
        <div
            class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20">
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
                <span
                    class="bg-white/10 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-cyan-300">
                    <i class="fas fa-layer-group mr-2"></i>Plan de Estudios
                </span>
                <h2 class="text-4xl font-bold mt-6">Malla Curricular</h2>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <div
                    class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg mr-4">
                            1</div>
                        <div>
                            <h3 class="text-2xl font-bold">Fundamentos y 3D</h3>
                            <p class="text-blue-200 text-sm">Primer Período Académico</p>
                        </div>
                    </div>
                    <ul class="space-y-4">
                        <li v-for="(materia, i) in p1" :key="i" class="flex items-start border-b border-white/5 pb-3">
                            <i class="fas fa-check text-cyan-400 mt-1 mr-3"></i>
                            <span class="font-semibold text-gray-100 text-sm">{{ materia }}</span>
                        </li>
                    </ul>
                </div>

                <div
                    class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-colors">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg mr-4">
                            2</div>
                        <div>
                            <h3 class="text-2xl font-bold">Gestión 4D, 5D, 6D</h3>
                            <p class="text-yellow-200 text-sm">Segundo Período Académico</p>
                        </div>
                    </div>
                    <ul class="space-y-4">
                        <li v-for="(materia, i) in p2" :key="i" class="flex items-start border-b border-white/5 pb-3">
                            <i class="fas fa-check text-yellow-400 mt-1 mr-3"></i>
                            <span class="font-semibold text-gray-100 text-sm">{{ materia }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>