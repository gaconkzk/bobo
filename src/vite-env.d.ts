/// <reference types="svelte" />
/// <reference types="vite/client" />

declare type Keyboard = import('@phaserjs/phaser/input/keyboard').Keyboard

declare module 'yrv'

interface Window {
  isMobileOrTablet(): boolean
  opera: any
}

interface String {
  replaceAt(index: number, replacement: string)
}

type CodeKeyType = {
  keyCode: number | string
  data?: string
  top?: string
  bottom?: string
  right?: boolean
  left?: boolean
  command?: boolean
  arrow?: boolean
  backspace?: boolean
  tab?: boolean
  capslck?: boolean
  homekey?: boolean
  enter?: boolean
  shift?: boolean
  space?: true
  up?: true
  down?: true
}

type TypingEvent = {
  keyCode?: number
  key?: string
  location?: number
  ctrlKey: boolean
  altKey: boolean
  shiftKey: boolean
  metaKey: boolean
}

type SceneContext = {
  getScene: () => any
  getWorld: () => any
  getLoader: () => any
  getKeyboard: () => Keyboard
}
