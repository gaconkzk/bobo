<script>
  let current = "A quick brown fox jumps over the lazy dog"
  let typed = ""
  let isStarted = false

  let codelive

  const handleKeydown = (e) => {
    if (isStarted) {
      let possible_char_regex = /^[`~!@#$%^&*()-_=+[{\]}\\|;:'",<.>/?a-z0-9A-Z\s]$/
      
      if (possible_char_regex.test(e.key)) {
        typed += e.key
      } else {
        if (e.key === 'Backspace') {
          typed = typed.slice(0, -1)
        }
      }
      render(current)
      e.preventDefault()
    }
  }

  const handleStart = () => {
    isStarted = !isStarted

    typed = ""
  }

  const render = (current) => {
    let html = current.split(' ').map(w => `<span>${w}</span>`).join(' ')
    console.log(html)
    codelive.innerHTML = html
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

<div id="codelive" class="rounded border-2 border-green-200 shadow-5 my-10" bind:this={codelive}>
  {current}
</div>

<button class="bg-green-500 rounded-lg w-24 h-12 text-white text-2xl antialiased font-bold shadow-2xl" on:click={handleStart}>{isStarted ? 'Stop' : 'Start'}</button>

<div>{typed}</div>