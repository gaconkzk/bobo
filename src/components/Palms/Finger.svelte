<svelte:options accessors/>

<script>
  export let left = false
  export let actived = false
</script>

{#if actived}
  <g data={left}>
    <slot />
  </g>
{/if}
