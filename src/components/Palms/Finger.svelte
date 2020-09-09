<svelte:options accessors/>

<script>
  export let actived = false
</script>

{#if actived}
  <g>
    <slot />
  </g>
{/if}
