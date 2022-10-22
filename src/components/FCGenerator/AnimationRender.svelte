<script context="module" lang="ts">
  export function getAnimation(action: CharacterAction, character: Sprite) {
    let heads,
      bodies,
      hands = []
    switch (action) {
      case CharacterAction.WALK:
        return makeWalk(character)
      case CharacterAction.IDLE:
      default:
        const head0 = character.src
        const body0 = character.body[0]
        const hand0 = character.hand[0]

        heads = [head0]
        bodies = [body0]
        hands = [hand0]

        return [[[heads, bodies, hands], 1]]
    }
  }
</script>

<script lang="ts">
  import { getCharacters } from '$components/FCGenerator/ImgsProvider.svelte'
  import { CharacterAction } from '$components/FCGenerator/types'
  import { onDestroy, onMount } from 'svelte'
  import { makeWalk } from './walk'

  export let char: string
  export let action: CharacterAction.WALK
  let cls = ''
  export { cls as class }

  const chars = getCharacters()
  let animation
  let currentFrame = 0

  let heads, bodies, hands
  let interv

  onDestroy(() => {
    if (interv) {
      clearInterval(interv)
    }
  })

  $: {
    console.log('caaalll')
    let currentChar = chars.find((c) => c.name === char)
    if (currentChar) {
      animation = getAnimation(action, currentChar)
      const [frames, totalFrame] = animation
      ;[heads, bodies, hands] = frames

      if (interv) {
        clearInterval(interv)
      }

      interv = setInterval(() => {
        currentFrame = currentFrame < totalFrame - 1 ? currentFrame + 1 : 0
      }, 1000 / 4)
    }
  }
</script>

<!--  svelte-ignore a11y-missing-attribute-->
<div class="relative">
  {#if animation}
    <img src={heads[currentFrame]} class={`anim-img ${cls}`} />
    <img src={bodies[currentFrame]} class={`anim-img ${cls}`} />
    <img src={hands[currentFrame]} class={`anim-img ${cls}`} />
  {/if}
</div>

<style>
  .anim-img {
    @apply absolute top-0 left-0;
  }
</style>
