/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#050914',
          800: '#0b1224',
          700: '#0f1b33',
        },
        gold: {
          100: '#f8e9c6',
          300: '#f1d288',
          500: '#d4af37',
          600: '#b9931f',
        },
        sand: '#f5f0e6',
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      boxShadow: {
        glow: '0 20px 70px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'grid-dots':
          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1.5px)',
      },
    },
  },
  plugins: [],
}

