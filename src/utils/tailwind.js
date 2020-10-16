// Getting and export necessary tailwind value for reference in javascript

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export const colors = fullConfig.theme.colors