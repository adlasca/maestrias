<template>
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
                alt="BIM Construction" class="w-full h-full object-cover object-center brightness-75" />
            <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-gray-900/60"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-12 text-center">
            <div class="max-w-5xl mx-auto">
                <div class="inline-flex items-center gap-2 glass-effect px-5 py-2 rounded-full mb-8">
                    <i class="fas fa-cube text-cyan-300"></i>
                    <span class="text-sm font-bold tracking-wider uppercase text-white">Cuarto Nivel · Posgrado</span>
                </div>

                <h1 class="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
                    MAESTRÍA EN CIENCIAS E<br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                        INGENIERÍA DE LA CONSTRUCCIÓN
                    </span>
                </h1>

                <div
                    class="inline-block bg-black/50 backdrop-blur-md px-8 py-4 rounded-2xl mb-8 border border-white/20">
                    <p class="text-lg sm:text-2xl font-bold text-white">
                        Mención en <span class="text-yellow-400">Gestión Estratégica de Proyectos BIM</span>
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
                    <div class="glass-effect p-4 rounded-xl">
                        <div class="text-2xl font-bold text-yellow-400 mb-1">30</div>
                        <div class="text-xs font-bold uppercase text-white">Créditos</div>
                    </div>
                    <div class="glass-effect p-4 rounded-xl">
                        <div class="text-2xl font-bold text-cyan-400 mb-1">2</div>
                        <div class="text-xs font-bold uppercase text-white">Períodos</div>
                    </div>
                    <div class="glass-effect p-4 rounded-xl">
                        <div class="text-2xl font-bold text-green-400 mb-1">ISO</div>
                        <div class="text-xs font-bold uppercase text-white">19650</div>
                    </div>
                    <div class="glass-effect p-4 rounded-xl">
                        <div class="text-xl font-bold text-white mb-1">Híbrida</div>
                        <div class="text-xs font-bold uppercase text-gray-300">Modalidad</div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#malla"
                        class="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3.5 rounded-xl text-lg font-bold uppercase shadow-lg transition-transform hover:-translate-y-1">
                        <i class="fas fa-th"></i> Ver Malla
                    </a>
                    <a href="#contacto"
                        class="inline-flex items-center justify-center gap-3 glass-effect text-white hover:bg-white/20 px-8 py-3.5 rounded-xl text-lg font-semibold uppercase transition-all">
                        <i class="fas fa-paper-plane"></i> Contactar
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>