import { CharacterAction } from '$components/FCGenerator/types'
import abel from './abel'
import { animations } from './common/animation'
import horibata from './horibata'
import kunio from './kunio'
import yoritsune from './yoritsune'

export const data = [kunio, horibata, yoritsune, abel]

// those using default bodies and hands
const isDefault = (name) => {
  const nekketsu = data.filter((c) => c.from === 'nekketsu').map((c) => c.name)
  return nekketsu.includes(name)
}

export const actionSupported = (
  char: String,
  action: CharacterAction
): boolean => {
  return data.some(
    (c) => c.name === char && c.animation.some((a) => a.name === action)
  )
}

export function getAnimationSpriteNames(
  character: any,
  characterPartIdx: number,
  part: 'head' | 'body' | 'hand',
  action: CharacterAction
): string[] {
  const frameLength = animations.find((a) => a.name === action)?.length ?? 1
  const sprNames = []
  for (let i = 0; i < frameLength; i++) {
    const sprite_name = getSpriteName(
      character[part][characterPartIdx],
      part,
      action,
      i
    )
    sprNames.push(sprite_name)
  }
  return sprNames
}

export const getSpriteName = (
  name: string,
  part: string,
  action?: CharacterAction,
  frame?: number
) => {
  const tName = isDefault(name) && part !== 'head' ? 'default' : name
  if (!action) {
    return `${tName}_${part}`
  } else {
    if (action && frame >= 0) {
      return `${tName}_${part}_${action}_${frame}`
    } else {
      return `${tName}_${part}`
    }
  }
}

export const heads = () => data.flatMap((c) => c.head)

// default textures - usually using for stand
export const sprites: AssetResource[] = [
  ['brain', '/imgs/brain.png'],
  [['abel_head'], '/imgs/sprites/head/abel.png'],
  [['abel_body'], '/imgs/sprites/body/abel.png'],
  [['abel_hand'], '/imgs/sprites/hand/abel.png'],
  [['abel1_body'], '/imgs/sprites/body/abel1.png'],
  [['abel1_hand'], '/imgs/sprites/hand/abel1.png'],
  [
    [
      'kunio_head',
      'kunio_head_run_0',
      'kunio_head_run_1',
      'kunio_head_walk_0',
      'kunio_head_walk_1',
      'kunio_head_walk_2',
      'kunio_head_walk_3',
      'kunio_head_kick_0',
      'kunio_head_knee_0',
    ],
    '/imgs/sprites/head/kunio.png',
  ],
  [
    [
      'horibata_head',
      'horibata_head_run_0',
      'horibata_head_run_1',
      'horibata_head_walk_0',
      'horibata_head_walk_1',
      'horibata_head_walk_2',
      'horibata_head_walk_3',
      'horibata_head_kick_0',
      'horibata_head_knee_0',
    ],
    '/imgs/sprites/head/horibata.png',
  ],
  [
    [
      'yoritsune_head',
      'yoritsune_head_run_0',
      'yoritsune_head_run_1',
      'yoritsune_head_walk_0',
      'yoritsune_head_walk_1',
      'yoritsune_head_walk_2',
      'yoritsune_head_walk_3',
      'yoritsune_head_kick_0',
      'yoritsune_head_knee_0',
    ],
    '/imgs/sprites/head/yoritsune.png',
  ],
  [
    ['kunio_head_kick_1', 'kunio_head_knee_1'],
    '/imgs/sprites/headside/kunio.png',
  ],
  [
    ['horibata_head_kick_1', 'horibata_head_knee_1'],
    '/imgs/sprites/headside/horibata.png',
  ],
  [
    ['yoritsune_head_kick_1', 'yoritsune_head_knee_1'],
    '/imgs/sprites/headside/yoritsune.png',
  ],
  [['default_body'], '/imgs/sprites/body/default.png'],
  [['default_hand'], '/imgs/sprites/hand/default.png'],
  [['default_body_walk_0'], '/imgs/sprites/walk/default/body_1.png'],
  [['default_hand_walk_0'], '/imgs/sprites/walk/default/hand_1.png'],
  [['default_body_walk_1'], '/imgs/sprites/walk/default/body_2.png'],
  [['default_hand_walk_1'], '/imgs/sprites/walk/default/hand_2.png'],
  [['default_body_walk_2'], '/imgs/sprites/walk/default/body_3.png'],
  [['default_hand_walk_2'], '/imgs/sprites/walk/default/hand_3.png'],
  [['default_body_walk_3'], '/imgs/sprites/walk/default/body_4.png'],
  [['default_hand_walk_3'], '/imgs/sprites/walk/default/hand_4.png'],
  [['default_body_run_0'], '/imgs/sprites/run/default/body_1.png'],
  [['default_hand_run_0'], '/imgs/sprites/run/default/hand_1.png'],
  [['default_body_run_1'], '/imgs/sprites/run/default/body_2.png'],
  [['default_hand_run_1'], '/imgs/sprites/run/default/hand_2.png'],
  [['default_body_kick_0'], '/imgs/sprites/kick/default/body_1.png'],
  [['default_hand_kick_0'], '/imgs/sprites/kick/default/hand_1.png'],
  [['default_body_kick_1'], '/imgs/sprites/kick/default/body_2.png'],
  [['default_hand_kick_1'], '/imgs/sprites/kick/default/hand_2.png'],
  [['default_body_knee_0'], '/imgs/sprites/knee/default/body_1.png'],
  [['default_hand_knee_0'], '/imgs/sprites/knee/default/hand_1.png'],
  [['default_body_knee_1'], '/imgs/sprites/knee/default/body_2.png'],
  [['default_hand_knee_1'], '/imgs/sprites/knee/default/hand_2.png'],
  [['abel_hand_idle_0'], '/imgs/sprites/idle/abel/hand_abel_1.png'],
  [['abel_head_idle_0'], '/imgs/sprites/idle/abel/head_abel_1.png'],
  [['abel_body_idle_0'], '/imgs/sprites/idle/abel/body_abel_1.png'],
  [['abel_hand_idle_1'], '/imgs/sprites/idle/abel/hand_abel_2.png'],
  [['abel_head_idle_1'], '/imgs/sprites/idle/abel/head_abel_2.png'],
  [['abel_body_idle_1'], '/imgs/sprites/idle/abel/body_abel_2.png'],
  [['abel1_hand_idle_0'], '/imgs/sprites/idle/abel1/hand_abel1_1.png'],
  [['abel1_head_idle_0'], '/imgs/sprites/idle/abel1/head_abel1_1.png'],
  [['abel1_body_idle_0'], '/imgs/sprites/idle/abel1/body_abel1_1.png'],
  [['abel1_hand_idle_1'], '/imgs/sprites/idle/abel1/hand_abel1_2.png'],
  [['abel1_head_idle_1'], '/imgs/sprites/idle/abel1/head_abel1_2.png'],
  [['abel1_body_idle_1'], '/imgs/sprites/idle/abel1/body_abel1_2.png'],
]
