import { fetchImg } from '$utils/images'

const defaultImg = fetchImg('imgs/sprites/body/default.png?url')
const abel = fetchImg('imgs/sprites/body/abel.png?url')

export const bodies = {
  default: defaultImg,
  abel: abel,
}
