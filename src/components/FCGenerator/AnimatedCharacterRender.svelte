<script lang="ts">
  import { ColorReplaceFilter } from '@pixi/filter-color-replace'
  import * as PIXI from 'pixi.js'
  import { getResource } from '$components/PIXI/Assets.svelte'
  import Container from '$components/PIXI/Container.svelte'

  import { CharacterAction } from '$components/FCGenerator/types'
  import { getAnimationSpriteNames } from './sprites'
  import AnimatedSprite from '$components/PIXI/AnimatedSprite.svelte'

  export let name = []
  export let character
  export let action: { name: CharacterAction; length: number; speed: number } =
    {
      name: CharacterAction.DEFAULT,
      length: 1,
      speed: 0.4,
    }

  export let x: number = 0
  export let y: number = 0
  export let width: number
  export let height: number
  export let originalSkin: number
  export let skin: number = undefined

  let container: PIXI.Container

  let [head, body, hand] = name

  let headTextures = getAnimationSpriteNames(head, 'head', action.name).map(
    (sn) => getResource(sn)
  )
  let bodyTextures = getAnimationSpriteNames(body, 'body', action.name).map(
    (sn) => getResource(sn)
  )
  let handTextures = getAnimationSpriteNames(hand, 'hand', action.name).map(
    (sn) => getResource(sn)
  )

  let headSprite, bodySprite, handSprite

  let prevName = []
  let prevAction = null
  $: {
    if (name !== prevName || action !== prevAction) {
      let [head, body, hand] = name
      headTextures = getAnimationSpriteNames(head, 'head', action.name).map(
        (sn) => getResource(sn)
      )
      bodyTextures = getAnimationSpriteNames(body, 'body', action.name).map(
        (sn) => getResource(sn)
      )
      handTextures = getAnimationSpriteNames(hand, 'hand', action.name).map(
        (sn) => getResource(sn)
      )
      prevName = name
      prevAction = action
    }
  }

  $: {
    headSprite?.play()
    bodySprite?.play()
    handSprite?.play()
  }

  $: filters =
    !!skin && !!originalSkin
      ? [new ColorReplaceFilter(originalSkin, skin, 0.1)]
      : undefined
</script>

<Container bind:instance={container} {filters}>
  <AnimatedSprite
    textures={headTextures}
    {x}
    {y}
    {width}
    {height}
    animationSpeed={action.speed}
    bind:instance={headSprite}
  />
  <AnimatedSprite
    textures={bodyTextures}
    {x}
    {y}
    {width}
    {height}
    animationSpeed={action.speed}
    bind:instance={bodySprite}
  />
  <AnimatedSprite
    textures={handTextures}
    {x}
    {y}
    {width}
    {height}
    animationSpeed={action.speed}
    bind:instance={handSprite}
  />
</Container>
