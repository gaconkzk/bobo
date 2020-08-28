<script>
  let current = "A quick brown fox jumps over the lazy dog"
  let typed = ""
  let isStarted = false

  const handleKeydown = (e) => {
    if (isStarted) {
      console.log(e)
      e.preventDefault()
    }
  }

  const handleStart = () => isStarted = !isStarted

  const render = (current) => {
    

    return current
  }
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
  {render(current)}
</div>

<button class="bg-green-500 rounded-lg w-24 h-12 text-white text-2xl antialiased font-bold shadow-2xl" on:click={handleStart}>{isStarted ? 'Stop' : 'Start'}</button>