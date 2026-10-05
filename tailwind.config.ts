import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08111f',
        panel: '#101d31',
        cyan: '#6ee7f9',
        lime: '#c9f27c',
      },
      boxShadow: {
        glow: '0 0 50px rgba(110, 231, 249, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config