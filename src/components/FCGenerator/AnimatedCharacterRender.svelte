<script lang="ts">
  import { ColorReplaceFilter } from '@pixi/filter-color-replace'
  import * as PIXI from 'pixi.js'
  import { getResource } from '$components/PIXI/Assets.svelte'
  import Container from '$components/PIXI/Container.svelte'

  import { CharacterAction } from '$components/FCGenerator/types'
  import { getAnimationSpriteNames } from './sprites'
  import AnimatedSprite from '$components/PIXI/AnimatedSprite.svelte'

  export let partIdx = []
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
  export let skin: number = undefined

  let container: PIXI.Container

  let [head, body, hand] = partIdx

  let headTextures = getAnimationSpriteNames(
    character,
    head,
    'head',
    action.name
  ).map((sn) => getResource(sn))
  let bodyTextures = getAnimationSpriteNames(
    character,
    body,
    'body',
    action.name
  ).map((sn) => getResource(sn))
  let handTextures = getAnimationSpriteNames(
    character,
    hand,
    'hand',
    action.name
  ).map((sn) => getResource(sn))

  let headSprite, bodySprite, handSprite

  let prevPartIdx = []
  let prevCharacter = null
  $: {
    if (character !== prevCharacter || action !== prevCharacter) {
      let [head, body, hand] = partIdx
      const headNames = getAnimationSpriteNames(
        character,
        head,
        'head',
        action.name
      )
      console.log('headname', headNames)
      headTextures = headNames.map((sn) => getResource(sn))
      bodyTextures = getAnimationSpriteNames(
        character,
        body,
        'body',
        action.name
      ).map((sn) => getResource(sn))
      handTextures = getAnimationSpriteNames(
        character,
        hand,
        'hand',
        action.name
      ).map((sn) => getResource(sn))
      prevPartIdx = partIdx
      prevCharacter = action
    }
  }

  $: {
    headSprite?.play()
    bodySprite?.play()
    handSprite?.play()
  }

  $: filters =
    !!skin && !!character.originalSkin
      ? [new ColorReplaceFilter(character.originalSkin, skin, 0.1)]
      : undefined
</script>

<Container bind:instance={container} {filters}>
  <AnimatedSprite
    textures={headTextures}
    {x}
    {y}
    {width}
    {height}
    playing={true}
    animationSpeed={action.speed}
    bind:instance={headSprite}
  />
  <AnimatedSprite
    textures={bodyTextures}
    {x}
    {y}
    {width}
    {height}
    playing={true}
    animationSpeed={action.speed}
    bind:instance={bodySprite}
  />
  <AnimatedSprite
    textures={handTextures}
    {x}
    {y}
    {width}
    {height}
    playing={true}
    animationSpeed={action.speed}
    bind:instance={handSprite}
  />
</Container>
