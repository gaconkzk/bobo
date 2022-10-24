import { fetchImg } from '$utils/images'

const hand0 = fetchImg('imgs/sprites/run/default/hand_1.png')
const hand1 = fetchImg('imgs/sprites/run/default/hand_2.png')

const body0 = fetchImg('imgs/sprites/run/default/body_1.png')
const body1 = fetchImg('imgs/sprites/run/default/body_2.png')

const bodies = [body0, body1]
const hands = [hand0, hand1]

export const run = {
  default: [, bodies, hands],
}

const cache_run = {}

export const RUN_FRAMES_LENGTH = 2

export const makeRun = (character: Sprite, animation: any) => {
  if (!cache_run[character.name]) {
    const { name, head } = character
    const heads = [head, head, head, head] // run not change head
    const bodies = [...animation[1]] // getting body from animation
    const hands = [...animation[2]] // getting hand from animation
    cache_run[name] = [[heads, bodies, hands], RUN_FRAMES_LENGTH]
  }

  return cache_run[character.name]
}
