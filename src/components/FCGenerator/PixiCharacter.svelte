<script lang="ts">
  import { ColorReplaceFilter } from '@pixi/filter-color-replace'
  import * as PIXI from 'pixi.js'
  import Sprite from '$components/PIXI/Sprite.svelte'
  import { getResource } from '$components/PIXI/Assets.svelte'
  import Container from '$components/PIXI/Container.svelte'

  import { actionSupported } from '$components/FCGenerator'
  import { CharacterAction } from '$components/FCGenerator/types'
  import { getSpriteName } from './sprites'

  export let name = ''
  export let action: CharacterAction = CharacterAction.DEFAULT
  export let frame = 0

  export let x: number = 0
  export let y: number = 0
  export let width: number
  export let height: number

  let container: PIXI.Container

  let headTexture = getOrDefault('head')
  let bodyTexture = getOrDefault('body')
  let handTexture = getOrDefault('hand')
  function getOrDefault(part: 'head' | 'body' | 'hand') {
    const sprite_name = getSpriteName(name, part, action, frame)
    return getResource(sprite_name)
  }

  let prevName = ''
  $: {
    if (name !== prevName) {
      headTexture = getOrDefault('head')
      bodyTexture = getOrDefault('body')
      handTexture = getOrDefault('hand')
      prevName = name
    }
  }
</script>

<Container
  bind:instance={container}
  filters={[new ColorReplaceFilter(0xee7f6a, 0x00ff00, 0.1)]}
>
  <Sprite texture={headTexture} {x} {y} {width} {height} />
  <Sprite texture={bodyTexture} {x} {y} {width} {height} />
  <Sprite texture={handTexture} {x} {y} {width} {height} />
</Container>
