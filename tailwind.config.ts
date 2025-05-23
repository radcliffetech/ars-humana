import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans Devanagari',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        text: {
          DEFAULT: '#374151', // gray-700
          muted: '#6b7280', // gray-500
        },
        brand: {
          primary: '#6b7280', // gray-500
          dark: 'rgba(9, 22, 41, 0.5)', // gray-700
          light: '#eeeeee', // gray-100
        },
        divider: '#d1d5db', // gray-300
        muted: '#e5e7eb', // gray-200
        surface: {
          dark: '#111827', // gray-900
          light: '#ffffff', // white
          muted: '#f3f4f6', // gray-100
        },
        overlay: {
          dark: 'rgba(55, 65, 81, १)', // semi-transparent gray-700
        },
        'surface-muted': '#f9fafb', // gray-50
        'on-dark': '#f3f4f6', // gray-100
        'surface-dark': '#1f2937', // gray-800
        'hover-dark': '#374151', // gray-700
        'active-dark': '#4b5563', // gray-600
      },
    },
    typography: (theme: any) => ({
      DEFAULT: {
        css: {
          h2: { marginBottom: theme('spacing.4') },
          h3: { marginBottom: theme('spacing.3') },
          h4: { marginBottom: theme('spacing.2') },
        },
      },
    }),
  },
  plugins: [],
} satisfies Config;
