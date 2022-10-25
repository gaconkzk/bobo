import { CharacterAction } from '$components/FCGenerator/types'

export const WALK_ANIMATION = {
  name: CharacterAction.WALK,
  length: 4,
  speed: 0.1,
}
export const RUN_ANIMATION = {
  name: CharacterAction.RUN,
  length: 2,
  speed: 0.12,
}
export const KICK_ANIMATION = {
  name: CharacterAction.KICK,
  length: 2,
  speed: 0.05,
}
export const IDLE_ANIMATION = {
  name: CharacterAction.IDLE,
  length: 2,
  speed: 0.09,
}

export const animations = [
  WALK_ANIMATION,
  RUN_ANIMATION,
  KICK_ANIMATION,
  IDLE_ANIMATION,
]
