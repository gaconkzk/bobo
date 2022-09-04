<script lang="ts">
  import { BaseWorld, StaticWorld, World } from '@phaserjs/phaser/world'
  import type { Game } from '@phaserjs/phaser'
  import { Scene } from '@phaserjs/phaser/scenes'
  import { Loader } from '@phaserjs/phaser/loader'
  import { ImageFile } from '@phaserjs/phaser/loader/files'
  import { Sprite } from '@phaserjs/phaser/gameobjects'
  import { getContext, onMount, setContext } from 'svelte'
  import { removeUndefined } from '$utils/remove-undefined'
  import { AddChild, RemoveChild } from '@phaserjs/phaser/display'
  import { getResource } from '$utils/phaserResources'
  import { Key, Keyboard } from '@phaserjs/phaser/input/keyboard'
  import { LeftKey, RightKey } from '@phaserjs/phaser/input/keyboard/keys'
  import { On } from '@phaserjs/phaser/events'

  export let type: 'static' | 'base' | undefined = 'static'
  /**
   * The unique key of this Scene. Must be unique within the entire Game instance.
   *
   * #required
   * @type {string}
   */
  export let key: string

  export let resources: {
    key: string
    url: string
  }[] = []

  export let keys: { key: string; instance: Key; isDown: () => void }[] = []

  let world: StaticWorld | BaseWorld | World
  let instance: Scene
  let keyboard: Keyboard

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

    if (keys) {
      keyboard = new Keyboard()
      keyboard.addKeys(...keys.map((k) => k.instance))
    }
  }

  export let preload: { url: string; key: string } = undefined

  let loader: Loader
  let loading = true
  const pref = async () => {
    loader = new Loader()

    if (preload && world) {
      loader.add(ImageFile(preload.key, preload.url))
    }

    loader.add(...resources.map((r) => getResource(r)))

    await loader.start()

    let logo
    if (preload && world) {
      logo = new Sprite(400, 300, preload.key)

      AddChild(world, logo)
      await setTimeout(() => {
        loading = false
        RemoveChild(world, logo)
      }, 1500)
    } else {
      loading = false
    }
  }

  onMount(async () => {
    await pref()
  })

  setContext('scene', {
    getWorld: () => world,
    getScene: () => instance,
    getLoader: () => loader,
    getKeyboard: () => keyboard,
  })
</script>

{#if loader && !loading}
  <slot />
{/if}
