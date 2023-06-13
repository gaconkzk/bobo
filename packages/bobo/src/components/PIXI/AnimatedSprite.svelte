<script lang="ts">
  /**
   * @restProps {Container}
   */
  import * as PIXI from 'pixi.js'
  import { afterUpdate, createEventDispatcher, onMount } from 'svelte'

  import Container from './Container.svelte'
  import { getRenderer } from './Renderer.svelte'
  import type { PointLike } from '$utils/data-types'
  import { createApplyProps } from '$utils/props'

  type T = $$Generic<PIXI.AnimatedSprite>
  type $$Props = Container<T>['$$prop_def'] & {
    anchor?: PointLike
    animationSpeed?: PIXI.AnimatedSprite['animationSpeed']
    autoUpdate?: PIXI.AnimatedSprite['autoUpdate']
    currentFrame?: PIXI.AnimatedSprite['currentFrame']
    loop?: PIXI.AnimatedSprite['loop']
    playing?: boolean
    blendMode?: PIXI.AnimatedSprite['blendMode']
    pluginName?: PIXI.AnimatedSprite['pluginName']
    roundPixels?: PIXI.AnimatedSprite['roundPixels']
    textures: PIXI.AnimatedSprite['textures']
    totalFrames?: PIXI.AnimatedSprite['totalFrames']
    updateAnchor?: PIXI.AnimatedSprite['updateAnchor']
  }

  /**
   * The anchor sets the origin point of the text.
   *
   * @type {PointLike}
   */
  export let anchor: $$Props['anchor'] = undefined

  /**
   * The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
   *
   * @type {number}
   */
  export let animationSpeed: $$Props['animationSpeed'] = undefined

  /**
   * Whether to use PIXI.Ticker.shared to auto update animation time.
   *
   * @type {number}
   */
  export let autoUpdate: $$Props['autoUpdate'] = undefined

  /**
   * The AnimatedSprites current frame index.
   *
   * @type {number}
   */
  export let currentFrame: $$Props['currentFrame'] = undefined

  /**
   * The AnimatedSprites current frame index.
   *
   * @type {boolean}
   */
  export let loop: $$Props['loop'] = undefined

  /**
   * The AnimatedSprites current frame index.
   *
   * @type {boolean}
   */
  export let playing: $$Props['playing'] = undefined

  /**
   * The blend mode to be applied to the sprite.
   * Apply a value of PIXI.BLEND_MODES.NORMAL to reset the blend mode.
   */
  export let blendMode: $$Props['blendMode'] = PIXI.BLEND_MODES.NORMAL

  /**
   * Plugin that is responsible for rendering this element.
   *
   * @type {string}
   */
  export let pluginName: $$Props['pluginName'] = undefined

  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   *
   * @type {boolean}
   */
  export let roundPixels: $$Props['roundPixels'] = undefined

  /**
   * The texture that the sprite is using.
   */
  export let textures: $$Props['textures']

  /**
   * The texture that the sprite is using.
   */
  export let totalFrames: $$Props['totalFrames'] = undefined

  /**
   * The texture that the sprite is using.
   */
  export let updateAnchor: $$Props['updateAnchor'] = undefined

  /**
   * The PIXI.Sprite instance. Can be set or bound to.
   *
   * @type {PIXI.Sprite}
   */
  export let instance: T = new PIXI.AnimatedSprite(textures, autoUpdate) as T

  const { applyProp } = createApplyProps<PIXI.AnimatedSprite>(instance, {
    textures: (value, instance) => {
      instance.textures = value
      if (playing) {
        instance.play()
      }
    },
    playing: (value, instance) => {
      if (playing) {
        instance.play()
      } else {
        instance.stop()
      }
    },
  })
  const { invalidate } = getRenderer()
  const dispatch = createEventDispatcher()

  afterUpdate(() => {
    invalidate()
  })

  $: applyProp('anchor', anchor)
  $: applyProp('animationSpeed', animationSpeed)
  $: applyProp('autoUpdate', autoUpdate)
  $: applyProp('currentFrame', currentFrame)
  $: applyProp('loop', loop)
  $: applyProp('playing', playing)
  $: applyProp('blendMode', blendMode)
  $: applyProp('pluginName', pluginName)
  $: applyProp('roundPixels', roundPixels)
  $: applyProp('textures', textures)
  $: applyProp('totalFrames', totalFrames)
  $: applyProp('updateAnchor', updateAnchor)

  // trigger render if texture loads (was not preloaded)
  $: textures.forEach((t) => t.on('update', invalidate))

  onMount(() => {
    instance.onComplete = () => dispatch('complete')
    instance.onFrameChange = () => {
      dispatch('frameChange')
      invalidate()
    }
    instance.onLoop = () => dispatch('loop')
  })
</script>

<Container
  {...$$restProps}
  {instance}
  on:create
  on:click
  on:mousedown
  on:mousemove
  on:mouseout
  on:mouseover
  on:mouseup
  on:mouseupoutside
  on:mouseupoutside
  on:pointercancel
  on:pointerdown
  on:pointermove
  on:pointerout
  on:pointerover
  on:pointertap
  on:pointerup
  on:pointerupoutside
  on:removedFrom
  on:rightclick
  on:rightdown
  on:rightup
  on:rightupoutside
  on:tap
  on:touchcancel
  on:touchend
  on:touchendoutside
  on:touchmove
  on:touchstart
  on:added
  on:removed
>
  <slot />
</Container>
