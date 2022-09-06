import head from './head_1.png?url'
import body from './body_1.png?url'
import hand from './hand_1.png?url'
import head1 from './head_2.png?url'
import body1 from './body_2.png?url'
import hand1 from './hand_2.png?url'
import head2 from './head_3.png?url'
import body2 from './body_3.png?url'
import hand2 from './hand_3.png?url'
import head3 from './head_4.png?url'
import body3 from './body_4.png?url'
import hand3 from './hand_4.png?url'

const heads = [head, head, head, head]
const bodys = [body, body1, body2, body3]
const hands = [hand, hand1, hand2, hand3]

export const walk = [heads, bodys, hands]

export const makeWalk = (head: string, hand: string) => {
  const heads = [head, head, head, head]
  const hands = [hand, hand, hand, hand]
  const bodies = [body, body1, body2, body3]

  return [heads, bodies, hands]
}
