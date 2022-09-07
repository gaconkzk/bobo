<script lang="ts">
  import { Sprite } from 'svelte-phaser'
  import { getContext } from 'svelte'
  export let instance = null

  const left = () => {
    if (instance) {
      instance.x -= 4
    }
  }

  const right = () => {
    if (instance) {
      instance.x += 4
    }
  }

  // const keys = [
  //   { key: 'left', instance: new LeftKey(), isDown: () => left() },
  //   { key: 'right', instance: new RightKey(), isDown: () => right() },
  // ]

  const { getWorld, getKeyboard } = getContext<SceneContext>('scene')

  const keyboard = getKeyboard()
  const world = getWorld()

  // TODO - merge if already existed
  // keyboard.addKeys(...keys.map((k) => k.instance))

  // // TODO - merge existing update event
  // const update = () => {
  //   if (keys) {
  //     keys
  //       .filter((k) => k.instance.isDown)
  //       .forEach((downed) => downed.isDown?.())
  //   }
  // }
  // // TODO - merge existing update event
  // On(world, 'update', update)
</script>

<Sprite width={400} height={300} bind:instance />
