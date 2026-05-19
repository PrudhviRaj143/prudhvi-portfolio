/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme surfaces
        'd-bg':      '#050816',
        'd-surface': '#0c1229',
        'd-raised':  '#101832',
        'd-alt':     '#080c1e',
        // Light theme surfaces
        'l-bg':      '#f5f7ff',
        'l-surface': '#ffffff',
        'l-alt':     '#eef1ff',
        // Accent
        accent:      '#00d4ff',
        violet:      '#7c3aed',
        'violet-lt': '#9d5bf0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2.4s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-dark':  'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0,212,255,0.09) 0%, transparent 65%), radial-gradient(ellipse 55% 50% at 85% 45%, rgba(124,58,237,0.08) 0%, transparent 65%)',
        'hero-light': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
