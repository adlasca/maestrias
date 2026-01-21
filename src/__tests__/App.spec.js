import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the main application', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('MAESTRÍA EN INGENIERÍA DE LA CONSTRUCCIÓN')
  })

  it('contains the header with UCE logo', () => {
    const wrapper = mount(App)
    const header = wrapper.find('header')
    expect(header.exists()).toBe(true)
    expect(header.text()).toContain('Posgrados')
  })

  it('has the main sections', () => {
    const wrapper = mount(App)
    // Check if the components are rendered by looking for their content or specific classes
    expect(wrapper.html()).toContain('MAESTRÍA EN INGENIERÍA') // HeroSection content
    expect(wrapper.html()).toContain('BIM') // BimDimensions content
    expect(wrapper.html()).toContain('Perfil') // ProfilesSection content
  })
})
