<script lang="ts">
  import { BaseWorld, StaticWorld, World } from '@phaserjs/phaser/world'
  import type { Game } from '@phaserjs/phaser'
  import { Scene } from '@phaserjs/phaser/scenes'
  import { Loader } from '@phaserjs/phaser/loader'
  import { ImageFile } from '@phaserjs/phaser/loader/files'
  import { Sprite } from '@phaserjs/phaser/gameobjects'
  import { getContext, setContext } from 'svelte'
  import { removeUndefined } from '$utils/remove-undefined'
  import { AddChild } from '@phaserjs/phaser/display'
  import { getResource } from '$utils/phaserResources'

  export let type: 'static' | 'base' | undefined = 'static'
  /**
   * The unique key of this Scene. Must be unique within the entire Game instance.
   *
   * #required
   * @type {string}
   */
  export let key: string

  let world: StaticWorld | BaseWorld | World
  let instance: Scene

  export let resources: {
    key: string
    url: string
  }[] = []

  const { getGame } = getContext<{ getGame: () => Game }>('game')
  const game = getGame()
  if (game) {
    instance = new Scene(
      removeUndefined({
        key,
        game,
      })
    )

    switch (type) {
      case 'static': {
        world = new StaticWorld(instance)
        break
      }
      case 'base': {
        world = new BaseWorld(instance)
      }
      default: {
        world = new World(instance)
      }
    }
  }

  export let preload: false | { url: string; key: string }

  let loader: Loader
  let loading = true
  const pref = async () => {
    loader = new Loader()

    if (preload && world) {
      loader.add(ImageFile(preload.key, preload.url))
    }

    loader.add(...resources.map((r) => getResource(r)))

    await loader.start()

    if (preload && world) {
      const logo = new Sprite(400, 300, preload.key)

      AddChild(world, logo)
    }
    loading = false
  }
  pref()

  setContext('scene', {
    getWorld: () => world,
    getScene: () => instance,
    getLoader: () => loader,
  })
</script>

{#if loader && !loading}
  <slot />
{/if}
