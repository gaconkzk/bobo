// const PurgeSvelte = require('purgecss-from-svelte')

const mode = process.env.NODE_ENV;
const dev = mode === "development";

// const options = {
//   content: ['./src/**/*.svelte'],
//   extractors: [
//     {
//       extractor: content => PurgeSvelte.extract(content),
//       extensions: ['svelte']
//     },
//   ],
// }

module.exports = () => ({
  plugins: [
    require("postcss-import")(),
    require("tailwindcss")(),
    // require('@fullhuman/postcss-purgecss')(options),
    require("postcss-preset-env")({
      // Full list of features: https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
      features: {
        "nesting-rules": true, // delete if you don’t want nesting (optional)
      },
    }),
    require("autoprefixer")(),
    // Minify if prod
    !dev &&
      require("cssnano")({
        preset: ["default", { discardComments: { removeAll: true } }],
      }),
  ],
});
