import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1216px',
      },
      backgroundImage: {
        brand: 'var(--brand-gradient)',
        'brand-soft': 'var(--brand-pink-violet)',
      },
      boxShadow: {
        soft: '0 8px 22px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        devstack: {
          primary: '#db2777',
          secondary: '#7c3aed',
          accent: '#ff5722',
          neutral: '#0f172a',
          'base-100': '#ffffff',
          info: '#0ea5e9',
          success: '#16a34a',
          warning: '#f59e0b',
          error: '#dc2626',
        },
      },
    ],
  },
}
