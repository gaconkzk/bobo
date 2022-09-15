import head from './head_abel_1.png'
import body from './body_abel_1.png'
import hand from './hand_abel_1.png'
import head1 from './head_abel_2.png'
import body1 from './body_abel_2.png'
import hand1 from './hand_abel_2.png'

const heads = [head, head1]
const bodys = [body, body1]
const hands = [hand, hand1]

export const idle = [heads, bodys, hands]

export const makeIdle = (name: string, head, hand, body) => {
  return [idle, 2]
}
