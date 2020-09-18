module.exports = {
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {},
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
