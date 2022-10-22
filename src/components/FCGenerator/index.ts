import { heads } from './head'
import { bodies } from './body'
import { hands } from './hand'

const [kunio, horibata, yoritsune, abel] = heads

const data: PromiseSprite[] = [
  {
    name: 'kunio',
    head: kunio,
    body: bodies.default,
    hand: hands.default,
    animation: ['walk', 'idle'],
  },
  {
    name: 'horibata',
    head: horibata,
    body: bodies.default,
    hand: hands.default,
    animation: ['walk', 'idle'],
  },
  {
    name: 'yoritsune',
    head: yoritsune,
    body: bodies.default,
    hand: hands.default,
    animation: ['walk', 'idle'],
  },
  {
    name: 'abel',
    head: abel,
    body: bodies.abel,
    hand: hands.abel,
    animation: ['idle'],
  },
]

export { data }

export async function processPromiseSprite(
  spr: PromiseSprite
): Promise<Sprite> {
  let head = await spr.head
  let body = await spr.body
  let hand = await spr.hand

  return {
    ...spr,
    head,
    body,
    hand,
  }
}
