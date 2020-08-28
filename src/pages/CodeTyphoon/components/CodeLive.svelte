<script>
  let current = ""
  let isFocused = false

  const handleKeydown = (e) => {
    console.log('down down', e)
  }

  const handleFocus = (e) => isFocused = true
</script>

<style lang="scss">
#codelive {
  strong {
    @apply text-green-500
  }
  mark {
    @apply text-red-500 bg-white
  }
}
</style>

<svelte:window on:keydown={handleKeydown} />

<div id="codelive" class="rounded border-2 border-green-200 shadow-5 my-10">
  <strong>A quick b<mark>r</mark>own <mark>f</mark>ox</strong> jumps over the lazy dog
</div>
