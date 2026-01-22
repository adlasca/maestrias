import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MaestriaGeotecnica from '../components/MaestriaGeotecnica.vue'

describe('MaestriaGeotecnica', () => {
  it('renders the hero section with correct title', () => {
    const wrapper = mount(MaestriaGeotecnica)
    expect(wrapper.text()).toContain('Maestría en')
    expect(wrapper.text()).toContain('Ingeniería Civil')
    expect(wrapper.text()).toContain('Ingeniería Geotécnica')
  })

  it('contains the geotechnical mention', () => {
    const wrapper = mount(MaestriaGeotecnica)
    expect(wrapper.text()).toContain('Ingeniería Geotécnica')
    expect(wrapper.text()).toContain('Gestión de Riesgos')
  })

  it('displays program statistics', () => {
    const wrapper = mount(MaestriaGeotecnica)
    expect(wrapper.text()).toContain('30')
    expect(wrapper.text()).toContain('Créditos')
    expect(wrapper.text()).toContain('2')
    expect(wrapper.text()).toContain('Semestres')
    expect(wrapper.text()).toContain('1440')
    expect(wrapper.text()).toContain('Horas')
  })

  it('shows curriculum sections', () => {
    const wrapper = mount(MaestriaGeotecnica)
    expect(wrapper.text()).toContain('Primer Semestre')
    expect(wrapper.text()).toContain('Segundo Semestre')
    expect(wrapper.text()).toContain('Mecánica de Suelos Avanzada')
    expect(wrapper.text()).toContain('Trabajo de Titulación')
  })

  it('displays specializations', () => {
    const wrapper = mount(MaestriaGeotecnica)
    expect(wrapper.text()).toContain('Mecánica de Suelos Avanzada')
    expect(wrapper.text()).toContain('Modelación Numérica')
    expect(wrapper.text()).toContain('Gestión de Riesgos Geotécnicos')
  })
})