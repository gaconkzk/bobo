<script lang="ts">
  import Application from '$components/PIXI/Application.svelte'
  import Assets, { getResource } from '$components/PIXI/Assets.svelte'
  import Text from '$components/PIXI/Text.svelte'
  import Sprite from '$components/PIXI/Sprite.svelte'
</script>

<Application width={400} height={400} antialias backgroundColor={0xffffff}>
  <Assets
    resources={[
      ['brain', '/imgs/brain.png'],
      '/imgs/sprites/body/abel.png',
      '/imgs/sprites/head/abel.png',
      '/imgs/sprites/hand/abel.png',
    ]}
  >
    <slot slot="loading">
      <Text text={`Loading... `} x={200} y={200} anchor={0.5} />
    </slot>
    <Text text={`hello... `} x={200} y={200} anchor={0.5} />
    <Sprite
      texture={getResource('/imgs/sprites/body/abel.png')}
      x={20}
      y={50}
      width={128}
      height={128}
    />
    <Sprite
      texture={getResource('/imgs/sprites/head/abel.png')}
      x={20}
      y={50}
      width={128}
      height={128}
    />
    <Sprite
      texture={getResource('/imgs/sprites/hand/abel.png')}
      x={20}
      y={50}
      width={128}
      height={128}
    />
  </Assets>
</Application>
