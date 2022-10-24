<script context="module" lang="ts">
  let characters: Sprite[] = []
  let animations: Record<string, unknown> = {}

  const processAction = async (act) => {
    const ret = {}
    for (let k in act) {
      const actions = await Promise.all(
        act[k].map(async (i: Promise<String>[]) => await Promise.all(i))
      )
      ret[k] = actions
    }

    return ret
  }

  export function getCharacters() {
    return characters
  }

  export function getAnimation(action: CharacterAction, name: string) {
    const anim = animations[action]
    if (anim?.[name]) {
      return anim[name]
    }
    return anim?.['default']
  }

  export async function loadImages(
    spritesData: PromiseSprite[]
  ): Promise<Sprite[]> {
    const sprs = await Promise.all(
      spritesData.map(async (psd) => processPromiseSprite(psd))
    )
    return sprs
  }

  export async function loadAnimations(data) {
    const result = {}
    for (let k in data) {
      const resolved = await processAction(data[k])
      result[k] = resolved
    }
    return result
  }
</script>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { data, processPromiseSprite } from '.'
  import { walk } from './walk'
  import { idle } from './idle'
  import { run } from './run'
  import { CharacterAction } from './types'

  const dispatch = createEventDispatcher()

  let loading = true
  let imgs = loadImages(data)

  let anms = loadAnimations({ walk, idle, run })
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
