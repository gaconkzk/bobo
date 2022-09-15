import { heads } from './head'
import { bodies } from './body'
import { hands } from './hand'

const [kunio, horibata, yoritsune, abel] = heads

const data = [
  {
    name: 'kunio',
    src: kunio,
    body: [bodies.default],
    hand: [hands.default],
    animation: ['walk'],
  },
  {
    name: 'horibata',
    src: horibata,
    body: [bodies.default],
    hand: [hands.default],
    animation: ['walk'],
  },
  {
    name: 'yoritsune',
    src: yoritsune,
    body: [bodies.default],
    hand: [hands.default],
    animation: ['walk'],
  },
  {
    name: 'abel',
    src: abel,
    body: [bodies.abel],
    hand: [hands.abel],
    animation: ['idle'],
  },
]

export { data }
