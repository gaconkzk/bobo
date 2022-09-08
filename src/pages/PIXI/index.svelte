<script lang="ts">
  import * as PIXI from 'pixi.js'

  import Application from '$components/PIXI/Application.svelte'
  import Loader from '$components/PIXI/Loader.svelte'
  import Text from '$components/PIXI/Text.svelte'
  import Sprite from '$components/PIXI/Sprite.svelte'
</script>

<Application width={400} height={400} antialias backgroundColor={0xffffff}>
  <Loader let:progress resources={['/imgs/brain.png', 'brain']}>
    <slot slot="loading">
      <Text text={`Loading... ${progress}`} x={200} y={200} anchor={0.5} />
    </slot>

    <Sprite
      texture={PIXI.Texture.from('brain')}
      x={20}
      y={50}
      width={360}
      height={300}
    />
  </Loader>
</Application>
