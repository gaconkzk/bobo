<script lang="ts">
  import { AddChildren } from '@phaserjs/phaser/display'
  import { Sprite } from '@phaserjs/phaser/gameobjects'
  import { getContext } from 'svelte'

  export let width: number
  export let height: number
  export let key: string
  export let frame: any = undefined

  const { getWorld } = getContext<SceneContext>('scene')

  const world = getWorld()

  const instance = new Sprite(width, height, key, frame)

  AddChildren(world, instance)
</script>
