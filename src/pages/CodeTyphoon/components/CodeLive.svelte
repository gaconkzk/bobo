<script>
  import Keyboard from './Keyboard'

  let current = "A quick brown fox jumps over the lazy dog"
  let all_words = current.replace(/<\/?[^>]+(>|$)/g, "").split(' ')
  let typed = ''
  let isStarted = false

  let codelive

  const handleKeydown = (e) => {
    if (isStarted) {
      let possible_char_regex = /^[`~!@#$%^&*()-_=+[{\]}\\|;:'",<.>/?a-z0-9A-Z\s]$/
      
      if (possible_char_regex.test(e.key)) {
        typed += e.key
        render()
      } else {
        if (e.key === 'Backspace') {
          typed = typed.slice(0, -1)
          render()
        }
      }

      // TODO should stop this when ???
      
      
      e.preventDefault()
    }
  }

  const handleStart = () => {
    isStarted = !isStarted
  
    if (isStarted) {
      typed = ''
      all_words = current.replace(/<\/?[^>]+(>|$)/g, '').split(' ')
      codelive.innerHTML = all_words.join(' ')
    }
  }

  function compare_word(c, o) {
    return c.split('')
      .map((char, i) => (char !== o[i] ? i : undefined))
      .filter(x => x >= 0)
  }

  function htmlWord(idx, typed_words, all_words, eow = false) {
    let current_word = typed_words[idx]
    let orig_word = all_words[idx].replace(/<\/?[^>]+(>|$)/g, "")
    let gidx = compare_word(current_word, orig_word)

    let ca = orig_word.split('')
    gidx.forEach(e_idx => {
      ca[e_idx] = `<mark>${ca[e_idx]}</mark>`
    })
    
    ca.forEach((char, i) => {
      if (i < current_word.length && gidx.indexOf(i)<0) {
        ca[i] = `<span>${ca[i]}</span>`
      }
    })

    if (eow && current_word.length < orig_word.length) {
      for (let i = current_word.length; i < orig_word.length; i++) {
        ca[i] = `<mark>${ca[i]}</mark>`
      }
    }

    return ca.join('')
  }

  const render = () => {
    let typed_words = typed.split(' ')

    let last_w_idx = typed_words.length-1
    let prev_w_idx = typed_words.length-2

    let current_word = typed_words[last_w_idx]

    all_words[last_w_idx] = htmlWord(last_w_idx, typed_words, all_words)

    if (!current_word.length && prev_w_idx >= 0) {
      all_words[prev_w_idx] = htmlWord(prev_w_idx, typed_words, all_words, true)
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

<div id="codelive" class="rounded border-2 border-green-200 shadow-5 my-10" bind:this={codelive}>{current}</div>

<button class="bg-green-500 rounded-lg w-24 h-12 text-white text-2xl antialiased font-bold shadow-2xl" on:click={handleStart}>{isStarted ? 'Stop' : 'Start'}</button>

<div>{typed}</div>

<br/>

<Keyboard />