<script lang="ts" context="module">
  interface ApplicationContext<T extends PIXI.Application> {
    app: T
  }
</script>

<script lang="ts">
  import { onDestroy, setContext } from 'svelte'
  import { removeUndefined } from '$utils/remove-undefined'
  import * as PIXI from 'pixi.js'
  import Renderer from './Renderer.svelte'
  import Ticker from './Ticker.svelte'
  import Container from './Container.svelte'

  type T = $$Generic<PIXI.Application>
  type $$Props = PIXI.IApplicationOptions & {
    instance?: T
    render?: 'auto' | 'demand'
  }

  /**
   * Automatically starts the rendering
   *
   */
  export let autoStart: $$Props['autoStart'] = true

  /**
   * The width of the renderers view.
   *
   **/
  export let width: $$Props['width'] = 800

  /**
   * The height of the renderers view.
   **/
  export let height: $$Props['height'] = 600

  /**
   * Pass-through value for canvas' context alpha property.
   * If you want to set transparency, please use backgroundAlpha.
   * This option is for cases where the canvas needs to be opaque,
   * possibly for performance reasons on some older devices.
   *
   * @type {boolean | "notMultiplied"}
   */
  export let useContextAlpha: $$Props['useContextAlpha'] = undefined

  /**
   * Resizes renderer view in CSS pixels to allow for resolutions other than 1.
   */
  export let autoDensity: $$Props['autoDensity'] = true

  /**
   * Sets antialias
   */
  export let antialias: $$Props['antialias'] = false

  /**
   * Enables drawing buffer preservation, enable this if you
   * need to call toDataUrl on the WebGL context.
   */
  export let preserveDrawingBuffer: $$Props['preserveDrawingBuffer'] = false

  /**
   * The resolution / device pixel ratio of the renderer.
   *
   * @type {number}
   */
  export let resolution: $$Props['resolution'] = PIXI.settings.RESOLUTION

  /**
   * prevents selection of WebGL renderer, even if such is present, this option only is available
   * when using pixi.js-legacy or @pixi/canvas-renderer modules,
   * otherwise it is ignored.
   */
  export let forceCanvas: $$Props['forceCanvas'] = false

  /**
   * The background color of the rendered area (shown if not transparent).
   */
  export let backgroundColor: $$Props['backgroundColor'] = 0x000000

  /**
   * Value from 0 (fully transparent) to 1 (fully opaque).
   */
  export let backgroundAlpha: $$Props['backgroundAlpha'] = 1

  /**
   * This sets if the renderer will clear the canvas or not before the new render pass.
   *
   * @type {boolean}
   */
  export let clearBeforeRender: $$Props['clearBeforeRender'] = undefined

  /**
   * Parameter passed to webgl context, set to "high-performance"
   * for devices with dual graphics card. (WebGL only).
   *
   * @type {WebGLPowerPreference}
   */
  export let powerPreference: $$Props['powerPreference'] = undefined

  /**
   * Element to automatically resize stage to.
   *
   * @type {Window | HTMLElement}
   */
  export let resizeTo: $$Props['resizeTo'] = undefined

  /**
   * Changes the rendering method
   *
   * auto - render on each tick at the target FPS
   * demand - render only when components have been updated
   *
   * @type {'auto' | 'demand' | false}
   */
  export let render: 'auto' | 'demand' | false = 'auto'

  /**
   * The PIXI.Application instance. This can be manually set or bound to.
   *
   * Note: if manually set, props will not be applied.
   *
   * @type {PIXI.Application}
   */
  export let instance: T = new PIXI.Application(
    // some props being explicitly undefined different behaviour than implicit
    // undefined
    removeUndefined({
      autoStart,
      width,
      height,
      useContextAlpha,
      autoDensity,
      antialias,
      preserveDrawingBuffer,
      resolution,
      forceCanvas,
      backgroundColor,
      backgroundAlpha,
      clearBeforeRender,
      powerPreference,
      resizeTo,
    })
  ) as T

  let invalidated = true
  setContext<ApplicationContext<T>>('pixi/app', { app: instance })

  // remove rendering on tick
  if (render) {
    instance.ticker.remove(instance.render, instance)
  }

  let isDestroying = false
  onDestroy(() => {
    isDestroying = true
    instance?.destroy(true)
  })
</script>

<Renderer
  bind:instance={instance.renderer}
  on:invalidate={() => {
    invalidated = true
  }}
  on:prerender
  on:postrender
>
  <slot name="view" slot="view">
    <div />
  </slot>

  {#if render}
    <Ticker
      on:tick={() => {
        if (!isDestroying) {
          if (render === 'demand') {
            if (invalidated) {
              invalidated = false
              instance?.renderer?.render(instance.stage)
            }
          } else if (render === 'auto') {
            instance?.renderer?.render(instance.stage)
          }
        }
      }}
    />
  {/if}
  <Ticker instance={instance.ticker}>
    <Container instance={instance.stage}>
      <slot />
    </Container>
  </Ticker>
</Renderer>
