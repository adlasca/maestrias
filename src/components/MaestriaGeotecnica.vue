<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section Geotécnica -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80"
          alt="Ingeniería Civil en los Andes"
          class="w-full h-full object-cover object-center brightness-90 contrast-105"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-green-900/50 via-teal-800/40 to-emerald-900/40" />
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="max-w-6xl mx-auto">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 hover:bg-white/20 transition-all">
            <i class="fas fa-mountain text-green-400" />
            <span>Cuarto Nivel · Gestión de Riesgos</span>
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span class="text-xs opacity-80">Cohorte 2026</span>
          </div>

          <!-- Título principal -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span class="block text-white mb-2">Maestría en</span>
            <span class="block bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Ingeniería Civil
            </span>
          </h1>

          <!-- Subtítulo -->
          <div class="inline-block bg-black/40 backdrop-blur-sm px-6 py-4 rounded-2xl mb-8 border border-white/25 shadow-2xl">
            <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Mención en Ingeniería Geotécnica y <span class="text-emerald-300 font-semibold">Gestión de Riesgos</span>
            </p>
          </div>

          <!-- Lema -->
          <div class="max-w-3xl mx-auto mb-10">
            <div class="relative px-4 py-3 bg-black/40 backdrop-blur-sm rounded-xl">
              <i class="fas fa-quote-left absolute left-0 top-0 text-2xl text-white/30 ml-2 mt-1" />
              <i class="fas fa-quote-right absolute right-0 bottom-0 text-2xl text-white/30 mr-2 mb-1" />

              <p class="text-lg sm:text-xl italic font-light leading-relaxed text-white drop-shadow">
                "Formamos a los <strong class="font-semibold text-green-300">especialistas que diseñan la resiliencia</strong>
                del territorio, integrando tecnología avanzada con gestión estratégica de riesgos."
              </p>
            </div>
          </div>

          <!-- Estadísticas -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-green-300 mb-1 drop-shadow">30</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Créditos</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-emerald-300 mb-1 drop-shadow">2</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Semestres</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-2xl font-bold text-amber-300 mb-1 drop-shadow">1440</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Horas</div>
            </div>
            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div class="text-lg font-bold text-teal-300 mb-1 drop-shadow">Híbrida</div>
              <div class="text-xs font-semibold uppercase tracking-wide text-white">Modalidad</div>
            </div>
          </div>

          <!-- Áreas de Especialización -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 max-w-3xl mx-auto">
            <div class="bg-black/30 backdrop-blur-sm p-3 rounded-lg text-center">
              <div class="text-lg font-bold text-white mb-1"><i class="fas fa-hard-hat mr-2" />Geotécnica</div>
              <div class="text-xs text-gray-300">Avanzada</div>
            </div>
            <div class="bg-black/30 backdrop-blur-sm p-3 rounded-lg text-center">
              <div class="text-lg font-bold text-white mb-1"><i class="fas fa-exclamation-triangle mr-2" />Riesgos</div>
              <div class="text-xs text-gray-300">Geotécnicos</div>
            </div>
            <div class="bg-black/30 backdrop-blur-sm p-3 rounded-lg text-center">
              <div class="text-lg font-bold text-white mb-1"><i class="fas fa-cogs mr-2" />Modelación</div>
              <div class="text-xs text-gray-300">Numérica</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#plan-estudios" class="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
              <span class="relative z-10 flex items-center gap-2">
                <i class="fas fa-book-open" />
                Ver Plan de Estudios
                <i class="fas fa-arrow-down group-hover:animate-bounce" />
              </span>
            </a>
            <a href="#contacto" class="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
              <span class="relative z-10 flex items-center gap-2">
                <i class="fas fa-headset" />
                Contactar Coordinación
                <i class="fas fa-phone-alt group-hover:animate-pulse" />
              </span>
            </a>
            <router-link to="/maestrias" class="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all">
              <i class="fas fa-arrow-left mr-2" />
              Ver Otras Maestrías
            </router-link>
          </div>
        </div>
      </div>

      <!-- Elementos decorativos tierra -->
      <div class="absolute top-20 right-10 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
    </section>

    <!-- Introducción Geotécnica -->
    <section id="introduccion" class="py-24 bg-gradient-to-br from-white via-green-50/20 to-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Columna de Imagen -->
          <div class="order-1">
            <div class="rounded-2xl overflow-hidden shadow-2xl group mb-6">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                alt="Maestría en Ingeniería Civil - Formación especializada"
                class="w-full h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <i class="fas fa-gem mr-2"></i>Programa Exclusivo
              </div>
            </div>
          </div>

          <!-- Columna de Contenido -->
          <div class="order-2">
            <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-6">
              <i class="fas fa-info-circle" />
              <span>Sobre el Programa</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Ingeniería Geotécnica para el
              <span class="text-green-600">Desarrollo Sostenible</span>
            </h2>

            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                La Maestría en Ingeniería Civil con mención en Ingeniería Geotécnica y Gestión de Riesgos forma especialistas
                capaces de diseñar, gestionar y optimizar sistemas geotécnicos con un enfoque sostenible y resiliente.
              </p>

              <p>
                Nuestro programa integra conocimientos avanzados en mecánica de suelos, modelación numérica y gestión de riesgos,
                preparándote para enfrentar los desafíos actuales y futuros del sector geotécnico ecuatoriano.
              </p>
            </div>

            <div class="mt-8 grid grid-cols-2 gap-4">
              <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <i class="fas fa-users text-white" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Perfil</div>
                    <div class="text-sm text-gray-600">Profesional</div>
                  </div>
                </div>
              </div>

              <div class="bg-teal-50 p-4 rounded-xl border border-teal-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                    <i class="fas fa-clock text-white" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Duración</div>
                    <div class="text-sm text-gray-600">2 años</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plan de Estudios -->
    <section id="plan-estudios" class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Plan de <span class="text-green-600">Estudios</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Currículo completo diseñado para formar especialistas en ingeniería geotécnica
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- Semestre 1 -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            <div class="bg-gradient-to-r from-green-600 to-teal-600 p-8 text-white">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span class="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 class="text-2xl font-black">Primer Semestre</h3>
                  <p class="text-green-100">Fundamentos y Diseño Geotécnico</p>
                </div>
              </div>
            </div>

            <div class="p-8">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Metodología de la Investigación Aplicada</h4>
                      <p class="text-gray-600 text-sm">Diseño de proyectos de investigación en geotecnia</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Mecánica de Suelos Avanzada y Rocas</h4>
                      <p class="text-gray-600 text-sm">Comportamiento mecánico de materiales geotécnicos</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Investigaciones Geotécnicas y Geofísica</h4>
                      <p class="text-gray-600 text-sm">Técnicas de campo y laboratorio avanzadas</p>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-green-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Geoestadística y Confiabilidad</h4>
                      <p class="text-gray-600 text-sm">Análisis probabilístico en geotecnia</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-green-600 font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Modelos Constitutivos y Numéricos</h4>
                      <p class="text-gray-600 text-sm">Simulación computacional avanzada</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-green-600 font-bold text-sm">6</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Dinámica de Suelos y Sismos</h4>
                      <p class="text-gray-600 text-sm">Comportamiento sísmico de suelos y estructuras</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Semestre 2 -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div class="bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-white">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span class="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 class="text-2xl font-black">Segundo Semestre</h3>
                  <p class="text-teal-100">Especialización y Proyecto Final</p>
                </div>
              </div>
            </div>

            <div class="p-8">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-teal-600 font-bold text-sm">7</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Estabilidad de Taludes</h4>
                      <p class="text-gray-600 text-sm">Análisis y diseño de taludes naturales y artificiales</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-teal-600 font-bold text-sm">8</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Diseño de Cimentaciones</h4>
                      <p class="text-gray-600 text-sm">Superficial y profunda para diferentes tipos de suelo</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-teal-600 font-bold text-sm">9</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Excavaciones y Obras Subterráneas</h4>
                      <p class="text-gray-600 text-sm">Túneles, sótanos y estructuras enterradas</p>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-teal-600 font-bold text-sm">10</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Gestión Integral de Riesgos</h4>
                      <p class="text-gray-600 text-sm">Metodologías para evaluación y mitigación</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-teal-600 font-bold text-sm">11</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Optativa Especializada</h4>
                      <p class="text-gray-600 text-sm">Ruta A: Riesgo Sísmico · Ruta B: Geotecnia Minera · Ruta C: Infraestructura Resiliente</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-teal-600 font-bold text-sm">12</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">Trabajo de Titulación</h4>
                      <p class="text-gray-600 text-sm">Proyecto de investigación aplicada o desarrollo profesional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Especialidades Geotécnicas -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Especialidades en <span class="text-green-600">Ingeniería Geotécnica</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Domina las áreas fundamentales de la geotécnica moderna con énfasis en estabilidad y sostenibilidad.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Mecánica de Suelos -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all group">
            <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i class="fas fa-layer-group text-white text-2xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Mecánica de Suelos Avanzada</h3>
            <p class="text-gray-600 mb-6">
              Estudio del comportamiento mecánico de suelos y rocas, análisis de estabilidad y diseño geotécnico.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-500" />
                Propiedades de suelos
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-500" />
                Ensayos geotécnicos
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-500" />
                Análisis de estabilidad
              </li>
            </ul>
          </div>

          <!-- Modelación Numérica -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl transition-all group">
            <div class="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i class="fas fa-calculator text-white text-2xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Modelación Numérica</h3>
            <p class="text-gray-600 mb-6">
              Simulación computacional avanzada de problemas geotécnicos usando software especializado.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-teal-500" />
                PLAXIS y GeoStudio
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-teal-500" />
                Elementos finitos
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-teal-500" />
                Análisis dinámico
              </li>
            </ul>
          </div>

          <!-- Gestión de Riesgos -->
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all group">
            <div class="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i class="fas fa-exclamation-triangle text-white text-2xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Gestión de Riesgos Geotécnicos</h3>
            <p class="text-gray-600 mb-6">
              Evaluación, mitigación y gestión integral de riesgos asociados a suelos y terrenos.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500" />
                Riesgos sísmicos
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500" />
                Inestabilidad de taludes
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500" />
                Licuefacción
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Laboratorios -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Infraestructura <span class="text-green-600">Académica</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Laboratorios especializados equipados con tecnología de vanguardia para investigación aplicada.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" alt="Laboratorio Virtual" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Laboratorio de Geotecnia</h3>
              <p class="text-gray-600">
                Equipamiento especializado para ensayos de suelos, análisis geotécnicos y experimentación con materiales.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" alt="Centro de Investigación" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Centro de Investigación</h3>
              <p class="text-gray-600">
                Espacio dedicado a la investigación en geotecnia, riesgos geotécnicos y desarrollo sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            ¿Listo para especializarte en <span class="text-green-600">Ingeniería Geotécnica?</span>
          </h2>
          <p class="text-xl text-gray-600 mb-12">
            Únete a nuestro programa de posgrado y contribuye al desarrollo sostenible del sector geotécnico en Ecuador.
          </p>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100">
              <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-envelope text-white text-2xl" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Información Académica</h3>
              <p class="text-gray-600 mb-4">posgrado@fica.uce.edu.ec</p>
              <p class="text-sm text-gray-500">Horario: Lunes a Viernes, 8:00 - 17:00</p>
            </div>

            <div class="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-100">
              <div class="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-phone text-white text-2xl" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Admisión</h3>
              <p class="text-gray-600 mb-4">(02) 396-2800 ext. 123</p>
              <p class="text-sm text-gray-500">Proceso de admisión continuo</p>
            </div>
          </div>

          <a href="mailto:posgrado@fica.uce.edu.ec" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            <i class="fas fa-paper-plane" />
            Solicitar Información
          </a>
        </div>
      </div>
    </section>

    <!-- WhatsApp Button -->
    <a
      href="https://wa.me/593999072657?text=Hola,%20deseo%20información%20sobre%20la%20Maestría%20en%20Ingeniería%20Civil%20con%20mención%20en%20Ingeniería%20Geotécnica"
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <i class="fab fa-whatsapp text-2xl group-hover:animate-pulse" />
    </a>
  </div>
</template>

<script setup>
// Component logic here
</script>