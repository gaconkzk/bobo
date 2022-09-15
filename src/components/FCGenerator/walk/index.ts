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

export const makeWalk = (
  name: string,
  head: string,
  hand: string,
  body: string
) => {
  if (!cache_walk[name]) {
    const heads = [head, head, head, head]
    const hands = [hand, hand, hand, hand]
    const bodies = [body, body1, body2, body3]
    cache_walk[name] = [[heads, bodies, hands], 4]
  }

  return cache_walk[name]
}
