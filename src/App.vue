<script setup>
import HeroSection from './components/HeroSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import GraduateProfile from './components/GraduateProfile.vue' // <--- NUEVO
import CurriculumGrid from './components/CurriculumGrid.vue'
import InvestigacionTitulation from './components/InvestigacionTitulacion.vue' // <--- NUEVO
import AdmissionContact from './components/AdmissionContact.vue'
import FooterContact from './components/FooterContact.vue'
import ProgramStats from './components/ProgramStats.vue'
</script>

<template>
  <div class="bg-gray-50 text-gray-700">

    <header class="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img src="/uce2.png" alt="Logo UCE" class="h-12 w-auto object-contain" />
            <div>
              <h1 class="font-bold text-blue-900 uppercase">Universidad Central</h1>
              <h2 class="text-xs font-semibold text-gray-600 uppercase">Del Ecuador</h2>
            </div>
          </div>
          <a href="#contacto" class="bg-blue-900 text-white px-5 py-2 rounded-lg text-sm font-bold">POSTULAR</a>
        </div>
      </div>
    </header>

    <main>
      <HeroSection />

      <WhyUsSection />

      <GraduateProfile />

      <CurriculumGrid id="malla" />

      <InvestigacionTitulation />
      <ProgramStats />

      <AdmissionContact id="contacto" />
      <FooterContact />
    </main>


  </div>
</template>