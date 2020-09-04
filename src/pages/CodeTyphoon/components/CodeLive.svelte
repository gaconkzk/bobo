<script>
  import { createEventDispatcher } from 'svelte'

  import Keyboard from './Keyboard'
  let keyboard

  const dispatch = createEventDispatcher()

  // TODO current should be external prop and load by a mechanism (user allow to chose any thing they want to challenge or practice)
  // future welcome meee yo yo yo
  let current = `
A quick brown fox jumps over the lazy dog.
- Fixed a bug: typed more than it should be`

  let all_words = current.replace(/<\/?[^>]+(>|$)/g, "").split(' ')
  let typed = ''
  let isStarted = false

  let err = 0
  let acc = 0.00

  let codelive

  const PressedState = {
    NORMALKEY: 1,
    BACKSPACE: 2,
    ENTERKEY: 13,
  }

  const checkKey = (e) => {
    let possible_char_regex = /^[`~!@#$%^&*()-_=+[{\]}\\|;:'",<.>/?a-z0-9A-Z\s]$/
      if (possible_char_regex.test(e.key)) {
        return PressedState.NORMALKEY
      } else {
        if (e.key === 'Backspace') {
          return PressedState.BACKSPACE
        }
        if (e.key === 'Enter') {
          return PressedState.ENTERKEY
        }
      }

    return 0
  }

  const mapLeftRight = (e) => {
    let featureLeft = ['ShiftLeft', 'ControlLeft', 'MetaLeft', 'AltLeft']
    let featureRight = ['ShiftRight', 'ControlRight', 'MetaRight', 'AltRight']
    let mapkc = e.keyCode

    if (featureLeft.indexOf(e.code) >= 0) {
      mapkc = 'l_' + mapkc
    } else if (featureRight.indexOf(e.code) >= 0) {
      mapkc = 'r_' + mapkc
    }

    return mapkc
  }

  const handleKeyup = (e) => {
    console.log(e)
    if (isStarted) {
      let keyCode = mapLeftRight(e)
      keyboard.keydown(keyCode, true)
    }
  }

  const handleKeydown = (e) => {
    if (isStarted) {
      let keyCode = mapLeftRight(e)
      keyboard.keydown(keyCode)

      let shouldRender = checkKey(e)
      if (shouldRender) {
        switch (shouldRender) {
          case PressedState.NORMALKEY:
            typed += e.key
            break
          case PressedState.BACKSPACE:
            typed = typed.slice(0, -1)
            break
          case PressedState.ENTERKEY:
            typed = typed + '\n'
          default:
        }

        render()

        dispatch('message', {
          error: err,
          accuracy: acc,
        })
      }

      // TODO should stop this when ???
      
      
      e.preventDefault()
    }
  }

  function calculate(html) {
    err = (html.match(/<mark>/g) || []).length
    let all = current.length
    acc = (all - err) / all
  }

  const handleStart = () => {
    isStarted = !isStarted
  
    if (isStarted) {
      err = 0
      acc = 0.00

      typed = ''
      all_words = current.replace(/<\/?[^>]+(>|$)/g, '').split(' ')
      codelive.innerHTML = all_words.join(' ').replace(/\n/g, '&larrhk;<br/>')

      dispatch('message', {
        error: err,
        accuracy: err/current.length,
      })
    }
  }

  function compare_word(c, o) {
    return c.split('')
      .map((char, i) => (char !== o[i] ? i : undefined))
      .filter(x => x >= 0)
  }

  function htmlWord(idx, typed_words, eow = false) {
    let current_word = typed_words[idx]
    // use the original one, since we might changed some words
    let orig_all = current.replace(/<\/?[^>]+(>|$)/g, "").split(' ')
    let orig_word = orig_all[idx].replace(/<\/?[^>]+(>|$)/g, '')
    let gidx = compare_word(current_word, orig_word)

    let ca = orig_word.split('')
    let cb = current_word.split('')
    
    gidx.forEach(e_idx => {
      if (ca[e_idx]) {
        ca[e_idx] = `<mark>${ca[e_idx]}</mark>`
      } else {
        // no ca - the guy typed too much
        ca[e_idx] = `<mark>${cb[e_idx]}</mark>`
      }
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

    all_words[last_w_idx] = htmlWord(last_w_idx, typed_words)

    if (!current_word.length && prev_w_idx >= 0) {
      all_words[prev_w_idx] = htmlWord(prev_w_idx, typed_words, true)
    }

    let html = all_words.join(' ').replace(/\n/g, '&larrhk;<br/>')
    codelive.innerHTML = html

    calculate(html)
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

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div id="codelive" class="rounded border-2 border-green-200 shadow my-10" bind:this={codelive}>{@html current.replace(/\n/g, '&larrhk;<br/>')}</div>

<button class="transition duration-500 ease-in-out bg-green-500 hover_bg-red-500 transform hover_-translate-y-1 hover_scale-110 rounded-lg w-24 h-12 text-white text-2xl antialiased font-bold" on:click={handleStart}>{isStarted ? 'Stop' : 'Start'}</button>

<!-- <div>{typed}</div> -->

<br/>

<Keyboard bind:this={keyboard}/>