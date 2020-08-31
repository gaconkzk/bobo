<script>
  let current = "A quick brown fox jumps over the lazy dog"
  let all_words = current.split(' ')
  let typed = ""
  let isStarted = false

  let codelive

  const handleKeydown = (e) => {
    if (isStarted) {
      let possible_char_regex = /^[`~!@#$%^&*()-_=+[{\]}\\|;:'",<.>/?a-z0-9A-Z\s]$/
      
      if (possible_char_regex.test(e.key)) {
        typed += e.key
        render(current)
      } else {
        if (e.key === 'Backspace') {
          typed = typed.slice(0, -1)
          render(current)
        }
      }
      
      e.preventDefault()
    }
  }

  const handleStart = () => {
    isStarted = !isStarted

    typed = ""
  }

  function compare_word(c, o) {
    return c.split('')
      .map((char, i) => (char !== o[i] ? i : undefined))
      .filter(x => x >= 0)
  }

  const render = (current) => {
    let typed_words = typed.split(' ')

    let last_w = typed_words.length-1

    let current_word = typed_words[last_w]
  
    let orig_word = all_words[last_w].replace(/<\/?[^>]+(>|$)/g, "")
    let new_word = `${orig_word}`
    let gidx = compare_word(current_word, orig_word)

    let ca = orig_word.split('')
    if (current_word.length) {
      gidx.forEach(e_idx => {
        ca[e_idx] = `<mark>${ca[e_idx]}</mark>`
      })
      ca.forEach((char, i) => {
        if (i < current_word.length && gidx.indexOf(i)<0) {
          ca[i] = `<span>${ca[i]}</span>`
        }
      })
      new_word = ca.join('')

      if (gidx < current_word.length) {
        orig_word=`<strong>${orig_word.substr(0, gidx)}</strong><mark>${orig_word.substr(gidx, 1)}</mark>${orig_word.substr(gidx+1)}`
      } else if (gidx >= 0) {
        orig_word = `<strong>${orig_word.substr(0, gidx)}</strong>${orig_word.substr(gidx)}`
      }

      all_words[last_w] = new_word
    } else {
      
    }

    let html = all_words.join(' ')
    codelive.innerHTML = html
  }
</script>

<style lang="scss">
#codelive {
  :global(span) {
    @apply text-green-500
  }
  :global(mark) {
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