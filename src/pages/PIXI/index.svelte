<script lang="ts">
  import Application from '$components/PIXI/Application.svelte'
  import Assets, { getResource } from '$components/PIXI/Assets.svelte'
  import Text from '$components/PIXI/Text.svelte'
  import Sprite from '$components/PIXI/Sprite.svelte'
</script>

<Application width={400} height={400} antialias backgroundColor={0xffffff}>
  <Assets resources={[['brain', '/imgs/brain.png']]}>
    <slot slot="loading">
      <Text text={`Loading... `} x={200} y={200} anchor={0.5} />
    </slot>
    <Text text={`hello... `} x={200} y={200} anchor={0.5} />
    <Sprite
      texture={getResource('brain')}
      x={20}
      y={50}
      width={360}
      height={300}
    />
  </Assets>
</Application>
