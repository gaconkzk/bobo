<script lang="ts">
  import { CreateAnimationFromAtlas, Play } from '@phaserjs/phaser/animation'

  import { AddChildren } from '@phaserjs/phaser/display'
  import { AnimatedSprite, Sprite } from '@phaserjs/phaser/gameobjects'
  import { getContext } from 'svelte'

  export let width: number
  export let height: number
  export let key: string
  export let frame: string | number = undefined
  export let instance: Sprite | AnimatedSprite = undefined

  export let animated: {
    frameRate?: number
    prefix?: string
    key?: string
    start?: number
    end: number
  } = undefined

  const { getWorld } = getContext<SceneContext>('scene')

  const world = getWorld()

  if (animated) {
    instance = new AnimatedSprite(width, height, key, frame)
    const animation = CreateAnimationFromAtlas({
      key: animated.key ?? `animated-${key}`,
      texture: key,
      prefix: animated.prefix ?? `__${key}_frame_`,
      end: animated.end,
      frameRate: animated.frameRate ?? 12,
    })
    Play(animation, { repeat: -1 }, instance as AnimatedSprite)
  } else {
    instance = new Sprite(width, height, key, frame)
  }

  AddChildren(world, instance)
</script>
