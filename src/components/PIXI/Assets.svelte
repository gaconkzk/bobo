<script context="module" lang="ts">
  interface AssetsContext<T extends PIXI.AssetsClass> {
    assets?: T
  }

  export function getAssets<T extends PIXI.AssetsClass>() {
    return (
      getContext<AssetsContext<T>>('pixi/assets') ?? { assets: PIXI.Assets }
    )
  }

  export function getResource<T = any>(name: string): T {
    const { assets } = getAssets()

    if (!assets) {
      throw new Error('getResource requires a parent <Assets /> component')
    }

    const res = assets.get<T>(name)
    return res as any as T
  }
</script>

<script lang="ts">
  import * as PIXI from 'pixi.js'
  import { onMount, getContext, setContext } from 'svelte'

  interface $$Slots {
    default: {
      progress?: number
    }
    loading: {
      progress?: number
    }
  }

  type T = $$Generic<PIXI.AssetsClass>

  type $$Props = {
    instance?: T
    resources?:
      | string[]
      | Array<
          [string | string[], string | (string | PIXI.ResolveAsset)[], unknown?]
        >
  }

  export let instance = PIXI.Assets as T

  setContext<AssetsContext<T>>('pixi/assets', { assets: instance })

  /**
   * An array of urls or arguments to be passed into PIXI.Loader's add() function
   * @type {string[] | Array<[string, string, PIXI.IAddOptions, () => any]>}
   */
  export let resources:
    | string[]
    | Array<
        [string | string[], string | (string | PIXI.ResolveAsset)[], unknown?]
      > = []

  let loading = true
  onMount(async () => {
    loading = true
    let keys = []
    resources.forEach((url) => {
      if (Array.isArray(url)) {
        const [name, ...rest] = url
        // @ts-ignore
        instance.add(name, ...rest)

        keys.push(name)
      } else {
        // instance.load(url)
      }
    })
    await instance.load(keys)
    loading = false
  })
</script>

{#if loading}
  <slot name="loading" />
{:else}
  <slot />
{/if}
