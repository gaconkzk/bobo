<script>
  let me
  let loaded = false

  import { onMount } from 'svelte'
  
  let className
  export { className as class }
  export let src
  export let alt

  export let loading

  onMount(() => {
    me.onload = () => {
      loaded = true
    }
  })
</script>

<style>
  img {
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }

  img.loaded {
    opacity: 1;
  }

  :global(.circle) {
    @apply mx-auto my-auto;
    z-index: 22;
  }
</style>

{#if !loaded && loading}
<div class="flex w-full h-full justify-center">
  <svelte:component this={loading}/>
</div>
{/if}

<img {src} {alt} class={className} class:loaded bind:this={me} />