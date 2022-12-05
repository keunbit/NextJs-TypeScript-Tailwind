import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
export const content = ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './layouts/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
};
export const darMode = 'media';
export const plugins = [
  plugin(function ({ addComponents, theme }) {
    const screens = theme('screens', {});
    addComponents([
      {
        '.container': { width: '100%' },
      },
      {
        [`@media (min-width: ${screens.sm})`]: {
          '.container': {
            'max-width': '640px',
          },
        },
      },
      {
        [`@media (min-width: ${screens.md})`]: {
          '.container': {
            'max-width': '768px',
          },
        },
      },
      {
        [`@media (min-width: ${screens.lg})`]: {
          '.container': {
            'max-width': '1024px',
          },
        },
      },
      {
        [`@media (min-width: ${screens.xl})`]: {
          '.container': {
            'max-width': '1280px',
          },
        },
      },
      {
        [`@media (min-width: ${screens['2xl']})`]: {
          '.container': {
            'max-width': '1280px',
          },
        },
      },
    ]);
  }),
];
