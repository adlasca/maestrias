<script setup>
const competencias = [
    {
        titulo: "Gestión Integral BIM",
        desc: "Dominarás el ciclo de vida del proyecto (3D a 7D) integrando modelos paramétricos, cronogramas y costes.",
        icon: "fa-cubes"
    },
    {
        titulo: "Normativa ISO 19650",
        desc: "Implementarás flujos de trabajo colaborativos bajo estándares internacionales de gestión de la información.",
        icon: "fa-book-open"
    },
    {
        titulo: "Liderazgo Multidisciplinar",
        desc: "Dirigirás equipos de ingenieros y arquitectos resolviendo interferencias y optimizando recursos.",
        icon: "fa-users-cog"
    },
    {
        titulo: "Innovación Tecnológica",
        desc: "Aplicarás Inteligencia Artificial, Realidad Virtual y Gemelos Digitales en obras civiles.",
        icon: "fa-microchip"
    }
]
</script>

<template>
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <span class="text-blue-600 font-bold uppercase tracking-wider text-sm">Perfil de Egreso</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">¿En qué te convertirás?</h2>
                <p class="text-gray-600 max-w-2xl mx-auto mt-4">
                    Al finalizar la maestría, serás un <strong>BIM Manager</strong> con capacidad estratégica para
                    transformar empresas constructoras.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(item, index) in competencias" :key="index"
                    class="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300">
                    <div
                        class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">
                        <i class="fas" :class="item.icon"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.titulo }}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>