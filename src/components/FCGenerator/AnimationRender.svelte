<script context="module" lang="ts">
  export function getAnimation(action: CharacterAction, character: Sprite) {
    let heads,
      bodies,
      hands = []

    let act = action
    if (!character.animation.includes(action)) {
      act = CharacterAction.DEFAULT
    }
    switch (action) {
      case CharacterAction.WALK:
        return makeWalk(character, animationLoad(action))
      case CharacterAction.IDLE:
      default:
        const head0 = character.head
        const body0 = character.body
        const hand0 = character.hand

        heads = [head0]
        bodies = [body0]
        hands = [hand0]

        return [[[heads, bodies, hands], 1]]
    }
  }
</script>

<script lang="ts">
  import {
    getCharacters,
    getAnimation as animationLoad,
  } from '$components/FCGenerator/ImgsProvider.svelte'
  import { CharacterAction } from '$components/FCGenerator/types'
  import { onDestroy, onMount } from 'svelte'
  import { makeWalk } from './walk'

  export let char: string
  export let action: CharacterAction.WALK
  let prevChar = { value: null }
  let prevAction = { value: null }
  let cls = ''
  export { cls as class }

  const chars = getCharacters()
  let animation
  let currentFrame = 0

  let heads, bodies, hands
  let interv

  let mounted = false
  onMount(() => {
    mounted = true
  })
  onDestroy(() => {
    if (interv) {
      clearInterval(interv)
    }
  })

  // START move here for not infinite loop
  function valueDifferent() {
    return prevChar.value !== char || prevAction.value !== action
  }

  function updatePreviousValue() {
    prevChar['value'] = char
    prevAction['value'] = action
  }

  function updateInterval(totalFrame) {
    if (interv) {
      clearInterval(interv)
    }
    interv = setInterval(() => {
      currentFrame = currentFrame < totalFrame - 1 ? currentFrame + 1 : 0
    }, 1000 / 4)
  }
  // END - - -

  $: {
    if (valueDifferent()) {
      let currentChar = chars.find((c) => c.name === char)
      if (currentChar) {
        currentFrame = 0
        animation = getAnimation(action, currentChar)
        const [frames, totalFrame] = animation
        ;[heads, bodies, hands] = frames
        updateInterval(totalFrame)
      }
      updatePreviousValue()
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
