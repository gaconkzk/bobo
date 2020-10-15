module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      height: {
        '1/2': '50vh',
      }
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  separator: "_",
};
