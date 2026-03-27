/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — driven by CSS variables so they flip in dark mode
        page:    'var(--color-bg)',
        page2:   'var(--color-bg2)',
        surface: 'var(--color-surface)',
        ink:     'var(--color-ink)',
        ink2:    'var(--color-ink2)',
        ink3:    'var(--color-ink3)',
        line:        'var(--color-border)',
        'line-strong': 'var(--color-border2)',
        // Brand colors — also CSS-variable-driven so light/dark variants auto-switch
        coral: { DEFAULT: 'var(--color-coral)', light: 'var(--color-coral-light)' },
        sage:  { DEFAULT: 'var(--color-sage)',  light: 'var(--color-sage-light)'  },
        lav:   { DEFAULT: 'var(--color-lav)',   light: 'var(--color-lav-light)'   },
        // Static base
        cream: '#FAF8F4',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans:  ['DM Sans', 'sans-serif'],
        mono:  ['DM Mono', 'monospace'],
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':       { opacity: '0.65', transform: 'scale(0.82)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-6px)' },
        },
        'h-in': {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-green': 'pulse-green 2.2s ease infinite',
        float:         'float 6s ease-in-out infinite',
        'h-in':        'h-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
