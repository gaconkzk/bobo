import { heads } from './head'
import { bodies } from './body'
import { hands } from './hand'
import { CharacterAction } from './types'
import { IDLE_FRAMES_LENGTH } from './idle'
import { WALK_FRAMES_LENGTH } from './walk'

const [kunio, horibata, yoritsune, abel] = heads

const data: PromiseSprite[] = [
  {
    name: 'kunio',
    head: kunio,
    body: bodies.default,
    hand: hands.default,
    animation: ['walk'],
  },
  {
    name: 'horibata',
    head: horibata,
    body: bodies.default,
    hand: hands.default,
    animation: ['walk'],
  },
  {
    name: 'yoritsune',
    head: yoritsune,
    body: bodies.default,
    hand: hands.default,
    animation: ['walk'],
  },
  {
    name: 'abel',
    head: abel,
    body: bodies.abel,
    hand: hands.abel,
    animation: ['idle'],
  },
]

const actionSupported = (char: String, action: CharacterAction): boolean => {
  return data.some((c) => c.name === char && c.animation.includes(action))
}

export { data, actionSupported }

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

export const getFramesLength = (action: CharacterAction) => {
  switch (action) {
    case CharacterAction.IDLE:
      return IDLE_FRAMES_LENGTH
    case CharacterAction.WALK:
      return WALK_FRAMES_LENGTH
    default:
      return 1
  }
}
