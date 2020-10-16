<script>
  import { onMount } from 'svelte'
  import { colors } from 'utils/tailwind'

  let me
  let loaded = false
  
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
</style>

{#if !loaded && loading}
<div class="flex w-full h-full">
  <svelte:component this={loading} color={colors.purple['500']} size="24"/>
</div>
{/if}

<img {src} {alt} class={className} class:loaded bind:this={me} />