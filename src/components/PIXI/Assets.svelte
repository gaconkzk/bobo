<script context="module" lang="ts">
  interface AssetsContext<T extends AssetsClass> {
    assets?: T
  }

  export function getAssets<T extends AssetsClass>() {
    return getContext<AssetsContext<T>>('pixi/assets') ?? {}
  }

  export function getResource<T = any>(name: string): T {
    const { assets } = getAssets()
    if (!assets) {
      throw new Error('getResource requires a parent <Assets /> component')
    }

    return assets.get(name) as any as T
  }
</script>

<script lang="ts">
  import * as PIXI from 'pixi.js'
  import { Assets, AssetsClass } from '@pixi/assets'

  import {
    createEventDispatcher,
    setContext,
    getContext,
    onMount,
  } from 'svelte'
  import { getRenderer } from './Renderer.svelte'

  interface $$Slots {
    default: {
      progress?: number
    }
    loading: {
      progress: number
    }
  }

  interface $$Events {
    complete: CustomEvent<AssetsClass>
    progress: CustomEvent<AssetsClass>
    error: CustomEvent<AssetsClass>
    start: CustomEvent<AssetsClass>
    load: CustomEvent<AssetsClass>
  }

  type T = $$Generic<AssetsClass>
  type $$Props = {
    instance?: T
    resources?: string[] | Array<[string, string]>
  }
  const dispatch = createEventDispatcher()

  /**
   * An array of urls or arguments to be passed into PIXI.Loader's add() function
   * @type {string[] | Array<[string, string]>}
   */
  export let resources: string[] | Array<[string, string]> = []

  /**
   * The PIXI.Loader instance. Can be set or bound to.
   *
   * @type {PIXI.Assets}
   */
  export let instance: T = new AssetsClass() as T

  setContext<AssetsContext<T>>('pixi/loader', { assets: instance })

  const { invalidate } = getRenderer()

  let progress = 0
  let loading = resources.length > 0

  onMount(async () => {
    loading = true
    await instance.init()
    let prms = resources.map(async (url) => {
      if (Array.isArray(url)) {
        console.log('imgload', ...url)
        // @ts-ignore
        return await instance.add(url[0], url[1])
      } else {
        return await instance.load(url)
      }
    })

    try {
      await Promise.all(prms)
    } catch (err) {
      console.error('error loading', err)
    }

    dispatch('complete')
    invalidate()
    loading = false

    // instance.load()

    // function onComplete(ev) {
    //   dispatch('complete', ev)
    //   invalidate()
    //   loading = false
    // }

    // function onProgress(ev) {
    //   dispatch('progress', ev)
    //   invalidate()
    //   progress = ev.progress
    // }

    // function onError(ev) {
    //   dispatch('error', ev)
    //   invalidate()
    // }

    // function onStart(ev) {
    //   dispatch('start', ev)
    //   invalidate()
    // }

    // function onLoad(ev) {
    //   dispatch('load', ev)
    //   invalidate()
    // }

    // const onCompleteId = instance.onComplete.add(onComplete)
    // const onProgressId = instance.onProgress.add(onProgress)
    // const onErrorId = instance.onError.add(onError)
    // const onStartId = instance.onStart.add(onStart)
    // const onLoadId = instance.onLoad.add(onLoad)

    return () => {
      // instance.onComplete.detach(onCompleteId)
      // instance.onProgress.detach(onProgressId)
      // instance.onError.detach(onErrorId)
      // instance.onStart.detach(onStartId)
      // instance.onLoad.detach(onLoadId)
    }
  })
</script>

{#if loading}
  <slot name="loading" {progress} />
{:else}
  <slot />
{/if}
