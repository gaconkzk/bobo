import {
  KICK_ANIMATION,
  KNEE_ANIMATION,
  RUN_ANIMATION,
  WALK_ANIMATION,
} from './animation'

export default {
  body: ['default'],
  hand: ['default'],
  animation: [WALK_ANIMATION, RUN_ANIMATION, KICK_ANIMATION, KNEE_ANIMATION],
  skin: 0xee7f6a,
  cloth: 0xffffff,
  from: 'nekketsu',
}

// for nekketsu walk, run - head same and don't need frame
