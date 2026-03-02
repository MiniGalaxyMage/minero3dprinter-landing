/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#D4A017',
        secondary: '#008B8B',
        accent: '#DC143C',
        navy: '#1A1A2E',
        background: '#0D0D1A',
        surface: '#111124',
        card: '#161630',
        border: '#2A2A4A',
        light: '#F5F5F5',
        muted: '#A0A0A0',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
