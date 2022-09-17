<script context="module" lang="ts">
  let characters: Sprite[] = []

  export function getCharacters() {
    return characters
  }

  export async function loadImages(
    spritesData: PromiseSprite[]
  ): Promise<Sprite[]> {
    const sprs = await Promise.all(
      spritesData.map(async (psd) => processPromiseSprite(psd))
    )
    return sprs
  }
</script>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import type { PromiseSprite, Sprite } from '.'
  import { data, processPromiseSprite } from '.'

  const dispatch = createEventDispatcher()

  let loading = true
  let imgs = loadImages(data)

  onMount(async () => {
    characters = await imgs
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
