import { defineConfig, presetUno, presetWebFonts, transformerCompileClass } from 'unocss'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full']
export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins:300,400,500,600,700,800,900'
      }
    })
  ],
  safelist: [
    ...Array.from(sizes, (size) => `rounded-${size}`),
    ...Array.from({ length: 20 }, (_, i) => `top-${i + 1}`),
    ...Array.from({ length: 20 }, (_, i) => `bottom-${i + 1}`)
  ],
  theme: {
    colors: {
      primary: '#ef4444',
      secondary: '#fca5a5',
      dark: '#111827',
      'dark-gray': '#6b7280',
      stoke: '#9ca3af'
    }
  },
  transformers: [
    transformerCompileClass({
      classPrefix: ':husl:'
    })
  ]
})
