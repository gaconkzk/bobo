export type CharacterType = {
  url: string
  speed: number
  direction: 'left' | 'right'
}

export const CharacterEnum = {
  CAT: {
    url: 'imgs/cat-right.gif',
    speed: 10,
    direction: 'right',
  } as CharacterType,
}
