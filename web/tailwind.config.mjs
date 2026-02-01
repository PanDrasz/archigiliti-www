/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D97706',
          dark: '#B45309',
          light: '#FCD34D',
        },
        neutral: {
          dark: '#1C1917',
          mid: '#57534E',
          light: '#FAFAF9',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#292524',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
