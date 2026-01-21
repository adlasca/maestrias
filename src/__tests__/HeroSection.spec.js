import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '@/components/HeroSection.vue'

describe('HeroSection', () => {
  it('renders the hero section with correct title', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('MAESTRÍA EN INGENIERÍA DE LA CONSTRUCCIÓN')
  })

  it('contains the BIM mention', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('MENCIÓN GESTIÓN ESTRATÉGICA BIM')
  })

  it('has the background image', () => {
    const wrapper = mount(HeroSection)
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toContain('unsplash.com')
  })

  it('displays program statistics', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('30')
    expect(wrapper.text()).toContain('Créditos Académicos')
    expect(wrapper.text()).toContain('1 Año')
    expect(wrapper.text()).toContain('Duración Estimada')
  })
})
