# Imágenes del Proyecto Maestrías

Este directorio contiene todas las imágenes SVG utilizadas en el proyecto de maestrías de la Universidad Central del Ecuador.

## 📁 Estructura de Archivos

```
public/images/
├── bim-icon.svg              # Icono principal de BIM
├── hidraulica-icon.svg       # Icono de Hidráulica
├── geotecnica-icon.svg       # Icono de Geotécnica
├── research-illustration.svg # Ilustración de investigación
├── contact-illustration.svg  # Ilustración de contacto/admisión
├── geometric-pattern.svg     # Patrón geométrico decorativo
├── background-pattern.svg    # Patrón de fondo abstracto
├── check-icon.svg            # Icono de check/éxito
├── star-icon.svg             # Icono de estrella/calificación
└── faculty/
    ├── professor-1.svg       # Avatar profesor 1 (masculino)
    ├── professor-2.svg       # Avatar profesor 2 (femenino)
    └── professor-3.svg       # Avatar profesor 3 (neutral)
```

## 🎨 Uso de las Imágenes

### Iconos de Especialidades

```vue
<img src="/images/bim-icon.svg" alt="BIM" class="w-16 h-16" />
<img src="/images/hidraulica-icon.svg" alt="Hidráulica" class="w-16 h-16" />
<img src="/images/geotecnica-icon.svg" alt="Geotécnica" class="w-16 h-16" />
```

### Avatares de Profesores

```vue
<img src="/images/faculty/professor-1.svg" alt="Profesor" class="w-12 h-12 rounded-full" />
```

### Ilustraciones

```vue
<img src="/images/research-illustration.svg" alt="Investigación" class="w-full max-w-md" />
<img src="/images/contact-illustration.svg" alt="Contacto" class="w-full max-w-lg" />
```

### Patrones de Fondo

```vue
<div class="bg-cover bg-center" style="background-image: url('/images/background-pattern.svg')">
  <!-- Contenido -->
</div>
```

### Iconos de Interacción

```vue
<img src="/images/check-icon.svg" alt="✓" class="w-6 h-6" />
<img src="/images/star-icon.svg" alt="★" class="w-6 h-6" />
```

## 🎯 Características

- **SVG Vectorial**: Todas las imágenes son escalables sin pérdida de calidad
- **Optimizadas**: Código SVG limpio y eficiente
- **Animadas**: Algunas incluyen animaciones CSS/SVG sutiles
- **Responsive**: Diseñadas para funcionar en todos los tamaños de pantalla
- **Accesibles**: Incluyen atributos alt apropiados
- **Tematizadas**: Colores consistentes con la paleta del proyecto

## 🚀 Recomendaciones de Uso

1. **Iconos**: Usa clases de Tailwind como `w-8 h-8` o `w-12 h-12`
2. **Avatares**: Agrega `rounded-full` para apariencia circular
3. **Ilustraciones**: Usa `max-w-md` o `max-w-lg` para controlar tamaño
4. **Fondos**: Utiliza como `background-image` con `bg-cover` o `bg-contain`

## 📝 Notas Técnicas

- Todas las imágenes usan gradientes CSS para mantener consistencia visual
- Los avatares están diseñados para ser reemplazados por fotos reales cuando estén disponibles
- Las ilustraciones incluyen elementos animados para mayor engagement
- Los patrones están optimizados para uso como fondos repetibles
