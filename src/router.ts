import { createRouter, createWebHistory } from 'vue-router'
import MaestriaBIM from './components/bim/MaestriaBIM.vue'
import MaestriaHidraulica from './components/hidraulica/MaestriaHidraulica.vue'
import MaestriaGeotecnica from './components/geotecnica/MaestriaGeotecnica.vue'
import MaestriasSelection from './components/MaestriasSelection.vue'

const routes = [
  {
    path: '/',
    name: 'BIM',
    component: MaestriaBIM
  },
  {
    path: '/maestrias',
    name: 'Maestrias',
    component: MaestriasSelection
  },
  {
    path: '/maestria/bim',
    name: 'MaestriaBIM',
    component: MaestriaBIM
  },
  {
    path: '/maestria/hidraulica',
    name: 'MaestriaHidraulica',
    component: MaestriaHidraulica
  },
  {
    path: '/maestria/geotecnica',
    name: 'MaestriaGeotecnica',
    component: MaestriaGeotecnica
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router