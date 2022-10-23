<script lang="ts">
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
    if (name !== prevName) {
      headTexture = getOrDefault('head')
      bodyTexture = getOrDefault('body')
      handTexture = getOrDefault('hand')
      prevName = name
    }
  }
</script>

<Container>
  <Sprite texture={headTexture} {x} {y} {width} {height} />
  <Sprite texture={bodyTexture} {x} {y} {width} {height} />
  <Sprite texture={handTexture} {x} {y} {width} {height} />
</Container>
