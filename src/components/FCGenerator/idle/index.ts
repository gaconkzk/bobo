import { fetchImg } from '$utils/images'
const abel_head0 = fetchImg('imgs/sprites/idle/abel/head_abel_1.png')
const abel_body0 = fetchImg('imgs/sprites/idle/abel/body_abel_1.png')
const abel_hand0 = fetchImg('imgs/sprites/idle/abel/hand_abel_1.png')
const abel_head1 = fetchImg('imgs/sprites/idle/abel/head_abel_2.png')
const abel_body1 = fetchImg('imgs/sprites/idle/abel/body_abel_2.png')
const abel_hand1 = fetchImg('imgs/sprites/idle/abel/hand_abel_2.png')
const abel_heads = [abel_head0, abel_head1]
const abel_bodies = [abel_body0, abel_body1]
const abel_hands = [abel_hand0, abel_hand1]

export const IDLE_FRAMES_LENGTH = 2

const cache_idle = {}

export const idle = {
  abel: [abel_heads, abel_bodies, abel_hands],
}

export const makeIdle = (character: Sprite, animation: any) => {
  if (!cache_idle[character.name]) {
    const { name } = character
    const heads = [...animation[0]] // walk not change head
    const bodies = [...animation[1]] // getting body from animation
    const hands = [...animation[2]] // getting hand from animation
    cache_idle[name] = [[heads, bodies, hands], IDLE_FRAMES_LENGTH]
  }

  return cache_idle[character.name]
}
