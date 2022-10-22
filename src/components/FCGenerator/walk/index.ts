import { fetchImg } from '$utils/images'

const head = fetchImg('imgs/sprites/walk/head_1.png')

const hand0 = fetchImg('imgs/sprites/walk/hand_1.png')
const hand1 = fetchImg('imgs/sprites/walk/hand_2.png')
const hand2 = fetchImg('imgs/sprites/walk/hand_3.png')
const hand3 = fetchImg('imgs/sprites/walk/hand_4.png')

const body0 = fetchImg('imgs/sprites/walk/body_1.png')
const body1 = fetchImg('imgs/sprites/walk/body_2.png')
const body2 = fetchImg('imgs/sprites/walk/body_3.png')
const body3 = fetchImg('imgs/sprites/walk/body_4.png')

const heads = [head, head, head, head]
const bodies = [body0, body1, body2, body3]
const hands = [hand0, hand1, hand2, hand3]

export const walk = {
  default: [heads, bodies, hands],
}

const cache_walk = {}

const WALK_FRAMES_LENGTH = 4

export const makeWalk = (character: Sprite, animation: any) => {
  if (!cache_walk[character.name]) {
    const { name, head } = character
    const heads = [head, head, head, head] // walk not change head
    const bodies = [...animation[1]] // getting body from animation
    const hands = [...animation[2]] // getting hand from animation
    cache_walk[name] = [[heads, bodies, hands], WALK_FRAMES_LENGTH]
  }

  return cache_walk[character.name]
}
