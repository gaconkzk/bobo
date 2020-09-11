module.exports = {
  "extends": "stylelint-config-recommended",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "/\:global/",
          "/apply/",
          "variants",
          "responsive",
          "screen"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "block-no-empty": null,
    "unit-whitelist": [
      "em",
      "rem",
      "s",
      "px",
      "%",
      "deg",
    ]
  },
  "declaration-block-trailing-semicolon": null,
  "no-descending-specificity": null,
  "ignoreFiles": [
    "public/index.css"
  ]
}
