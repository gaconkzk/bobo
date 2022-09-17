import { heads } from './head'
import { bodies } from './body'
import { hands } from './hand'

const [kunio, horibata, yoritsune, abel] = heads

export type PromiseSprite = {
  name: string
  src: Promise<string>
  body: Promise<string>[]
  hand: Promise<string>[]
  animation: string[]
}

export type Sprite = {
  name: string
  src: string
  body: string[]
  hand: string[]
  animation: string[]
}

const data: PromiseSprite[] = [
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

export async function processPromiseSprite(
  spr: PromiseSprite
): Promise<Sprite> {
  let src = await spr.src
  let body = await Promise.all(spr.body)
  let hand = await Promise.all(spr.hand)

  return {
    ...spr,
    src,
    body,
    hand,
  }
}
