<script lang="ts">
  import { ColorReplaceFilter } from '@pixi/filter-color-replace'
  import * as PIXI from 'pixi.js'
  import Sprite from '$components/PIXI/Sprite.svelte'
  import { getResource } from '$components/PIXI/Assets.svelte'
  import Container from '$components/PIXI/Container.svelte'

  import { actionSupported } from '$components/FCGenerator'
  import { CharacterAction } from '$components/FCGenerator/types'

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
    let txt
    if (actionSupported(name, action)) {
      txt = getResource(`${name}_${part}_${action}_${frame}`)
    } else {
      txt = getResource(`${name}_${part}_${action}_default`)
    }

    return txt
  }

  let prevName = ''
  $: {
    console.log('name', name)
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
