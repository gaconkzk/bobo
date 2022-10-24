import { CharacterAction } from '$components/FCGenerator/types'

const data = [
  {
    name: 'kunio',
    head: ['kunio'],
    body: ['default'],
    hand: ['default'],
    animation: ['walk', 'run'],
  },
  {
    name: 'horibata',
    head: ['horibata'],
    body: ['default'],
    hand: ['default'],
    animation: ['walk', 'run'],
  },
  {
    name: 'yoritsune',
    head: ['yoritsune'],
    body: ['default'],
    hand: ['default'],
    animation: ['walk', 'run'],
  },
  {
    name: 'abel',
    head: ['abel'],
    body: ['abel'],
    hand: ['abel'],
    animation: ['idle'],
  },
]

// those using default bodies and hands
const isDefault = (name) => {
  const nekketsu = ['kunio', 'horibata', 'yoritsune']
  return nekketsu.includes(name)
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
    if (data.some((c) => c.name === name && c.animation.includes(action))) {
      return `${tName}_${part}_${action}_${frame}`
    } else {
      return `${tName}_${part}`
    }
  }
}
// default textures - usually using for stand
export const sprites = [
  ['brain', '/imgs/brain.png'],
  [['abel_head'], '/imgs/sprites/head/abel.png'],
  [['abel_body'], '/imgs/sprites/body/abel.png'],
  [['abel_hand'], '/imgs/sprites/hand/abel.png'],
  [
    [
      'kunio_head',
      'kunio_head_run_0',
      'kunio_head_run_1',
      'kunio_head_walk_0',
      'kunio_head_walk_1',
      'kunio_head_walk_2',
      'kunio_head_walk_3',
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
    ],
    '/imgs/sprites/head/yoritsune.png',
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
  [['abel_hand_idle_0'], '/imgs/sprites/idle/abel/hand_abel_1.png'],
  [['abel_head_idle_0'], '/imgs/sprites/idle/abel/head_abel_1.png'],
  [['abel_body_idle_0'], '/imgs/sprites/idle/abel/body_abel_1.png'],
  [['abel_hand_idle_1'], '/imgs/sprites/idle/abel/hand_abel_2.png'],
  [['abel_head_idle_1'], '/imgs/sprites/idle/abel/head_abel_2.png'],
  [['abel_body_idle_1'], '/imgs/sprites/idle/abel/body_abel_2.png'],
]
