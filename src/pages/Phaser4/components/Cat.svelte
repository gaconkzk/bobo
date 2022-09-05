<script lang="ts">
  import Sprite from '$components/Phaser/Sprite.svelte'
  export let instance = null
</script>

<Sprite
  width={100}
  height={100}
  key="cat01"
  frame="cat-00"
  animated={{
    prefix: 'cat-0',
    frameRate: 17,
    start: 0,
    end: 11,
  }}
  bind:instance
/>
