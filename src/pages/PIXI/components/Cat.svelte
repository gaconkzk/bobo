<script lang="ts">
  import { Sprite } from 'svelte-phaser'
  export let instance = null
</script>

<Sprite width={100} height={100} frame="cat-00" bind:instance />
