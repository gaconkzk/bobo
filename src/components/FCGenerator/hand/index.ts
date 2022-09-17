import { fetchImg } from '$utils/images'

const defaultImg = fetchImg('imgs/sprites/hand/default.png')
const abel = fetchImg('imgs/sprites/hand/abel.png')

export const hands = {
  default: defaultImg,
  abel,
}
