import { fetchImg } from '$utils/images'

const hand0 = fetchImg('imgs/sprites/walk/default/hand_1.png')
const hand1 = fetchImg('imgs/sprites/walk/default/hand_2.png')
const hand2 = fetchImg('imgs/sprites/walk/default/hand_3.png')
const hand3 = fetchImg('imgs/sprites/walk/default/hand_4.png')

const body0 = fetchImg('imgs/sprites/walk/default/body_1.png')
const body1 = fetchImg('imgs/sprites/walk/default/body_2.png')
const body2 = fetchImg('imgs/sprites/walk/default/body_3.png')
const body3 = fetchImg('imgs/sprites/walk/default/body_4.png')

const bodies = [body0, body1, body2, body3]
const hands = [hand0, hand1, hand2, hand3]

export const walk = {
  default: [, bodies, hands],
}

const cache_walk = {}

export const WALK_FRAMES_LENGTH = 4

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
