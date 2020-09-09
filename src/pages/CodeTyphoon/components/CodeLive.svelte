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

  const keyCode = (char) => {
    return char.charCodeAt(0)
  }

  let next = keyCode(current[0])

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
      
      next = keyCode(current[0])
      all_words = current.split(' ')
      all_words[0] = '<em>' + all_words[0][0] + '</em>' + all_words[0].substring(1)
      codelive.innerHTML = all_words.join(' ').replace(/\n/g, '&larrhk;<br/>').replace(/\s/g, '&nbsp;')

      dispatch('message', {
        error: err,
        accuracy: err/current.length,
      })
    } else {
      all_words = current.split(' ')
      codelive.innerHTML = all_words.join(' ').replace(/\n/g, '&larrhk;<br/>').replace(/\s/g, '&nbsp;')
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

    let nidx = current_word.length

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

    // space
    if (ca.length > nidx) {
      next = keyCode(ca[nidx])
      ca[nidx] = `<em>${ca[nidx]}</em>`
    }

    return ca.join('')
  }

  const render = () => {
    let typed_words = typed.split(' ')

    let last_w_idx = typed_words.length-1
    let prev_w_idx = typed_words.length-2

    let current_word = typed_words[last_w_idx]

    // clear all ori em
    for (let i = last_w_idx + 1; i > last_w_idx && i < all_words.length; i++) {
      let next_word = all_words[i]
      if (next_word && next_word.indexOf('<em>') >= 0) {
        all_words[i] = next_word.replace(/<\/?[^>]+(>|$)/g, "")
      }
    }

    let html_word = htmlWord(last_w_idx, typed_words)
    if (html_word.indexOf('</em>') === -1 && last_w_idx < all_words.length - 1) {
      all_words[last_w_idx] = html_word + '^|^'
      next = keyCode(' ')
    } else {
      all_words[last_w_idx] = html_word
    }

    if (!current_word.length && prev_w_idx >= 0) {
      all_words[prev_w_idx] = htmlWord(prev_w_idx, typed_words, true)
    }

    let html = all_words.join(' ').replace(/\n/g, '&larrhk;<br/>').replace(/\^\|\^\s/g, '<em>&nbsp;</em>').replace(/\s/g, '&nbsp;')
    codelive.innerHTML = html

    calculate(html)
  }
</script>

<style lang="scss">
#codelive {
  :global(span) {
    @apply text-green-500;
  }
  :global(mark) {
    @apply text-red-500 bg-white;
  }
  :global(em) {
    @apply text-black bg-green-200 not-italic;
    animation: blink-animation 0.5s steps(5, start) infinite;
    -webkit-animation: blink-animation 0.5s steps(5, start) infinite;
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
}
</style>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div id="codelive" class="rounded border-2 border-black-400 px-2 py-2 shadow my-10" bind:this={codelive}>{@html current.replace(/\n/g, '&larrhk;<br/>').replace(/\s/g, '&nbsp;')}</div>

<button class="transition duration-500 ease-in-out bg-green-500 hover_bg-red-500 transform hover_-translate-y-1 hover_scale-110 rounded-lg w-24 h-12 text-white text-2xl antialiased font-bold" on:click={handleStart}>{isStarted ? 'Stop' : 'Start'}</button>

<!-- <div>{typed}</div> -->
<!-- <div>{next}</div> -->
<br/>

<Keyboard bind:this={keyboard}/>