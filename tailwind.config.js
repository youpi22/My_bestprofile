/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'jetbrains': ['JetBrains Mono', 'monospace']
    },
    extend: {
      animation: {
        loopL: 'loopTextLeft  4s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        loopTextLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      transitionProperty: {
        height: 'height',
      },
      colors: {
        primary: '#fdd600',
        orange: '#ed7c50',
        darkOrange: '#d96d43',
        darkGrey: '#595959',
        lightGrey: '#8a8a8a',
        green: '#59c378',
        purple: '#8566f6',
        turks: '#a6e2e3',
        red: '#e46060',
        black: '#120e16',
        white: '#f5f4f5',
      },
    },
  },
  plugins: [],
};
