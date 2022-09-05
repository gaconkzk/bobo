<script lang="ts">
  import Sprite from '$components/Phaser/Sprite.svelte'

  export let key: string
</script>

<Sprite width={400} height={300} {key} />
