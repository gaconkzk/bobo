<script lang="ts">
  import { ColorReplaceFilter } from '@pixi/filter-color-replace'
  import * as PIXI from 'pixi.js'
  import Sprite from '$components/PIXI/Sprite.svelte'
  import { getResource } from '$components/PIXI/Assets.svelte'
  import Container from '$components/PIXI/Container.svelte'
  import { CharacterAction } from './types'

  export let name = []
  export let character
  export let action: CharacterAction
  export let frame = 0

  export let x: number = 0
  export let y: number = 0
  export let width: number
  export let height: number
  export let originalSkin: number = undefined
  export let skin: number = undefined

  let container: PIXI.Container

  let headTexture = getOrDefault('head')
  let bodyTexture = getOrDefault('body')
  let handTexture = getOrDefault('hand')
  function getOrDefault(part: 'head' | 'body' | 'hand') {
    const partName =
      part === 'head' ? name[0] : part === 'body' ? name[1] : name[2]
    const sprite_name =
      frame && character?.animation.some((a) => a.name === action)
        ? `${partName}_${part}_${action}_${frame}`
        : `${partName}_${part}`
    return getResource(sprite_name)
  }

  let prevName = []
  $: {
    if (name !== prevName) {
      headTexture = getOrDefault('head')
      bodyTexture = getOrDefault('body')
      handTexture = getOrDefault('hand')
      prevName = name
    }
  }
  $: filters =
    !!skin && !!originalSkin
      ? [new ColorReplaceFilter(originalSkin, skin, 0.1)]
      : undefined
</script>

<Container bind:instance={container} {filters}>
  <Sprite texture={headTexture} {x} {y} {width} {height} />
  <Sprite texture={bodyTexture} {x} {y} {width} {height} />
  <Sprite texture={handTexture} {x} {y} {width} {height} />
</Container>
