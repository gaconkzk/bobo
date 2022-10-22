import { fetchImg } from '$utils/images'

const head = fetchImg('imgs/sprites/walk/head_1.png')

const hand = fetchImg('imgs/sprites/walk/hand_1.png')
const hand1 = fetchImg('imgs/sprites/walk/hand_2.png')
const hand2 = fetchImg('imgs/sprites/walk/hand_3.png')
const hand3 = fetchImg('imgs/sprites/walk/hand_4.png')

const body = fetchImg('imgs/sprites/walk/body_1.png')
const body1 = fetchImg('imgs/sprites/walk/body_2.png')
const body2 = fetchImg('imgs/sprites/walk/body_3.png')
const body3 = fetchImg('imgs/sprites/walk/body_3.png')

const heads = [head, head, head, head]
const bodies = [body, body1, body2, body3]
const hands = [hand, hand1, hand2, hand3]

export const walk = {
  default: [heads, bodies, hands],
}

let cache_walk = {}

const WALK_FRAMES_LENGTH = 4

export const makeWalk = (character: Sprite) => {
  // for now only support walk for default char
  // kunio, horibata, yoritsune
  if (!['kunio', 'horibata', 'yoritsune'].includes(character.name)) {
    console.log('c', character.src)
    return [[character.src, character.body, character.hand], 1]
  }
  if (!cache_walk[character.name]) {
    const { name, src: head, body, hand } = character
    const heads = [head, head, head, head] // walk not change head
    const bodies = [...body] // getting body from animation
    const hands = [...hand] // getting hand from animation
    cache_walk[name] = [[heads, bodies, hands], WALK_FRAMES_LENGTH]
    console.log('eeeee', cache_walk[name])
  }
  console.log('cache walk', character.name, cache_walk[character.name])

  return cache_walk[character.name]
}
