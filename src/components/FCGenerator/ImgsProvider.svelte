<script context="module" lang="ts">
  let characters: Sprite[] = []
  let animations = {}

  export function getCharacters() {
    return characters
  }

  export async function loadImages(
    spritesData: PromiseSprite[]
  ): Promise<Sprite[]> {
    const sprs = await Promise.all(
      spritesData.map(async (psd) => processPromiseSprite(psd))
    )
    console.log('loaded', sprs)
    return sprs
  }

  export async function loadAnimations() {
    return []
  }
</script>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { data, processPromiseSprite } from '.'

  const dispatch = createEventDispatcher()

  let loading = true
  let imgs = loadImages(data)

  let anms = loadAnimations()
  onMount(async () => {
    characters = await imgs
    animations = await anms
    loading = false
    dispatch('loaded')
  })
</script>

{#if loading}
  <span>Load load load......</span>
{:else if characters?.length > 0}
  <slot />
{:else}
  <span>no char</span>
{/if}
